import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
  return (
    <div className="h-svh select-none">
      <div className="fixed z-50 w-full">
        <Navbar />
      </div>
      <div className="flex flex-col justify-start w-full h-full pt-16 xl:pt-20 bg-gradient-to-b from-lightest to-dark to-[130%]">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
