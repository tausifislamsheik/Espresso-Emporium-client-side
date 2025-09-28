import { useContext } from "react";
import logo from "../assets/images/more/logo1.png";
import { Link } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error.message));
  };

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
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="dropdown dropdown-bottom dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1">
                      {user?.displayName}
                      Tausif
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-1 p-5 shadow-sm space-y-2"
                    >
                      <p className="text-lg font-semibold">{user?.email}</p>
                      <Link
                        to="/users-profile"
                        className="btn bg-[#331A15] text-white md:text-lg"
                      >
                        Users
                      </Link>
                      <Link
                        onClick={handleLogout}
                        className="btn border hover:border-red-600 hover:bg-white bg-red-600 text-white hover:text-red-600 text-lg"
                      >
                        Log-out
                      </Link>
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <Link to="/signIn" className="btn md:text-xl">
                    SignIn
                  </Link>
                  <Link to="/signUp" className="btn md:text-xl">
                    SignUp
                  </Link>
                </div>
              )}
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 rancho-font">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="dropdown dropdown-bottom dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1">
                      {user?.displayName}
                      Tausif
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-1 p-5 shadow-sm space-y-2"
                    >
                      <p className="text-lg font-semibold">{user?.email}</p>
                      <Link
                        to="/users-profile"
                        className="btn bg-[#331A15] text-white md:text-lg"
                      >
                        Users
                      </Link>
                      <Link
                        onClick={handleLogout}
                        className="btn border hover:border-red-600 hover:bg-white bg-red-600 text-white hover:text-red-600 text-lg"
                      >
                        Log-out
                      </Link>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-x-3">
                  <Link to="/signIn" className="btn md:text-xl">
                    SignIn
                  </Link>
                  <Link to="/signUp" className="btn md:text-xl">
                    SignUp
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
