import React from "react";
import Section from "../components/layouts/Section";
import Container from "../components/layouts/Container";
import Button from "../components/ui/Button";
import { tokenomicsData } from "../constants";

const Tokenomics = () => {
  return (
    <Section
      id="tokenomics"
      variant="w-full border-y-[2px] border-orange-500 bg-[rgba(254,139,85,0.1)]"
    >
      <Container variant="mt-5 py-12 flexColCenter">
        <h1 className=" text-orange-500 text-[3rem]  md:text-[5rem] font-bold  ">
          TOKENOMICS
        </h1>
        <div className="flexCenter gap-5 md:gap-12 mt-12">
          {tokenomicsData.map((item, index) => (
            <div key={index} className="token flexColCenter">
              <h1 className="text-orange-500 text-2xl md:text-5xl font-bold">
                {item.value}
              </h1>
              <p className="text-xl font-semibold  text-green-100 mt-5">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Tokenomics;
