import React from "react";

const Header = () => {
  const values = ["How It Works", "Screener", "Community", "Blogs"];

  return (
    <div className="flex w-full justify-between px-12 py-5 items-center">
      <button href="#" className="text-4xl text-slate-800 font-bold cursor-pointer">LOGO</button>
      <ul className="flex gap-10 text-slate-800">
        {values.map((value) => (
          <li href="#" className="hover:text-purple-700 cursor-pointer ease-in-out duration-500" key={value}>{value}</li>
        ))}
      </ul>
      <button href="#" className="bg-purple-700 px-5 py-2 rounded-full font-semibold text-slate-200">
        Trade Now
      </button>
    </div>
  );
};

export default Header;
