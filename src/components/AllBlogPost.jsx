import { dummyData } from "@/data/dummyData";

export const AllBlogPost = (post) => {
  const allBlog = post.post;
  console.log(`INSIDE POST`, post);
  return (
    <div className="flex flex-col flex-wrap my-16 px-2">
      <div>
        <div>
          <p className="text-2xl font-bold">All Blog Post</p>
        </div>
        <div className="grid grid-cols-3">
          {allBlog.map((element) => (
            <div className="mt-10 h-[400px] mx-[2px] border rounded-lg">
              <div>
                <img
                  className="rounded-2xl w-[100%] h-[80%]"
                  src={element.social_image}
                  alt=""
                />
              </div>
              <div className="rounded-lg flex flex-col justify-evenly px-3 pb-2">
                <div className="mb-2">
                  <p className="rounded-lg text-[#4B6BFB] inline-flex p-1 px-4 bg-gray-100">
                    {element.tag_list[1]}
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
      <div className="w-full flex justify-center items-center h-[100px]">
        <button className="btn glass ">Load more</button>
      </div>
    </div>
  );
};
