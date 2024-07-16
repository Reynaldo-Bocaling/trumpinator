import React from "react";

const Section = ({ children, id, variant }) => {
  return (
    <section id={id} className={`${variant} relative w-full`}>
      {children}
    </section>
  );
};

export default Section;
