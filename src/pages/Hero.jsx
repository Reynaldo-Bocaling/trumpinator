import React from "react";
import Section from "../components/layouts/Section";
import Container from "../components/layouts/Container";
import bitcoin from "../assets/json-animtions/bitcoin.json";
import Lottie from "lottie-react";
import Button from "../components/ui/Button";
import { user } from "../constants";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsArrowDown } from "react-icons/bs";
import ScrollSign from "../components/ScrollSign";
const Hero = () => {
  return (
    <Section id="hero">
      <Container variant="w-full">
        <div className="flexCenter flex-col md:flex-row">
          <div className="flexColCenter order-2 md:order-1 md:flexColStart w-full md:w-[30%] blur_effect2 rounded-xl py-2 px-7">
            <Lottie animationData={bitcoin} className="w-[250px]" />
            <p className="text-white text-sm tracking-wider mb-5 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              sapiente repellendus enim reiciendis nobis distinctio.
            </p>

            <a
              href="#tokenomics"
              className="text-white border-[2px] border-orange-500 px-7 py-2 bg-[rgba(255,129,75,0.2)] hover:bg-orange-500 duration-300 transition-all ease-in-out"
            >
              View Tokens
            </a>
          </div>
          <div className="md:max-w-[70%] w-full order-1 md:order-2">
            <h1 className=" text-white text-[3.5rem] md:text-[7rem] font-bold leading-[5rem] md:leading-[8rem]">
              Start Making Money With{" "}
              <span className="text-[3.5rem] md:text-[8rem] text-orange-500 underline">
                TRUMPINATOR
              </span>
            </h1>
          </div>
        </div>

        <div className="w-full flexCenter flex-col md:flex-row gap-5 mt-10 ">
          <div className="blur_effect w-full md:w-1/3 rounded-2xl overflow-hidden">
            <img src="/hero.png" alt="" className="pointer-events-none" />
          </div>
          <div className="w-1/1 flexCenter gap-5">
            <div className="blur_effect py-9 px-5 rounded-xl flexColStart gap-5">
              <h1 className="text-2xl text-white font-semibold   ">
                Total Selling
              </h1>
              <h1 className="text-4xl text-orange-500 font-bold">
                1,000,000,000
              </h1>
              <ul className="flexColStart gap-2">
                {user.map((item, index) => (
                  <li key={index} className="flexCenter gap-2">
                    <FaRegCircleCheck className="text-orange-500" />
                    <p className="text-white text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" rounded-xl">
              <ScrollSign label="About" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
