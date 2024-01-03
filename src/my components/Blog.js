import React from 'react'

import img13 from "./res/blog1.webp";
import img14 from "./res/blog2.webp";
import img15 from "./res/blog3.jpeg";
import img16 from "./res/blog4.webp";

const Blog = () => {
  return (
    <>
        <section className="bg-[#D9A38F]">
        <h1 className="text-center text-5xl py-3 font-mono font-bold bg-black text-white ">
          Latest News
        </h1>
        <h3 className="text-center text-2xl italic text-green-700 font-semibold">
          blog
        </h3>
        <div className="p-3"> 
          <div className="lg:flex">
            
            <img src={img13} alt="" className="p-2 lg:w-96 lg:h-72 lg:rounded-xl" />
            <div className="">
            <p className="p-2">🗓 May 5, 2024</p>
            <h1 className="text-2xl text-black p-2">Festival of Flutes</h1>
            <p className="text-base text-black p-2 text-justify">
            Concert in the Park
Come and visit with us, ask questions, try out a couple instruments and enjoy some great music!
            </p>
            </div>
           
            <img src={img14} alt="" className="p-2 lg:w-96 lg:h-72 lg:rounded-xl" />
            <div className="">
            <p className="p-2">🗓 May 5, 2024</p>
            <h1 className="text-2xl text-black p-2">Columbia Kids Week</h1>
            <p className="text-base text-black p-2 text-justify ">
            Concert in the Park
Come and visit with us, ask questions, try out a couple instruments and enjoy some great music!
            </p>
            </div>
            
          </div>

          <div className="lg:flex">
            <img src={img15} alt="" className="p-2 lg:w-96 lg:h-72 lg:rounded-xl" />
            <div>

           
            <p className="p-2">🗓 May 5, 2024</p>
            <h1 className="text-2xl text-black p-2">International Piano Festival</h1>
            <p className="text-base text-black p-2 ">
            We have talented and very experienced instructors who teach piano, violin, guitar, cello, and other instruments.
            </p>
            </div>

            <img src={img16} alt="" className="p-2 lg:w-96 lg:h-72 lg:rounded-xl" />
            <div>
            <p className="p-2">🗓 May 5, 2024</p>
            <h1 className="text-2xl text-black p-2">Festival of Flutes</h1>
            <p className="text-base text-black p-2 ">
            We have talented and very experienced instructors who teach piano, violin, guitar, cello, and other instruments.
            </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
