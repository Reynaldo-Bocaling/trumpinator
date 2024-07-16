import React from "react";
import Container from "../components/layouts/Container";
import Section from "../components/layouts/Section";

const Banner = () => {
  return (
    <Section>
      <Container variant="mt-9 flexCenter ">
        <div className="border-[2px] border-orange-500 w-[70%] rounded-lg bg-[rgba(251,150,87,0.25)]">
          <img
            src="/banner.png"
            alt=""
            className=" border-[2px] border-orange-500 rounded-lg -rotate-3 pointer-events-none"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Banner;
