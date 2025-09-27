import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layouts/MainLayout';
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import CoffeeDetails from './components/CoffeeDetails';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthProvider from './Auth/AuthProvider';
import UsersProfile from './components/UsersProfile';
import UpdateUser from './components/UpdateUser';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement:<ErrorPage />,
    children:[
      {
        index:true,
        loader:() => fetch('https://espresso-emporium-server-side-ten.vercel.app/coffees'),
        Component:Home
      },
      {
        path:'/add-coffee',
        Component:AddCoffee
      },
      {
        path:'/coffee-details/:id',
        loader:({params}) => fetch(`https://espresso-emporium-server-side-ten.vercel.app/coffees/${params.id}`),
        Component:CoffeeDetails
      },
      {
        path:'/update-coffee/:id',
        loader:({params}) => fetch(`https://espresso-emporium-server-side-ten.vercel.app/coffees/${params.id}`),
        Component:UpdateCoffee
      },
      {
        path:'/signIn',
        Component:SignIn
      },
      {
        path:'/signUp',
        Component:SignUp
      },
      {
        path:'/users-profile',
        loader:() => fetch('https://espresso-emporium-server-side-ten.vercel.app/users-profile'),
        Component:UsersProfile
      },
      {
        path:'/update-user/:id',
        loader:({params}) => fetch(`https://espresso-emporium-server-side-ten.vercel.app/users-profile/${params.id}`),
        Component:UpdateUser
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
