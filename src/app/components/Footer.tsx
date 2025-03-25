import Image from "next/image";
import Link from "next/link";
import logo from "../assets/feoaf-word.png";
import qr from "../assets/qr.png";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content pt-8">
      <div className="grid sm:grid-cols-2 place-items-center sm:place-items-center w-full px-20">
        <nav className="flex items-center h-full place-self-start">
          <Link href="/">
            <Image
              alt="Future Entrepreneurs Of America Foundation"
              src={logo}
              height={250}
              width={250}
            />
          </Link>
        </nav>

        <nav className="">
          <h6 className="footer-title">DONATE</h6>
          <Image alt="QR code for sponsors" src={qr} height={150} width={150} />
        </nav>
      </div>

      <nav className="bg-base-100 text-base-content p-4 w-full ">
        <p className="text-center w-full">
          © {new Date().getFullYear()} Future Entrepreneurs Of America
          Foundation. All right reserved
        </p>
        <div className="flex justify-center gap-x-2 w-full text-xs">
          <Link href="" className="underline">
            Terms of Use
          </Link>{" "}
          |
          <Link href="" className="underline">
            Privacy Policy
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
