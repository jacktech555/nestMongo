import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Catagory {
  CRIME = 'Crime',
  CLASSIC = 'Classic',
  GOD = 'God',
}
@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  discription: string;

  @Prop()
  price: number;

  @Prop()
  catagory: Catagory;
}

export const BookSchema = SchemaFactory.createForClass(Book);
