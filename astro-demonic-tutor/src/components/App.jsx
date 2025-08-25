import React from 'react';
import Navigation from './Navigation.jsx';
import Banner from './Banner.jsx';
import Footer from './Footer.jsx';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Banner />
      
      {/* Placeholder content to show scrolling effect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            You can learn cEDH, and so many people want you to!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This is just placeholder content to demonstrate the scrolling navigation effect. 
            Replace this with your actual page content.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default App;
