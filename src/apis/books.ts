// src/api/books.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/books';

export const fetchBooks = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const borrowBook = async (bookId: string, borrowDate: Date) => {
  const response = await axios.post(`${BASE_URL}/borrow`, { bookId, borrowDate });
  return response.data;
};

