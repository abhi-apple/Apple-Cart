import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
import { BiBattery } from "react-icons/bi";
import { CgBatteryFull ,CgBatteryEmpty} from "react-icons/cg";
import {
  BsBattery,
  BsBatteryCharging,
  BsBatteryHalf,
  BsBatteryFull,
} from "react-icons/bs";
const FooterBanner = ({
  footerbanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}% OFF</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <h4>{smallText}</h4>
          {/* <p>{smallText}</p> */}
          <br />
          <h3>
            {midText}{" "}
          </h3>
          <h2>

            <BsBatteryFull />
          </h2>
          <br />
          <p> {desc}</p>
          <br />
          <Link href={`product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img
          src={urlFor(image)}
          width="300"
          height="300"
          className="footer-banner-image"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
