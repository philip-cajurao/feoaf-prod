import React from "react";
import NavBar from "./NavBar";
import Link from "next/link";

export default function Drawer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <NavBar />

        {/* Page content here */}
        {children}
      </div>

      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-primary text-primary-content min-h-full w-80 p-4">
          <li>
            <Link className="py-4 text-xl" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="py-4 text-xl" href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="py-4 text-xl" href="/events">
              Events
            </Link>
          </li>
          <li>
            <Link className="py-4 text-xl" href="/sponsors">
              Sponsors
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
