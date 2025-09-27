import { Link, useLoaderData } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

const CoffeeDetails = () => {
    const coffeeDetail = useLoaderData();
    const {photo, name, quantity, details, category, price} = coffeeDetail; 
  return (
    <>
    <Link className="rancho-font ml-20 flex items-center text-xl font-bold mt-10 gap-3" to='/'><FaArrowLeftLong /> Back To Home</Link>
    <div className="card card-side md:max-w-2xl md:mx-auto mx-6 justify-around p-10 shadow-sm my-20 bg-[#F4F3F0] flex-col">
      <figure>
        <img
        className="w-40 md:w-60"
          src={photo}
          alt="Coffee"
        />
      </figure>
      <div className="space-y-3 mt-14">
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
          <p className="font-semibold">
            Category:{" "}
            <span className="text-[#5C5B5B] font-light">{category}</span>
          </p>
          <p className="font-semibold">
            Details:{" "}
            <span className="text-[#5C5B5B] font-light">{details.slice(0,30)}</span>
          </p>
          
        </div>
    </div>
    </>
  );
};

export default CoffeeDetails;
