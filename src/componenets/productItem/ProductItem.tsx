import { IProduct } from "../../types/server";

type ProductItem = IProduct;

const ProductItem = ({ productName, productImage }: ProductItem) => {
  return (
    <div className="shadow border rounded pb-4">
      <img
        className="rounded-t w-full h-30 lg:h-80"
        src={productImage}
        alt=""
      />
      <div className="flex justify-between flex-row-reverse p-4 mt-2 ">
        <h3 className="line-clamp-1 text-right text-sm lg:text-md">{productName}</h3>
      </div>
      
    </div>
  );
};

export default ProductItem;
