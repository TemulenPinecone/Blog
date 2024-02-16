import React from "react";
import parse from "html-react-parser";

export default function Page({ data }) {
  return (
    <div className="flex flex-col items-center justify-center text-white w-[100%]">
      <div className="text-5xl mb-5 text-center w-[80%]">{data.title}</div>
      <div className="mb-5">
        <img src={data.cover_image} alt="" />
      </div>
      <div className="flex flex-col items-center w-[80%] font-extralight">
        {parse(data.body_html)}
      </div>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const response = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
