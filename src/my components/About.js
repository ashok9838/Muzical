import React from "react";
import img5 from "./res/music img.jpg";

const About = () => {
  return (
    <div>

      <section className="  bg-[#BF5D39] p-2 ">

        <div className="lg:flex lg:space-x-10">

          <div className="">
            <img src={img5} alt="" className="rounded-lg lg:w-full" />
          </div>
          <div className="p-3    my-10 lg:my-24 flex flex-col items-center">
            <h1 className="text-3xl font-semibold lg:text-black  text-center my-3">
              Summer Arts Garden
            </h1>
            <p className="text-justify  text-black ">
            We offers full-day and half-day music camps for kids of all ages and skill levels - including beginners!
Summer camps give students an opportunity to focus on one instrument or genre for a whole week.
            </p>
            <button className=" bg-gray-950 text-green-200 p-2 rounded-lg hover:bg-gray-800 lg:border-2 lg:border-green-700  my-3">
              Register Now
            </button>
          </div>

        </div>

      </section>

    </div>
  );
};

export default About;
