import Swal from "sweetalert2";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Successfully Added!",
            text: "You clicked the button!",
            icon: "success",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Link
        className="rancho-font flex items-center text-xl font-bold gap-3 my-7"
        to="/"
      >
        <FaArrowLeftLong /> Back To Home
      </Link>

      <div className="bg-[#F4F3F0] p-20 mb-20">
        <div className="mb-10 max-w-3xl mx-auto space-y-5 text-center">
          <h1 className="rancho-font text-4xl  font-semibold">
            Add New Coffee
          </h1>
          <p className="text-[#1A1A1ACC]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                name="name"
                className="input w-full border-none"
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Quantity</legend>
              <input
                type="text"
                name="quantity"
                className="input w-full border-none"
                placeholder="Enter Quantity"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Supplier</legend>
              <input
                type="text"
                name="supplier"
                className="input w-full border-none"
                placeholder="Enter Supplier"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Price</legend>
              <input
                type="text"
                name="price"
                className="input w-full border-none"
                placeholder="Enter Price"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category</legend>
              <input
                type="text"
                name="category"
                className="input w-full border-none"
                placeholder="Enter Category"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo</legend>
              <input
                type="text"
                name="photo"
                className="input w-full border-none"
                placeholder="Enter Photo URL"
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
            />
          </fieldset>
          <input
            type="submit"
            className="btn rancho-font w-full mt-5 bg-[#D2B48C] text-[#331A15] text-xl border-2 border-[#331A15]"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
