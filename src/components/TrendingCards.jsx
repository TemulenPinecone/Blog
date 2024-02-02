import { dummyData } from "@/data/dummyData";

export const TrendingCards = (trending) => {
  const trend = trending.trending;
  // console.log(`trend income`, trend);
  return (
    <div className="flex justify-center mt-16">
      <div className="w-[80%] flex flex-col items-center">
        <div>
          <p className="text-3xl font-extra-light text-white">Trending</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          {trend.map((element) => (
            <div className="mt-10 relative w-[25%] h-[200px]">
              <img
                className="rounded-2xl w-[100%] h-[100%] object-cover"
                src={element.social_image}
              />

              <div className="rounded-lg absolute bottom-[5%] left-[5%] right-[5%] flex flex-col justify-evenly">
                <div className="mb-2">
                  <p className="rounded-lg text-white font-thin bg-[#4B6BFB] inline-flex p-1 px-2">
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
    </div>
  );
};
