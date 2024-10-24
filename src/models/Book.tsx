// src/models/Book.ts
import { fetchBooks } from '../apis/books';

// Define an interface for the book data structure
interface IBookData {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  coverImage: string;
  isAvailable: boolean;
  borrowDate?: string; // Optional property
}

class Book {
  // Define class properties
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  coverImage: string;
  isAvailable: boolean;
  borrowDate?: string; // Optional property

  constructor(
    id: number,
    title: string,
    author: string,
    genre: string,
    description: string,
    coverImage: string,
    isAvailable: boolean,
    borrowDate?: string
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.description = description;
    this.coverImage = coverImage;
    this.isAvailable = isAvailable;
    this.borrowDate = borrowDate;
  }

  static async fetchAllBooks(): Promise<Book[]> {
    const booksData: IBookData[] = await fetchBooks();
    return booksData.map((book) => new Book(
      book.id,
      book.title,
      book.author,
      book.genre,
      book.description,
      book.coverImage,
      book.isAvailable,
      book.borrowDate
    ));
  }
}

export default Book;
