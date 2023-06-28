import { useEffect } from "react";
import { useRouter } from "next/router";
import BasePage from "../BasePage";

const Redirect = ({ to, ssr }) => {
  const router = useRouter();
  useEffect(() => {
    if (ssr) {
      window.location.pathname = to;
    }
    {
      router.push(to);
    }
  }, []);
  return <BasePage/>;
};

export default Redirect;
