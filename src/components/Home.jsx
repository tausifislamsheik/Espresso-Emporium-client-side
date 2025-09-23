import { Link, useLoaderData } from 'react-router'
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';
import { GiCoffeeCup } from "react-icons/gi";


const Home = () => {

    const coffeesData = useLoaderData();
    const [coffees, setCoffees] = useState(coffeesData)
    console.log(coffeesData)
  return (
    <div>
      <div className='text-center'>
        <Link className='btn bg-[#E3B577] text-[#331A15] rancho-font mt-7 items-center text-xl' to='/add-coffee'>Add Coffee <GiCoffeeCup className='text-2xl' /></Link>
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