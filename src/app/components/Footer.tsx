import Image from "next/image";
import Link from "next/link";
import logo from "../assets/2.png";
import qr from "../assets/qr.png";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about" className="link link-hover">
            About us
          </Link>
          <Link href="/join" className="link link-hover">
            Join
          </Link>
          <Link href="/sponsors/be-a-sponsor" className="link link-hover">
            Be a sponsor
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Contacts</h6>
          <Link href="/services" className="link link-hover">
            919-769-9623
          </Link>
          <Link href="/services" className="link link-hover">
            email@gmail.com
          </Link>
          <Link href="/services" className="link link-hover">
            Haymarket, Virginia
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Donate</h6>
          <Link href="" className="ml-1">
            <Image alt="qr donation" src={qr} width={100} />
          </Link>
        </nav>
      </footer>
      <footer className="footer flex flex-col sm:flex-row bg-neutral text-neutral-content justify-between items-center text-base-content border-t px-10 py-4">
        <nav className="grid-flow-col items-center">
          <Image alt="feoaf logo" src={logo} width={200} />
        </nav>
        <nav className="">
          <div className="grid grid-flow-col gap-4">
            <Link href="" className="font-bold text-lg hover:underline">
              facebook
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
