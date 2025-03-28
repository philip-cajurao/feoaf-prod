import Image from "next/image";
import Link from "next/link";
import feoaf from "../assets/2.png";
import feoafsm from "../assets/feoaf.png";
import React from "react";

function NavBar() {
  return (
    <div className="navbar absolute top-0 h-16 py-0 z-10">
      <nav className="navbar-start">
        <Link href="/" className="mx-2 md:hidden">
          <Image
            alt="FEOAF logo"
            src={feoafsm}
            height={50}
            width={50}
            priority
          />
        </Link>
        <Link href="/" className="hidden md:flex mx-6">
          <Image
            alt="FEOAF logo"
            src={feoaf}
            height={210}
            width={210}
            priority
          />
        </Link>
      </nav>

      <div className="navbar-end h-full">
        <div className="dropdown md:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn"
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

        <ul className="menu menu-horizontal flex-nowrap px-1 hidden md:flex">
          <li>
            <Link className="h-full flex items-center" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="h-full flex items-center" href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="h-full flex items-center" href="/events">
              Events
            </Link>
          </li>
          <li>
            <Link className="h-full flex items-center" href="/sponsors">
              Sponsors
            </Link>
          </li>
          {/* <li>
            <Link href="/contacts">Contact Us</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
