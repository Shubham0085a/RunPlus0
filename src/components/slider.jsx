"use client";
import React, { useEffect, useState } from "react";
import TestimonialImg from "../assets/TestimonialImg.png";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const data = [
  {
    id: 1,
    name: "Riya G.,",
    title: "Head of Sales and Marketing",
    img: TestimonialImg,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    name: "John D.",
    title: "Chief Technology Officer",
    img: TestimonialImg,
    review:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting.",
  },
  {
    id: 3,
    name: "Emily R.",
    title: "Senior Product Manager",
    img: TestimonialImg,
    review:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.",
  },
  {
    id: 4,
    name: "Michael S.",
    title: "Lead Software Engineer",
    img: TestimonialImg,
    review:
      "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 5,
    name: "Jessica B.",
    title: "Director of Operations",
    img: TestimonialImg,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
  {
    id: 6,
    name: "David H.",
    title: "Business Analyst",
    img: TestimonialImg,
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    id: 7,
    name: "Sophia K.",
    title: "Marketing Coordinator",
    img: TestimonialImg,
    review:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 8,
    name: "James L.",
    title: "Customer Success Manager",
    img: TestimonialImg,
    review:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  },
  {
    id: 9,
    name: "Olivia P.",
    title: "Graphic Designer",
    img: TestimonialImg,
    review:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
  },
  {
    id: 10,
    name: "Ethan W.",
    title: "Financial Advisor",
    img: TestimonialImg,
    review:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    id: 11,
    name: "Ava T.",
    title: "Human Resources Manager",
    img: TestimonialImg,
    review:
      "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC.",
  },
];

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1)
  //   }, 5000)
  // }, [index])

  return (
    <section className="section font-montserrat h-auto bg-sky-300/10">
      <div className="title scrollanimation animate-appear">
        <h2 className=" font-extrabold text-5xl text-[#2F2F2F] pt-10">
          Our Happy Family
        </h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, img, name, title, review } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <div className="flex items-center justify-center scrollanimation animate-appear">
                <Image src={img} alt={name} className="person-img" />
              </div>
              <div className="flex flex-row items-center justify-center scrollanimation animate-appear">
                <h4 className=" font-extrabold text-xl">{name}</h4>
                <p className=" text-lg">{title}</p>
              </div>
              <p className=" max-w-[35em] mx-auto mt-8 text-[#808080] font-normal text-2xl leading-normal scrollanimation animate-appear">
                {review}
              </p>
            </article>
          );
        })}
        <button
          className="w-12 h-12 absolute top-20 translate-y-1/2 bg-white text-blue-950 grid place-items-center border-transparent text-3xl rounded-full cursor-pointer transition-all ease-linear delay-200 hover:bg-blue-950 hover:text-white -right-4 md:-right-10 lg:-right-16 xl:-right-24"
          onClick={() => setIndex(index + 1)}
        >
          <IoIosArrowForward />
        </button>
        <button
          className="w-12 h-12 absolute top-20 translate-y-1/2 bg-white text-blue-950 grid place-items-center border-transparent text-3xl rounded-full cursor-pointer transition-all ease-linear delay-200 hover:bg-blue-950 hover:text-white -left-4 md:-left-10 lg:-left-16 xl:-left-24"
          onClick={() => setIndex(index - 1)}
        >
          <IoIosArrowBack />
        </button>
      </div>
    </section>
  );
};

export default Slider;
