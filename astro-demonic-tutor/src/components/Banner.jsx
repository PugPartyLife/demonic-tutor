import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Banner() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['1. Learn', '2. Study', '3. Practice', '4. Win'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
        {/* Background image across entire banner */}
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://cards.scryfall.io/large/front/4/0/401f7042-24fd-42a0-ae7c-e6b7de1aa446.jpg?1562906764")' // Replace with your image path
          }}
        ></div>
        
        {/* Simple pattern background instead of problematic SVG */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)',
            backgroundSize: '50px 50px'
            }}></div>
        </div>
        
        {/* Floating Elements */}
        {/*<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gray-400/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-blue-400/50 rounded-full animate-ping"></div> */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                The Maze's End
              <br />
              <span className="relative">
                  <span className="bg-gradient-to-r from-gray-300 to-gray-600 bg-clip-text text-transparent">
                  {words[currentWord]}
                  </span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            You are not lost. All Gates lead to the Maze's End...
            </p>

            {/* CTA Buttons - outside the background image area */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                    Learn cEDH
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                    Commanders
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                    Cards and Combos
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-3xl mx-auto">
            {[
                { number: '42', label: 'Commanders' },
                { number: '42', label: 'Cards' },
                { number: '42', label: 'Decks' },
                { number: '42', label: 'Tournaments' },
            ].map((stat, index) => (
                <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-gray-200 text-sm md:text-base">{stat.label}</div>
                </div>
            ))}
            </div>
        </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
    </section>
    );
}