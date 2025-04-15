import Image from "next/image";
import Link from "next/link";
import feoaf from "../assets/2.png";
// import feoafsm from "../assets/feoaf.png";
import React from "react";
// import ThemeController from "./ThemeController";

function NavBar() {
  return (
    <div className="navbar shadow-md sticky bg-neutral text-neutral-content shadow-7xl absolute top-0 h-16 py-0 z-10">
      <nav className="navbar-start">
        {/* <Link href="/" className="mx-2 md:hidden">
          <Image
            alt="FEOAF logo"
            src={feoafsm}
            height={50}
            width={50}
            priority
          />
        </Link> */}
        <Link href="/" className="flex mx-6">
          <Image
            alt="FEOAF logo"
            src={feoaf}
            className="h-auto w-52"
            priority
          />
        </Link>
      </nav>

      <div className="navbar-end h-full">
        <div className="dropdown md:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-lg btn-link text-neutral-content"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </label>
        </div>

        <ul className="flex flex-nowrap px-1 hidden md:flex">
          <li className="px-3">
            <Link className="h-full flex items-center" href="/about">
              About Us
            </Link>
          </li>
          <li className="px-3">
            <Link className="h-full flex items-center" href="/programs">
              Programs
            </Link>
          </li>
          <li className="px-3">
            <Link className="h-full flex items-center" href="/events">
              Events
            </Link>
          </li>
          <li className="px-3">
            <Link className="h-full flex items-center" href="/sponsors">
              Sponsors
            </Link>
          </li>
          {/* <li>
            <Link href="/contacts">Contact Us</Link>
          </li> */}
          {/* <li className="px-3">
            <ThemeController />
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
