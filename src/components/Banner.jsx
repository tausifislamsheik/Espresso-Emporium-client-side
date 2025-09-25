import bannerBg from '../assets/images/more/banner.png'
import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'

const Banner = () => {
  return (
    <div>
        <div className='relative'>
            <div className='mt-4'>
                <img src={bannerBg} alt="" />
            </div>
            <div className='relative -mt-96 text-white flex flex-col items-end mr-20 space-y-3'>
                <h1 className='rancho-font text-5xl'>Would you like a Cup of Delicious Coffee?</h1>
                <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your <br /> companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn bg-[#E3B577] text-[#331A15] rancho-font mt-7 text-xl hover:bg-white hover:border-[#E3B577] mr-66'>Learn More</button>
            </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 bg-[#ECEAE3] p-10 text-center text-[#331A15] mt-49'>
            <div>
                <img className='mx-auto' src={icon1} alt="" />
                <h1 className='text-2xl md:text-3xl font-semibold rancho-font mt-3'>Awesome Aroma</h1>
                <p className='font-light'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img className='mx-auto' src={icon2} alt="" />
                <h1 className='text-2xl md:text-3xl font-semibold rancho-font mt-3'>High Quality</h1>
                <p className='font-light'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img className='mx-auto' src={icon3} alt="" />
                <h1 className='text-2xl md:text-3xl font-semibold rancho-font mt-3'>Pure Grades</h1>
                <p className='font-light'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img className='mx-auto' src={icon4} alt="" />
                <h1 className='text-2xl md:text-3xl font-semibold rancho-font mt-3'>Proper Roasting</h1>
                <p className='font-light'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
            
        </div>
    </div>
  )
}

export default Banner