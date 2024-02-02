import { FindIcon } from "./icons/FindIcon";
import { HeaderLogo } from "./icons/HeaderLogo";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center h-[150px]">
      <div className="w-[80%] flex justify-between items-center my-5">
        <div>
          <HeaderLogo />
        </div>
        <div className="flex text-[#FFF] text-base font-thin items-center justify-center gap-x-5">
          <a href="./" className="flex justify-center">
            Home
          </a>
          {/* <Link /> */}
          <a href="./blog" className="flex justify-center">
            Blog
          </a>
          <a href="./contact" className="flex justify-center">
            Contact
          </a>
        </div>
        <div className="flex items-center bg-[#F4F4F5] px-3 py-1 rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#F4F4F5] outline-none font-thin"
          />
          <FindIcon />
        </div>
      </div>
    </div>
  );
};
