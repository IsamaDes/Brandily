import React from 'react';

interface CardProps {
  header?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ header, title, children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
      {header && <div className="bg-gray-200 p-4">{header}</div>}
      {title && <div className="p-4 text-lg font-semibold border-b">{title}</div>}
      <div className="p-4">{children}</div>
    </div>
  );
};

// Define and export additional components
export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return <div className={`bg-gray-200 p-4 ${className}`}>{children}</div>;
  };

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return <div className="p-4 text-lg font-semibold border-b">{children}</div>;
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return <div className="p-4">{children}</div>;
};

export default Card;
