import { useParams } from "react-router-dom";
import Container from "../../componenets/container/Container";
import Button from "../../componenets/button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

const Product = () => {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();

  const {
    handelIncreseProductQty,
    handelDecreseProductQty,
    cartItems,
    getProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, []);



  return (
    <div>
      <Container>
        <div className="mt-4  shadow grid grid-cols-12">
          <div className="col-span-9 p-4">
            <h1 className="text-right text-3xl">{product?.productName}</h1>
            <div>
             <p className="text-right text-lg mt-8"><span>حافظه :</span> {product?.memory}</p>
              <p className="text-right text-lg mt-4"><span>رم :</span>{product?.ram}</p>
              <p className="text-right text-lg mt-4">{product?.graphicCompany}<span> :گرافیک  </span></p>
              <p className="text-right text-lg mt-8"><span>قیمت :</span>{product?.price}</p>
            </div>
          </div>

          {/* image secttion ------------ */}
          <div className="col-span-3 p-4 pt-8 ">
            <img className="rounded" src={product?.productImage} alt="" />

            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <Button
                className="mt-2 w-full py-3"
                variant="primary"
                onClick={() => {
                  handelIncreseProductQty(parseInt(params.id as string));
                }}
              >
                add to card
              </Button>
            ) : (
              <div>
                <Button
                  className="mt-2 w-full py-3"
                  variant="primary"
                  onClick={() => {
                    handelIncreseProductQty(parseInt(params.id as string));
                  }}
                >
                  +
                </Button>

                <span className="flex justify-center items-center">
                  {getProductQty(parseInt(params.id as string))}
                </span>

                <Button
                  className="mt-2 w-full py-3"
                  variant="primary"
                  onClick={() => {
                    handelDecreseProductQty(parseInt(params.id as string));
                  }}
                >
                  -
                </Button>

                <Button
                  className="mt-2 w-full py-3"
                  variant="danger"
                  onClick={() => {
                    handleRemoveProduct(parseInt(params.id as string));
                  }}
                >
                  حذف
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
