//  P R O D U C T   I N T E R F A C E
// Create a datatype product for use across the application

export interface IProduct{
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}
