// src/models/Borrow.tsx
import { fetchBorrowRecords } from '../apis/borrows';

// Define an interface for the borrow data structure
interface IBorrowData {
  id: number;
  bookId: number;
  userId: number;
  borrowDate: string;
  returnDate?: string; // Optional property
  status: 'borrowed' | 'returned'; 
}

class Borrow {
  // Define class properties
  id: number;
  bookId: number;
  userId: number;
  borrowDate: string;
  returnDate?: string; 
  status: 'borrowed' | 'returned'; 

  constructor(
    id: number,
    bookId: number,
    userId: number,
    borrowDate: string,
    returnDate?: string,
    status: 'borrowed' | 'returned' = 'borrowed' 
  ) {
    this.id = id;
    this.bookId = bookId;
    this.userId = userId;
    this.borrowDate = borrowDate;
    this.returnDate = returnDate;
    this.status = status;
  }

  static async fetchAllBorrows(): Promise<Borrow[]> {
    const borrowData: IBorrowData[] = await fetchBorrowRecords();
    return borrowData.map((record) => new Borrow(
      record.id,
      record.bookId,
      record.userId,
      record.borrowDate,
      record.returnDate,
      record.status
    ));
  }
}

export default Borrow;
