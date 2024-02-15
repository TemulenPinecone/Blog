import React from "react";
import parse from "html-react-parser";

export default function Page({ data }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-[80%]">
        {parse(data.body_html)}
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  console.log(`CONTEXT`, context);
  const { query } = context;
  const { id } = query;
  const response = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await response.json();
  //   console.log(`DATA`, data);

  return {
    props: {
      data,
    },
  };
};
