import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, industry, website, email, phone } = body;

    // 1. Basic presence check
    if (!name || !businessName || !industry || !website || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "All fields are required. Please verify your details." },
        { status: 400 }
      );
    }

    // 2. Email validation check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format. Please check your contact email." },
        { status: 400 }
      );
    }

    // 3. Prepare logging payload entry
    const newSubmission = {
      id: Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      businessName: businessName.trim(),
      industry: industry.trim(),
      website: website.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      submittedAt: new Date().toISOString(),
    };

    // 4. File append logic
    const filePath = path.join(process.cwd(), "submissions.json");
    let submissionsList = [];

    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      submissionsList = JSON.parse(fileData);
    } catch (readError) {
      // File doesn't exist yet, we start with an empty array
    }

    submissionsList.push(newSubmission);
    await fs.writeFile(filePath, JSON.stringify(submissionsList, null, 2), "utf-8");

    // Log internally on the server console
    console.log("Recorded New Growth Assessment Submission:", newSubmission);

    // 5. Notion Integration Sync
    const notionApiKey = process.env.NOTION_API_KEY;
    const notionDatabaseId = process.env.NOTION_DATABASE_ID;

    if (notionApiKey && notionDatabaseId) {
      try {
        const notionResponse = await fetch("https://api.notion.com/v1/pages", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${notionApiKey}`,
            "Content-Type": "application/json",
            "Notion-Version": "2022-06-28"
          },
          body: JSON.stringify({
            parent: { database_id: notionDatabaseId },
            properties: {
              Name: {
                title: [
                  {
                    text: {
                      content: newSubmission.name
                    }
                  }
                ]
              },
              "Business Name": {
                rich_text: [
                  {
                    text: {
                      content: newSubmission.businessName
                    }
                  }
                ]
              },
              Industry: {
                select: {
                  name: newSubmission.industry
                }
              },
              Website: {
                url: newSubmission.website.startsWith("http")
                  ? newSubmission.website
                  : `https://${newSubmission.website}`
              },
              Email: {
                email: newSubmission.email
              },
              Phone: {
                phone_number: newSubmission.phone
              }
            }
          })
        });

        if (!notionResponse.ok) {
          const errorData = await notionResponse.json();
          console.error("Notion API Sync Failed:", errorData);
        } else {
          console.log("Successfully logged submission to Notion Database!");
        }
      } catch (notionError) {
        console.error("Failed to post submission to Notion API:", notionError);
      }
    } else {
      console.log("Notion API Key or Database ID missing. Skipping Notion sync (logged to file).");
    }

    return NextResponse.json(
      { success: true, message: "Growth assessment request recorded." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API contact handler error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to record request. Server-side processing issue." },
      { status: 500 }
    );
  }
}
