'use client';
import { followUs } from "@/constants";
import { LocationOnRounded, PhoneInTalkRounded } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary-950 py-12 min-w-full">
      <div className="mx-auto px-4 md:px-16 justify-around">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-full overflow-hidden">
          <div className="flex flex-col gap-3 ml-4 md:ml-0">
            <h3 className="text-white text-xl sm:text-2xl font-semibold">
              OneFocus Photography
            </h3>
            <p className="text-secondary-300 leading-relaxed text-sm sm:text-base">
              Creating memories that last forever through the lens of
              creativity.
            </p>
            <div className="flex">
              <LocationOnRounded className="mr-2 w-8 h-8 text-secondary-300" />
              <span className="text-secondary-300 leading-relaxed text-sm sm:text-base">
                No 1494,1st floor 4th cross 7th main kengeri satellite town
                kengeri Bengalore Karnataka -560060
              </span>
            </div>
            <div className="flex">
              <span className="text-secondary-300 leading-relaxed text-sm sm:text-base">
                <Link
                  href="tel:+919844553638"
                  className="text-sm text-blue-500 sm:text-base hover:text-white transition-colors duration-300"
                >
                  <PhoneInTalkRounded className="mr-2 w-8 h-8" />
                  +91 98445 53638
                </Link>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 ml-4 md:ml-64 md:min-w-[300px]">
            <h4 className="text-white text-base sm:text-lg font-medium">
              Quick Links
            </h4>
            <nav>
              <ul className="text-secondary-300 flex flex-col gap-2">
                <li>
                  <Link
                    href="/About"
                    className="text-sm sm:text-base hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio/All"
                    className="text-sm sm:text-base hover:text-white transition-colors duration-300"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-sm sm:text-base hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-3 ml-4 md:ml-64 md:min-w-[300px]">
            <h4 className="text-white text-base sm:text-lg font-medium">
              Follow Us
            </h4>
            <div className="flex gap-4 sm:gap-6">
              {followUs.map((socialmedia, index) => (
                <Link
                  key={index}
                  href={socialmedia.link}
                  className="text-secondary-400 hover:text-white transition-colors duration-300"
                  aria-label={socialmedia.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialmedia.type === "svg" ? (
                    <img src={socialmedia.icon} alt={socialmedia.name} className="w-6 h-6 sm:w-8 sm:h-8" />
                  ) : (
                    <div className="w-6 h-6 sm:w-8 sm:h-8">
                      {React.createElement(socialmedia.icon)}
                    </div>
                  )}
                </Link>))}
            </div>
          </div>
        </div>
        <div className="w-[90vw] mt-8 sm:mt-12 pt-6 border-t border-secondary-700 text-center text-secondary-400">
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} OneFocus Photography. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
