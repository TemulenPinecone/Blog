import { dummyData } from "@/data/dummyData";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Hightlight } from "@/components/Highlight";
import { TrendingCards } from "@/components/TrendingCards";
import { AllBlogPost } from "@/components/AllBlogPost";
import { Footer } from "@/components/Footer";

export default function Home(props) {
  const { highlight, trending, post } = props;
  // console.log(`post number`, post);
  // console.log(`INSIDE HIGHLIGHT`, highlight);
  // console.log(`INSIDE PROPS`, props);

  return (
    <div className="w-full">
      <Header />
      <Hightlight highlight={highlight} />
      <TrendingCards trending={trending} />
      <AllBlogPost post={post} />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  // const highlights = await fetch(
  //   "https://dev.to/api/articles?per_page=4&top=1"
  // );
  const highlights = await fetch("http://localhost:4000/api/blogs");
  const highlight = await highlights.json();
  console.log(`HIGHLIGHT`, highlight);

  const trendings = await fetch("https://dev.to/api/articles?per_page=4&top=4");
  const trending = await trendings.json();

  const posts = await fetch(
    "https://dev.to/api/articles?tag=design&per_page=15"
  );
  const post = await posts.json();

  return {
    props: {
      highlight,
      trending,
      post,
    },
  };
};

// input - awna
// awsan input- context- uur page ruu damjuulna
