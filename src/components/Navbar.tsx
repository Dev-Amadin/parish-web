import { GiPeaceDove } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";
import { navLinks } from "../data/data";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="bg-primary w-full">
      <div className="mx-8">
        <div className="flex justify-between py-4 gap-8 text-white">
          <div className="flex items-center gap-2">
            <div className="text-5xl">
              <GiPeaceDove />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">HOLY GHOST</h2>
              <h2 className="text-2xl">PARISH, LUTON</h2>
              <p>Serving all with justice, peace and love</p>
 
            </div>
          </div>
          <div className="hidden xl:block  flex-1">
            <div className="flex flex-col items-end gap-6 ">
              <div className="flex gap-2 items-center">
                <CiSearch className="text-2xl text-white" />
                <Button text="Donate" type="donate">
                  <CiHeart />
                </Button>
              </div>
              <div className="flex md:gap-8 ">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className=" hover:underline hover:underline-offset-8 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <button
            className=" text-white cursor-pointer xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >

            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <IoMdMenu className="text-4xl " />
            )}
          </button>
        </div>
      </div>

    </div>
      <div className={`xl:hidden absolute top-auto left-0 right-0 z-1000 bg-primary overflow-hidden transition-all duration-300 ease-in-out px-8 pb-16 
        ${isOpen? 'min-h-fit opacity-100':'max-h-0 opacity-0'}`}>
        {navLinks.map((link, index) => (
          <div
            key={index}
            className="flex justify-between gap-2 py-4 items-center text-white border-b border-primary-accent hover:text-primary-dark"
          >
            <h3 className="text-lg">{link.name}</h3>
            <a href={link.href} onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;
