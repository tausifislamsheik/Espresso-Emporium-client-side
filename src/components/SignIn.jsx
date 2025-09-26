import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import { FaArrowLeftLong } from "react-icons/fa6";

const SignIn = () => {
  const { signInUser } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        const signInUser = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        fetch("http://localhost:3000/users-profile", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signInUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Link
        className="rancho-font flex items-center text-xl font-bold gap-3 m-12"
        to="/"
      >
        <FaArrowLeftLong /> Back To Home
      </Link>

      <div className="card bg-[#F4F3F0] max-w-lg mx-auto my-16 shrink-0">
        <div className="card-body">
          <h1 className="text-center my-5 text-3xl font-bold text-[#331A15] rancho-font">
            Sign In Your Account
          </h1>
          <div className="divider">OR</div>
          <form onSubmit={handleSignIn} className="space-y-4">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input border-none w-full"
              placeholder="Enter Your Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input border-none w-full"
              placeholder="Enter Your Password"
            />
            <button className="btn rancho-font w-full mt-5 bg-[#D2B48C] text-[#331A15] text-xl">
              Sign In
            </button>
          </form>
          <div className="text-center mt-2">
            <h1 className="font-semibold">
              Don't have an account?{" "}
              <Link className="text-red-600 font-bold" to="/signUp">
                Sign Up
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
