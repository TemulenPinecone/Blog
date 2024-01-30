import { FindIcon } from "./icons/FindIcon";
import { HeaderLogo } from "./icons/HeaderLogo";

export const Header = () => {
  return (
    <div className="w-[100%] flex items-center justify-around mt-5 mx-5">
      <div>
        <HeaderLogo />
      </div>
      <div className="grid grid-cols-3 text-[#3B3C4A]">
        <a href="">Home</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F4F4F5] px-3 py-1 rounded-md"
        />
      </div>
    </div>
  );
};
