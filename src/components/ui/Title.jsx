import React from "react";

const Title = ({ label }) => {
  return (
    <div className="flexCenter relative z-[5] bg-[#121212] px-3">
      <img
        src="/logo.png"
        className="w-[40px] h-[40px] rounded-full border-[2px] border-orange-500 pointer-events-none"
        alt=""
      />
      <h1 className="title text-orange-500 -translate-x-1">TRUMPINATOR</h1>
    </div>
  );
};

export default Title;
