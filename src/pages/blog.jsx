import { AllBlogPost } from "@/components/AllBlogPost";
import React, { useState } from "react";
import Link from "next/link";

const Blog = ({ post }) => {
  const [posts, setPosts] = useState(post);
  const [pageNumber, setPageNumber] = useState(2);
  const [loading, setLoading] = useState(false);
  console.log(`POSTS`, posts);

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
        <div className="flex gap-3 items-center">
          <button className="text-lg font-extra-light text-white">
            <a href="./blog">All</a>
          </button>
          <a className="text-white" href={`./dynamicTag/tags`}>
            Design
          </a>
        </div>

        {/* POST CARDS */}
        <div className="grid grid-cols-3 gap-3">
          {posts.map((element, index) => (
            <a href={`./dynamic/${element.id}`}>
              <div className="mt-10 border rounded-2xl px-3 py-3 gap-3 min-h-[400px]">
                <div>
                  <img
                    className="rounded-2xl w-[100%]"
                    src={element.social_image}
                  />
                </div>
                <div className="rounded-lg flex flex-col justify-between mt-3">
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
                  <div className="flex gap-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={element.user.profile_image} />
                      </div>
                    </div>
                    <div className="flex items-center">{element.user.name}</div>
                    <div className="flex items-center">
                      {element.created_at}
                    </div>
                  </div>
                </div>
              </div>
            </a>
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
