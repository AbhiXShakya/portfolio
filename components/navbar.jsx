import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "./modal";

const Navbar = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // disable scroll when isOpen is True
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} page={page} />}
      <nav className="px-4 font-ubuntu md:px-12 lg:px-20">
        <div className="flex justify-between py-5">
          <div className="cursor-pointer">
            <Link href="/" title="Logo">
              <h1 className="text-4xl font-bold text-xblack">
                Abhi<span className="text-4xl font-bold text-xoranged">X</span>
                Shakya
              </h1>
            </Link>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer select-none"
            onClick={() => setIsOpen(true)}
          >
            <span className="text-sm font-normal">MENU</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 28 28"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 9h16M4 19h16"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
