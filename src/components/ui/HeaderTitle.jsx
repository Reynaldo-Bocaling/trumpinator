import React from "react";

const HeaderTitle = () => {
  return (
    <div className="flexCenter gap-2">
      <img src="/img/hero.png" className="w-[50px]" alt="" />
      <div className="flexColStart">
        <h1 className="title-font text-orange-500">$FURI</h1>
        <span className="text-sm font-bold uppercase">tHE DEATH FRIEND</span>
      </div>
    </div>
  );
};

export default HeaderTitle;
