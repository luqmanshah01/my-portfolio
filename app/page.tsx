"use client";

import MainPage from "./components/mainPage";
import Sidebar from "./components/sidebar";
import Details from "./components/detail";

export default function Home() {
  return (
    <div className="flex">
      {/* Left Section */}
      <MainPage />

      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Details (Tabs) */}
      {/* <div className="">
        <Details />
      </div> */}
    </div>
  );
}
