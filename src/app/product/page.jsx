import Herologo from "../../assets/Herologo.png";
import PropTypes from "prop-types";
import EmailImg from "../../assets/email.png";
import BoltImg from "../../assets/bolt.png";
import SecureImg from "../../assets/secure.png";
import MultipleImg from "../../assets/multiple.png";
import SupportImg from "../../assets/support.png";
import IntegratedImg from "../../assets/integrated.png";
import Image from "next/image";
import Slider from "@/components/slider";

const Card = ({ image, heading, description }) => (
  <div className="group relative">
  <div className=" absolute inset-3 duration-1000 opacity-75 group-hover:bg-gradient-to-br group-hover:animate-till group-hover:from-[#008DDD] group-hover:to-purple-500 rounded-2xl group-hover:blur-xl "></div>
    <div className="hover:bg-white relative bg-[#EDEEF0] flex items-center justify-center m-3 font-montserrat hover:shadow-md border px-10 py-10 rounded-2xl">
      <div className=" w-[25rem] h-[21.50rem] flex flex-col gap-10 items-start justify-center">
        <div>
          <Image src={image} alt="" />
        </div>
        <div>
          <h1 className=" font-bold text-3xl">{heading}</h1>
        </div>
        <div>
          <p className=" font-normal text-2xl">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function Product() {
  const cards = [
    {
      image: EmailImg,
      heading: "Email Subscription",
      description:
        "We’re driven beyond just finishing projects. We want to find smart solutions.",
    },
    {
      image: BoltImg,
      heading: "Bolt Performance",
      description:
        "We’re driven beyond just finishing projects. We want to find smart solutions.",
    },
    {
      image: SecureImg,
      heading: "Secure Transaction",
      description:
        "We’re driven beyond just finishing projects. We want to find smart solutions.",
    },
    {
      image: MultipleImg,
      heading: "Multiple Options",
      description:
        "We’re driven beyond just finishing projects. We want to find smart solutions.",
    },
    {
      image: SupportImg,
      heading: "Customer Support",
      description:
        "We’re driven beyond just finishing projects. We want to find smart solutions.",
    },
    {
      image: IntegratedImg,
      heading: "Integrated with Shopify",
      description:
        "We’re driven beyond just finishing projects. We want to find smart solutions.",
    },
  ];

  return (
    <main>
      <section id="hero_about">
        <div className=" mx-20 my-5">
          <div className="bg-cover bg-center bg-[url('https://i.ibb.co/C5hVCqf/background3.png')] flex items-center justify-center font-montserrat rounded-2xl text-[#FFFFFF]">
            <div className=" w-11/12 sm:w-3/4 flex flex-col my-20 gap-5 items-center justify-center">
              <h1 className=" font-semibold text-3xl sm:font-extrabold sm:text-5xl lg:text-7xl">
                Our Products
              </h1>
              <p className=" text-center font-medium text-2xl sm:text-3xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="hero">
        <div className="flex flex-col lg:flex-row gap-10 my-20 mx-20 font-montserrat items-center justify-center">
          <div>
            <Image src={Herologo} alt="" />
          </div>
          <div className=" md:w-[40rem] lg:w-[50rem] flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className=" font-bold text-4xl sm:font-extrabold sm:text-6xl">
                Empowerment through Technology with Kalpkarai
              </h1>
              <p className=" font-normal text-2xl pr-20 text-[#808080]">
                Building an enterprise level site doesn&apos;t need nightmare or
                cost your thousands. RunPlus is purpose built for ease of use
                and completxability to create even the most powerful of
                products.
              </p>
            </div>
            <div className="w-[20rem] sm:w-[30rem] flex flex-col gap-10">
              <div className="flex flex-row gap-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="110"
                    height="113"
                    viewBox="0 0 110 113"
                    fill="none"
                  >
                    <rect width="110" height="113" rx="20" fill="#F6F6F6" />
                    <path
                      d="M70.4472 55.3003H72.166C74.4253 55.3003 76.2493 57.1035 76.2493 59.3205V70.7677C76.2493 74.0784 73.5246 76.761 70.1619 76.761C66.7993 76.761 64.0746 74.0784 64.0746 70.7677V70.5016V42.9589C64.0746 39.796 61.47 37.239 58.265 37.239H39.5601C36.3551 37.239 33.7505 39.8034 33.7505 42.9589V71.0337C33.7505 74.1967 36.3551 76.7536 39.5601 76.7536H70.6649"
                      stroke="#048FDE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M42.4199 46.5357H55.8181"
                      stroke="#048FDE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M42.4199 56.0318H55.8181"
                      stroke="#048FDE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M42.4199 64.8409H48.9276"
                      stroke="#048FDE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className=" font-medium text-3xl">Smart Schedule</h1>
                  <p className=" font-normal text-xl text-[#808080]">
                    Building an enterprisedoesn&apos;t need your thousands.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="110"
                    height="113"
                    viewBox="0 0 110 113"
                    fill="none"
                  >
                    <rect width="110" height="113" rx="20" fill="#F6F6F6" />
                    <path
                      d="M48.2546 49.4661H67.326"
                      stroke="#048FDE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M48.2546 55.2339H56.5582"
                      stroke="#048FDE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M31.8313 41.4865H38.1216"
                      stroke="#048FDE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M33.6189 46.61H37.2193"
                      stroke="#048FDE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M35.6406 51.7334H37.2195"
                      stroke="#048FDE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M65.2542 66.7696H77.7178"
                      stroke="#048FDE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M71.4861 72.7045V60.8347"
                      stroke="#048FDE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M63.0071 72.2828H45.4394C42.5741 72.2828 40.2434 69.6893 40.2434 66.4832V47.0953C40.2434 43.8891 42.5657 41.2956 45.4394 41.2956H72.973C75.8383 41.2956 78.1689 43.8891 78.1689 47.0953V58.44"
                      stroke="#048FDE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className=" font-medium text-3xl">Hashtag Finder</h1>
                  <p className=" font-normal text-xl text-[#808080]">
                    Building an enterprisedoesn&apos;t need your thousands.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button className=" relative rounded-full h-[4.4rem] w-[17rem] border-2 overflow-hidden before:rounded-full font-semibold hover:font-bold text-2xl bg-gradient-to-r from-[#008DDD] to-[#76CDFF] px-3 text-[#002548] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#002548] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                <span className="relative z-10">100% Safe to Use</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="kalpkari_works">
        <div className=" my-24 mx-10 flex flex-col font-montserrat gap-10 items-center justify-center">
          <h1 className=" font-extrabold text-5xl text-center">
            How Kalpkari Works?
          </h1>
          <div className="flex flex-row flex-wrap items-center my-10 justify-center gap-10">
            <div className=" max-w-96  flex flex-col items-center justify-center gap-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M57.6491 39.7407L50.5295 50.529C49.597 53.3271 48.0113 55.9696 45.7726 58.2083L34.2469 69.7046C26.7231 77.2285 14.1936 77.6326 6.26566 69.7046C-1.44467 61.9943 -1.44467 49.463 6.26566 41.7527L17.7913 30.227C19.9988 28.0195 22.6103 26.4028 25.4706 25.4701L29.3259 25.2214L37.9999 25.5635L38.0933 25.4701C40.9537 26.4028 43.5651 28.0195 45.7726 30.227C48.011 32.4654 49.5968 35.1083 50.5295 37.9063L57.6491 39.7407ZM14.0382 61.932C17.4272 65.321 22.9922 65.4142 26.4744 61.932L38 50.4356L31.7197 44.2798L25.4705 38.0928L14.0382 49.4958C10.6183 52.9157 10.6183 58.5121 14.0382 61.932Z"
                    fill="#013C5E"
                  />
                  <path
                    d="M45.7728 58.2081L34.2471 69.7044C26.7232 77.2283 14.1938 77.6324 6.26587 69.7044L14.0383 61.9318C17.4273 65.3208 22.9923 65.414 26.4745 61.9318L38.0001 50.4356L31.72 44.2796L45.7728 30.2268C48.0112 32.4652 49.597 35.108 50.5297 37.9061L57.6493 39.7405L50.5297 50.5288C49.597 53.327 48.0113 55.9695 45.7728 58.2081Z"
                    fill="#384949"
                  />
                  <path
                    d="M61.3177 64.4262L58.2086 61.3172C57.3494 60.4579 57.3494 59.0673 58.2086 58.2081C59.0679 57.349 60.4585 57.3489 61.3177 58.2081L64.4268 61.3172C65.286 62.1764 65.286 63.567 64.4268 64.4262C63.5674 65.2855 62.1769 65.2855 61.3177 64.4262Z"
                    fill="#D2C5C2"
                  />
                  <path
                    d="M14.6824 17.7908L11.5731 14.6818C10.7139 13.8225 10.7139 12.4319 11.5731 11.5728C12.4324 10.7138 13.823 10.7136 14.6821 11.5728L17.791 14.6818C18.6502 15.541 18.6502 16.9316 17.791 17.7907C16.9318 18.6498 15.5414 18.6499 14.6824 17.7908Z"
                    fill="#DFD7D5"
                  />
                  <path
                    d="M65.6051 45.3955C65.9193 44.2219 67.1247 43.5267 68.2981 43.8409L72.5458 44.9794C73.7193 45.2876 74.4115 46.499 74.1004 47.6724C73.7862 48.846 72.5808 49.5413 71.4073 49.2271L67.1597 48.0885C65.9939 47.7765 65.2906 46.5759 65.6051 45.3955Z"
                    fill="#D2C5C2"
                  />
                  <path
                    d="M1.90032 28.3261C2.21452 27.1526 3.41991 26.4573 4.59334 26.7715L8.84097 27.9102C10.01 28.2168 10.7082 29.4284 10.3956 30.6033C10.0814 31.7768 8.876 32.4721 7.70256 32.1579L3.45493 31.0192C2.28912 30.7072 1.58567 29.5066 1.90032 28.3261Z"
                    fill="#DFD7D5"
                  />
                  <path
                    d="M44.9801 72.5448L43.8414 68.2971C43.5272 67.1236 44.2224 65.9183 45.396 65.6041C46.5695 65.2899 47.7733 65.9806 48.089 67.1587L49.2275 71.4064C49.5417 72.5799 48.8465 73.7852 47.6729 74.0994C46.4928 74.4139 45.2921 73.7106 44.9801 72.5448Z"
                    fill="#D2C5C2"
                  />
                  <path
                    d="M27.911 8.84009L26.7723 4.59246C26.4581 3.41888 27.1533 2.21365 28.3269 1.89944C29.5005 1.58832 30.7072 2.27593 31.0199 3.45406L32.1586 7.70169C32.4728 8.87527 31.7776 10.0805 30.604 10.3947C29.4237 10.7089 28.2231 10.0056 27.911 8.84009Z"
                    fill="#DFD7D5"
                  />
                  <path
                    d="M69.7343 6.29446C62.024 -1.41587 49.4945 -1.44709 41.7531 6.29446L30.2274 17.7908C27.989 20.0292 26.4033 22.6718 25.4705 25.4701C24.1025 29.5741 24.1026 33.9888 25.4707 38.0928C26.4033 40.8907 27.989 43.5338 30.2274 45.7722C32.4039 47.9486 35.0154 49.5651 37.9069 50.529L38.0001 50.4357C41.4201 47.0157 41.42 41.4195 38.0001 37.9996C34.5802 34.5797 34.5802 28.9833 38.0001 25.5634L49.5257 14.0671C51.2047 12.3881 53.381 11.5177 55.744 11.5177C55.806 11.4557 56.3345 11.4866 56.459 11.5488C58.1379 11.5486 60.3451 12.4502 61.9619 14.0671C65.3818 17.487 65.3819 23.0832 61.9619 26.5032L50.5297 37.9061C51.8978 42.0101 51.8978 46.4249 50.5297 50.529C53.3587 49.5652 56.0327 47.9485 58.209 45.7721L69.7346 34.2757C77.445 26.5652 77.4447 14.0048 69.7343 6.29446Z"
                    fill="#0086CA"
                  />
                  <path
                    d="M38.0004 50.4354L37.9072 50.5286C35.0159 49.5649 32.4041 47.9483 30.2278 45.7719L38.0004 37.9993C41.4203 41.4193 41.4205 47.0155 38.0004 50.4354Z"
                    fill="#0086CA"
                  />
                  <path
                    d="M69.7342 34.2758L58.2086 45.7721C56.0323 47.9486 53.3585 49.5653 50.5293 50.529C51.8973 46.425 51.8973 42.0102 50.5293 37.9062L61.9614 26.5033C65.3815 23.0833 65.3814 17.4871 61.9614 14.0672L69.7341 6.29456C77.4445 14.0047 77.4448 26.5652 69.7342 34.2758Z"
                    fill="#0086CA"
                  />
                </svg>
              </div>
              <h1 className="font-bold text-4xl">Connect</h1>
              <p className=" font-normal text-2xl text-[#828282] text-center">
                StaffMerge’s mission is to CONNECT Employers with Job Seekers in
                an effective and efficient platform, making it easier for both.
              </p>
            </div>
            <div className=" max-w-96 flex flex-col items-center justify-center gap-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                >
                  <path
                    d="M57.7754 2.69727V18.2246L18.2246 57.7754H2.69727C1.46665 57.7754 0.5 56.8087 0.5 55.5781V2.69727C0.5 1.46665 1.46665 0.5 2.69727 0.5H55.5781C56.8087 0.5 57.7754 1.46665 57.7754 2.69727Z"
                    fill="#013C5E"
                  />
                  <path
                    d="M75.5 20.4219V73.3027C75.5 74.5333 74.5333 75.5 73.3027 75.5H20.4219C19.1913 75.5 18.2246 74.5333 18.2246 73.3027V57.7754L57.7754 18.2246H73.3027C74.5333 18.2246 75.5 19.1913 75.5 20.4219Z"
                    fill="#0086CA"
                  />
                  <path
                    d="M57.7754 18.2246V55.5781C57.7754 56.8087 56.8087 57.7754 55.5781 57.7754H18.2246V20.4219C18.2246 19.1913 19.1913 18.2246 20.4219 18.2246H57.7754Z"
                    fill="#CAE8F9"
                  />
                  <path
                    d="M75.5 20.4219V73.3027C75.5 74.5333 74.5333 75.5 73.3027 75.5H38V38L57.7754 18.2246H73.3027C74.5333 18.2246 75.5 19.1913 75.5 20.4219Z"
                    fill="#0086CA"
                  />
                  <path
                    d="M57.7754 2.69727V18.2246L38 38V0.5H55.5781C56.8087 0.5 57.7754 1.46665 57.7754 2.69727Z"
                    fill="#013C5E"
                  />
                  <path
                    d="M57.7754 18.2246V55.5781C57.7754 56.8087 56.8087 57.7754 55.5781 57.7754H38V18.2246H57.7754Z"
                    fill="#B7E0F6"
                  />
                  <path
                    d="M20.4219 27.0137C19.2074 27.0137 18.2246 26.0309 18.2246 24.8164V20.4219C18.2246 19.2074 19.2074 18.2246 20.4219 18.2246H24.8164C26.0309 18.2246 27.0137 19.2074 27.0137 20.4219C27.0137 21.6364 26.0309 22.6191 24.8164 22.6191H22.6191V24.8164C22.6191 26.0309 21.6364 27.0137 20.4219 27.0137Z"
                    fill="white"
                  />
                  <path
                    d="M51.1836 18.2246C49.9691 18.2246 48.9863 19.2074 48.9863 20.4219C48.9863 21.6364 49.9691 22.6191 51.1836 22.6191H53.3809V24.8164C53.3809 26.0309 54.3636 27.0137 55.5781 27.0137C56.7926 27.0137 57.7754 26.0309 57.7754 24.8164V18.2246H51.1836Z"
                    fill="white"
                  />
                  <path
                    d="M55.5781 44.5918C54.3636 44.5918 53.3809 43.609 53.3809 42.3945V33.6055C53.3809 32.391 54.3636 31.4082 55.5781 31.4082C56.7926 31.4082 57.7754 32.391 57.7754 33.6055V42.3945C57.7754 43.609 56.7926 44.5918 55.5781 44.5918Z"
                    fill="white"
                  />
                  <path
                    d="M55.5781 57.7754H51.1836C49.9691 57.7754 48.9863 56.7926 48.9863 55.5781C48.9863 54.3636 49.9691 53.3809 51.1836 53.3809H53.3809V51.1836C53.3809 49.9691 54.3636 48.9863 55.5781 48.9863C56.7926 48.9863 57.7754 49.9691 57.7754 51.1836V55.5781C57.7754 56.7926 56.7926 57.7754 55.5781 57.7754Z"
                    fill="white"
                  />
                  <path
                    d="M24.8164 53.3809H22.6191V51.1836C22.6191 49.9691 21.6364 48.9863 20.4219 48.9863C19.2074 48.9863 18.2246 49.9691 18.2246 51.1836V57.7754H24.8164C26.0309 57.7754 27.0137 56.7926 27.0137 55.5781C27.0137 54.3636 26.0309 53.3809 24.8164 53.3809Z"
                    fill="white"
                  />
                  <path
                    d="M44.5918 55.5781C44.5918 56.8087 43.6251 57.7754 42.3945 57.7754H33.6055C32.3749 57.7754 31.4082 56.8087 31.4082 55.5781C31.4082 54.3475 32.3749 53.3809 33.6055 53.3809H42.3945C43.6251 53.3809 44.5918 54.3475 44.5918 55.5781Z"
                    fill="white"
                  />
                  <path
                    d="M44.5918 20.4219C44.5918 21.6525 43.6251 22.6191 42.3945 22.6191H33.6055C32.3749 22.6191 31.4082 21.6525 31.4082 20.4219C31.4082 19.1913 32.3749 18.2246 33.6055 18.2246H42.3945C43.6251 18.2246 44.5918 19.1913 44.5918 20.4219Z"
                    fill="white"
                  />
                  <path
                    d="M42.3945 22.6191C43.6251 22.6191 44.5918 21.6525 44.5918 20.4219C44.5918 19.1913 43.6251 18.2246 42.3945 18.2246H38V22.6191H42.3945Z"
                    fill="white"
                  />
                  <path
                    d="M20.4219 44.5918C19.2074 44.5918 18.2246 43.609 18.2246 42.3945V33.6055C18.2246 32.391 19.2074 31.4082 20.4219 31.4082C21.6364 31.4082 22.6191 32.391 22.6191 33.6055V42.3945C22.6191 43.609 21.6364 44.5918 20.4219 44.5918Z"
                    fill="white"
                  />
                  <path
                    d="M44.5918 55.5781C44.5918 56.8087 43.6251 57.7754 42.3945 57.7754H38V53.3809H42.3945C43.6251 53.3809 44.5918 54.3475 44.5918 55.5781Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h1 className="font-bold text-4xl">Merge</h1>
              <p className=" font-normal text-2xl text-[#828282] text-center">
                Using Resumes, Video Introductions, Video Interviews, and Direct
                Messages, StaffMerge’s platform goal is to MERGE Employers and
                Job Seekers.
              </p>
            </div>
            <div className=" max-w-96 flex flex-col items-center justify-center gap-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="86"
                  height="76"
                  viewBox="0 0 86 76"
                  fill="none"
                >
                  <path
                    d="M60.5 8V13C60.5 14.3998 59.4002 15.5 58 15.5H55.5V8C55.5 6.59983 54.4002 5.5 53 5.5H33C31.5998 5.5 30.5 6.59983 30.5 8V15.5H28C26.5998 15.5 25.5 14.3998 25.5 13V8C25.5 3.84983 28.8498 0.5 33 0.5H53C57.1502 0.5 60.5 3.84983 60.5 8Z"
                    fill="#50C4FF"
                  />
                  <path
                    d="M52.9998 5.5H42.9998V0.5H52.9998C57.1499 0.5 60.4998 3.84983 60.4998 8V13C60.4998 14.3998 59.3999 15.5 57.9998 15.5H55.4998V8C55.4998 6.59983 54.3999 5.5 52.9998 5.5Z"
                    fill="#50C4FF"
                  />
                  <path
                    d="M85.6666 12.9998V67.9998C85.6666 72.1497 82.3168 75.4998 78.1666 75.4998H7.83325C3.68309 75.4998 0.333252 72.1497 0.333252 67.9998V12.9998C0.333252 12.2998 0.633252 11.6998 1.08342 11.2497L13.8333 39.9498H72.1666L84.9166 11.2495C85.3666 11.6998 85.6666 12.2998 85.6666 12.9998Z"
                    fill="#013C5E"
                  />
                  <path
                    d="M85.6664 12.9998V67.9998C85.6664 72.1497 82.3166 75.4998 78.1664 75.4998H42.9998V39.9498H72.1664L84.9164 11.2495C85.3664 11.6998 85.6664 12.2998 85.6664 12.9998Z"
                    fill="#045889"
                  />
                  <path
                    d="M84.9165 11.2498L77.1667 39.95C76.2667 43.2498 73.3168 45.5 69.9167 45.5H16.0835C12.6832 45.5 9.73333 43.25 8.83333 39.95L1.0835 11.2498C1.53333 10.8 2.13333 10.5 2.83333 10.5H83.1667C83.8667 10.5 84.4667 10.8 84.9165 11.2498Z"
                    fill="#045889"
                  />
                  <path
                    d="M84.9163 11.2498L77.1664 39.95C76.2664 43.2498 73.3166 45.5 69.9164 45.5H42.9998V10.5H83.1664C83.8664 10.5 84.4664 10.8 84.9163 11.2498Z"
                    fill="#045889"
                  />
                  <path
                    d="M53 38H33C31.5998 38 30.5 39.0998 30.5 40.5V50.5C30.5 51.8998 31.5998 53 33 53H53C54.4002 53 55.5 51.8998 55.5 50.5V40.5C55.5 39.0998 54.4002 38 53 38Z"
                    fill="#0086CA"
                  />
                  <path
                    d="M55.4998 40.5V50.5C55.4998 51.8998 54.3999 53 52.9998 53H42.9998V38H52.9998C54.3999 38 55.4998 39.0998 55.4998 40.5Z"
                    fill="#50C4FF"
                  />
                </svg>
              </div>
              <h1 className="font-bold text-4xl">Work</h1>
              <p className=" font-normal text-2xl text-[#828282] text-center">
                After Employers and Job Seekers have connected and merged, now
                it is time to WORK, mutually benefiting both.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="products_features">
        <div className=" font-montserrat mx-10 my-16">
          <h1 className=" text-center font-extrabold text-5xl text-[#002548]">
            Go beyond ultimate features
          </h1>
          <div className="container mx-auto mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  heading={card.heading}
                  description={card.description}
                  image={card.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Slider />
      <section id="Our_Pricing">
        <div className="font-montserrat my-20 flex items-center justify-center">
          <div className=" w-3/4 flex flex-col gap-20">
            <div>
              <p className=" font-extrabold text-6xl text-center">
                Our Pricing
              </p>
            </div>
            <div className=" flex flex-row flex-wrap lg:flex-nowrap items-center justify-center mt-10 gap-10">
              <div className=" w-[28.125rem] group hover:-translate-y-10 duration-500 hover:shadow-2xl hover:shadow-[#008DDD] hover:bg-sky-200/5 border border-[#DCDCDC] rounded-3xl">
                <div className=" flex flex-row items-center p-10 justify-between">
                  <div>
                    <p className=" font-bold text-xl">STANDARD</p>
                  </div>
                  <div>
                    <button className=" relative rounded-full bg-black text-white w-36 h-14 border-2 overflow-hidden before:rounded-full font-semibold text-xl px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-[#76CDFF] before:to-[#008DDD] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                      <span className="relative z-10">Save 20%</span>
                    </button>
                  </div>
                </div>
                <div className=" flex flex-row items-center justify-between p-10 border-b border-t border-[#DCDCDC]">
                  <p className=" font-extrabold text-3xl">$7.99/m</p>
                  <p className=" font-normal text-xl text-[#808080]">
                    $190 billed annually
                  </p>
                </div>
                <div className="flex flex-col gap-10 p-7">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">3 Social Set</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">
                        150 posts per social
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">Phone Support</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">
                        Planning & publishing
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#808080"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl text-[#808080]">
                        Advanced Analytics
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#808080"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl text-[#808080]">
                        1,000 Posts/mo across
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#808080"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl text-[#808080]">
                        Instagram, Pinterest & Facebook
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#808080"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl text-[#808080]">
                        Unlimited Post Designs
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className=" relative rounded-full w-full h-[5.625rem] border-2 overflow-hidden before:rounded-full font-medium text-2xl px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-[#76CDFF] before:to-[#008DDD] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                      <span className="relative z-10">Get Started</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-[28.125rem] border group hover:-translate-y-10 hover:shadow-2xl hover:shadow-[#008DDD] hover:bg-sky-200/5 duration-500 border-[#DCDCDC] rounded-3xl">
                <div className=" flex flex-row items-center p-10 justify-between">
                  <div>
                    <p className=" font-bold text-xl">PREMIUM</p>
                  </div>
                  <div>
                    <button className=" relative rounded-full bg-black text-white w-36 h-14 border-2 overflow-hidden before:rounded-full font-semibold text-xl px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-[#76CDFF] before:to-[#008DDD] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                      <span className="relative z-10">Popular</span>
                    </button>
                  </div>
                </div>
                <div className=" flex flex-row items-center justify-between p-10 border-b border-t border-[#DCDCDC]">
                  <p className=" font-extrabold text-3xl">$14.99/m</p>
                  <p className=" font-normal text-xl text-[#808080]">
                    $190 billed annually
                  </p>
                </div>
                <div className="flex flex-col gap-10 p-7">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">3 Social Set</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">
                        150 posts per social
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">Phone Support</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">
                        Planning & publishing
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">Advanced Analytics</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">
                        1,000 Posts/mo across
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#808080"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl text-[#808080]">
                        Instagram, Pinterest & Facebook
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#808080"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl text-[#808080]">
                        Unlimited Post Designs
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className=" relative rounded-full w-full h-[5.625rem] border-2 overflow-hidden before:rounded-full font-medium text-2xl px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-[#76CDFF] before:to-[#008DDD] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                      <span className="relative z-10">Get Started</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-[28.125rem] border group hover:-translate-y-10 hover:shadow-2xl hover:shadow-[#008DDD] hover:bg-sky-200/5 duration-500 border-[#DCDCDC] rounded-3xl">
                <div className=" flex flex-row items-center p-10 justify-between">
                  <div>
                    <p className=" font-bold text-xl">Standard</p>
                  </div>
                  <div>
                    <button className=" relative rounded-full bg-black text-white w-36 h-14 border-2 overflow-hidden before:rounded-full font-semibold text-xl px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-[#76CDFF] before:to-[#008DDD] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                      <span className="relative z-10">Save 20%</span>
                    </button>
                  </div>
                </div>
                <div className=" flex flex-row items-center justify-between p-10 border-b border-t border-[#DCDCDC]">
                  <p className=" font-extrabold text-3xl">$7.99/m</p>
                  <p className=" font-normal text-xl text-[#808080]">
                    $190 billed annually
                  </p>
                </div>
                <div className="flex flex-col gap-10 p-7">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">3 Social Set</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">
                        150 posts per social
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">Phone Support</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">
                        Planning & publishing
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">Advanced Analytics</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">
                        1,000 Posts/mo across
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">
                        Instagram, Pinterest & Facebook
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M15.55 1.1001L5.54 13.2001L1.25 8.3601"
                          stroke="#31C65B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className=" font-normal text-xl">
                        Unlimited Post Designs
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className=" relative rounded-full w-full h-[5.625rem] border-2 overflow-hidden before:rounded-full font-medium text-2xl px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-[#76CDFF] before:to-[#008DDD] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                      <span className="relative z-10">Get Started</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;
