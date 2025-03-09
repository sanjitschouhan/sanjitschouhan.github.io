import React, { useEffect, useState } from "react";
import profileImage from "../profile.jpg";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaAddressBook, FaX } from "react-icons/fa6";

export default function DigitalBusinessCard() {
  const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Sanjit Singh Chouhan\nTEL:+916303338982\nEMAIL:sanjitschouhan@gmail.com\nURL:https://sanjitschouhan.github.io\nEND:VCARD`;

  const downloadVCard = () => {
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sanjit_chouhan.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Detect system theme
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (/bot|crawler|spider|crawling/i.test(navigator.userAgent)) {
      document.body.innerHTML = "";
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center w-80">
        <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h1 className="text-xl font-bold mb-2 dark:text-white">Sanjit Singh Chouhan</h1>
        <p className="text-gray-600 dark:text-gray-300">
          💻&nbsp;Code | 🏋️&nbsp;Gym | 🎮&nbsp;Video Games | 🚴‍♂️&nbsp;Bike Trips | 🎶&nbsp;Music Lover | ⛰️&nbsp;Trekking
        </p>
        <div className="mt-4 space-y-3">
          <button onClick={downloadVCard} className="flex items-center justify-center w-full bg-green-600 dark:bg-green-500 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaAddressBook /> <span>Add Me to Contacts</span>
          </button>
          <a href="https://www.linkedin.com/in/sanjitschouhan" target="_blank" className="flex items-center justify-center w-full bg-blue-700 dark:bg-blue-600 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaLinkedin /> <span>sanjitschouhan</span>
          </a>
          <a href="https://www.instagram.com/sanjitschouhan" target="_blank" className="flex items-center justify-center w-full bg-gradient-to-r from-pink-500 to-red-500 dark:from-pink-400 dark:to-red-400 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaInstagram /> <span>sanjitschouhan</span>
          </a>
          <a href="https://twitter.com/sanjitschouhan" target="_blank" className="flex items-center justify-center w-full bg-black dark:bg-gray-700 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaX /> <span>sanjitschouhan</span>
          </a>
          <a href="https://wa.me/916303338982" target="_blank" className="flex items-center justify-center w-full bg-green-500 dark:bg-green-400 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaWhatsapp /> <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
