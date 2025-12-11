"use client";
import React from "react";
import Link from "next/link";

function TiltText() {

  
  return (
    <div className="space-y-2  md:space-y-3 lg:space-y-4">
      <div className="overflow-hidden  leading-6.5 ">

        <h1 className="text-3xl  md:text-5xl lg:text-6xl xl:text-[5vw]  font-[inter2] text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
          I'm a{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            FULL STACK
          </span>{" "}
          <br className="hidden md:block leading-6.5" /><span className="font-[inter1]  tracking-widest"> Developer</span>
        </h1>
      </div>

      <div className="overflow-hidden leading-5">
        <h2 className="text-sm md:text-lg lg:text-3xl font-[inter2] font-semibold text-white/80 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          &{" "}
          <span className="text-transparent leading-1.5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Creative Designer
          </span>
        </h2>
      </div>

      <div className="overflow-hidden leading-6.5 pt-1 md:pt-2">
        <p className="text-xs md:text-sm font-[inter] text-gray-400 tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Building <span className="text-blue-300 font-medium">beautiful</span>{" "}
          & <span className="text-purple-300 font-medium">functional</span>{" "}
          digital solutions
        </p>
      </div>
      <Link href="/contactme" legacyBehavior passHref>
       <a className="overflow-hidden pt-2 md:pt-4 inline-block">
        <div  className="relative group inline-flex items-center gap-2 px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-[inter2] text-white border border-white/40 rounded-lg hover:border-white/80 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/30 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <span className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-300">
            Get in Touch
          </span>
          <i className="ri-arrow-right-line text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </a>
      </Link>
      
      
     
    </div>
  );
}

export default TiltText;
