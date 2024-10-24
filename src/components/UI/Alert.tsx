import React from 'react';

interface AlertProps {
    variant?: 'success' | 'error' | 'info' | 'warning' | 'destructive'; // Added 'destructive'
    className?: string;
    children: React.ReactNode;
  }

const variantStyles = {
    success: 'bg-green-100 text-green-800 border border-green-300',
    error: 'bg-red-100 text-red-800 border border-red-300',
    info: 'bg-blue-100 text-blue-800 border border-blue-300',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    destructive: 'bg-red-200 text-red-900 border border-red-500', // Added styles for 'destructive'
  };

const Alert: React.FC<AlertProps> = ({ variant = 'info', className = '', children }) => {
  const styles = variantStyles[variant];

  return (
    <div className={`p-4 rounded-md ${styles} ${className}`}>
      {children}
    </div>
  );
};

export const AlertDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="mt-2">{children}</div>;
};

export default Alert;
