import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
      <Link href="/">
        <p>2022 Tech Cart @All rights reserved</p>
      </Link>
      <br />
      <p className="iconsins">
        <AiFillInstagram />
      </p>
      <p className="iconstwi">

        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
