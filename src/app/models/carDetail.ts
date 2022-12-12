import { CarImage } from "./carImage";

export interface CarDetail{
    id:number;
    brandId:number;
    colorId:number;
    carImage:CarImage[];
    modelYear:number;
    dailyPrice:number;
    description:string;
    carName:string;
    brandName:string;
    colorName:string
  }
