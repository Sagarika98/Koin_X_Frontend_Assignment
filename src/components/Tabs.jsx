import React, { useState } from "react";


function Tabs() {
  const [active, setActive] = useState("#overview");

  const handleSetActive = (href) => {
    setActive(href);
  };

  return (
    <div
      className="flex flex-row gap-12 border-b-2 border-gray-300 font-semibold 
      text-sm lg:text-lg pt-10 md:pt-14 ml-3 mr-3 md:ml-6 md:mr-6 lg:ml-12 overflow-x-auto
      text-greenishGray"
    >
      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      `}</style>
      <div>
        <a href="#overview" smooth="true" duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#overview"
                ? "border-b-4 text-blue-600 pb-2  border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#overview")}
          >
            Overview
          </div>
        </a>
      </div>
      <div>
        <a href="#fundamentals" smooth="true" duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#fundamentals"
                ? "border-b-4 text-blue-600 pb-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#fundamentals")}
          >
            Fundamentals
          </div>
        </a>
      </div>
      <div>
        <a href="#news-insights" smooth="true" duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#news-insights"
                ? "border-b-4 text-blue-600 pb-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#news-insights")}
          >
            <span>News&nbsp;Insights</span>
          </div>
        </a>
      </div>
      <div>
        <a href="#sentiments" smooth="true" duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#sentiments"
                ? "border-b-4 text-blue-600 pb-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#sentiments")}
          >
            Sentiments
          </div>
        </a>
      </div>
      <div>
        <a href="#team" smooth="true" duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#team"
                ? "border-b-4 text-blue-600 pb-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#team")}
          >
            Team
          </div>
        </a>
      </div>
      <div>
        <a href="#" smooth="true" duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#"
                ? "border-b-4 text-blue-600 pb-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#")}
          >
            Technicals
          </div>
        </a>
      </div>
      <div>
        <a href="#tokenomics" smooth="true" duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#tokenomics"
                ? "border-b-4 text-blue-600 pb-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#tokenomics")}
          >
            Tokenomics
          </div>
        </a>
      </div>
    </div>
  );
}

export default Tabs;
