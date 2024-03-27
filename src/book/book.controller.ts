import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { create } from 'domain';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async findAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  async createBook(
    @Body()
    book,
  ): Promise<Book> {
    return this.bookService.create(book);
  }
}
