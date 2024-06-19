// import Ourteam from "./Ourteam";
import PropTypes from "prop-types";
import InnovationImg from "../../assets/innovation.png";
import GrowthImg from "../../assets/Growth.png";
import TeamWorkImg from "../../assets/TeamWork.png";
import CommitmentImg from "../../assets/Commitment.png";
import PositivityImg from "../../assets/Positivity.png";
import OwnershipImg from "../../assets/ownership.png";
import AboutHeroImg from "../../assets/about_hero.png";
import AboutImg from "../../assets/about_img.png";
import Image from "next/image";
import Ourteam from "@/components/ourteam";

const Card = ({ image, heading, description }) => (
  <div className="bg-white hover:bg-[#EDEEF0] flex items-center justify-center m-1 font-montserrat hover:shadow-md hover:border px-10 py-10 h-[28rem] rounded-2xl scrollanimation animate-appear">
    <div className=" flex flex-col gap-10 items-center justify-center">
      <div>
        <Image src={image} alt="" />
      </div>
      <div>
        <h1 className=" font-bold text-3xl">{heading}</h1>
      </div>
      <div>
        <p className=" font-normal text-2xl text-center">{description}</p>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const About = () => {
  const cards = [
    {
      image: InnovationImg,
      heading: "Innovation",
      description:
        "Building an enterprise doesn't need nightmare or cost your thousands is purpose built.",
    },
    {
      image: GrowthImg,
      heading: "Growth",
      description:
        "Building an enterprise doesn't need nightmare or cost your thousands is purpose built.",
    },
    {
      image: OwnershipImg,
      heading: "Ownership",
      description:
        "Building an enterprise doesn't need nightmare or cost your thousands is purpose built.",
    },
    {
      image: TeamWorkImg,
      heading: "Team Work",
      description:
        "Building an enterprise doesn't need nightmare or cost your thousands is purpose built.",
    },
    {
      image: CommitmentImg,
      heading: "Commitment",
      description:
        "Building an enterprise doesn't need nightmare or cost your thousands is purpose built.",
    },
    {
      image: PositivityImg,
      heading: "Positivity",
      description:
        "Building an enterprise doesn't need nightmare or cost your thousands is purpose built.",
    },
  ];
  return (
    <main>
      <section id="hero_about">
        <div className=" mx-20 my-5">
          <div className="bg-cover bg-center bg-[url('https://i.ibb.co/C5hVCqf/background3.png')] flex items-center justify-center font-montserrat rounded-2xl text-[#FFFFFF] scrollanimation animate-appear">
            <div className="w-11/12 sm:w-3/4 flex flex-col my-20 gap-5 items-center justify-center">
              <h1 className=" font-semibold text-3xl sm:font-extrabold sm:text-5xl lg:text-7xl">
                About Us
              </h1>
              <p className=" text-center font-medium text-2xl sm:text-3xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about_hero">
        <div className="flex flex-col lg:flex-row mx-20 my-24 lg:items-center justify-center gap-12">
          <div className=" flex flex-col lg:w-2/4 gap-8">
            <div className=" rounded-3xl overflow-hidden scrollanimation animate-appear">
              <Image src={AboutHeroImg} alt="" />
            </div>
            <div className="flex flex-row flex-wrap lg:flex-nowrap gap-8">
              <div className="bg-gradient-to-r lg:w-1/3 from-sky-200 to-sky-500 h-56 lg:h-32 xl:h-56 flex flex-col items-center justify-center rounded-3xl scrollanimation animate-appear">
                <p className="font-extrabold lg:font-bold lg:text-5xl xl:text-7xl xl:font-extralight text-7xl text-white">
                  500K
                </p>
                <p className=" font-bold text-xl lg:text-lg xl:text-xl text-white">
                  Daily Active Users
                </p>
              </div>
              <div className=" rounded-3xl overflow-hidden scrollanimation animate-appear">
                <Image src={AboutImg} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-[40rem] gap-10">
            <div className="flex flex-col gap-10">
            <div className="scrollanimation animate-appear">
              <p className=" font-extrabold text-4xl sm:text-6xl">
                We&apos;re on a mission to bring ideas to life.
              </p>
            </div>
            <div className="scrollanimation animate-appear">
              <p className=" font-normal text-2xl">
                Building an enterprise level site doesn&apos;t need nightmare or
                cost your thousands. RunPlus is purpose built for ease of use
                and completxability to create even the most powerful of
                products.
              </p>
            </div>
            </div>
            <div className="flex flex-col border-t border-[#DCDCDC] py-10 gap-10">
              <div className="flex flex-row gap-4 scrollanimation animate-appear">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="110"
                    height="113"
                    viewBox="0 0 110 113"
                    fill="none"
                  >
                    <rect
                      y="6.10352e-05"
                      width="110"
                      height="113"
                      rx="20"
                      fill="#F6F6F6"
                    />
                    <path
                      d="M67.2345 71.329L72.1927 42.7699C72.3268 41.9977 71.5607 41.3784 70.8337 41.6713L39.4811 54.3035C38.6945 54.6204 38.6346 55.7109 39.3817 56.1121L48.2101 60.8525C48.4649 60.9893 48.648 61.2296 48.7121 61.5116L50.476 69.2607C50.6406 69.9837 51.507 70.2824 52.0822 69.8145L56.8726 65.9172C57.2385 65.6195 57.7627 65.618 58.1303 65.9135L65.6227 71.9373C66.2163 72.4146 67.1043 72.0795 67.2345 71.329Z"
                      stroke="#048FDE"
                      strokeWidth="2"
                    />
                    <path
                      d="M63.8208 48.0254L46.8178 59.0187C46.6298 59.1402 46.5455 59.3719 46.6115 59.5858L49.712 69.6472C49.7767 69.8569 49.9705 70 50.1899 70H50.5884C50.8557 70 51.0757 69.7899 51.0879 69.5229L51.4718 61.1513C51.4778 61.0211 51.5343 60.8984 51.6294 60.8093L64.4342 48.8101C64.8789 48.3933 64.3326 47.6944 63.8208 48.0254Z"
                      fill="#048FDE"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-5">
                  <p className=" font-medium text-3xl">
                    How technology started
                  </p>
                  <p className=" font-normal text-2xl">
                    Building an enterprisedoesn&apos;t need your thousands.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 scrollanimation animate-appear">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="110"
                    height="113"
                    viewBox="0 0 110 113"
                    fill="none"
                  >
                    <rect
                      y="6.10352e-05"
                      width="110"
                      height="113"
                      rx="20"
                      fill="#F6F6F6"
                    />
                    <path
                      d="M53.4029 39.443C53.9651 37.9801 56.0349 37.9801 56.5971 39.443C57.5011 41.7952 60.4364 42.5817 62.3954 40.9967C63.6137 40.0109 65.4062 41.0457 65.1617 42.5938C64.7685 45.0828 66.9173 47.2316 69.4063 46.8384C70.9543 46.5939 71.9892 48.3863 71.0034 49.6047C69.4184 51.5637 70.2049 54.4989 72.557 55.4029C74.0199 55.9652 74.0199 58.0349 72.557 58.5972C70.2049 59.5012 69.4184 62.4365 71.0034 64.3954C71.9892 65.6138 70.9543 67.4063 69.4063 67.1617C66.9173 66.7685 64.7685 68.9173 65.1617 71.4063C65.4062 72.9544 63.6137 73.9892 62.3954 73.0034C60.4364 71.4184 57.5011 72.2049 56.5971 74.5571C56.0349 76.02 53.9651 76.02 53.4029 74.5571C52.4989 72.2049 49.5636 71.4184 47.6046 73.0034C46.3863 73.9892 44.5938 72.9544 44.8383 71.4063C45.2315 68.9173 43.0827 66.7685 40.5937 67.1617C39.0457 67.4063 38.0108 65.6138 38.9966 64.3954C40.5816 62.4365 39.7951 59.5012 37.443 58.5972C35.9801 58.0349 35.9801 55.9652 37.443 55.4029C39.7951 54.4989 40.5816 51.5637 38.9966 49.6047C38.0108 48.3863 39.0457 46.5939 40.5937 46.8384C43.0827 47.2316 45.2315 45.0828 44.8383 42.5938C44.5938 41.0458 46.3863 40.0109 47.6046 40.9967C49.5636 42.5817 52.4989 41.7952 53.4029 39.443Z"
                      stroke="#048FDE"
                      strokeWidth="2"
                    />
                    <circle
                      cx="54.5"
                      cy="56.5001"
                      r="11.5"
                      stroke="#048FDE"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-5">
                  <p className=" font-medium text-3xl">Endless Possibilities</p>
                  <p className=" font-normal text-2xl">
                    Building an enterprisedoesn&apos;t need your thousands.
                  </p>
                </div>
              </div>
            </div>
            <div className="scrollanimation animate-appear">
              <button className=" relative rounded-full bg-[#002548] text-white h-[4.5rem] w-60 border-2 overflow-hidden before:rounded-full font-semibold text-xl px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-sky-200 before:to-sky-500 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                <span className="relative z-10">Join our Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="brand_world">
        <div className="font-montserrat flex items-center mt-36 mb-36 justify-center">
          <div className="w-2/3 flex flex-col gap-10">
            <div className="scrollanimation animate-appear">
              <p className=" font-extrabold text-4xl sm:text-5xl text-center">
                Businesses all over the world trust Buffer to build their brand
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-10 sm:gap-0 items-center justify-around">
              <div className="flex flex-col items-center justify-center gap-2 scrollanimation animate-appear">
                <p className=" font-extrabold text-5xl text-[#38D4FF]">
                  10 years
                </p>
                <p className=" font-normal text-xl">In Business</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 scrollanimation animate-appear">
                <p className=" font-extrabold text-5xl text-[#38D4FF]">
                  75,000+
                </p>
                <p className=" font-normal text-xl">Customers</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 scrollanimation animate-appear">
                <p className=" font-extrabold text-5xl text-[#38D4FF]">100k+</p>
                <p className=" font-normal text-xl">Monthly Blog Readers</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 scrollanimation animate-appear">
                <p className=" font-extrabold text-5xl text-[#38D4FF]">1.2m+</p>
                <p className=" font-normal text-xl">Social Followers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="our_value">
        <div className=" font-montserrat mx-10 my-24">
          <h1 className=" text-center font-extrabold text-5xl text-[#002548] scrollanimation animate-appear">
            Our Values
          </h1>
          <div className="container mx-auto mt-10">
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
      {/* <Ourteam /> */}
      <Ourteam />
      <section id="investors">
        <div className=" font-montserrat flex items-center my-20 justify-center">
          <div className=" w-3/4">
            <div className="flex flex-col mb-10 gap-10 scrollanimation animate-appear">
              <p className=" font-extrabold text-6xl text-center">
                Our Investors
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row flex-wrap lg:flex-nowrap gap-5">
                <div className=" bg-[#F6F6F6] scrollanimation animate-appear">
                  <div className="flex flex-col gap-4 py-12 px-10 lg:px-24">
                    <p className=" font-extrabold text-4xl text-[#5571FF]">
                      facebook
                    </p>
                    <p className=" font-normal text-2xl text-[#808080]">
                      One of a select group of Facebook Marketing Partners in
                      Advertising Technology and Management.Building the ddfgan
                      enterprisedoesn&apos;t need nightmare.
                    </p>
                  </div>
                </div>
                <div className=" bg-[#F6F6F6] scrollanimation animate-appear">
                  <div className="flex flex-col gap-4 py-12 px-10 lg:px-24">
                    <p className=" font-extrabold text-4xl text-[#2F2F2F]">
                      Ini<span className="text-[#5571FF]">_</span>tech
                    </p>
                    <p className=" font-normal text-2xl text-[#808080]">
                      One of a select group of Facebook Marketing Partners in
                      Advertising Technology and Management.Building the ddfgan
                      enterprisedoesn&apos;t need nightmare.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap  lg:flex-nowrap gap-5">
                <div className=" bg-[#F6F6F6] scrollanimation animate-appear">
                  <div className="flex flex-col gap-4 py-12 px-10 lg:px-24">
                    <p className=" font-extrabold text-5xl">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">o</span>
                      <span className="text-[#FBBC03]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#31C65B]">l</span>
                      <span className="text-[#EA4335]">e</span>
                    </p>
                    <p className=" font-normal text-2xl text-[#808080]">
                      One of a select group of Facebook Marketing Partners in
                      Advertising Technology and Management.Building the ddfgan
                      enterprisedoesn&apos;t need nightmare.
                    </p>
                  </div>
                </div>
                <div className=" bg-[#F6F6F6] scrollanimation animate-appear">
                  <div className="flex flex-col gap-4 py-12 px-10 lg:px-24">
                    <p className=" font-extrabold text-4xl text-[#FF6565]">
                      Umbre<span className="text-[#7C3EFF]">lla</span>
                    </p>
                    <p className=" font-normal text-2xl text-[#808080]">
                      One of a select group of Facebook Marketing Partners in
                      Advertising Technology and Management.Building the ddfgan
                      enterprisedoesn&apos;t need nightmare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
