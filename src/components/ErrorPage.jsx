import errPage from "../assets/images/404/404.gif";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <>
        <Link
          className="rancho-font flex items-center text-xl font-bold gap-3 m-12"
          to="/"
        >
          <FaArrowLeftLong /> Back To Home
        </Link>
      <div className="max-w-4xl mx-auto">
        <img src={errPage} alt="" />
      </div>
    </>
  );
};

export default ErrorPage;
