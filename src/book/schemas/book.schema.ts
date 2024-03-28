import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
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
  description: string;

  @Prop()
  price: number;

  @Prop()
  category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);
