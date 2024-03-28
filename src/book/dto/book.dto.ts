import { Category } from "../schemas/book.schema";

export class createBookDto{
    title:string;
    description:string;
    author:string;
    price:number;
    category:Category
}