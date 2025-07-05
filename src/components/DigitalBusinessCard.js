
import React, { useEffect, useState } from "react";
import profileImage from "../profile.jpg";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaAddressBook, FaX, FaPhone } from "react-icons/fa6";

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
        <img src={profileImage} alt="Profile" className="card-img absolute -top-12 left-1/2 -translate-x-1/2" style={{zIndex:2}} />
        <h1 className="card-title mt-8">Sanjit Singh Chouhan</h1>
        <p className="card-desc">
          💻&nbsp;Code | 🏋️&nbsp;Gym | 🎮&nbsp;Video Games | 🚴‍♂️&nbsp;Bike Trips | 🎶&nbsp;Music Lover | ⛰️&nbsp;Trekking
        </p>
        <div className="mt-4 space-y-3 relative">
          <a href="./sanjit_chouhan.vcf"
            className="save-contact-btn absolute left-1/2 -translate-x-1/2 translate-y-1/2"
            style={{bottom: '-1.2rem'}}>
            Save Contact
          </a>
        </div>
      </div>
      <div className="card mt-6">
        <div className="space-y-3">
          <a href="https://www.linkedin.com/in/sanjitschouhan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-blue-700 dark:bg-blue-600 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaLinkedin /> <span>sanjitschouhan</span>
          </a>
          <a href="https://www.instagram.com/sanjitschouhan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-gradient-to-r from-pink-500 to-red-500 dark:from-pink-400 dark:to-red-400 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaInstagram /> <span>sanjitschouhan</span>
          </a>
          <a href="https://twitter.com/sanjitschouhan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-black dark:bg-gray-700 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaX /> <span>sanjitschouhan</span>
          </a>
          <a href="https://wa.me/916303338982" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-green-500 dark:bg-green-400 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaWhatsapp /> <span>WhatsApp</span>
          </a>
          <hr />
          <a href="tel:+91 6303338982" className="flex items-center justify-center w-full text-orange-500 dark:text-orange-400">
            Found My Key? Call Me
          </a>
          <a href="tel:+91 8074548058" className="flex items-center justify-center w-full text-red-500 dark:text-red-400">
            Call My Emergency Contact
          </a>
        </div>
      </div>
    </div>
  );
}
