import { Link, useLoaderData } from 'react-router'
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';
import { GiCoffeeCup } from "react-icons/gi";
import Banner from './Banner';


const Home = () => {

    const coffeesData = useLoaderData();
    const [coffees, setCoffees] = useState(coffeesData)
    console.log(coffeesData)
  return (
    <div>
      <Banner></Banner>
      <div className='text-center mt-20'>
        <h1 className='text-5xl rancho-font font-bold'>Our Popular Products</h1>
        <Link className='btn bg-[#E3B577] text-[#331A15] rancho-font mt-7 items-center text-xl hover:bg-white hover:border-[#E3B577]' to='/add-coffee'>Add Coffee <GiCoffeeCup className='text-2xl' /></Link>
      </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-20'>
            {
              coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)  
            }
        </div>
    </div>
  )
}

export default Home