import { useEffect, useState } from "react";
import Button from "../button/Button";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/server";
import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";


interface ICartItem{
  id:number;
  qty:number;
}

const CartItem = ({id,qty}:ICartItem) => {
  const [product,setProduct]=useState<IProduct>();
  const{handelIncreseProductQty,handelDecreseProductQty,handleRemoveProduct}=useShoppingCartContext()


  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data)
    });
  }, []);


  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
    <Link to={`/product/${id}`}>
      <img
        className="rounded w-28 "
        src={product?.productImage}
        alt=""
        />
        </Link>

      <div className="mr-4 w-full">
        <h3 className="text-right">{product?.productName}</h3>
      
        <h3 className="text-right">{product?.price}</h3>

        <div className="ml-10 mt-10 w-full ">
        <Button onClick={()=>handleRemoveProduct(id)}  className="mr-2" variant="danger">حذف</Button>
        <Button onClick={()=>handelIncreseProductQty(id)}   variant="primary">+</Button>
         <span className="mx-2">{qty}</span>
        <Button onClick={()=>handelDecreseProductQty(id)}   variant="primary">-</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
