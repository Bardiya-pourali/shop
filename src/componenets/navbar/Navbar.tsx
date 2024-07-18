import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";

const Navbar = () => {
  const { cartQty, handleLogout, isLogin } = useShoppingCartContext();
  return (
    <div className="h-14 border-b shadow flex items-center">
      <Container>
        <div className="flex justify-between flex-row-reverse items-center">
          <div>
            <ul className="flex flex-row-reverse">
              <li className="ml-4 mr-4 rounded px-4 py-1 hover:bg-violet-800 hover:text-white transition-all duration-300">
                <Link to="/store">خانه</Link>
              </li>
              {/* <li className="ml-4">
                <Link to="/store">فروشگاه </Link>
              </li> */}
            </ul>
          </div>
          <div className="flex items-center">
            {isLogin ? (
              <Button className="mx-3" variant="primary" onClick={handleLogout}>
                خروج
              </Button>
            ) : (
              <Link to="/login">
                <Button className="mx-3" variant="primary">
                  ورود
                </Button>{" "}
              </Link>
            )}

            <Link to="/cart">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="md:size-8 size-4 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>

              <span className="absolute top-0 bg-violet-800 text-white rounded-full px-1 text-xs">{cartQty !== 0 ? cartQty : ""}</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
