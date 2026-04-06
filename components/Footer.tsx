import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-8 border-t border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image src={assets.logo} alt="S-Tech Logo" />
          <p className="mt-4 text-sm">
            Delivering high‑quality electronics, smart devices, and modern accessories that improve your daily life, supported by reliable service and technology built to perform.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-1">
              <li><a className="hover:underline transition" href="#">Home</a></li>
              <li><a className="hover:underline transition" href="#">About us</a></li>
              <li><a className="hover:underline transition" href="#">Privacy policy</a></li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-1">
              <p>+354-567-890</p>
              <p>contact@s-tech.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">Copyright 2026 © S-Tech. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
