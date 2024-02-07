import { AllBlogPost } from "@/components/AllBlogPost";
import React, { useState } from "react";

const Blog = (post) => {
  const allBlog = post.post;
  const [posts, setPosts] = useState(allBlog);
  const [pageNumber, setPageNumber] = useState(2);
  const [loading, setLoading] = useState(false);

  async function loadMoreHandler() {
    setLoading(true);
    const response = await fetch(
      `https://dev.to/api/articles?tag=design&per_page=15&page=${pageNumber}`
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
        {/* TITLE TEXT */}
        <div className="flex justify-center">
          <p className="text-3xl font-extra-light text-white">All Blog Post</p>
        </div>

        {/* POST CARDS */}
        <div className="grid grid-cols-3 gap-3">
          {posts.map((element, index) => (
            <div className="mt-10 h-[400px] border rounded-2xl px-3 pt-3">
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
                    {element.tag_list[1]}
                  </p>
                </div>
                <div>
                  <h2 className="text-[20px] font-thin text-white">
                    {element.title}
                  </h2>
                </div>
              </div>
            </div>
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
export default Blog;

export const getServerSideProps = async () => {
  const posts = await fetch("http://localhost:4000/api/posts");
  const post = await posts.json();

  return {
    props: {
      post,
    },
  };
};
