export function Hightlight(highlight) {
  // console.log(`HIGHLIGHT dotroooooo`, highlight);
  // console.log(`HIGHLIGHT`, highlight);
  const hlNews = highlight.highlight;
  console.log(`HLNEWS`, hlNews);
  return (
    <div
      className="mt-10 h-[500px] relative mx-3 bg-no-repeat"
      style={{ backgroundImage: `url(${hlNews[0].cover_image})` }}
    >
      {/* <img src={`${highlight}`} alt="" className="h-[500px] border" /> */}
      <div className="bg-white h-[270px] w-[500px] rounded-lg absolute top-[50%] left-[5%] flex flex-col justify-evenly p-[40px]">
        <div>
          <p className="border rounded-lg text-white bg-[#4B6BFB] inline-flex p-1 px-4">
            {hlNews[0].tag_list[0]}
          </p>
        </div>
        <div>
          <div className="pb-[24px]">
            <h2 className="text-2xl font-semibold text-black">
              {hlNews[0].title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
