import { Link, useLoaderData } from 'react-router'
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';
import { GiCoffeeCup } from "react-icons/gi";
import Banner from './Banner';
import CoffeeGallery from './CoffeeGallery';
import coffeeCup from '../assets/images/more/4.png'


const Home = () => {

    const coffeesData = useLoaderData();
    const [coffees, setCoffees] = useState(coffeesData)

  return (
    <div>
      <Banner></Banner>
      <div className='text-center mt-20'>
        <h1 className='text-3xl md:text-5xl rancho-font font-bold mb-5'>Our Popular Products</h1>
        <Link className='btn bg-[#E3B577] text-[#331A15] rancho-font mt-7 items-center md:text-xl hover:bg-white hover:border-[#E3B577]' to='/add-coffee'>Add Coffee <GiCoffeeCup className='md:text-2xl' /></Link>
      </div>
      <div className='absolute'>
        <img className='w-3/5 md:w-4/5' src={coffeeCup} alt="" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-20 md:max-w-6xl md:mx-auto mx-6'>
            {
              coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)  
            }
      </div>
      <CoffeeGallery></CoffeeGallery>
    </div>
  )
}

export default Home