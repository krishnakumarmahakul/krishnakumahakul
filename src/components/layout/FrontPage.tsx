"use client";
import React from "react";

import profileimg from "../../assets/images/profile.jpg"

export default function FrontPage() {
  return (
    <>
      <div className="absolute top-0 z-10 min-h-screen w-full px-5 py-1 overflow-visible">
        <div className="h-full w-full text-white rounded-4xl bg-cover bg-center bg-no-repeat shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-black/30"
          style={{
            backgroundImage: `url(${profileimg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            height: "96vh",
            boxShadow: "0 40px 80px -20px rgba(11, 10, 12, 0.6)",
            border:"0.5px solid rgba(0, 0, 0, 0.1)",
            
          }}
          role="img"
          aria-label="Hero background">

          <div className="text-white rounded-lg">
          </div>
        </div>
      </div>
    </>
  );
}
