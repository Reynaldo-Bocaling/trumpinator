import React from "react";

const Button = ({ label, variant }) => {
  return (
    <>
      <button className=" text-white border-[2px] border-orange-500 px-7 py-2 bg-[rgba(255,129,75,0.2)] hover:bg-orange-500 duration-300 transition-all ease-in-out">
        {label}
      </button>
    </>
  );
};

export default Button;
