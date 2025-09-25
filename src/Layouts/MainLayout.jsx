import Header from '../components/Header'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default MainLayout