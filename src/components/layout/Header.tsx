"use client";

import Link from "next/link";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import profileimage2 from "../../assets/images/profile2.jpeg";
import { DialogDemo } from "../Hireme_dialog";

export default function Header() {
  return (
    <header
      className="sticky top-4 z-50 mx-10 rounded-2xl
                 bg-gradient-to-r from-white/30 via-white/20 to-white/10
                 backdrop-blur-md backdrop-saturate-125
                 border border-white/20 shadow-lg
                 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 grid grid-cols-2 items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              className="h-12 w-12 rounded-2xl object-cover ring-1 ring-white/25 shadow-sm"
              src={profileimage2.src}
              alt="Krishna Portfolio"
            />
            <span className="sr-only">Krishna Portfolio</span>
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-center ">
            <NavigationMenuDemo />
          </div>
          <div className="flex justify-end">
            <i
              className="ri-tools-fill text-2xl text-white/80"
              aria-hidden="true"
            />
          </div>
          <DialogDemo />
        </div>
      </div>
    </header>
  );
}
