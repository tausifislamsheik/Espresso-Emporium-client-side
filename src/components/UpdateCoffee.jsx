import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { FaArrowLeftLong } from "react-icons/fa6";

const UpdateCoffee = () => {
  const { _id, photo, name, price, category, details, supplier, quantity } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Coffee successfully updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
    <Link className="rancho-font flex items-center text-xl font-bold gap-3 my-7" to='/'><FaArrowLeftLong /> Back To Home</Link>
    
    <div className="bg-[#F4F3F0] p-20 mb-20">
      <div className="mb-10 max-w-3xl mx-auto space-y-5 text-center">
        <h1 className="rancho-font text-4xl  font-semibold">
          Update Existing Coffee Details
        </h1>
        <p className="text-[#1A1A1ACC]">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              name="name"
              className="input w-full border-none"
              placeholder="Enter Coffee Name"
              defaultValue={name}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Quantity</legend>
            <input
              type="text"
              name="quantity"
              className="input w-full border-none"
              placeholder="Enter Quantity"
              defaultValue={quantity}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Supplier</legend>
            <input
              type="text"
              name="supplier"
              className="input w-full border-none"
              placeholder="Enter Supplier"
              defaultValue={supplier}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Price</legend>
            <input
              type="text"
              name="price"
              className="input w-full border-none"
              placeholder="Enter Price"
              defaultValue={price}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Category</legend>
            <input
              type="text"
              name="category"
              className="input w-full border-none"
              placeholder="Enter Category"
              defaultValue={category}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo</legend>
            <input
              type="text"
              name="photo"
              className="input w-full border-none"
              placeholder="Enter Photo URL"
              defaultValue={photo}
            />
          </fieldset>
        </div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Details</legend>
          <textarea
            type="text"
            name="details"
            rows=""
            cols="50"
            className="input w-full border-none h-10"
            placeholder="Enter Details"
            defaultValue={details}
          />
        </fieldset>
        <input
          type="submit"
          className="btn rancho-font w-full mt-5 bg-[#D2B48C] text-[#331A15] text-xl border-2 border-[#331A15]"
          value="Update Coffee Details"
        />
      </form>
    </div>
    </div>
  );
};

export default UpdateCoffee;
