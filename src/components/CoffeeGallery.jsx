import coffee1 from '../assets/images/cups/Rectangle 9.png'
import coffee2 from '../assets/images/cups/Rectangle 10.png'
import coffee3 from '../assets/images/cups/Rectangle 11.png'
import coffee4 from '../assets/images/cups/Rectangle 12.png'
import coffee5 from '../assets/images/cups/Rectangle 13.png'
import coffee6 from '../assets/images/cups/Rectangle 14.png'
import coffee7 from '../assets/images/cups/Rectangle 15.png'
import coffee8 from '../assets/images/cups/Rectangle 16.png'

const CoffeeGallery = () => {
  return (
    <div className='my-20 text-center md:max-w-6xl md:mx-auto mx-6'>
        <p className='font-semibold text-gray-500'>Follow Us Now</p>
        <h1 className='text-5xl rancho-font font-bold mt-4'>Follow on Instagram</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-10'>
           <img src={coffee1} alt="" />
           <img src={coffee2} alt="" />
           <img src={coffee3} alt="" />
           <img src={coffee4} alt="" />
           <img src={coffee5} alt="" />
           <img src={coffee6} alt="" />
           <img src={coffee7} alt="" />
           <img src={coffee8} alt="" />
        </div>
    </div>
  )
}

export default CoffeeGallery