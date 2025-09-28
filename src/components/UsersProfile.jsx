import { useState } from "react";
import { useLoaderData } from "react-router";
import { IoMdEye } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { FaArrowLeftLong } from "react-icons/fa6";

const UsersProfile = () => {
  const initialUserData = useLoaderData();
  const [users, setUsers] = useState(initialUserData);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:3000/users-profile/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <>
      <Link
        className="rancho-font flex items-center text-xl font-bold gap-3 my-7 md:ml-20"
        to="/"
      >
        <FaArrowLeftLong /> Back To Home
      </Link>
      <h1 className="text-center rancho-font text-3xl md:text-4xl font-bold">Welcome To User's Profile</h1>

      <div className="divider"></div>

      <div className="overflow-x-auto max-w-7xl mx-auto my-20 border border-gray-200 rounded-xl p-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
          </thead>
          {users.map((user, index) => (
            <tbody key={user._id}>
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <th>
                  <div className="space-x-3">
                    <Link>
                      <button className="btn text-xl px-2 bg-[#D2B48C] text-white rounded-lg">
                        <IoMdEye />
                      </button>
                    </Link>
                    <Link to={`/update-user/${user._id}`}>
                      <button className="btn text-xl px-2 bg-[#3C393B] text-white rounded-lg">
                        <HiPencil />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn text-xl px-2 bg-[#EA4744] text-white rounded-lg"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default UsersProfile;
