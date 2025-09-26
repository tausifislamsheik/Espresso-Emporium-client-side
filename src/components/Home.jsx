import { Link, useLoaderData } from 'react-router'
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';
import { GiCoffeeCup } from "react-icons/gi";
import Banner from './Banner';
import CoffeeGallery from './CoffeeGallery';
import coffeeCup from '../assets/images/more/4.png'
import coffeeStore from '../assets/images/more/5.png'


const Home = () => {

    const coffeesData = useLoaderData();
    const [coffees, setCoffees] = useState(coffeesData)

  return (
    <div>
      <Banner></Banner>
      <div className='text-center mt-20'>
        <h1 className='text-5xl rancho-font font-bold'>Our Popular Products</h1>
        <Link className='btn bg-[#E3B577] text-[#331A15] rancho-font mt-7 items-center text-xl hover:bg-white hover:border-[#E3B577]' to='/add-coffee'>Add Coffee <GiCoffeeCup className='text-2xl' /></Link>
      </div>
      <div className='absolute'>
        <img className='w-1/5' src={coffeeCup} alt="" />
        <img className='w-1/5 ml-[1217px]' src={coffeeStore} alt="" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-20 max-w-6xl mx-auto'>
            {
              coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)  
            }
      </div>
      <CoffeeGallery></CoffeeGallery>
    </div>
  )
}

export default Home