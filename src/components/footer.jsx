import Footerlogo from "../assets/Footerlogo.png";
import Linkedin from "../assets/Linkedin.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import Image from "next/image";

const Footer = () => {
  return (
    <section id="footer">
      <div className=" font-montserrat text-white flex flex-col bg-[#002548]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10  mx-10 2xl:gap-16 mt-28 mb-10">
        <div className="flex flex-col sm:flex-row gap-36 lg:gap-10  mx-10 2xl:gap-16 lg:mt-28 mb-10">
          <div className=" max-w-sm">
            <Image src={Footerlogo} alt="" />
            <p className=" font-normal text-xl mt-5 text-[#D7D7D7]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <div className=" flex flex-col gap-5 items-center justify-center max-w-sm">
            <h1 className=" font-medium text-2xl">Quick Links</h1>
            <div className="text-[#D7D7D7] flex flex-col gap-3">
              <p>About Us</p>
              <p>Pricing</p>
              <p>Services</p>
              <p>Products</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-40 md:gap-10  mx-10 2xl:gap-16 lg:mt-28 mb-10">
          <div className="flex flex-col gap-5 max-w-xs">
            <h1 className=" font-medium text-2xl">Contact us</h1>
            <div className="text-[#D7D7D7] flex flex-col gap-3 pr-9">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <p>+908 89097 890</p>
            </div>
          </div>
          <div className=" flex flex-col items-center max-w-xs justify-center xl:justify-end h-44">
            <div className="flex flex-row sm:flex-col md:flex-row gap-2 md:gap-10 lg:gap-0 lg:flex-col xl:flex-row xl:gap-5">
              <Image src={Facebook} alt="" />
              <Image src={Instagram} alt="" />
              <Image src={Twitter} alt="" />
              <Image src={Linkedin} alt="" />
            </div>
          </div>
        </div>
        </div>
        <div className="flex items-center border-t-2 border-[#D2D2D2] justify-center h-20">
          <p className=" font-normal text-base sm:text-lg">
            Copyright <sup>&reg;</sup> 2024 All rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
