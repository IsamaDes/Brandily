// src/api/borrows.ts
import axios from 'axios';
import Borrow  from '../models/Borrow'; // Import the Borrow model if needed

const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

// Fetch all borrow records
export const fetchBorrowRecords = async (): Promise<Borrow[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/borrows`);
    return response.data; // Assuming the API response contains an array of borrow records
  } catch (error) {
    console.error('Error fetching borrow records:', error);
    throw new Error('Failed to fetch borrow records'); // Handle errors as needed
  }
};

// Example function to fetch a single borrow record by ID
export const fetchBorrowById = async (id: number): Promise<Borrow> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/borrows/${id}`);
    return response.data; // Assuming the API response contains the borrow record
  } catch (error) {
    console.error(`Error fetching borrow record with ID ${id}:`, error);
    throw new Error('Failed to fetch borrow record'); // Handle errors as needed
  }
};

// Example function to create a new borrow record
export const createBorrowRecord = async (borrowData: Borrow): Promise<Borrow> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/borrows`, borrowData);
    return response.data; // Assuming the API returns the created borrow record
  } catch (error) {
    console.error('Error creating borrow record:', error);
    throw new Error('Failed to create borrow record'); // Handle errors as needed
  }
};

// Example function to update an existing borrow record
export const updateBorrowRecord = async (id: number, borrowData: Partial<Borrow>): Promise<Borrow> => {
  try {
    const response = await axios.put(`${API_BASE_URL}/borrows/${id}`, borrowData);
    return response.data; // Assuming the API returns the updated borrow record
  } catch (error) {
    console.error(`Error updating borrow record with ID ${id}:`, error);
    throw new Error('Failed to update borrow record'); // Handle errors as needed
  }
};

// Example function to delete a borrow record
export const deleteBorrowRecord = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/borrows/${id}`);
  } catch (error) {
    console.error(`Error deleting borrow record with ID ${id}:`, error);
    throw new Error('Failed to delete borrow record'); // Handle errors as needed
  }
};
