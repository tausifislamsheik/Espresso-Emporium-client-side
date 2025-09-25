import navBgImg from '../assets/images/more/navBg.jpg'
import logo from '../assets/images/more/logo1.png'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='mb-20'>
        <div className='absolute w-full'>
          <img className='h-16 md:h-20 w-full' src={navBgImg} alt="" />
        </div>
        <div className='flex justify-evenly md:justify-around pt-4'>
          <div className='mr-30'></div>
          <div className='relative flex items-center justify-center rancho-font gap-0.5 md:gap-2'>
            <img className='h-8 md:h-12 md:w-12' src={logo} alt="" />
            <h1 className='text-xl md:text-4xl text-white'>Espresso Emporium</h1>
          </div>
          <div className='relative rancho-font'>
            <Link to='/signIn' className='btn mr-3 md:text-xl'>SignIn</Link>
            <Link to='/signUp' className='btn md:text-xl'>SignUp</Link>
          </div>
        </div>
    </div>
  )
}

export default Header