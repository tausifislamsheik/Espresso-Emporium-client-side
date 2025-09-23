import { useLoaderData } from 'react-router'
import CoffeeCard from './CoffeeCard';

const Home = () => {

    const coffeesData = useLoaderData();
    console.log(coffeesData)
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-20'>
            {
              coffeesData.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)  
            }
        </div>
    </div>
  )
}

export default Home