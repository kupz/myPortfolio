import React from "react";

function Navbar() {
  const white = "white";
  return (
    <div
      className="flex justify-between p-6
     align-middle"
    >
      <p className="font-medium text-slate-100 cursor-pointer hover:text-red-400 text-xl">
        BEN JOHN
      </p>
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:cursor-pointer hover:text-red-400 text-slate-300 font-medium text-lg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
