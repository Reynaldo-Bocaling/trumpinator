import React from "react";
import Section from "../components/layouts/Section";
import Container from "../components/layouts/Container";
import Title from "../components/ui/Title";
import { social } from "../constants";

const Contact = () => {
  return (
    <Section id="contact" variant="bg-[#121212]">
      <Container variant="flexBetween flex-col md:flex-row">
        <Title />
        <div className="flexColStart mt-7 md:mt-0">
          <h1 className="text-4xl text-orange-500">Contact Us</h1>
          <ul className="flexCenter gap-7 mt-5">
            {social.map((Item, index) => (
              <li
                key={index}
                className="h-[45px] w-[45px] flexCenter rounded-full bg-orange-500"
              >
                <a href={Item.url} className="">
                  <img
                    src={Item.icon}
                    alt=""
                    className="w-[35px] h-[30px] pointer-events-none"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="absolute top-1/2 -translate-y-1/1 md:-translate-y-1/2 h-[2px] w-full bg-orange-500 rounded-full"></div>
    </Section>
  );
};

export default Contact;
