import Image from "next/image";
import Link from "next/link";
import feoaf from "../assets/2.png";
// import feoafsm from "../assets/feoaf.png";
import React from "react";
// import ThemeController from "./ThemeController";

function NavBar() {
  return (
    <div className="navbar shadow-md sticky bg-neutral/98 text-neutral-content shadow-7xl absolute top-0 h-16 py-0 z-100">
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

        <ul className="flex flex-nowrap px-1 hidden md:flex h-full">
          <li className="px-3">
            <Link className="h-full flex items-center" href="/">
              Home
            </Link>
          </li>
          <li className="px-3">
            <Link className="h-full flex items-center" href="/about">
              About
            </Link>
          </li>
           <li className="px-3">
            <Link className="h-full flex items-center" href="/funding-request">
              Funding Request
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
            <Link className="h-full flex items-center gap-1.5 text-amber-400 font-bold" href="/gala">
              <span>Gala 2026</span>
              <span className="px-1.5 py-0.5 text-[10px] font-black bg-amber-400 text-slate-950 rounded uppercase">Oct 17</span>
            </Link>
          </li>
          {/* Sponsors dropdown — opens on hover or keyboard focus (CSS only) */}
          <li className="px-3 relative group">
            <Link
              className="h-full flex items-center gap-1"
              href="/sponsors"
              aria-haspopup="true"
            >
              Sponsors
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="absolute right-0 top-full pt-1 invisible opacity-0 -translate-y-2 scale-95 origin-top-right group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 transition-all duration-300 ease-out">
              <ul className="w-52 bg-neutral text-neutral-content rounded-lg shadow-2xl shadow-black/50 border border-accent/60 border-t-2 border-t-accent p-2">
                <li>
                  <Link
                    href="/sponsors/sponsor-a-kid"
                    className="block rounded-md px-4 py-2.5 font-semibold transition-all duration-300 ease-out hover:bg-accent hover:text-black hover:pl-6 focus-visible:bg-accent focus-visible:text-black focus-visible:outline-none"
                  >
                    Sponsor a Kid
                  </Link>
                </li>
              </ul>
            </div>
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
