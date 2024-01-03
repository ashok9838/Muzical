import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="font-'Open Sans', sans-serif; border-top bg-[#59211C] ">
        <footer className="p-5 ">
          <div className="row">
            <div className="col-6 col-md-3 mb-3 ">
              <h5 className="text-white text-2xl">Support</h5>
              <br className=" border-y-1 "></br>
              <ul className="nav flex-column  ">
                <li className="nav-item mb-2 ">
                  <a href="/" className="nav-link p-0  text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0  text-white">
                    Topics
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0  text-white">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0  text-white">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0  text-white
                  ">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3 ">
              <h5 className="text-white text-2xl">Musical</h5>
              <br className=" border-y-1 "></br>
              <ul className="nav flex-column ">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0  text-white">
                    Music
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0  text-white">
                    App
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0  text-white">
                    Blog
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0  text-white">
                    Terms
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0  text-white">
                    Privacy
                  </a>
                </li>
                
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3 ">
              <form>
                <h5 className="text-white my-2">Subscribe to our newsletter</h5>
                <p className="text-white ">Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2 my-3">
                  <label htmlFor="newsletter1" className="visually-hidden text-white">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-light text-white hover:text-black" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className="text-white text-center">© 2023 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex text-white">
              <li className="ms-3">
                <a className="link-body-emphasis text-white text-3xl" href="/">
                <i className='bx bxl-linkedin-square' ></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis text-white text-3xl" href="/">
                <i className='bx bxl-instagram-alt'  ></i>
                </a>
              </li>


              <li className="ms-3">
                <a className="link-body-emphasis text-white text-3xl" href="/">
                <i className='bx bxl-facebook-square' ></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
