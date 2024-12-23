import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="text-center py-4 ">
      
      <span className="block text-sm text-center text-gray-500">
        © 2024 Devxloper. All Rights Reserved.
        <Link href="https://devxportfolio.vercel.app">
          <button className="text-blue-600 hover:underline px-2"> DevX</button>
        </Link>
      </span>

      <ul className="flex justify-center mt-5 space-x-5">
        <li>
          <Link href="https://www.facebook.com/nawabmohammad.atif?mibextid=ZbWKwL">
            <button className="text-gray-500 hover:text-gray-900">
              <FaFacebookF className="w-5 h-5" />
            </button>
          </Link>
        </li>
        <li>
          <Link href="https://x.com/MohammadAtif001?t=josDktTQBVcN28AUMlBo6A&s=08">
            <button className="text-gray-500 hover:text-gray-900">
              <FaTwitter className="w-5 h-5" />
            </button>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/official_atif_8005/profilecard/?igsh=MWQ4bnlhc3NibHQyeA==">
            <button className="text-gray-500 hover:text-gray-900">
              <FaInstagram className="w-5 h-5" />
            </button>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/mohammad-atif-abbas-4a879b2ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <button className="text-gray-500 hover:text-gray-900">
              <FaLinkedinIn className="w-5 h-5" />
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
