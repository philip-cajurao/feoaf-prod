import Image from "next/image";
import Link from "next/link";
import feoaf from "../assets/feoaf.png";
import React from "react";

function NavBar() {
  return (
    <div className="navbar h-16 top-0">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/sponsors">Sponsors</Link>
            </li>
            {/* <li>
              <Link href="/contacts">Contact Us</Link>
            </li> */}
          </ul>
        </div>
        <Link href="/" className="hidden lg:flex mx-2">
          <Image alt="FEOAF logo" src={feoaf} height={50} width={50} priority />
        </Link>
      </div>
      <div className="navbar-center">
        <Link href="/" className="lg:hidden mx-2">
          <Image alt="FEOAF logo" src={feoaf} height={50} width={50} priority />
        </Link>
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/sponsors">Sponsors</Link>
          </li>
          {/* <li>
            <Link href="/contacts">Contact Us</Link>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-accent">Join Us</a>
      </div>
    </div>
  );
}

export default NavBar;
