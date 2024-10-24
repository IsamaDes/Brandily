// src/helpers/storage.ts

interface User {
  email: string;
  password: string;
  // Add other fields if necessary
}

const LocalStorage = {
  // Retrieve the current user from local storage
  getCurrentUser: (): User | null => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null; // Parse the JSON string back to an object
  },

  // Save the current user to local storage
  setCurrentUser: (user: User): void => {
    localStorage.setItem("currentUser", JSON.stringify(user)); // Convert the user object to a JSON string
  },

  // Optionally, clear the current user from local storage
  clearCurrentUser: (): void => {
    localStorage.removeItem("currentUser");
  },
};

export default LocalStorage;
