import { Link } from "react-router-dom";
import Container from "../../componenets/container/Container";
import ProductItem from "../../componenets/productItem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { IProduct } from "../../types/server";

const Store = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5 lg:text-2xl">جدیدترین محصولات</h1>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-4 mt-4">
          {products.map((item) => (
            <Link key={item?.id} to={`/product/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Store;
