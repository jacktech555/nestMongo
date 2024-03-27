import { Prop, Schema } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})

export class Book{

    @Prop()
    title:string;

    @Prop()
    author:string;

    @Prop()
    discription:string;

    @Prop()
    price:number;
}