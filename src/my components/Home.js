import React from "react";
import img from "./res/wall.jpg";
import img1 from "./res/kids.jpg";
import img2 from "./res/teens.webp";
import img3 from "./res/adult.webp";
import img4 from "./res/private.jpg";
import img5 from "./res/play.png";
import img6 from "./res/guitar-instrument.png";
import img7 from "./res/microphone.png";
import img8 from "./res/drum.png";
import img9 from "./res/violin.png";
import img10 from "./res/cello.png";
import img11 from "./res/double-bass.png";
import img12 from "./res/saxophone.png";
import Blog from "./Blog";
import video from "./res/music video.mp4"
import video2 from "./res/music video2.mp4"



// #84AEBF #F29966 #BF5D39 #59211C


const Home = () => {
  return (
    <div>
      <section className="font-'Open Sans', sans-serif; bg-[#A4BDBF]">
        <img src={img} alt="" className="w-full" />
        <div className="p-3 lg:absolute lg:top-1/2 lg:left-40">
          <h1 className="text-3xl font-semibold lg:text-green-600 spa">
            Listen to new music...
          </h1>
          <p className="text-justify lg:w-3/5 lg:text-white text-lg">
            “Life is like a beautiful melody, only the lyrics are messed up.”
            “Where words fail, music speaks.” “You can cage the singer but not
            the song.” “Music brings a warm glow to my vision, thawing mind and
            muscle from their endless wintering.”
          </p>
          <div className="my-3">
          <a href=' https://www.boomplay.com/' className="my-2  bg-gray-950 text-green-200 p-2 rounded-lg hover:bg-gray-800 lg:border-2 lg:border-green-700 mx-1"
            > Start Free Trial
          </a>
         <a  href='https://pixabay.com/music/search/trial/'className=" bg-gray-950 text-green-200 p-2 rounded-lg hover:bg-gray-800 lg:border-2 lg:border-green-700 ">
            Download Now
          </a>
          </div>
        </div>
      </section>










      <section className=" font-'Open Sans', sans-serif; bg-[#84AEBF]">
        <h1 className="text-center text-5xl p-3 font-mono font-bold bg-slate-900 text-white ">
          Music Groups
        </h1>
        <h3 className="text-center text-2xl italic text-green-700 font-semibold">
          for
        </h3>
        <div className="p-3 text-justify lg:flex lg:space-x-4">
          <div className="p-3">
            <img src={img1} alt="" className="mx-auto rounded-full w-52 " />
            <h2 className="text-center text-2xl italic text-green-700 font-semibold">
              Kids
            </h2>
            <p>
              Our school is a solution for families who would like to expose
              their children to the world of music.
            </p>
          </div>
          <div className="p-3">
            <img src={img2} alt="" className="mx-auto rounded-full w-52" />
            <h2 className="text-center text-2xl italic text-green-700 font-semibold">
              Teens
            </h2>
            <p>
              Our classes help to develop the skills necessary for music
              learning and a lifelong enjoyment of music.
            </p>
          </div>
          <div className="p-3">
            <img src={img3} alt="" className="mx-auto rounded-full w-52" />
            <h2 className="text-center text-2xl italic text-green-700 font-semibold">
              Adults
            </h2>
            <p>
              We have programs for everyone. In addition to teaching music to
              children, we instruct adults and seniors.
            </p>
          </div>
          <div className="p-3">
            <img src={img4} alt="" className="mx-auto rounded-full w-52" />
            <h2 className="text-center text-2xl italic text-green-700 font-semibold">
              Private Lessons
            </h2>
            <p>
              Private music lessons provide one-on-one attention, so teachers
              can focus on an individual student’s needs.
            </p>
          </div>
        </div>
      </section>







      <section className="font-'Open Sans', sans-serif; p-5 bg-[#3F7373] flex flex-col items-center">
        <h1 className="text-3xl text-center p-3">Let's make art!</h1>
        <p className="text-center text-lg space-y-3">
        Explore several art forms as your child builds creativity and<br></br> confidence in our new visual arts classes for ages 2-5!
        </p>
        <div className="">
          <button className="my-2 bg-gray-950 text-green-200 p-1.5 rounded-lg hover:bg-gray-800 lg:border-2 lg:border-green-700 mx-16">
            See our art classes
          </button>
        </div>
      </section>











      <section className="font-'Open Sans', sans-serif; bg-[#F2BF91]">
        <h1 className="text-center text-5xl py-3 font-mono font-bold bg-[#401F1F] text-white ">
          Musical Instruments
        </h1>
        <h3 className="text-center text-2xl italic text-green-700 font-semibold">
          classes
        </h3>
        <div className=" lg:flex p-2">
          <div className="p-3">
            <img src={img5} alt="" className="mx-auto h-52 w-52" />
            <h1 className="text-center text-2xl italic text-green-700 font-semibold">
              Piano
            </h1>
            <p className="text-black">
              It is a musical instrument played using a keyboard.
            </p>
          </div>
          <div className="p-3">
            <img src={img6} alt="" className="mx-auto h-52 w-52" />
            <h1 className="text-center text-2xl italic text-green-700 font-semibold">
              Guitar
            </h1>
            <p className="text-black">
              The guitar is classified as a string instrument.
            </p>
          </div>
          <div className="p-3">
            <img src={img7} alt="" className="mx-auto h-52 w-52" />
            <h1 className="text-center text-2xl italic text-green-700 font-semibold">
              Voice
            </h1>
            <p className="text-black">
              It is a type of music performed by one or more singers.
            </p>
          </div>
          <div className="p-3">
            <img src={img8} alt="" className="mx-auto h-52 w-52" />
            <h1 className="text-center text-2xl italic text-green-700 font-semibold">
              Drums
            </h1>
            <p className="text-black">
              Can play by striking with the hand or two sticks.
            </p>
          </div>
        </div>
        <div className="lg:flex p-4">
          <div className="p-3">
            <img src={img9} alt="" className="mx-auto h-52 w-52" />
            <h1 className="text-center text-2xl italic text-green-700 font-semibold">
              Violin
            </h1>
            <p className="text-black">
              The violin has four strings tuned in perfect fifths.
            </p>
          </div>
          <div className="p-3">
            <img src={img10} alt="" className="mx-auto h-52 w-52" />
            <h1 className="text-center text-2xl italic text-green-700 font-semibold">
              Cello
            </h1>
            <p className="text-black">
              The cello is used as a solo musical instrument.
            </p>
          </div>
          <div className="p-3">
            <img src={img11} alt="" className="mx-auto h-52 w-52" />
            <h1 className="text-center text-2xl italic text-green-700 font-semibold">
              Double Bass
            </h1>
            <p className="text-black">
              The lowest-pitched bowed string instrument.
            </p>
          </div>
          <div className="p-3">
            <img src={img12} alt="" className="mx-auto h-52 w-52 " />
            <h1 className="text-center text-2xl italic text-green-700 font-semibold">
              Saxophone
            </h1>
            <p className="text-black">
              The saxophone is a woodwind instrument.
            </p>
          </div>
        </div>
      </section>
















      <section className="font-'Open Sans', sans-serif; p-3 bg-[#A67665] text-black flex flex-col items-center">
        <h1 className="text-3xl text-center p-3">Melody Music School!</h1>
        <p className="text-center text-lg space-y-3">
        We have talented and very experienced instructors who <br></br>teach piano, violin, guitar, cello, and other instruments.
        </p>

        <div className=" p-5   ">
          <div className="flex justify-between my-4">
            <div className="p-2 rounded-full border-gray-400 border-3 ">
              <p className="text-xl font-semibold font-mono bg-gray-400 text-black p-3 opacity-75 rounded-full">
                231
              </p>
            </div>
            <p className="text-lg text-black ">Students</p>

            <div className="p-2 rounded-full border-gray-400 border-2">
              <p className="text-xl font-semibold font-mono bg-gray-400 text-black p-3 opacity-75 rounded-full">
                20
              </p>
            </div>
            <p className="text-lg text-black ">Teachers</p>
          </div>
          <div className="flex justify-between my-4  ">
            <div className="p-2 rounded-full border-gray-400 border-2">
              <p className="text-xl font-semibold font-mono bg-gray-400 text-black p-3 opacity-75 rounded-full">
                30
              </p>
            </div>
            <p className="text-lg text-black ">Programmes</p>
            <div className="p-2 rounded-full border-gray-400 border-2">
              <p className="text-xl font-semibold font-mono bg-gray-400 text-black p-3 opacity-75 rounded-full">
                35
              </p>
            </div>
            <p className="text-lg text-black ">Awards</p>
          </div>
        </div>
      </section>





    <section>
      <div className="lg:w-1/2 lg:flex ">
      <video src={video} autoPlay Loop muted ></video>
      <video src={video2} autoPlay Loop muted ></video>
      </div>
    </section>



    <Blog />


      
    </div>
  );
};

export default Home;
 
