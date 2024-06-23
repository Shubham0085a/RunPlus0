"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import VanillaTilt from "vanilla-tilt";
import dashboard from "../assets/dashboard.png";
import airbnb from "../assets/airbnb.png";
import amazon from "../assets/amazon.png";
import creative from "../assets/creative.png";
import google from "../assets/google.png";
import shopify from "../assets/shopify.png";
import mission1 from "../assets/mission1.png";
import mission2 from "../assets/mission2.png";
import Tick from "../assets/Tick.png";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import PropTypes from "prop-types";
import PublishImg from "../assets/Publish.png";
import RespondImg from "../assets/Respond.png";
import AutomateImg from "../assets/Automate.png";
import MonitorImg from "../assets/Monitor.png";
import AnalyzeImg from "../assets/Analyze.png";
import CreativeContentImg from "../assets/Creative Content.png";
import Ourteam from "@/components/ourteam";
import Button from "@/components/button";
import Marquee from "react-fast-marquee";

const Card = ({ title, image, heading, description }) => (
  <div className="group relative scrollanimation animate-appear">
    <div className=" absolute inset-3 duration-1000 opacity-75 group-hover:bg-gradient-to-br group-hover:animate-till group-hover:from-sky-500 group-hover:to-purple-500 rounded-2xl group-hover:blur-xl "></div>
    <div className=" relative bg-white  border-2  px-7 py-10  rounded-2xl m-2">
      <div className=" mx-auto flex items-start">
        <h3 className="text-xl text-[#002548] bg-[#F6F6F6] group-hover:bg-sky-300/30 py-3 px-7 duration-700 text-center rounded-full font-semibold mb-2">
          {title}
        </h3>
      </div>
      <div>
        <p className=" mt-10 font-bold text-2xl text-[#002548]">{heading}</p>
      </div>
      <div>
        <p className=" mt-5 text-[#808080] text-lg">{description}</p>
      </div>
      <div className=" border-t-2 border-[#DCDCDC] mt-10">
        <div className=" h-[4.7rem] mt-4 flex flex-row items-center justify-between">
          <div>
            <Image src={image} alt="" className="w-14" />
          </div>
          <div>
            <button className=" relative rounded-full h-[4rem] w-[13.8rem] sm:h-[3.5rem] sm:w-[9rem] xl:h-[4rem] xl:w-[13.8rem] border-2 overflow-hidden before:rounded-full font-semibold hover:font-bold text-2xl sm:font-medium sm:hover:font-semibold sm:text-lg xl:font-semibold xl:hover:font-bold xl:text-2xl bg-gradient-to-r from-[#76CDFF] to-[#008DDD] px-3 text-[#002548] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#002548] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
              <span className="relative z-10">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const ROTATION_RANGE = 15;
const HALF_ROTATION_RANGE = 15 / 2;

const Home = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
    return () => tiltRef.current?.vanillaTilt?.destroy();
  }, []);

  const cards = [
    {
      title: "Publish",
      heading: "Save valuable time by scheduling posts",
      image: PublishImg,
      description:
        "Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
    },
    {
      title: "Respond",
      heading: "All your conversations in one place",
      image: RespondImg,
      description:
        "Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
      icon: "",
    },
    {
      title: "Automate",
      heading: "Truly automate your social media",
      image: AutomateImg,
      description:
        "Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
    },
    {
      title: "Monitor",
      heading: "Listen to what they say about you",
      image: MonitorImg,
      description:
        "Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
    },
    {
      title: "Analyze",
      heading: "Detailed insights for your social media",
      image: AnalyzeImg,
      description:
        "Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
    },
    {
      title: "Creative Content",
      heading: "Artificial Intelligence trained Team",
      image: CreativeContentImg,
      description:
        "Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
    },
  ];

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <main className=" cursor-default">
      <section id="hero">
        <div className="flex flex-col items-center justify-center gap-10 h-auto xl:gap-0 xl:flex-row font-montserrat sm:mx-10 mt-10">
          <div className=" relative lg:ml-[7.63rem] w-4/5 xl:w-[55%] sm:ml-10">
            <div className=" absolute top-10 left-4 sm:top-40 sm:left-14 w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 blur-2xl  bg-purple-300 rounded-full mix-blend-multiply filter opacity-60 animate-blob"></div>
            <div className=" absolute top-28 right-20 sm:top-28 sm:right-72 w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 blur-2xl  bg-yellow-300 rounded-full mix-blend-multiply filter opacity-60 animate-blob animation-delay-2000"></div>
            <div className=" absolute bottom-56 left-16 sm:bottom-32 sm:left-56 w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 blur-2xl  bg-pink-300 rounded-full mix-blend-multiply filter opacity-60 animate-blob animation-delay-4000"></div>
            <div className=" relative flex flex-col gap-6 sm:gap-[3.13rem] scrollanimation animate-appear">
              <div>
                <h1 className=" font-semibold md:font-bold text-2xl sm:text-4xl md:text-7xl text-[#002548] leading-tight">
                  <span className="bg-gradient-to-r from-[#0094FF] via-[#25CBFF] to-[#20FFCA] inline-block text-transparent bg-clip-text">
                    Develop Features,
                    <br />
                  </span>{" "}
                  <br />
                  Foster Collaboration <br /> & Knowledge Sharing
                </h1>
              </div>
              <div>
                <p className="text-[#515151] sm:text-2xl text-lg leading-normal">
                  Our vision is to establish a dynamic, global marketplace that
                  serves as a hub for endless opportunities.
                </p>
              </div>
              <Button />
            </div>
            <div className=" w-[100%] h-full scrollanimation animate-appear">
              <Marquee
                behavior=""
                direction="left"
                autoFill={true}
                gradient={true}
                className="relative mt-12"
              >
                <div className="mr-14 w-28 ">
                  <Image src={google} alt="" />
                </div>
                <div className="mr-14 w-28 ">
                  <Image src={airbnb} alt="" />
                </div>
                <div className="mr-14 w-28">
                  <Image src={creative} alt="" />
                </div>
                <div className="mr-14 w-32 ">
                  <Image src={shopify} alt="" />
                </div>
                <div className="mr-14 w-28 ">
                  <Image src={amazon} alt="" />
                </div>
              </Marquee>
            </div>
          </div>
          <div className=" sm:w-[40%] h-auto scrollanimation animate-appear">
            <Image src={dashboard} alt="" />
          </div>
        </div>
      </section>
      <section id="features">
        <div className=" font-montserrat my-24">
          <h1 className=" text-center font-extrabold text-3xl sm:text-5xl sm:mb-16 text-[#002548] scrollanimation animate-appear">
            Simple, yet Powerful Features
          </h1>
          <div className=" relative container sm:mt-10 mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  heading={card.heading}
                  description={card.description}
                  image={card.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="mission">
        <div className="my-10 mx-10 sm:mx-20 font-montserrat flex flex-col lg:flex-row justify-center gap-20 lg:gap-5">
          <div className=" w-auto sm:w-[30rem] md:w-[35rem] lg:w-[40rem] xl:w-[44rem] mt-5 flex flex-col gap-5">
            <div className="flex flex-col gap-5 scrollanimation animate-appear">
              <div>
                <h1 className="text-[#002548] text-5xl sm:text-6xl font-extrabold">
                  Our Mission
                </h1>
              </div>
              <div>
                <p className="font-normal text-lg sm:text-2xl text-[#808080]">
                  Creating a Dynamic, Global Hub for Endless Opportunities and
                  Knowledge Exchange. Empowering the Workforce with an Intuitive
                  and Culturally Inclusive marketplace
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-3 items-center font-semibold justify-start text-[#002548]">
                <Image src={Tick} alt="" className=" h-6 w-6" />
                <p>Build an Intuitive marketplace</p>
              </div>
              <div className="flex flex-row gap-3 items-center font-semibold justify-start text-[#002548]">
                <Image src={Tick} alt="" className=" h-6 w-6" />
                <p>Foster a Global Community</p>
              </div>
              <div className="flex flex-row gap-3 items-center font-semibold justify-start text-[#002548]">
                <Image src={Tick} alt="" className=" h-6 w-6" />
                <p>Empowerment through Technology</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div
              data-tilt
              className=" hover:shadow-2xl hover:shadow-[#25CBFF] rounded-3xl scrollanimation animate-appear"
              ref={tiltRef}
            >
              <Image
                src={mission1}
                alt=""
                className="h-80 sm:h-[25rem] w-auto"
              />
            </div>
            <div
              data-tilt
              className=" hover:shadow-2xl hover:shadow-[#25CBFF] rounded-3xl scrollanimation animate-appear"
              ref={tiltRef}
            >
              <Image
                src={mission2}
                alt=""
                className="h-80 sm:h-[25rem] w-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="working_process">
        <div className=" flex flex-col lg:flex-row font-montserrat items-center gap-10 lg:gap-0 lg:items-stretch justify-center sm:mx-10 h-auto my-20">
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: "preserve-3d",
              transform,
            }}
            className="lg:w-[35rem] w-auto ml-10 lg:ml-0 h-auto mr-5 flex hover:shadow-2xl hover:shadow-[#25CBFF] rounded-3xl bg-gradient-to-t from-[#0094FF] to-[#25CBFF] items-center justify-center scrollanimation animate-appear"
          >
            <div
              style={{
                transform: "translateZ(50px)",
                transformStyle: "preserve-3d",
              }}
              className="bg-cover bg-center bg-[url('https://i.ibb.co/V26NFdR/Background1.png')] rounded-3xl sm:pl-5 w-full h-full flex items-center justify-center"
            >
              <div className="w-auto h-auto">
                <div className="flex p-5 sm:p-10 flex-col gap-10">
                  <div>
                    <h1 className="text-[#FFFFFF] text-3xl sm:text-5xl font-extrabold">
                      Our Working Process - How We Work For Our Customers
                    </h1>
                  </div>
                  <div>
                    <p className=" font-normal text-xl sm:text-2xl text-[#FFFFFF]">
                      We currently support Facebook, Instagram, LinkedIn and
                      Twitter. More to come.
                    </p>
                  </div>
                  <div
                    style={{
                      transform: "translateZ(75px)",
                    }}
                  >
                    <button className=" relative rounded-full h-12 w-40 sm:h-[4.688rem] sm:w-[14.875rem] border-2 overflow-hidden before:rounded-full font-semibold hover:font-bold text-xl sm:text-2xl bg-white px-3 text-[#002548] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-600 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                      <span className="relative z-10">Get Started</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className=" w-auto lg:w-[56.5rem] h-auto ml-2 sm:ml-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-2">
              <div className="relative working-card-wrapper overflow-hidden">
                <div className="working-card-content flex flex-col p-3 items-start gap-6 justify-center scrollanimation animate-appear">
                  <h1 className=" font-black text-5xl text-[#002548]">01</h1>
                  <p className=" font-bold text-3xl sm:text-4xl text-[#002548]">
                    Create your free account
                  </p>
                  <p className=" font-normal text-lg sm:text-xl text-[#808080]">
                    Building ddfgan enterprisedoesn&apos;t need nightmare or
                    cost your thousands. Felix is purpose built.
                  </p>
                </div>
              </div>
              <div className="relative working-card-wrapper overflow-hidden">
              <div className="working-card-content p-3 flex flex-col items-start gap-6 justify-center scrollanimation animate-appear">
                <h1 className=" font-black text-5xl text-[#002548]">02</h1>
                <p className=" font-bold text-3xl sm:text-4xl text-[#002548]">
                  Connect your channels
                </p>
                <p className=" font-normal text-lg sm:text-xl text-[#808080]">
                  Building ddfgan enterprisedoesn&apos;t need nightmare or cost
                  your thousands. Felix is purpose built.
                </p>
              </div>
              </div>
              <div className="relative working-card-wrapper overflow-hidden">
              <div className="working-card-content p-3 flex flex-col items-start gap-6 justify-center scrollanimation animate-appear">
                <h1 className=" font-black text-5xl text-[#002548]">03</h1>
                <p className=" font-bold text-3xl sm:text-4xl text-[#002548]">
                  Schedule your posts
                </p>
                <p className=" font-normal text-lg sm:text-xl text-[#808080]">
                  Building ddfgan enterprisedoesn&apos;t need nightmare or cost
                  your thousands. Felix is purpose built.
                </p>
              </div>
              </div>
              <div className="relative working-card-wrapper overflow-hidden">
              <div className="working-card-content p-3 flex flex-col items-start gap-6 justify-center scrollanimation animate-appear">
                <h1 className=" font-black text-5xl text-[#002548]">04</h1>
                <p className=" font-bold text-3xl sm:text-4xl text-[#002548]">
                  Publish & get your planning on point
                </p>
                <p className=" font-normal text-lg sm:text-xl text-[#808080]">
                  Building ddfgan enterprisedoesn&apos;t need nightmare or cost
                  your thousands. Felix is purpose built.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Ourteam />
      <section id="blog">
        <div className=" font-montserrat my-16 mx-10">
          <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-start lg:items-center text-[#002548] justify-around scrollanimation animate-appear">
            <div className=" lg:w-[55rem] flex flex-col gap-5">
              <div>
                <h1 className=" font-extrabold text-4xl sm:text-6xl">
                  Latest News and Articles
                </h1>
              </div>
              <div>
                <p className=" font-normal text-xl sm:text-2xl text-[#808080]">
                  We currently support Facebook, Instagram, LinkedIn and
                  Twitter. More to come. Felix is purpose built for ease of use
                  and complete flexability.
                </p>
              </div>
            </div>
            <div>
              <button className=" relative rounded-full h-14 w-60 sm:h-[4.688rem] sm:w-[17.313rem] border-2 overflow-hidden before:rounded-full font-semibold hover:font-bold text-xl sm:text-2xl bg-white px-3 text-[#002548] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-sky-500 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                <span className="relative z-10">See More News</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mt-10">
            <div className="max-w-sm">
              <figure className="relative max-w-sm transition-all duration-300  filter grayscale-[30%] hover:grayscale-0 scrollanimation animate-appear">
                <Image
                  className="rounded-lg"
                  src={blog1}
                  alt="image description"
                />
                <figcaption className="absolute px-4 bottom-3">
                  <div className="flex flex-row gap-4">
                    <p className=" h-[1.5rem] w-[4rem] bg-white rounded-full border flex items-center justify-center border-[#DCDCDC] font-bold text-xs text-[#002548]">
                      Analyze
                    </p>
                    <p className=" h-[1.5rem] w-[4.8rem] bg-white rounded-full border flex items-center justify-center border-[#DCDCDC] font-bold text-xs text-[#002548]">
                      Marketing
                    </p>
                  </div>
                </figcaption>
              </figure>
              <div className="text-[#002548] flex flex-col gap-5 mt-5">
                <div className="flex flex-row justify-between scrollanimation animate-appear">
                  <p>March 25, 2024</p>
                  <p>3 min read</p>
                </div>
                <div className=" border-t-2 border-[#DCDCDC] flex flex-col gap-5 scrollanimation animate-appear">
                  <h1 className=" font-bold text-3xl mt-5">
                    Detailed insights for your social media
                  </h1>
                  <p className=" font-normal text-lg text-[#808080] pr-10">
                    Lorem Ipsum is simply dummy text the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy.
                  </p>
                  <a href="" className=" font-medium text-xl">
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-sm">
              <figure className="relative max-w-sm transition-all duration-300  filter grayscale-[30%] hover:grayscale-0 scrollanimation animate-appear">
                <Image
                  className="rounded-lg"
                  src={blog2}
                  alt="image description"
                />
                <figcaption className="absolute px-4 bottom-3">
                  <div className="flex flex-row gap-5">
                    <p className="h-[1.5rem] w-[4rem] bg-white rounded-full border flex items-center justify-center border-[#DCDCDC] font-bold text-xs text-[#002548]">
                      Analyze
                    </p>
                    {/* <p className=" h-[1.5rem] w-[4.8rem] bg-white rounded-full border flex items-center justify-center border-[#DCDCDC] font-bold text-xs text-[#002548]">
                      Marketing
                    </p> */}
                  </div>
                </figcaption>
              </figure>
              <div className="text-[#002548] flex flex-col gap-5 mt-5">
                <div className="flex flex-row justify-between scrollanimation animate-appear">
                  <p>March 25, 2024</p>
                  <p>3 min read</p>
                </div>
                <div className=" border-t-2 border-[#DCDCDC] flex flex-col gap-5 scrollanimation animate-appear">
                  <h1 className=" font-bold text-3xl mt-5">
                    New Device Invention for Digital Platform
                  </h1>
                  <p className=" font-normal text-lg text-[#808080] pr-10">
                    Lorem Ipsum is simply dummy text the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy.
                  </p>
                  <a href="" className=" font-medium text-xl">
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-sm">
              <figure className="relative max-w-sm transition-all duration-300  filter grayscale-[30%] hover:grayscale-0 scrollanimation animate-appear">
                <Image
                  className="rounded-lg"
                  src={blog3}
                  alt="image description"
                />
                <figcaption className="absolute px-4 bottom-3">
                  <div className="flex flex-row gap-5">
                    <p className="h-[1.5rem] w-[4rem] bg-white rounded-full border flex items-center justify-center border-[#DCDCDC] font-bold text-xs text-[#002548]">
                      Analyze
                    </p>
                    <p className="h-[1.5rem] w-[4.8rem] bg-white rounded-full border flex items-center justify-center border-[#DCDCDC] font-bold text-xs text-[#002548]">
                      Marketing
                    </p>
                  </div>
                </figcaption>
              </figure>
              <div className="text-[#002548] flex flex-col gap-5 mt-5">
                <div className="flex flex-row justify-between scrollanimation animate-appear">
                  <p>March 25, 2024</p>
                  <p>3 min read</p>
                </div>
                <div className=" border-t-2 border-[#DCDCDC] flex flex-col gap-5 scrollanimation animate-appear">
                  <h1 className=" font-bold text-3xl mt-5">
                    Business Strategy Make His Goal Acheive
                  </h1>
                  <p className=" font-normal text-lg text-[#808080] pr-10">
                    Lorem Ipsum is simply dummy text the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy.
                  </p>
                  <a href="" className=" font-medium text-xl">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
