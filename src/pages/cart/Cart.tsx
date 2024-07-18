import Button from "../../componenets/button/Button";
import CartItem from "../../componenets/cartItem/CartItem";
import Container from "../../componenets/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

const Cart = () => {
  const { cartItems } = useShoppingCartContext();
   

  return (
    <div>
      <Container>
        <div>
          {cartItems.map((item) => (
            <CartItem {...item} />
          ))}
        </div>
        
        <div className="bg-gray-200 rounded p-6">
          <p className="text-right">قیمت کل :5000</p>
          <p className="text-right">تخفیف شما : 1000</p>
          <p className="text-right">قیمت نهایی : 4000</p>
          <Button variant="success">ثبت سفارش</Button>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
