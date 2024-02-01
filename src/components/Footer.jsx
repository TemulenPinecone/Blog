import { Facebook } from "./icons/Facebook";
import { Twitter } from "./icons/Twitter";
import { Instagram } from "./icons/Instagram";
import { LinkedIn } from "./icons/LinkedIn";
import { MetaBlog, MetaBlogIcon } from "./icons/MetaBlogIcon";

export const Footer = () => {
  return (
    <div className="bg-[#F6F6F7] flex flex-col items-center pt-[64px] divide-y my-10">
      <div className="w-[80%] flex justify-between pb-[16px] ">
        <div className="w-[30%]">
          <div>
            <p className="font-bold">About</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              ad aperiam voluptatem aliquid quisquam deleniti?
            </p>
          </div>
          <div>
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <div>
          <div>Home</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <div className="flex gap-3">
          <Facebook />
          <Twitter />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
      <div className="w-[80%] flex justify-between pt-[16px] pb-[64px]">
        <div className="flex gap-2">
          <MetaBlogIcon />
          <div>
            {" "}
            <p>
              Meta<span className="font-bold">Blog</span>
            </p>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex items-center divide-x-2">
          <div className="px-2">Terms of Use</div>
          <div className="px-2">Privacy Policy</div>
          <div className="px-2">Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};
