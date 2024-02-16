export const TrendingCards = ({ trending }) => {
  return (
    <div className="flex justify-center mt-16">
      <div className="w-[80%] flex flex-col items-center">
        <div>
          <p className="text-3xl font-extra-light text-white">Trending</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          {trending.map((element) => (
            <div className="mt-10 relative w-[25%]">
              <a href={`./dynamic/${element.id}`}>
                <div className="">
                  <div className="">
                    <img
                      className="rounded-2xl bg-cover min-h-[170px] min-w-full"
                      src={element.social_image}
                    />
                  </div>
                  <div className="rounded-lg absolute z-10 bottom-[5%] left-[5%] right-[5%] flex flex-col justify-evenly mb-2">
                    <div className="mb-2">
                      <p className="rounded-lg text-white font-thin bg-[#4B6BFB] inline-flex px-2 py-1">
                        {element.tag_list[0]}
                      </p>
                    </div>
                    <div>
                      <div className="">
                        <h2 className="text-[17px] font-semibold text-white">
                          {element.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] h-[70%] absolute bottom-0 rounded-lg bg-gradient-to-t from-black"></div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
