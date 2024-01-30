import { dummyData } from "@/data/dummyData";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh]">
      {/* HIGHLIGHT */}
      <div className="mt-10 relative">
        <img
          className="w-[900px] border rounded-2xl mx-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQ_X5DVhWSi1vm_XIfLXL9cW5wxL7aOOZCQ&usqp=CAU"
          alt=""
        />
        <div className="bg-white h-[270px] w-[500px] rounded-lg absolute top-[50%] left-[5%] flex flex-col justify-evenly p-[40px]">
          <div>
            <p className="border rounded-lg text-white bg-[#4B6BFB] inline-flex p-1 px-4">
              Technology
            </p>
          </div>
          <div>
            <div className="pb-[24px]">
              <h2 className="text-2xl font-semibold">
                Grid system for better Design User Interface
              </h2>
            </div>
            <div>
              <p className="text-[#97989F]">August 20, 2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* TRENDING CARDS */}
      <div className="flex">
        {dummyData.map((element) => (
          <div className="mt-10 relative w-[400px] h-[400px]">
            <img
              className="border rounded-2xl"
              src={element.cover_image}
              alt=""
            />
            <div className="rounded-lg absolute top-[50%] left-[5%] flex flex-col justify-evenly">
              <div>
                <p className="border rounded-lg text-white bg-[#4B6BFB] inline-flex p-1 px-4">
                  {element.tag_list[0]}
                </p>
              </div>
              {/* <div style={{ backgroundImage: `url(${element.cover_image})` }} /> */}
              <div>
                <div className="pb-[24px]">
                  <h2 className="text-2xl font-semibold text-white">
                    {element.title}
                  </h2>
                </div>
                <div>
                  <p className="text-[#97989F]">
                    {element.readable_publish_date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
