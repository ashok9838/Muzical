import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="bg-[#E4F2E7]">
        <h2  className="text-[#2D3E40] text-6xl text-center  lg:text-7xl ">Contact<span
                className="mx-3">Me</span></h2>
        <section className="contact  lg:justify-evenly">
            <div className="  lg:flex  lg:space-x-4 lg:my-0">
                <div className="contact-text clm lg:mx-7  p-3 rounded-xl  ">

                    <h3 className="text-xl text-black">Let's work Together</h3>
                    <p className="text-justify text-black">I can't contact you directly outside of this conversation,<br></br> but I'm here to assist you with any questions or<br></br> information you might need! If you have<br></br> any specific inquiries or need help<br></br> with a project or topic, feel free to ask here.</p>
                    <div className="contact-list py-2">
                        <a href="mailto:ashokinkush2002@gmail.com?subject=regarding details:" className=" email-link">
                            <li><i className="bx bxs-send" ></i>ashok.inkush2002@gmail.com</li>
                        </a>
                        <li><i className='bx bxs-phone' ></i>+916394742549</li>
                    </div>
                    <div className="contact-icons ">
                        <a href="https://www.facebook.com/profile.php?id=100015390881388"><i
                                className='bx bxl-facebook text-2xl p-2'></i></a>
                        <a href="https://instagram.com/ashok_kumar_998765?igshid=MWhtM2p6Mmh2ZHhyZg=="><i
                                className='bx bxl-instagram text-2xl p-2'></i></a>

                        <a href="https://x.com/AshokInkush2002?t=UglzgL1LRVwzFqkgSRfLxQ&s=08"><i
                                className='bx bxl-twitter text-2xl p-2'></i></a>
                        <a
                            href="https://www.linkedin.com/in/ashok-kumar-28a278222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i
                                className='bx bxl-linkedin text-2xl p-2'></i></a>
                    </div>
                </div>
                <div className="contact-form clm  mx-3 my-3 rounded-xl ">
                    <form action="">
                        <input className="p-2 border-2 bg-[#2D3E40]  rounded-lg my-1 w-full" type="name"
                            placeholder="Enter Your Name" required/>
                        <input className="p-2 border-2 bg-[#2D3E40]  rounded-lg my-1 w-full" type="email"
                            placeholder="Enter Your Email " required/>
                        
                        <textarea className="p-2 border-2 bg-[#2D3E40]  rounded-lg my-1 w-full h-52" name="" id=""
                            placeholder="Enter Your Message" required></textarea>
                        <input
                            className=" send text-xl p-2 bg-[#2D3E40]  rounded-xl    text-white  my-1 w-full hover:bg-green-900"
                            type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </section>

    </div>

      
    </div>
  )
}

export default Contact
