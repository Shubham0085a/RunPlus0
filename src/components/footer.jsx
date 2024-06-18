import Link from "next/link";
import Footerlogo from "../assets/Footerlogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <section id="footer">
      <div className=" font-montserrat text-white flex flex-col bg-[#002548]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10  mx-10 2xl:gap-16 mt-2 mb-10">
          <div className="flex flex-col sm:flex-row gap-20 lg:gap-10  mx-10 2xl:gap-16 mt-16 lg:mt-28 mb-10">
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
                <Link href="">About Us</Link>
                <Link href="">Pricing</Link>
                <Link href="">Services</Link>
                <Link href="">Products</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-40 md:gap-10  mx-10 2xl:gap-16 lg:mt-28 mb-10">
            <div className=" flex flex-col gap-5 items-center justify-start max-w-sm">
              <h1 className=" font-medium text-2xl">Quick Links</h1>
              <div className="text-[#D7D7D7] flex flex-col gap-3">
                <Link href="">About Us</Link>
                <Link href="">Pricing</Link>
                <Link href="">Services</Link>
                <Link href="">Products</Link>
              </div>
            </div>
            <div className=" flex flex-col items-center max-w-xs justify-start gap-5 ">
              <div className="flex flex-col gap-5 max-w-xs">
                <h1 className=" font-medium text-2xl">Contact us</h1>
                <div className="text-[#D7D7D7] flex flex-col gap-3 pr-9">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                  <p>+908 89097 890</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 md:gap-10 lg:gap-0 xl:gap-5">
                <div className=" group relative">
                <div className=" absolute inset-1 duration-1000 opacity-75 group-hover:bg-white group-hover:animate-till rounded-2xl group-hover:blur-xl "></div>
                <div className=" relative">
                  <Link
                    href=""
                    className=" h-14 w-14 bg-white rounded-full flex items-center  hover:bg-gradient-to-tl hover:from-[#25CBFF] hover:to-[#0094FF] justify-center p-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M12.5714 4.58978H14.0503V2.01398C13.7952 1.97888 12.9177 1.8999 11.8957 1.8999C9.7634 1.8999 8.3027 3.24113 8.3027 5.70623V7.9749H5.94965V10.8545H8.3027V18.0999H11.1876V10.8551H13.4455L13.8039 7.97558H11.187V5.99175C11.1876 5.15948 11.4117 4.58978 12.5714 4.58978Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>
                </div>
                <div className=" group relative">
                <div className=" absolute inset-1 duration-1000 opacity-75 group-hover:bg-white group-hover:animate-till rounded-2xl group-hover:blur-xl "></div>
                <div className=" relative">
                  <Link
                    href=""
                    className=" h-14 w-14 bg-white rounded-full flex items-center hover:bg-gradient-to-tl hover:from-[#25CBFF] hover:to-[#0094FF] justify-center p-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M14.0244 1.2251H5.97565C3.35612 1.2251 1.22504 3.35618 1.22504 5.97571V14.0246C1.22504 16.644 3.35612 18.7751 5.97565 18.7751H14.0245C16.6439 18.7751 18.775 16.644 18.775 14.0246V5.97571C18.775 3.35618 16.6439 1.2251 14.0244 1.2251V1.2251ZM17.7462 14.0246C17.7462 16.0767 16.0766 17.7462 14.0244 17.7462H5.97565C3.92344 17.7462 2.25389 16.0767 2.25389 14.0246V5.97571C2.25389 3.9235 3.92344 2.25395 5.97565 2.25395H14.0245C16.0766 2.25395 17.7462 3.9235 17.7462 5.97571V14.0246Z"
                        fill="black"
                      />
                      <path
                        d="M10 5.20117C7.35399 5.20117 5.20135 7.35381 5.20135 9.99986C5.20135 12.6459 7.35399 14.7985 10 14.7985C12.6461 14.7985 14.7987 12.6459 14.7987 9.99986C14.7987 7.35381 12.6461 5.20117 10 5.20117ZM10 13.7697C7.92144 13.7697 6.23021 12.0786 6.23021 9.99986C6.23021 7.92126 7.92144 6.23003 10 6.23003C12.0788 6.23003 13.7699 7.92126 13.7699 9.99986C13.7699 12.0786 12.0788 13.7697 10 13.7697Z"
                        fill="black"
                      />
                      <path
                        d="M14.9135 3.49707C14.1315 3.49707 13.4955 4.13321 13.4955 4.91502C13.4955 5.69697 14.1315 6.33311 14.9135 6.33311C15.6954 6.33311 16.3316 5.69697 16.3316 4.91502C16.3316 4.13307 15.6954 3.49707 14.9135 3.49707ZM14.9135 5.30413C14.699 5.30413 14.5244 5.12953 14.5244 4.91502C14.5244 4.70039 14.699 4.52592 14.9135 4.52592C15.1281 4.52592 15.3027 4.70039 15.3027 4.91502C15.3027 5.12953 15.1281 5.30413 14.9135 5.30413Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>
                </div>
                <div className="group relative">
                <div className=" absolute inset-1 duration-1000 opacity-75 group-hover:bg-white group-hover:animate-till rounded-2xl group-hover:blur-xl "></div>
                <div className=" relative">
                  <Link
                    href=""
                    className=" h-14 w-14 bg-white rounded-full flex items-center hover:bg-gradient-to-tl hover:from-[#25CBFF] hover:to-[#0094FF] justify-center p-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="30"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M18.9739 4.55821C18.3213 4.84449 17.6259 5.03425 16.9009 5.12639C17.6467 4.68106 18.216 3.98125 18.4836 3.13775C17.7882 3.55237 17.0204 3.84524 16.2021 4.00867C15.5418 3.30558 14.6007 2.87012 13.574 2.87012C11.5821 2.87012 9.97848 4.48691 9.97848 6.46896C9.97848 6.75415 10.0026 7.02837 10.0618 7.28943C7.07066 7.14354 4.4239 5.70993 2.64587 3.52605C2.33545 4.06461 2.15337 4.68106 2.15337 5.34467C2.15337 6.59072 2.79504 7.69527 3.75152 8.33475C3.17347 8.32378 2.60638 8.15596 2.12595 7.89161C2.12595 7.90258 2.12595 7.91684 2.12595 7.9311C2.12595 9.67952 3.3731 11.1318 5.00854 11.4663C4.71567 11.5464 4.39648 11.5848 4.06523 11.5848C3.83488 11.5848 3.60234 11.5716 3.38407 11.5234C3.85024 12.9482 5.17307 13.9957 6.74599 14.0297C5.52188 14.9873 3.9676 15.5643 2.285 15.5643C1.98994 15.5643 1.70694 15.5511 1.42395 15.5149C3.01771 16.5427 4.90653 17.1295 6.94343 17.1295C13.5642 17.1295 17.1838 11.6451 17.1838 6.89126C17.1838 6.73221 17.1784 6.57865 17.1707 6.42619C17.8848 5.91943 18.4847 5.28653 18.9739 4.55821Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>
                </div>
                <div className=" group relative">
                <div className=" absolute inset-1 duration-1000 opacity-75 group-hover:bg-white group-hover:animate-till rounded-2xl group-hover:blur-xl "></div>
                <div className=" relative">
                  <Link
                    href=""
                    className=" h-14 w-14 bg-white rounded-full flex items-center hover:bg-gradient-to-tl hover:from-[#25CBFF] hover:to-[#0094FF] justify-center p-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.4214 17.4253V17.4247H17.4251V11.9785C17.4251 9.31411 16.8515 7.26172 13.7367 7.26172C12.2393 7.26172 11.2345 8.08342 10.8242 8.86243H10.7809V7.51046H7.82764V17.4247H10.9028V12.5155C10.9028 11.223 11.1478 9.97308 12.7486 9.97308C14.3258 9.97308 14.3493 11.4482 14.3493 12.5984V17.4253H17.4214Z"
                        fill="black"
                      />
                      <path
                        d="M2.82007 7.51074H5.89897V17.425H2.82007V7.51074Z"
                        fill="black"
                      />
                      <path
                        d="M4.35825 2.5752C3.37382 2.5752 2.57501 3.374 2.57501 4.35843C2.57501 5.34286 3.37382 6.15838 4.35825 6.15838C5.34268 6.15838 6.14149 5.34286 6.14149 4.35843C6.14087 3.374 5.34206 2.5752 4.35825 2.5752V2.5752Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center border-t-2 border-[#D2D2D2] justify-center h-20">
          <p className=" font-normal text-base text-center sm:text-lg">
            Copyright <sup>&reg;</sup> 2024 All rights Reserved. powered by{" "}
            <Link href="https://www.nityom.com/">Nityom</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
