import React, { useEffect, useState } from "react";
import profileImage from "../profile.jpg";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaAddressBook, FaX, FaPhone } from "react-icons/fa6";

export default function DigitalBusinessCard() {
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
      <div className="bg-gradient-to-br from-blue-400/80 via-white/70 to-blue-200/80 backdrop-blur-xl shadow-2xl rounded-2xl p-6 text-center w-80 ring-1 ring-blue-100/40
        dark:bg-gradient-to-br dark:from-gray-900/90 dark:via-blue-950/80 dark:via-60% dark:to-gray-800/90 dark:backdrop-blur-2xl dark:shadow-blue-950/30 dark:ring-gray-900/60">
        <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/70 dark:border-gray-700/70 shadow" />
        <h1 className="text-xl font-bold mb-2 text-gray-900 dark:text-white drop-shadow">Sanjit Singh Chouhan</h1>
        <p className="text-gray-900/90 dark:text-gray-200 drop-shadow-sm">
          💻&nbsp;Code | 🏋️&nbsp;Gym | 🎮&nbsp;Video Games | 🚴‍♂️&nbsp;Bike Trips | 🎶&nbsp;Music Lover | ⛰️&nbsp;Trekking
        </p>
        <div className="mt-4 space-y-3">
          <a href="./sanjit_chouhan.vcf"
            className="flex items-center justify-center w-full bg-green-600 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaAddressBook /> <span>Add Me to Contacts</span>
          </a>
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
