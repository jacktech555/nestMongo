import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { createBookDto } from './dto/book.dto';
import { UpdateBookDto } from './dto/updateBook.dto';

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
    book:createBookDto,
  ): Promise<Book> {
    return this.bookService.create(book);
  }


  @Get(':id')
  async getBookById(
    @Param('id')
    id:string
  ): Promise<Book> {
    const Book =  this.bookService.findById(id);
    if(!Book) throw new Error (`Book not found`)
    return Book;
  }

  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.updateById(id, book);
  }

  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.deleteById(id);
  }
  
}
