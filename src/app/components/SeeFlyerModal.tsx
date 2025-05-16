"use client";

import React, { useState } from "react";
import SummerBootCampTicket from "../assets/events/summerBootCamp2025/bootCampTicket.png";
import Image from "next/image";

export default function SeeFlyerModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflowY = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflowY = "visible";
  };
  return (
    <>
      <button
        className="p-2 font-bold text-sm cursor-pointer hover:underline lg:hidden"
        onClick={openModal}
      >
        See flyer
      </button>
      <div className={`flex justify-center items-center px-4 fixed top-[4rem] left-0 h-svh w-svw bg-neutral/50 transition-all duration-0 ${isModalOpen ? "scale-100" : "scale-0"}`}>
          <Image
            src={SummerBootCampTicket}
            className="rounded-lg shadow-2xl w-96 h-auto -mt-12"
            alt="Summer Boot Camp ticket"
            placeholder="blur"
            priority={true}
          />
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
          <button className="btn btn-sm sm:btn-md btn-circle" onClick={closeModal}>
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
            {''}
          </button>
        </div>
      </div>
    </>
  );
}
