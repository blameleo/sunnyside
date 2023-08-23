import React from "react";
import { BsArrowDown } from "react-icons/bs";
// import { ReactComponent as Logo } from "../public/logo.svg";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowLeft,
//   faFacebookSquare,
//   faInstagram,
//   faTwitter,
//   faPinterest,
// } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div>
      <header className="bg-sky-400 text-white px-16 py-8">
        <nav className="flex justify-between">
          <h1 className="font-bold text-lg">Sunnyside</h1>
          <ul className=" hidden sm:flex  w-[29%] justify-around">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a
                href=""
                className="bg-white text-blue-400 px-6 py-4 rounded-3xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="bg-[url('public/desktop/image-header.jpg')] bg-cover bg-no-repeat  h-[650px]  ">
        {/* <img src="../public/desktop/image-header.jpg" alt="" /> */}
        <h1 className="text-[100px] font-bold text-center pt-36 text-white">
          We are creatives
        </h1>
        <div className="flex justify-center  ">
          {" "}
          <BsArrowDown className="text-white text-[12rem] text-center" />
        </div>
      </section>

      <section className="grid sm:grid-cols-2 place-items-center">
        <article className="sm:px-40 px-20 py-10 sm:py-0">
          <h2 className="text-[40px] font-bold">Transform your brand</h2>
          <p className="py-10 font-bold text-gray-400">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <p className="border-b-[14px] border-yellow-300 inline relative">
            <a href="" className="font-black text-[20px] relative top-[7px]">
              Learn more
            </a>
          </p>
        </article>
        <img src="public/desktop/image-transform.jpg" alt="transform egg" />
      </section>

      <section className="grid sm:grid-cols-2 place-items-center">
        <img src="public/desktop/image-stand-out.jpg" alt="standout glass" />
        <article className="sm:px-40 px-20 py-10 sm:py-0">
          <h2 className="text-[40px] font-bold">
            Stand out to the right audience
          </h2>
          <p className="py-10 font-bold text-gray-400">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <p className="border-b-[14px] border-rose-300 inline relative">
            <a href="" className="font-black text-[20px] relative top-[7px]">
              Learn more
            </a>
          </p>
        </article>
      </section>

      <section className=" grid grid-cols-2">
        <article className="bg-[url('public/desktop/image-graphic-design.jpg')] bg-cover h-[650px] flex justify-center items-center">
          <div className=" w-[40%] mt-60 text-center">
            <h2 className="font-bold text-4xl pb-10 text-teal-700">
              Graphic design
            </h2>
            <p className="text-teal-700 font-bold">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </article>
        <article className="bg-[url('public/desktop/image-photography.jpg')] bg-cover h-[650px] flex justify-center items-center">
          <div className=" w-[40%] mt-60 text-center">
            <h2 className="font-bold text-4xl pb-10 text-teal-700">
              Photography
            </h2>
            <p className="text-teal-700 font-bold">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </article>
      </section>

      <section>
        <h3>Client Testimonials</h3>
        <div>
          <article>
            <img src="images/image-emily.jpg" alt="emily image" />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <p>Emily R.</p>
            <p>Marketing Director</p>
          </article>
          <article>
            <img src="images/image-thomas.jpg" alt="thomas image" />
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <p>Thomas S.</p>
            <p>Chief Operating Officer</p>
          </article>
          <article>
            <img src="images/image-jennie.jpg" alt="jennie image" />
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <p>Jennie F.</p>
            <p>Business Owner</p>
          </article>
        </div>
      </section>

      <section>
        <img
          src="images/desktop/image-gallery-milkbottles.jpg"
          alt="milkbottles"
        />
        <img src="images/desktop/image-gallery-orange.jpg" alt="oranges" />
        <img src="images/desktop/image-gallery-cone.jpg" alt="cone" />
        <img
          src="images/desktop/image-gallery-sugarcubes.jpg"
          alt="sugarcubes"
        />
      </section>

      <footer>
        <img src="images/logofooter.svg" alt="sunnyside" />
        <nav>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <i className="fab fa-facebook-square"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-pinterest"></i>
            </li>
          </ul>
        </nav>
      </footer>

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.ninoschelcher.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nino
        </a>
        .
      </div>
    </div>
  );
};

export default App;
