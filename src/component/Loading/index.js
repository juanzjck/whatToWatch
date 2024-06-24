import React from 'react';
const Loading = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center loader-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="none" strokeOpacity="1" stroke="#FFFFFF" strokeWidth=".5" cx="100" cy="100" r="0"><animate attributeName="r" calcMode="spline" dur="2" values="1;80" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-width" calcMode="spline" dur="2" values="0;25" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" calcMode="spline" dur="2" values="1;0" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate></circle></svg>
        <h2 className="text-2xl font-semibold">Loading...</h2>
        <p className="text-gray-500">Please wait while we fetch the data.</p>
      </div>
    </div>
  );
};

export default Loading;