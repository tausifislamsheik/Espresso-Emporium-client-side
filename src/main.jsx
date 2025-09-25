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

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        loader:() => fetch('http://localhost:3000/coffees'),
        Component:Home
      },
      {
        path:'/add-coffee',
        Component:AddCoffee
      },
      {
        path:'/coffee-details/:id',
        loader:({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component:CoffeeDetails
      },
      {
        path:'/update-coffee/:id',
        loader:({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
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
        loader:() => fetch('http://localhost:3000/users-profile'),
        Component:UsersProfile
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
