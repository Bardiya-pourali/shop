export interface IProduct {
    id: string;
    productName: string;
    price: number;
    productImage: string;
    rating: IProductRating;
    memory:string;
    ram:string;
    graphicCompany:string;
  }
  
 export  interface IProductRating {
    rate: number;
    count: number;
  }