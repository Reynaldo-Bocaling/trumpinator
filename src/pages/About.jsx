import React from "react";
import Section from "../components/layouts/Section";
import Container from "../components/layouts/Container";
import Button from "../components/ui/Button";

const About = () => {
  return (
    <Section id="about" variant="w-full">
      <Container variant="mt-5 py-12 ">
        <h1 className=" text-white text-[3rem] md:text-[4rem] font-bold leading-[4rem] flexColCenter">
          About
          <span className="text-[3rem] md:text-[5rem] text-orange-500 underline">
            TRUMPINATOR
          </span>
        </h1>
        <div className="max-w-3xl mx-auto mt-10 flexColCenter">
          {" "}
          <p className="text-white text-xl md:text-2xl text-center font-normal traw mb-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem, voluptates dolore reprehenderit dolorem cum
            molestiae voluptatem necessitatibus saepe, suscipit earum illo
            pariatur ab delectus beatae!
          </p>
          <Button label="Buy Now" />
        </div>
      </Container>
    </Section>
  );
};

export default About;
