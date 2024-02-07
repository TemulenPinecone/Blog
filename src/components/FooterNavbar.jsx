import { useRouter } from "next/router";
import { Footer } from "./Footer";

export const FooterNavbar = () => {
  const router = useRouter();
  return (
    <div>
      <Footer />
    </div>
  );
};
