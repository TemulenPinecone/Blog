import { dummyData } from "@/data/dummyData";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Hightlight } from "@/components/Highlight";
import { TrendingCards } from "@/components/TrendingCards";

export default function Home() {
  return (
    <div>``
      <Header />
      <Hightlight />
      <TrendingCards />
    </div>
  );
}
