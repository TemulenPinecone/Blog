import { FindIcon } from "./icons/FindIcon";
import { HeaderLogo } from "./icons/HeaderLogo";
import { useRouter } from "next/router";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center h-[150px]">
      <div className="w-[80%] flex justify-between items-center my-5">
        <div>
          <a href="/">
            <HeaderLogo />
          </a>
        </div>
        <div className="flex text-[#FFF] text-base font-thin items-center justify-center gap-x-5">
          {/* <a href="/" className="flex justify-center"> */}
          <button onClick={() => router.push("/")}>Home</button>
          {/* </a> */}
          {/* <Link /> */}
          {/* <a href="./blog" className="flex justify-center"> */}
          <button onClick={() => router.push("/blog")}>Blog</button>
          {/* </a> */}
          <a href="/contact" className="flex justify-center">
            Contact
          </a>
        </div>
        <div className="flex items-center bg-gray-700 px-3 py-1 rounded-md text-white">
          <input
            className="bg-gray-700 outline-none font-thin placeholder-white"
            type="text"
            placeholder="Search"
          />
          <FindIcon />
        </div>
      </div>
    </div>
  );
};
