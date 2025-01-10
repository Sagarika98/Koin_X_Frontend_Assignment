import React, { Suspense, lazy } from "react";
// import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import CoinPage from "./[coinId]";
import Tabs from "./components/tabs";
import About from "./components/About";
import Team from "./components/Team";
import Performance from "./components/Performance";
// import dynamic from "next/dynamic";
import YouMayLikeCarousel from "./components/YouMayLikeCarousel";
import TrendingCoinsCarousel from "./components/TrendingCoinsCarousel";
import GetStartedCard from "./components/GetStartedCard";
import './index.css';

// const Sentiment = dynamic(() => import("./components/Sentiment"), {
//   ssr: false,
// });

// const Tokenomics = dynamic(() => import("./components/Tokenomics"), {
//   ssr: false,
// });

const Sentiment = lazy(()=> import("./components/Sentiment"));
const Tokenomics = lazy(() => import("./components/Tokenomics"));

function App() {
  
  return (
    // <div
    //   className={`${inter.variable} font-sans bg-gray-100 relative  `}
    //   style={{ width: "100%" }}
    // >
    <div>
      <NavBar />

      <CoinPage coinId="bitcoin" />

      <div className="w-full lg:w-4/6 ">
        <Tabs />
      </div>

      <div className="w-full lg:w-4/6 " id="overview">
        <Performance />
      </div>

      <div className="w-full lg:w-4/6" id="sentiments">
        <Sentiment />
      </div>

      <div className="w-full lg:w-4/6" id="news-insights">
        <About />
      </div>

      <div className="w-full lg:w-4/6" id="tokenomics">
        <Tokenomics />
      </div>

      <div className="w-full lg:w-4/6" id="team">
        <Team />
      </div>

      <div className="hidden sm:block">
        <YouMayLikeCarousel />
      </div>

      <div className="hidden sm:block">
        <TrendingCoinsCarousel />
      </div>

      <div className="w-full lg:w-2/6 absolute lg:top-36 lg:right-0">
        <GetStartedCard />
      </div>
    </div>
  )
}

export default App;
