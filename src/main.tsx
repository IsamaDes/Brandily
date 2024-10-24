import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assuming App.tsx is in the same directory
import "./styles/index.css";
import './styles/tailwind.css'
import { AuthProvider } from "./context/AuthContext";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
     <AuthProvider>
     <App />
     </AuthProvider>
    
  </React.StrictMode>
);
