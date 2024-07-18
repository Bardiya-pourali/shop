import { Navigate, Outlet } from "react-router-dom"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"

const PrivateRoute = () => {
    const{isLogin }=useShoppingCartContext()

  return (
    <>
      {
        isLogin?<Outlet />: <Navigate to="/login" />
      }
    </>
  )
}

export default PrivateRoute
