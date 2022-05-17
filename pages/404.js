import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    console.log("redirect to home page");
  });
  return (
    <div>
      <h1>Oooops...page not found!</h1>
      <p>Please try again!</p>
    </div>
  );
};

export default NotFound;
