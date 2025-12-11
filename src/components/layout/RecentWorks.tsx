"use client";

import React from "react";
import Image from "next/image";
import coyoliaPreview from "../../assets/images/image.png";
import { Link } from "lucide-react";
function RecentWorks() {
  return (
    <section className="w-full bg-black py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-['inter2'] font-bold text-white mb-4 hover:scale-105 transition-transform duration-300 inline-block">
            Recent Works
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl">
            Explore my latest projects showcasing modern design, seamless user
            experience, and innovative solutions.
          </p>
        </div>

        {/* Bento Grid - Irregular Shapes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(150px,170px)]">
          <div className="md:col-span-7 md:row-span-2 group relative overflow-hidden  bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 p-5 md:p-6 lg:p-8 flex flex-col">
            {/* Header Section - Compact */}
            <div className="mb-3 md:mb-4 flex-shrink-0">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1.5">
                Coyolia Technology
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm line-clamp-2">
                Full-stack website designed and developed during internship
              </p>
            </div>

            {/* Tech Stack - Compact Row */}
            <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4 flex-shrink-0">
              <span className="text-xs px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md hover:bg-blue-500/20 transition-all duration-200 cursor-default">
                Next.js
              </span>
              <span className="text-xs px-2 py-0.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-md hover:bg-purple-500/20 transition-all duration-200 cursor-default">
                React
              </span>
              <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-md hover:bg-green-500/20 transition-all duration-200 cursor-default">
                Tailwind
              </span>
            </div>

            {/* Browser Preview - Flexible */}
            <div className="relative bg-black rounded-xl p-3 md:p-4 border border-neutral-700 group-hover:border-neutral-600 transition-all duration-300 flex-1 flex flex-col min-h-0">
              {/* Browser Chrome */}
              <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-neutral-700 flex-shrink-0">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500 group-hover:animate-pulse"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-yellow-500 group-hover:animate-pulse"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <div className="flex-1 ml-2 bg-neutral-700/50 rounded px-2 py-0.5 text-xs text-neutral-300 flex items-center gap-1.5 hover:bg-neutral-700/70 transition-colors">
                  <i className="ri-lock-line text-xs"></i>
                  <span className="truncate">coyolia.com</span>
                </div>
              </div>

              {/* Preview Link */}
              <a
                href="https://coyolia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-lg bg-black border border-neutral-700 hover:border-blue-500/50 transition-all duration-300 group/link flex-1 min-h-0 w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={coyoliaPreview}
                    alt="Coyolia Technology Website Preview"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                    className="object-cover group-hover/link:scale-110 transition-transform duration-300"
                  />
                </div>
              </a>
            </div>

            {/* Footer Actions - Compact */}
            <div className="mt-2 md:mt-3 flex items-center justify-between text-xs flex-shrink-0">
              <div className="flex items-center gap-1.5 text-neutral-400 group-hover:text-neutral-300 transition-colors">
                <i className="ri-code-s-slash-line"></i>
                <span>Full Stack</span>
              </div>
              <a
                href="https://coyolia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-300 cursor-pointer group/link"
              >
                <span>Visit</span>
                <i className="ri-arrow-right-up-line group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"></i>
              </a>
            </div>
          </div>

          {/* Route to Affordable Storage Card - Takes right half, taller */}
          <div className="md:col-span-5 md:row-span-2 group relative overflow-hidden  md:rounded-1xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] p-6 md:p-8 lg:p-10">
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
                Route to Affordable Storage
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm lg:text-base">
                Send compliance data to cloud storage and monitoring data to
                SIEM platforms for real-time analysis.
              </p>
            </div>

            {/* Flow diagram */}
            <div className="relative bg-neutral-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-neutral-700">
              <div className="flex flex-col items-center justify-between gap-3 md:gap-4">
                <div className="flex flex-col items-center gap-1 md:gap-2">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-neutral-700 rounded-lg md:rounded-xl flex items-center justify-center">
                    <i className="ri-database-2-line text-lg md:text-xl text-neutral-400"></i>
                  </div>
                  <div className="text-xs text-neutral-400 text-center">
                    <div>18.6 GB/s</div>
                    <div className="mt-1 font-semibold">Telemetry</div>
                  </div>
                </div>

                <div className="flex items-center justify-center relative w-full">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-700"></div>
                  <div className="relative bg-yellow-500 text-black w-5 h-5 md:w-6 md:h-6 rounded flex items-center justify-center text-xs font-bold z-10">
                    1
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1 md:gap-2">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-neutral-700 rounded-lg md:rounded-xl flex items-center justify-center">
                    <i className="ri-cpu-line text-lg md:text-xl text-neutral-400"></i>
                  </div>
                  <div className="text-xs text-neutral-400 text-center">
                    <div className="font-semibold">o11y / SIEM</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 justify-center w-full">
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <div className="text-xs text-neutral-500">6.4 GB/s</div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-neutral-700 rounded-lg md:rounded-xl flex items-center justify-center">
                      <i className="ri-server-line text-sm md:text-lg text-neutral-400"></i>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <div className="text-xs text-neutral-500">12.2 GB/s</div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-neutral-700 rounded-lg md:rounded-xl flex items-center justify-center">
                      <i className="ri-cloud-line text-sm md:text-lg text-neutral-400"></i>
                    </div>
                    <span className="text-xs text-neutral-400">S3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mask or Encrypt Sensitive Data Card - Bottom left, wider */}
          <div className="md:col-span-5 md:row-span-2 group relative overflow-hidden  md:rounded-1xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] p-6 md:p-8 lg:p-10">
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
                Mask or Encrypt Sensitive Data
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm lg:text-base">
                Remove or encrypt sensitive data before it leaves your servers,
                making compliance and security simple.
              </p>
            </div>

            {/* Data masking illustration */}
            <div className="relative bg-neutral-800/50  md:rounded-1xl p-4 md:p-6 border border-neutral-700">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                {/* List of data */}
                <div className="space-y-2 md:space-y-2 w-full md:w-auto">
                  <div className="text-xs text-neutral-500 font-semibold mb-2 md:mb-4">
                    LIST OF DATA
                  </div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-3 h-3 md:w-4 md:h-4 accent-blue-500"
                      checked
                      readOnly
                    />
                    <span className="text-xs md:text-sm text-white">SSN</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-3 h-3 md:w-4 md:h-4 accent-blue-500"
                      checked
                      readOnly
                    />
                    <span className="text-xs md:text-sm text-white">
                      Address
                    </span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-3 h-3 md:w-4 md:h-4 accent-blue-500"
                      checked
                      readOnly
                    />
                    <span className="text-xs md:text-sm text-white">
                      Credit Card
                    </span>
                  </label>
                </div>

                {/* Processing icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-neutral-700 rounded-lg md:rounded-xl flex items-center justify-center">
                    <i className="ri-cpu-line text-lg md:text-xl text-neutral-400"></i>
                  </div>
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 bg-yellow-500 text-black rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                </div>

                {/* Masked data */}
                <div className="space-y-2 w-full md:w-auto">
                  <div className="text-xs text-neutral-500 font-semibold mb-2 md:mb-4">
                    MASKED DATA
                  </div>
                  <div className="bg-neutral-800 rounded-lg px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm text-neutral-300 font-mono">
                    ••• •• ••••
                  </div>
                  <div className="bg-neutral-800 rounded-lg px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm text-neutral-300 font-mono">
                    •••••••••••••••
                  </div>
                  <div className="bg-neutral-800 rounded-lg px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm text-neutral-300 font-mono">
                    •••• •••• •••• ••••
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Migration Card - Bottom right, narrower and taller */}
          <div className="md:col-span-7 md:row-span-2 group relative overflow-hidden  bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] p-6 md:p-8 lg:p-10">
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
                Platform Migration
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm lg:text-base">
                Bindplane simplifies and accelerates the migration to new
                observability and SIEM platforms as the needs of your business
                change.
              </p>
            </div>

            {/* Migration flow */}
            <div className="relative bg-neutral-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-neutral-700">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                {/* Source data grid */}
                <div className="flex-shrink-0">
                  <div className="grid grid-cols-3 gap-1 md:gap-2 w-24 h-24 md:w-32 md:h-32 bg-neutral-800 rounded-lg md:rounded-xl p-2 md:p-3">
                    <div className="bg-neutral-600 rounded"></div>
                    <div className="bg-neutral-700 rounded"></div>
                    <div className="bg-neutral-600 rounded"></div>
                    <div className="bg-neutral-700 rounded"></div>
                    <div className="bg-neutral-600 rounded"></div>
                    <div className="bg-neutral-700 rounded"></div>
                    <div className="bg-neutral-600 rounded"></div>
                    <div className="bg-neutral-700 rounded"></div>
                    <div className="bg-neutral-600 rounded"></div>
                  </div>
                </div>

                {/* Arrow with badge */}
                <div className="flex-1 flex items-center justify-center relative w-full md:w-auto">
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 md:w-16 h-px bg-neutral-700"></div>
                    <div className="relative">
                      <i className="ri-arrow-right-line text-xl md:text-2xl text-neutral-600"></i>
                      <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-yellow-500 text-black rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                    </div>
                    <div className="w-8 md:w-16 h-px bg-neutral-700"></div>
                  </div>
                </div>

                {/* Destinations */}
                <div className="flex flex-col gap-3 md:gap-4 w-full md:w-auto">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex items-center gap-1 md:gap-2">
                      <div className="w-6 md:w-12 h-px bg-neutral-700"></div>
                      <i className="ri-arrow-right-line text-sm md:text-lg text-neutral-600"></i>
                    </div>
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-neutral-700 rounded-lg md:rounded-xl flex items-center justify-center">
                      <i className="ri-folder-2-line text-lg md:text-xl text-neutral-400"></i>
                    </div>
                    <span className="text-xs text-neutral-400 whitespace-nowrap">
                      Legacy SIEM
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex items-center gap-1 md:gap-2">
                      <div className="w-6 md:w-12 h-px bg-neutral-700"></div>
                      <i className="ri-arrow-right-line text-sm md:text-lg text-neutral-600"></i>
                    </div>
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-neutral-700 rounded-lg md:rounded-xl flex items-center justify-center">
                      <i className="ri-lock-2-line text-lg md:text-xl text-neutral-400"></i>
                    </div>
                    <span className="text-xs text-neutral-400 whitespace-nowrap">
                      Next-Gen SIEM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8 md:mt-12">
          <button className="group relative px-5 py-2.5 md:px-6 md:py-3 bg-white text-black rounded-full font-['inter2'] font-semibold text-sm md:text-base hover:scale-110 transition-all duration-300 overflow-hidden border-2 border-white hover:border-neutral-400">
            <span className="relative z-10 flex items-center gap-2">
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://github.com/krishnakumarmahakul/"
              >
                View All Projects
              </a>
              <i className="ri-arrow-right-line text-base md:text-lg group-hover:translate-x-2 transition-transform duration-300"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default RecentWorks;
