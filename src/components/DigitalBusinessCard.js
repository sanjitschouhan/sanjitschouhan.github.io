import React, { useEffect, useState } from "react";
import profileImage from "../profile.jpg";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaX, FaPhone } from "react-icons/fa6";
import SocialCardButton from "./SocialCardButton";

// Dynamically import theme stylesheet
function useThemeStylesheet(theme) {
  React.useEffect(() => {
    let link = document.getElementById('theme-style');
    if (link) link.remove();
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'theme-style';
    link.href = theme === 'dark' ? require('../dark-theme.css') : require('../light-theme.css');
    document.head.appendChild(link);
    return () => { if (link) link.remove(); };
  }, [theme]);
}


function getThemeOverride() {
  const params = new URLSearchParams(window.location.search);
  const override = params.get('theme');
  if (override === 'dark' || override === 'light') return override;
  return null;
}

export default function DigitalBusinessCard() {
  // Detect system theme, allow ?theme=dark or ?theme=light override
  const [theme, setTheme] = useState(() => {
    const override = getThemeOverride();
    if (override) return override;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  // Listen for query param changes (e.g. navigation)
  useEffect(() => {
    const onPopState = () => {
      const override = getThemeOverride();
      if (override && override !== theme) setTheme(override);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [theme]);


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  useThemeStylesheet(theme);

  useEffect(() => {
    if (/bot|crawler|spider|crawling/i.test(navigator.userAgent)) {
      document.body.innerHTML = "";
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-0">
      <div className="cover-bg" />
      <div className="card card-overlap pt-10 relative flex flex-col items-center">
        <img src={profileImage} alt="Profile" className="card-img absolute left-1/2 -translate-x-1/2 -top-12 w-32 max-w-full rounded-full border-4 border-white shadow-lg" />
        <h1 className="card-title mt-8 text-white">Sanjit Singh Chouhan</h1>
        <p className="card-desc text-white">
          💻&nbsp;Code | 🏋️&nbsp;Gym | 🎮&nbsp;Video Games | 🚴‍♂️&nbsp;Bike Trips | 🎶&nbsp;Music Lover | ⛰️&nbsp;Trekking
        </p>
        <div className="mt-4 space-y-3 relative">
          <button
            type="button"
            className="save-contact-btn absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-[-1.2rem]"
            onClick={async () => {
              if (navigator.contacts && navigator.contacts.select) {
                try {
                  await navigator.contacts.select([], {multiple: false}); // Just to check API presence
                  // Compose contact details
                  const contact = {
                    name: ["Sanjit Singh Chouhan"],
                    email: ["sanjitschouhan@gmail.com"],
                    tel: ["+91 6303338982"],
                    address: ["Hyderabad, India"],
                    icon: [window.location.origin + "/profile.jpg"]
                  };
                  // Try to save (not all browsers support this)
                  if (navigator.contacts.save) {
                    await navigator.contacts.save(contact);
                  } else {
                    // Fallback: download vCard
                    window.location.href = "./sanjit_chouhan.vcf";
                  }
                } catch (e) {
                  // Fallback: download vCard
                  window.location.href = "./sanjit_chouhan.vcf";
                }
              } else {
                // Fallback: download vCard
                window.location.href = "./sanjit_chouhan.vcf";
              }
            }}
          >
            Save Contact
          </button>
        </div>
      </div>
      {/* Social/contact buttons outside the card */}
      <div className="w-full mt-10 px-4">
        <div className="max-w-[20rem] mx-auto">
          <SocialCardButton
            href="mailto:sanjitschouhan@gmail.com"
            icon={<FaEnvelope />} // FaEnvelope for email
            title="Email"
            description="sanjitschouhan@gmail.com"
            colorClass="btn-email dark:btn-email" // Use theme-based, high-contrast email button color
          />
          <SocialCardButton
            href="tel:+91 6303338982"
            icon={<FaPhone />}
            title="Phone"
            description="+91 6303338982"
            colorClass="btn-phone dark:btn-phone"
          />
          <SocialCardButton
            href="https://www.linkedin.com/in/sanjitschouhan"
            icon={<FaLinkedin />}
            title="LinkedIn"
            description="sanjitschouhan"
            colorClass="btn-linkedin dark:btn-linkedin"
          />
          <SocialCardButton
            href="https://www.instagram.com/sanjitschouhan"
            icon={<FaInstagram />}
            title="Instagram"
            description="sanjitschouhan"
            colorClass="btn-instagram dark:btn-instagram"
          />
          <SocialCardButton
            href="https://x.com/sanjitschouhan"
            icon={<FaX />} // X icon
            title="X (formerly Twitter)"
            description="sanjitschouhan"
            colorClass="btn-twitter dark:btn-twitter"
          />
          <SocialCardButton
            href="https://wa.me/916303338982"
            icon={<FaWhatsapp />}
            title="WhatsApp"
            description="+91 6303338982"
            colorClass="btn-whatsapp dark:btn-whatsapp"
          />
          <SocialCardButton
            href="tel:+91 8074548058"
            icon={<FaPhone />}
            title="Call My Emergency Contact"
            description=""
            colorClass="text-orange-600 dark:text-orange-400 hover:underline"
            hideArrow
          />
        </div>
      </div>
    </div>
  );
}
