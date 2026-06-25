"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function NetlifyIdentity() {
  useEffect(() => {
    const handleLogin = () => {
      // Redirect to the admin panel upon successful login/verification
      window.location.href = "/admin/";
    };

    const initIdentity = () => {
      const netlifyIdentity = (window as any).netlifyIdentity;
      if (netlifyIdentity) {
        netlifyIdentity.on("init", (user: any) => {
          if (!user) {
            netlifyIdentity.on("login", handleLogin);
            
            // Programmatically trigger the popup if an invite, recovery, or confirmation token is in the hash
            const hash = window.location.hash;
            if (
              hash.includes("invite_token") ||
              hash.includes("recovery_token") ||
              hash.includes("confirmation_token")
            ) {
              netlifyIdentity.open();
            }
          }
        });
        netlifyIdentity.init();
      }
    };

    // If netlifyIdentity is already loaded, initialize immediately
    if ((window as any).netlifyIdentity) {
      initIdentity();
    } else {
      document.addEventListener("netlifyIdentityInit", initIdentity);
    }

    return () => {
      document.removeEventListener("netlifyIdentityInit", initIdentity);
    };
  }, []);

  return (
    <Script
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        document.dispatchEvent(new Event("netlifyIdentityInit"));
      }}
    />
  );
}
