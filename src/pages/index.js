import { Header } from "@/components/Header";
import { Hightlight } from "@/components/Highlight";
import { TrendingCards } from "@/components/TrendingCards";
import { AllBlogPost } from "@/components/AllBlogPost";
import { Footer } from "@/components/Footer";

export default function Home(props) {
  const { highlight, trending, post } = props;

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
  const highlights = await fetch("http://localhost:4000/api/blogCarousel");
  const highlight = await highlights.json();

  const trendings = await fetch("http://localhost:4000/api/trendings");
  const trending = await trendings.json();

  const posts = await fetch("http://localhost:4000/api/posts");
  const post = await posts.json();

  return {
    props: {
      highlight,
      trending,
      post,
    },
  };
};
