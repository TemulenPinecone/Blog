export function Hightlight(highlight) {
  const hlNews = highlight.highlight;
  console.log(`hlNews`, hlNews);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[80%] justify-center">
        {/* NEW */}
        <div className="carousel w-[100%] rounded-2xl ">
          {hlNews.map((element, index) => (
            <div
              id={`item${index + 1}`}
              className="relative carousel-item justify-center w-full min-h-2000"
            >
              <a href={`./dynamic/${element.id}`} className="h-[100%] w-[100%]">
                <div className="h-[100%] w-[100%]">
                  <img
                    src={element.social_image}
                    className="bg-cover h-[100%] w-[100%]"
                  />
                </div>
                <div className="absolute rounded-xl flex h-[40%] w-[48%] left-5 bottom-5 bg-white/80">
                  <div className="rounded-lg absolute left-5 top-5 flex flex-col justify-evenly ">
                    <div className="mb-3">
                      <p className="rounded-lg text-white font-thin bg-[#4B6BFB] inline-flex px-2 py-1">
                        {element.tag_list[0]}
                      </p>
                    </div>
                    <div>
                      <div className="pr-10 mb-3">
                        <h2 className="text-3xl font-semibold text-black">
                          {element.title}
                        </h2>
                      </div>
                      <div className="flex items-center text-gray-500">
                        {element.created_at}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full py-2 gap-2 mt-2">
          {hlNews.map((number, index) => {
            return <a href={`#item${index + 1}`}>{index + 1}</a>;
          })}
        </div>
      </div>
    </div>
  );
}
