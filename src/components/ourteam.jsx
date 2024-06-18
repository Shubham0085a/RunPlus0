
import Manjunath from "../assets/Manjunath.png";
import Raghunath from "../assets/Raghunath.png";
import Prashanthi from "../assets/Prashanthi.png";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";

const Ourteam = () => {

  return (
    <section id="our_team">
      <div className="bg-cover bg-center bg-[url('https://i.ibb.co/gzJKtCJ/Background2.png')] pt-16 px-10 font-montserrat text-[#FFFFFF]">
        <div className="flex flex-col gap-10 mx-10 md:mx-0 md:gap-0 md:flex-row items-center justify-around">
          <div className=" w-auto lg:w-[43rem] flex flex-col gap-5">
            <div>
              <h1 className=" font-extrabold text-6xl">Our Team</h1>
            </div>
            <div>
              <p className=" font-normal text-2xl">
                Building an enterprise level site doesn&apos;t need nightmare or
                cost your thousands. Runplus is purpose built for that
              </p>
            </div>
          </div>
          <div>
            <button className=" relative rounded-full h-[4.688rem] w-[17.313rem] border-2 overflow-hidden before:rounded-full font-semibold hover:font-bold text-2xl bg-white px-3 text-[#002548] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-700 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
              <span className="relative z-10">Join Our Team</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 py-12">
          <div className="">
            <div data-tilt className=" w-[27rem] h-[31rem]">
              <Image src={Manjunath} alt="" />
            </div>
            <div className=" flex flex-col gap-5 mt-5">
              <p className=" font-bold text-3xl text-center">Manjunath</p>
              <p className=" font-medium text-base text-center">CEO</p>
              <div className=" flex flex-row items-center justify-center gap-5">
                <svg
                  width="12"
                  height="21"
                  viewBox="0 0 12 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7661 11.3501L11.3129 7.75635H7.83638V5.4126C7.83638 4.39697 8.30513 3.45947 9.86763 3.45947H11.4692V0.373535C11.4692 0.373535 10.0239 0.100098 8.65669 0.100098C5.80513 0.100098 3.93013 1.85791 3.93013 4.98291V7.75635H0.727007V11.3501H3.93013V20.1001H7.83638V11.3501H10.7661Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="21"
                  height="17"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.774 4.0376C19.5553 3.45166 20.2584 2.74854 20.8053 1.92822C20.1022 2.24072 19.2819 2.4751 18.4615 2.55322C19.3209 2.04541 19.9459 1.26416 20.2584 0.287598C19.4772 0.756348 18.5787 1.10791 17.6803 1.30322C16.899 0.48291 15.8444 0.0141602 14.6725 0.0141602C12.4069 0.0141602 10.5709 1.8501 10.5709 4.11572C10.5709 4.42822 10.61 4.74072 10.6881 5.05322C7.28967 4.85791 4.24279 3.21729 2.21154 0.756348C1.85998 1.34229 1.66467 2.04541 1.66467 2.82666C1.66467 4.23291 2.36779 5.48291 3.50061 6.2251C2.83654 6.18604 2.17248 6.02979 1.62561 5.71729V5.75635C1.62561 7.74854 3.03186 9.38916 4.90686 9.77979C4.59436 9.85791 4.20373 9.93604 3.85217 9.93604C3.57873 9.93604 3.34436 9.89697 3.07092 9.85791C3.57873 11.4985 5.10217 12.6704 6.89904 12.7095C5.49279 13.8032 3.73498 14.4673 1.82092 14.4673C1.46936 14.4673 1.15686 14.4282 0.844357 14.3892C2.64123 15.561 4.78967 16.2251 7.13342 16.2251C14.6725 16.2251 18.774 10.0142 18.774 4.58447C18.774 4.38916 18.774 4.23291 18.774 4.0376Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.71624 17.6001V5.92041H1.08343V17.6001H4.71624ZM2.8803 4.35791C4.05218 4.35791 4.98968 3.38135 4.98968 2.20947C4.98968 1.07666 4.05218 0.13916 2.8803 0.13916C1.74749 0.13916 0.809992 1.07666 0.809992 2.20947C0.809992 3.38135 1.74749 4.35791 2.8803 4.35791ZM18.2709 17.6001H18.31V11.1938C18.31 8.06885 17.6069 5.64697 13.935 5.64697C12.1772 5.64697 11.0053 6.62354 10.4975 7.52197H10.4584V5.92041H6.98187V17.6001H10.6147V11.8188C10.6147 10.2954 10.8881 8.8501 12.7631 8.8501C14.6381 8.8501 14.6772 10.5688 14.6772 11.936V17.6001H18.2709Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div data-tilt className=" w-[27rem] h-[31rem]">
              <Image src={Prashanthi} alt="" />
            </div>
            <div className=" flex flex-col gap-5 mt-5">
              <p className=" font-bold text-3xl text-center">Prashanthi</p>
              <p className=" font-medium text-base text-center">Co-Founder</p>
              <div className=" flex flex-row items-center justify-center gap-5">
                <svg
                  width="12"
                  height="21"
                  viewBox="0 0 12 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7661 11.3501L11.3129 7.75635H7.83638V5.4126C7.83638 4.39697 8.30513 3.45947 9.86763 3.45947H11.4692V0.373535C11.4692 0.373535 10.0239 0.100098 8.65669 0.100098C5.80513 0.100098 3.93013 1.85791 3.93013 4.98291V7.75635H0.727007V11.3501H3.93013V20.1001H7.83638V11.3501H10.7661Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="21"
                  height="17"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.774 4.0376C19.5553 3.45166 20.2584 2.74854 20.8053 1.92822C20.1022 2.24072 19.2819 2.4751 18.4615 2.55322C19.3209 2.04541 19.9459 1.26416 20.2584 0.287598C19.4772 0.756348 18.5787 1.10791 17.6803 1.30322C16.899 0.48291 15.8444 0.0141602 14.6725 0.0141602C12.4069 0.0141602 10.5709 1.8501 10.5709 4.11572C10.5709 4.42822 10.61 4.74072 10.6881 5.05322C7.28967 4.85791 4.24279 3.21729 2.21154 0.756348C1.85998 1.34229 1.66467 2.04541 1.66467 2.82666C1.66467 4.23291 2.36779 5.48291 3.50061 6.2251C2.83654 6.18604 2.17248 6.02979 1.62561 5.71729V5.75635C1.62561 7.74854 3.03186 9.38916 4.90686 9.77979C4.59436 9.85791 4.20373 9.93604 3.85217 9.93604C3.57873 9.93604 3.34436 9.89697 3.07092 9.85791C3.57873 11.4985 5.10217 12.6704 6.89904 12.7095C5.49279 13.8032 3.73498 14.4673 1.82092 14.4673C1.46936 14.4673 1.15686 14.4282 0.844357 14.3892C2.64123 15.561 4.78967 16.2251 7.13342 16.2251C14.6725 16.2251 18.774 10.0142 18.774 4.58447C18.774 4.38916 18.774 4.23291 18.774 4.0376Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.71624 17.6001V5.92041H1.08343V17.6001H4.71624ZM2.8803 4.35791C4.05218 4.35791 4.98968 3.38135 4.98968 2.20947C4.98968 1.07666 4.05218 0.13916 2.8803 0.13916C1.74749 0.13916 0.809992 1.07666 0.809992 2.20947C0.809992 3.38135 1.74749 4.35791 2.8803 4.35791ZM18.2709 17.6001H18.31V11.1938C18.31 8.06885 17.6069 5.64697 13.935 5.64697C12.1772 5.64697 11.0053 6.62354 10.4975 7.52197H10.4584V5.92041H6.98187V17.6001H10.6147V11.8188C10.6147 10.2954 10.8881 8.8501 12.7631 8.8501C14.6381 8.8501 14.6772 10.5688 14.6772 11.936V17.6001H18.2709Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div data-tilt className=" w-[27rem] h-[31rem]">
              <Image src={Raghunath} alt="" />
            </div>
            <div className=" flex flex-col gap-5 mt-5">
              <p className=" font-bold text-3xl text-center">Raghunath</p>
              <p className=" font-medium text-base text-center">Co-Founder</p>
              <div className=" flex flex-row items-center justify-center gap-5">
                <svg
                  width="12"
                  height="21"
                  viewBox="0 0 12 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7661 11.3501L11.3129 7.75635H7.83638V5.4126C7.83638 4.39697 8.30513 3.45947 9.86763 3.45947H11.4692V0.373535C11.4692 0.373535 10.0239 0.100098 8.65669 0.100098C5.80513 0.100098 3.93013 1.85791 3.93013 4.98291V7.75635H0.727007V11.3501H3.93013V20.1001H7.83638V11.3501H10.7661Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="21"
                  height="17"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.774 4.0376C19.5553 3.45166 20.2584 2.74854 20.8053 1.92822C20.1022 2.24072 19.2819 2.4751 18.4615 2.55322C19.3209 2.04541 19.9459 1.26416 20.2584 0.287598C19.4772 0.756348 18.5787 1.10791 17.6803 1.30322C16.899 0.48291 15.8444 0.0141602 14.6725 0.0141602C12.4069 0.0141602 10.5709 1.8501 10.5709 4.11572C10.5709 4.42822 10.61 4.74072 10.6881 5.05322C7.28967 4.85791 4.24279 3.21729 2.21154 0.756348C1.85998 1.34229 1.66467 2.04541 1.66467 2.82666C1.66467 4.23291 2.36779 5.48291 3.50061 6.2251C2.83654 6.18604 2.17248 6.02979 1.62561 5.71729V5.75635C1.62561 7.74854 3.03186 9.38916 4.90686 9.77979C4.59436 9.85791 4.20373 9.93604 3.85217 9.93604C3.57873 9.93604 3.34436 9.89697 3.07092 9.85791C3.57873 11.4985 5.10217 12.6704 6.89904 12.7095C5.49279 13.8032 3.73498 14.4673 1.82092 14.4673C1.46936 14.4673 1.15686 14.4282 0.844357 14.3892C2.64123 15.561 4.78967 16.2251 7.13342 16.2251C14.6725 16.2251 18.774 10.0142 18.774 4.58447C18.774 4.38916 18.774 4.23291 18.774 4.0376Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.71624 17.6001V5.92041H1.08343V17.6001H4.71624ZM2.8803 4.35791C4.05218 4.35791 4.98968 3.38135 4.98968 2.20947C4.98968 1.07666 4.05218 0.13916 2.8803 0.13916C1.74749 0.13916 0.809992 1.07666 0.809992 2.20947C0.809992 3.38135 1.74749 4.35791 2.8803 4.35791ZM18.2709 17.6001H18.31V11.1938C18.31 8.06885 17.6069 5.64697 13.935 5.64697C12.1772 5.64697 11.0053 6.62354 10.4975 7.52197H10.4584V5.92041H6.98187V17.6001H10.6147V11.8188C10.6147 10.2954 10.8881 8.8501 12.7631 8.8501C14.6381 8.8501 14.6772 10.5688 14.6772 11.936V17.6001H18.2709Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourteam;
