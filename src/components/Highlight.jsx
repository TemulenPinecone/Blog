export function Hightlight(highlight) {
  const hlNews = highlight.highlight;
  console.log(`hlNews`, hlNews);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[80%]">
        {/* NEW */}
        <div className="carousel w-full rounded-2xl">
          {hlNews.map((element, index) => (
            <div
              id={`item${index + 1}`}
              className="carousel-item bg-cover w-[100%]"
            >
              <a href={`./article/${element.id}`}>
                <img src={element.social_image} className="bg-cover w-[100%]" />
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
