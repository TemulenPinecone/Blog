import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";
import { AllBlogPost } from "@/components/AllBlogPost";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
