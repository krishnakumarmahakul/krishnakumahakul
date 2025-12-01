"use client"

import React from 'react'

function RecentWorks() {
  return (
    
    <section className="w-full bg-black py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-['inter2'] font-bold text-white mb-4 hover:scale-105 transition-transform duration-300 inline-block">
            Recent Works
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
            Explore my latest projects showcasing modern design, seamless user experience, and innovative solutions.
          </p>
        </div>

        {/* Bento Grid - Smaller boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]">
          
          {/* Large Card - Keyboard Shortcuts */}
          <div className="md:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-900/20 via-neutral-900 to-black border border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] p-6">
            <div className="absolute top-6 left-6 w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <i className="ri-keyboard-line text-2xl text-orange-400"></i>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Keyboard shortcuts
              </h3>
              <p className="text-neutral-400 text-sm">
                Work efficiently with instant access to common actions.
              </p>
            </div>

            {/* Animated command palette mockup */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-xl p-3 w-60 shadow-2xl group-hover:scale-105 transition-transform duration-300">
              <div className="text-neutral-500 text-xs mb-2 flex items-center gap-2">
                <i className="ri-search-line"></i>
                Run command...
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-neutral-300 hover:bg-neutral-700/50 p-2 rounded-lg cursor-pointer">
                  <span>Mark Task as Done</span>
                  <kbd className="bg-neutral-700 px-1.5 py-0.5 rounded text-xs">⌘</kbd>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-300 hover:bg-neutral-700/50 p-2 rounded-lg cursor-pointer">
                  <span>Open To Do List</span>
                  <kbd className="bg-neutral-700 px-1.5 py-0.5 rounded text-xs">⌘T</kbd>
                </div>
              </div>
            </div>
          </div>

          {/* Team Planner Card */}
          <div className="md:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/20 via-neutral-900 to-black border border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] p-6">
            <div className="absolute top-6 left-6 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <i className="ri-calendar-check-line text-2xl text-blue-400"></i>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Team Planner
              </h3>
              <p className="text-neutral-400 text-sm">
                Keep track of the bigger picture by viewing all individual tasks.
              </p>
            </div>

            {/* Task cards mockup */}
            <div className="absolute top-1/3 right-6 space-y-2">
              <div className="bg-white/10 backdrop-blur-sm border border-neutral-700 rounded-lg p-3 w-52 shadow-xl group-hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-red-400 bg-red-500/20 px-2 py-0.5 rounded">High</span>
                  <i className="ri-more-2-fill text-neutral-500 text-sm"></i>
                </div>
                <p className="text-xs text-white mb-1">Refactor legacy code</p>
                <div className="flex items-center gap-1 text-xs text-neutral-400">
                  <i className="ri-calendar-line text-xs"></i>
                  <span>Apr 18</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-neutral-700 rounded-lg p-3 w-52 shadow-xl group-hover:translate-x-4 transition-transform duration-300 delay-75">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-yellow-400 bg-yellow-500/20 px-2 py-0.5 rounded">Medium</span>
                  <i className="ri-more-2-fill text-neutral-500 text-sm"></i>
                </div>
                <p className="text-xs text-white mb-1">SEO audit</p>
                <div className="flex items-center gap-1 text-xs text-neutral-400">
                  <i className="ri-calendar-line text-xs"></i>
                  <span>Apr 24</span>
                </div>
              </div>
            </div>
          </div>

          {/* Time-blocking Card */}
          <div className="md:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 via-neutral-900 to-black border border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] p-6">
            <div className="absolute top-6 left-6 w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <i className="ri-time-line text-2xl text-purple-400"></i>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Time-blocking
              </h3>
              <p className="text-neutral-400 text-sm">
                Transform daily tasks into structured time blocks.
              </p>
            </div>

            {/* Meeting card mockup */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl p-4 w-60 shadow-2xl group-hover:scale-105 transition-transform duration-300">
              <h4 className="text-neutral-800 font-semibold text-sm mb-1">Design meeting</h4>
              <p className="text-xs text-neutral-600 mb-2">03:00 - 04:00 pm<br/>Weekly on Monday</p>
              <button className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-600 transition-colors w-full">
                <i className="ri-vidicon-line mr-1"></i>
                Join Meeting
              </button>
              <div className="flex items-center gap-1 mt-2 text-xs text-neutral-500">
                <i className="ri-group-line"></i>
                <span>8 guests</span>
              </div>
            </div>
          </div>

          {/* Notifications Card */}
          <div className="md:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-900/20 via-neutral-900 to-black border border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] p-6">
            <div className="absolute top-6 left-6 w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <i className="ri-notification-3-line text-2xl text-pink-400"></i>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Notifications
              </h3>
              <p className="text-neutral-400 text-sm">
                Keep up to date with instant notifications.
              </p>
            </div>

            {/* Glowing notification bell */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-blue-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="absolute inset-6 bg-black rounded-full flex items-center justify-center">
                  <i className="ri-notification-3-fill text-4xl text-white"></i>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="group relative px-6 py-3 bg-white text-black rounded-full font-['inter2'] font-semibold text-base hover:scale-110 transition-all duration-300 overflow-hidden border-2 border-white hover:border-neutral-400">
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <i className="ri-arrow-right-line text-lg group-hover:translate-x-2 transition-transform duration-300"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default RecentWorks