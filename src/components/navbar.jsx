"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../assets/RunPlus - Logo.png";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <section id="navbar" className="">
      <header className="bg-white font-montserrat w-full">
        <nav
          className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-20"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">RunPlus</span>
              <Image className=" h-10 w-auto" src={logo} alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-row items-center justify-between gap-10">
            <PopoverGroup className="hidden lg:flex lg:gap-x-12 font-medium text-lg -ml-6">
              <Link
                href="/"
                className="  hover:text-[#002548] font-semibold leading-6 text-[#797979] hover:font-semibold  text-lg"
              >
                Home
              </Link>
              <Link
                href="/product"
                className=" hover:text-[#002548] font-semibold leading-6 text-[#797979] hover:font-semibold  text-lg"
              >
                Products
              </Link>
              <Link
                href="/about"
                className=" hover:text-[#002548] font-semibold leading-6 text-[#797979] hover:font-semibold  text-lg"
              >
                About Us
              </Link>
            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 gap-5 lg:justify-end">
              <div className="bg-gradient-to-r from-[#6BDBFF] to-[#009CDD] border-2 rounded-full w-52 h-16 p-[0.125rem]">
                <Link
                  href="/footer"
                  className="hover:font-semibold text-xl bold text-[#002548] items-center justify-center rounded-full bg-white flex w-full h-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image className="h-8 w-auto" src={logo} alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <Link
                    href="/product"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Products
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About Us
                  </Link>
                </div>
                <div className="py-6">
                <div className="bg-gradient-to-r from-[#6BDBFF] to-[#009CDD] border-2 rounded-full w-52 h-16 p-[0.125rem]">
                <Link
                  href="/footer"
                  className="hover:font-semibold text-xl bold text-[#002548] items-center justify-center rounded-full bg-white flex w-full h-full"
                >
                  Contact Us
                </Link>
              </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </section>
  );
};

export default Navbar;
