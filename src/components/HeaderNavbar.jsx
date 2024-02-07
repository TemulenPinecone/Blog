import { useRouter } from "next/router";
import { Header } from "./Header";

export const HeaderNavbar = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
    </div>
  );
};
