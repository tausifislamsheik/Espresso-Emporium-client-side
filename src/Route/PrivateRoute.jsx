import { use } from "react"
import { AuthContext } from "../Auth/AuthProvider"
import { Navigate } from "react-router";

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext)

    if(loading){
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-bars loading-xl text-[#331A15]"></span></div>
    }

    if(user && user?.email){
        return children
    }
  return (
      <Navigate to='/signIn'></Navigate>
  )
}

export default PrivateRoute