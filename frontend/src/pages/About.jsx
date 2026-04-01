import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-32 px-6 sm:px-12 lg:px-24 rounded-b-[3rem] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Team collaborating" 
              className="w-full h-full object-cover" 
           />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">Redefining Modern Fashion.</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            HexaShop was born out of a desire to create a cohesive, premium e-commerce experience where quality meets accessibility. We believe style should be effortless.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Our Story</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Born in the digital age, <br />crafted for real life.</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              What started as a small digital storefront has transformed into a global destination for curated fashion. We source our materials from sustainable suppliers and partner with visionary designers to bring you collections that matter.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every piece in our catalog is rigorously tested for quality and durability, ensuring that what you buy isn't just a trend, but a staple for your wardrobe.
            </p>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-gray-100 rounded-[2rem] transform -rotate-3 -z-10"></div>
             <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                className="rounded-[2rem] shadow-xl w-full h-auto object-cover"
                alt="Storefront"
             />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-24 border-t border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-xl text-gray-600">The principles that guide every stitch and every decision.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h4>
                <p className="text-gray-600">Committed to zero-waste packaging and ethically sourced textiles from verified global partners.</p>
             </div>
             
             <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Uncompromising Quality</h4>
                <p className="text-gray-600">If it isn't perfect, it doesn't ship. We stand by the craftsmanship of every item in our store.</p>
             </div>

             <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Community</h4>
                <p className="text-gray-600">Fashion is about people. We continuously invest back into the communities that support our growth.</p>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
}
