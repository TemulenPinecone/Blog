import { useState } from "react";
import parse from "html-react-parser";

export const TagBlogPost = ({ data }) => {
  const [posts, setPosts] = useState(data);
  const [pageNumber, setPageNumber] = useState(2);
  const [loading, setLoading] = useState(false);

  async function loadMoreHandler() {
    setLoading(true);
    const response = await fetch(
      `https://dev.to/api/articles?tag=design&per_page=3&page=${pageNumber}`
    );
    const data = await response.json();
    setPosts([...posts, ...data]);
    setPageNumber(pageNumber + 1);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center my-16">
      <div className="flex flex-col justify-center w-[80%]">
        {/* POST CARDS */}
        <div className="grid grid-cols-3 gap-3">
          {posts.map((element) => (
            // <a href={`./dynamicTag/${element.tags}`}>
            <div className="mt-10 border rounded-2xl px-3 py-3">
              <div>
                <img
                  className="rounded-2xl w-[100%] h-[80%]"
                  src={element.social_image}
                  alt=""
                />
              </div>
              <div className="rounded-lg flex flex-col justify-evenly mt-3">
                <div className="mb-2">
                  <p className="rounded-lg text-[#4B6BFB] font-thin inline-flex p-1 px-4 bg-gray-100">
                    {element.tag_list[0] === `design`
                      ? element.tag_list[0]
                      : null || element.tag_list[1] == `design`
                      ? element.tag_list[1]
                      : null || element.tag_list[2] == `design`
                      ? element.tag_list[2]
                      : null || element.tag_list[3] == `design`
                      ? element.tag_list[3]
                      : null}
                  </p>
                </div>
                <div>
                  <h2 className="text-[20px] font-thin text-white">
                    {element.title}
                  </h2>
                </div>
                <div className="flex items-center">{element.created_at}</div>
              </div>
            </div>
            // </a>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-[100px]">
        <button
          className="btn btn-outline font-thin text-white"
          onClick={loadMoreHandler}
        >
          Load more
        </button>
      </div>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const { tags } = context;
  const response = await fetch(
    // `https://dev.to/api/articles?per_page=3&tag=${tags}`
    // `https://dev.to/api/articles?tag=design&per_page=12`
    `https://dev.to/api/articles?tag=${tags}&per_page=3`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

export default TagBlogPost;
