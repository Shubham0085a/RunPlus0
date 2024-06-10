import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../assets/RunPlus - Logo.png';

const Navbar = () => {
  return (
    <section id="navbar" className="">
      <nav className="flex h-[7.5rem] flex-row items-center justify-between mx-32">
        <div className="w-[15.15rem] h-9">
          <Image src={logo} alt="RunPlus Logo" />
        </div>
        <div className="flex flex-row items-center font-montserrat font-medium h-9 text-lg text-[#797979] justify-between gap-16">
          <Link href="/" className="hover:font-semibold hover:text-[#002548]">
            Home
          </Link>
          <Link href="/product" className="hover:font-semibold hover:text-[#002548]">
            Products
          </Link>
          <Link href="/about" className="hover:font-semibold hover:text-[#002548]">
            About Us
          </Link>
          <div className="bg-gradient-to-r from-[#6BDBFF] to-[#009CDD] border-2 rounded-full w-52 h-16 p-[0.125rem]">
            <Link href="/footer" className="hover:font-semibold text-[#002548] items-center justify-center rounded-full bg-white flex w-full h-full">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
