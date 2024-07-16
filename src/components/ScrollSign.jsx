import React from "react";
import { BsArrowDown } from "react-icons/bs";

const ScrollSign = ({ label }) => {
  return (
    <div className="blur_effect  py-7  rounded-full flexColCenter">
      <BsArrowDown size={55} className="text-orange-500" />
      <div className="flexColCenter gap-2 text-[0.67rem] text-white mt-10">
        <p>Scroll</p>
        <p>to</p>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default ScrollSign;
