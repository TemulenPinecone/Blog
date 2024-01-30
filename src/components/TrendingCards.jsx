import { dummyData } from "@/data/dummyData";

export const TrendingCards = () => {
  return (
    <div className="flex flex-col mt-5">
      <div>
        <p className="text-2xl font-bold">Tranding</p>
      </div>
      <div className="flex">
        {dummyData.map((element) => (
          <div className="mt-10 relative w-[25%] h-[200px] mx-[2px]">
            <img
              className="rounded-2xl w-[100%] h-[100%] object-cover"
              src={element.cover_image}
              alt=""
            />
            <div className="rounded-lg absolute bottom-[5%] left-[5%] flex flex-col justify-evenly px-3 pb-2">
              <div className="mb-2">
                <p className="rounded-lg text-white bg-[#4B6BFB] inline-flex p-1 px-4">
                  {element.tag_list[0]}
                </p>
              </div>
              <div>
                <div className="">
                  <h2 className="text-[13px] font-semibold text-white">
                    {element.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};