import { IoMdEye } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
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
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const result = coffees.filter(coffee => coffee._id !== id)
              setCoffees(result);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side shadow-sm p-7 bg-white/20 backdrop-blur-sm">
      <figure>
        <img className="w-32 md:w-42 h-32 md:h-46" src={photo} alt="Coffee" />
      </figure>
      <div className="flex justify-around mt-10 w-full">
        <div className="space-y-3">
          <h2 className="font-semibold text-sm md:text-xl">
            Name: <span className="text-[#5C5B5B] font-light">{name}</span>
          </h2>
          <p className="font-semibold text-sm md:text-xl">
            Quantity:{" "}
            <span className="text-[#5C5B5B] font-light">{quantity}</span>
          </p>
          <p className="font-semibold text-sm md:text-xl">
            Price:{" "}
            <span className="text-[#5C5B5B] font-light">{price} Taka</span>
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <Link to={`/coffee-details/${_id}`}>
            <button className="btn md:text-2xl px-3 md:px-2 bg-[#D2B48C] text-white rounded-lg">
              <IoMdEye />
            </button>
          </Link>

          <Link to={`/update-coffee/${_id}`}>
            <button className="btn md:text-2xl px-3 md:px-2 bg-[#3C393B] text-white rounded-lg">
              <HiPencil />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn md:text-2xl px-3 md:px-2 bg-[#EA4744] text-white rounded-lg"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
