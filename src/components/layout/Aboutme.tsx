"use client"

import React from "react";
import TextType from "../TextType";
import CountUp from "../CountUp";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import * as simpleIcons from "simple-icons";

function Aboutme() {
  const icons = [
    simpleIcons.siJavascript,
    simpleIcons.siReact,
    simpleIcons.siNextdotjs,
    simpleIcons.siNodedotjs,
    simpleIcons.siTailwindcss,
    simpleIcons.siTypescript,
    simpleIcons.siGit,
    simpleIcons.siFigma,
    simpleIcons.siJavascript,
    simpleIcons.siReact,
    simpleIcons.siNextdotjs,
    simpleIcons.siNodedotjs,
    simpleIcons.siTailwindcss,
    simpleIcons.siTypescript,
    simpleIcons.siGit,
    simpleIcons.siFigma,
  ].map((icon) =>
    renderSimpleIcon({
      icon,
      size: 50,
      aProps: {
        onClick: (e: any) => e.preventDefault(),
      },
    })
  );

  return (
    <section className="w-full relative bg-gradient-to-b from-white via-30% via-neutral-700 to-black text-white py-16 md:py-24 px-6 md:px-16">
      {/* Icon Cloud - Top Right Corner */}
      <div className="absolute top-10 right-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] z-0 pointer-events-none">
        <Cloud
          containerProps={{
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
              height: "100%",
            },
          }}
          options={{
            reverse: true,
            depth: 1,
            wheelZoom: false,
            imageScale: 2,
            activeCursor: "default",
            tooltip: "native",
            initial: [0.1, -0.1],
            clickToFront: 500,
            tooltipDelay: 0,
            outlineColour: "#0000",
            maxSpeed: 0.04,
            minSpeed: 0.02,
          }}
        >
          {icons}
        </Cloud>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading with Typing Animation */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-5xl lg:text-8xl font-['inter2'] font-bold tracking-tight hover:scale-105 transition-transform duration-300 inline-block">
            <TextType
              text={[
                "About Me",
                "Full-Stack Developer",
                "Webflow Developer",
                "Creative Problem Solver",
              ]}
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
            />
          </h2>
        </div>

        {/* Description */}
        <div className="space-y-6 mb-16 max-w-2xl">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed hover:text-white transition-colors duration-300 group">
            <span className="block group-hover:translate-x-1 transition-transform duration-300">
              <TextType
                text={[
                  "I'm a UI/UX Designer and Webflow Developer based in New York, creating modern, user-friendly websites that bring ideas to life.",
                ]}
                typingSpeed={20}
                pauseDuration={0}
                showCursor={false}
                loop={false}
              />
            </span>
          </p>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed hover:text-white transition-colors duration-300 group">
            <span className="block group-hover:translate-x-1 transition-transform duration-300">
              <TextType
                text={[
                  "I am currently working at a digital agency creating visuals for a well known coffee brand and side hustling as a freelancer ready for new challenges.",
                ]}
                typingSpeed={20}
                pauseDuration={0}
                showCursor={false}
                loop={false}
              />
            </span>
          </p>
        </div>

        {/* Stats - Smaller and Right Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 md:ml-auto md:max-w-2xl">
          {/* Stat 1 */}
          <div className="group relative overflow-hidden bg-neutral-900 rounded-xl p-5 hover:bg-neutral-800 transition-all duration-500 hover:scale-105 hover:shadow-xl border border-neutral-800 hover:border-white">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <i className="ri-medal-line text-2xl text-white mb-2 inline-block group-hover:rotate-12 transition-all duration-300"></i>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 transition-colors duration-300 group-hover:animate-pulse">
              <CountUp from={0} to={3} duration={3} />+
            </h3>
            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Years of experience
            </p>
          </div>

          {/* Stat 2 */}
          <div className="group relative overflow-hidden bg-neutral-900 rounded-xl p-5 hover:bg-neutral-800 transition-all duration-500 hover:scale-105 hover:shadow-xl border border-neutral-800 hover:border-white">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <i className="ri-briefcase-line text-2xl text-white mb-2 inline-block group-hover:rotate-12 transition-all duration-300"></i>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 transition-colors duration-300 group-hover:animate-pulse">
              <CountUp to={10} duration={2.5} />+
            </h3>
            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Completed projects
            </p>
          </div>

          {/* Stat 3 */}
          <div className="group relative overflow-hidden bg-neutral-900 rounded-xl p-5 hover:bg-neutral-800 transition-all duration-500 hover:scale-105 hover:shadow-xl border border-neutral-800 hover:border-white">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <i className="ri-global-line text-2xl text-white mb-2 inline-block group-hover:rotate-12 transition-all duration-300"></i>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 transition-colors duration-300 group-hover:animate-pulse">
              <CountUp to={10} duration={2.5} />+
            </h3>
            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Clients on worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;