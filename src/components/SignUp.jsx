import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import { use } from "react";
import Swal from "sweetalert2";
import { FaArrowLeftLong } from "react-icons/fa6";

const SignUp = () => {
  const { createUser, userProfileUpdate } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { email, password, name, ...rest } = Object.fromEntries(formData.entries());
    console.log(name)

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
         navigate('/');
        userProfileUpdate({displayName:name})
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account has been created",
          showConfirmButton: false,
          timer: 1500,
        });

        const userProfileData = {
          email,
          ...rest,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        fetch("https://espresso-emporium-server-side-i25n.vercel.app/users-profile", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfileData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Link
        className="rancho-font flex items-center text-xl font-bold gap-3 m-12"
        to="/"
      >
        <FaArrowLeftLong /> Back To Home
      </Link>

      <div className="card bg-[#F4F3F0] md:max-w-lg md:mx-auto mx-6 my-10 shrink-0">
        <div className="card-body">
          <h1 className="text-center my-5 text-3xl font-bold text-[#331A15] rancho-font">
            Sign Up Your Account
          </h1>
          <div className="divider">OR</div>
          <form onSubmit={handleSignUp} className="space-y-3">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input border-none w-full"
              placeholder="Enter Your Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input border-none w-full"
              placeholder="Enter Your Email"
            />
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input border-none w-full"
              placeholder="Enter Your Photo URL"
            />
            <label className="label">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="input border-none w-full"
              placeholder="Enter Your Phone Number"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input border-none w-full"
              placeholder="Enter Your Password"
            />
            <button className="btn rancho-font w-full mt-5 bg-[#D2B48C] text-[#331A15] text-xl">
              Sign Up
            </button>
          </form>
          <div className="text-center mt-2">
            <h1 className="font-semibold">
              Already have an account?{" "}
              <Link className="text-red-600 font-bold" to="/signIn">
                Sign In
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
