import logo from "../assets/images/more/logo1.png";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co.com/rKk2N3L0/navBg.jpg)",
        }}
        className="navbar bg-base-100 shadow-sm"
      >
        <div className="flex md:space-x-80 mx-auto">
          <div className="relative flex items-center justify-center rancho-font gap-0.5 md:gap-2">
            <img className="h-8 md:h-12 md:w-12" src={logo} alt="" />
            <h1 className="text-2xl md:text-4xl text-white">
              Espresso Emporium
            </h1>
          </div>
          <div className="dropdown dropdown-end ml-32 md:ml-10">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-4 shadow rancho-font space-y-2 "
            >
                <Link to="/signIn" className="btn bg-[#331A15] text-white md:text-xl">
                  SignIn
                </Link>
                <Link to="/signUp" className="btn bg-[#331A15] text-white md:text-xl">
                  SignUp
                </Link>
            </ul>
          </div>



         <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 rancho-font">
            <Link to="/signIn" className="btn mr-3 md:text-xl">
              SignIn
            </Link>
            <Link to="/signUp" className="btn md:text-xl">
              SignUp
            </Link>
          </ul>
         </div>

           
        </div>
        
      </div>
    </div>
  );
};

export default Header;
