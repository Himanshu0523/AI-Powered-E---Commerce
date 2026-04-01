import React from 'react';

export default function ProductSkeleton() {
  return (
    <div className="bg-white min-h-screen animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center">
          <div className="w-1/3 h-4 bg-gray-100 rounded"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Image Stack */}
          <div className="flex flex-col space-y-6">
            <div className="w-full aspect-[4/5] bg-gray-100 rounded-[2rem]"></div>
            <div className="w-full aspect-[4/5] bg-gray-100 rounded-[2rem] hidden lg:block"></div>
          </div>

          {/* Right Side: Sticky Details */}
          <div className="flex flex-col lg:sticky lg:top-28 pt-4">
            <div className="w-3/4 h-12 bg-gray-100 rounded-xl mb-4"></div>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex space-x-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-5 h-5 bg-gray-100 rounded-full"></div>)}
              </div>
              <div className="w-24 h-4 bg-gray-100 rounded"></div>
            </div>

            <div className="w-32 h-10 bg-gray-100 rounded-lg mb-8"></div>
            
            <div className="space-y-4 mb-10">
              <div className="w-full h-4 bg-gray-100 rounded"></div>
              <div className="w-full h-4 bg-gray-100 rounded"></div>
              <div className="w-5/6 h-4 bg-gray-100 rounded"></div>
            </div>

            {/* Colors */}
            <div className="w-16 h-4 bg-gray-100 rounded mb-4"></div>
            <div className="flex space-x-4 mb-10">
              {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 bg-gray-100 rounded-full"></div>)}
            </div>

            {/* Sizes */}
            <div className="w-full flex justify-between mb-4">
               <div className="w-16 h-4 bg-gray-100 rounded"></div>
               <div className="w-20 h-4 bg-gray-100 rounded"></div>
            </div>
            <div className="grid grid-cols-5 gap-3 mb-10">
               {[1,2,3,4,5].map(i => <div key={i} className="h-14 bg-gray-100 rounded-xl"></div>)}
            </div>

            {/* CTA */}
            <div className="w-full h-16 bg-gray-200 rounded-2xl mb-8"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
