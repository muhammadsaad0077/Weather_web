import React from 'react';

const CardShimmer = () => {
  return (
    <div className="max-w-xs animate-pulse bg-blue-950 h-[176px] w-[250px] flex flex-wrap hover:bg-gray-300 shadow-lg rounded-2xl overflow-hidden m-4">
      <div className="px-6 py-4 flex flex-wrap">
        <div className="font-bold text-xl mb-2 text-black"></div>
        <p className="text-base"></p>
        <p className="text-base"></p>
        <p className="text-base"></p>
        <p className="text-base"></p>
      </div>
    </div>
  );
};

export default CardShimmer;
