import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";
import { AllBlogPost } from "@/components/AllBlogPost";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
