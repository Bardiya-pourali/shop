import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Layout from "./componenets/layout/Layout";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { useShoppingCartContext } from "./context/ShoppingCartContext";
import PrivateRoute from "./componenets/privateRoute/PrivateRoute";
import Login from "./pages/login/Login";

function App() {
  
  const{isLogin}=useShoppingCartContext();
 
  return (

    
      <Layout>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={isLogin?<Navigate to="/" /> :<Login />} />
       
       <Route element={<PrivateRoute/>}  >
          <Route path="/cart" element={<Cart />} />
       </Route>
        </Routes>
      </Layout>
    
  );
}

export default App;
