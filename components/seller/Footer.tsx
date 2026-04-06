import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10">
      <div className="flex items-center gap-4">
        <Image src={assets.logo} alt="S-Tech Logo" />
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2026 © S-Tech. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;