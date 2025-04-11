import Image from "next/image";
import Link from "next/link";
import logo from "../assets/2.png";
import qr from "../assets/qr/donateQR.png";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer justify-between sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about" className="link link-hover">
            About us
          </Link>
          <Link href="/join" className="link link-hover">
            Join
          </Link>
          <Link
            href="/sponsors/be-a-sponsor"
            className="link link-hover text-accent"
          >
            Be a sponsor
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Contacts</h6>
          <p>(919) 760-9623</p>
          <p>feoafoundation@gmail.com</p>
          <p>Virginia, USA</p>
        </nav>
        <nav>
          <h6 className="footer-title">Donate</h6>
          <Image
            placeholder="blur"
            loading="lazy"
            alt="qr donation"
            src={qr}
            width={100}
          />
        </nav>
      </footer>
      <footer className="footer grid grid-cols-3 place-items-center bg-neutral text-neutral-content text-base-content px-10 py-4">
        <nav className="grid-flow-col items-center justify-self-start">
          <Image
            placeholder="blur"
            loading="lazy"
            alt="feoaf logo"
            src={logo}
            width={200}
          />
        </nav>
        <nav className="">
          <p>© 2025. All rights reserved.</p>
        </nav>
        <nav className="justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link
              href="https://www.facebook.com/people/Future-Entrepreneurs-of-America-Foundation/61573876332746/"
              className="font-bold text-lg hover:underline"
            >
              facebook
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
