import { IoMdEye } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, price, quantity, photo } = coffee;

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
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-[#F5F4F1] shadow-sm p-7">
      <figure>
        <img className="w-42 h-46" src={photo} alt="Coffee" />
      </figure>
      <div className="flex justify-around mt-10 w-full">
        <div className="space-y-3">
          <h2 className="font-semibold">
            Name: <span className="text-[#5C5B5B] font-light">{name}</span>
          </h2>
          <p className="font-semibold">
            Quantity:{" "}
            <span className="text-[#5C5B5B] font-light">{quantity}</span>
          </p>
          <p className="font-semibold">
            Price:{" "}
            <span className="text-[#5C5B5B] font-light">{price} Taka</span>
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <button className="btn text-2xl px-2 bg-[#D2B48C] text-white rounded-lg">
            <IoMdEye />
          </button>
          <button className="btn text-xl px-2 bg-[#3C393B] text-white rounded-lg">
            <HiPencil />
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn text-2xl px-2 bg-[#EA4744] text-white rounded-lg"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
