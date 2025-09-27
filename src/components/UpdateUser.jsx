import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { FaArrowLeftLong } from "react-icons/fa6";

const UpdateUser = () => {
  const { _id, name, email, phone, photo } = useLoaderData();

  const handleUpdateUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    fetch(`https://espresso-emporium-server-side-i25n.vercel.app/users-profile/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User profile updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <Link
        className="rancho-font flex items-center text-xl font-bold gap-3 my-7 md:ml-20"
        to="/users-profile"
      >
        <FaArrowLeftLong /> Back To Profile
      </Link>

      <div className="card bg-[#F4F3F0] max-w-lg mx-auto my-14 shrink-0">
        <div className="card-body">
          <h1 className="text-center my-5 text-3xl font-bold text-[#331A15] rancho-font">
            Update Your Profile
          </h1>
          <div className="divider">OR</div>
          <form onSubmit={handleUpdateUser} className="space-y-3">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input border-none w-full"
              placeholder="Enter Your Name"
              defaultValue={name}
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input border-none w-full"
              placeholder="Enter Your Email"
              defaultValue={email}
            />
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input border-none w-full"
              placeholder="Enter Your Photo URL"
              defaultValue={photo}
            />
            <label className="label">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="input border-none w-full"
              placeholder="Enter Your Phone Number"
              defaultValue={phone}
            />
            <button className="btn rancho-font w-full mt-5 bg-[#D2B48C] text-[#331A15] text-xl">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
