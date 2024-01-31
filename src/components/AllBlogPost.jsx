import { dummyData } from "@/data/dummyData";

export const AllBlogPost = () => {
  return (
    <div className="flex flex-col mt-16 px-2">
      <div>
        <p className="text-2xl font-bold">All Blog Post</p>
      </div>
      <div className="grid grid-cols-3">
        {dummyData.map((element) => (
          <div className="mt-10 h-[250px] mx-[2px] border rounded-lg">
            <div>
              <img
                className="rounded-2xl w-[100%] h-[100%]"
                src={element.cover_image}
                alt=""
              />
            </div>
            <div className="rounded-lg flex flex-col justify-evenly px-3 pb-2">
              <div className="mb-2">
                <p className="rounded-lg text-[#4B6BFB] inline-flex p-1 px-4 bg-gray-100">
                  {element.tag_list[0]}
                </p>
              </div>
              <div>
                <h2 className="text-[13px] font-semibold">{element.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
