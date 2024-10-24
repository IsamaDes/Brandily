import React from 'react';

interface SubmitButtonProps {
    isLoading: boolean;
    text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({isLoading, text}) => {
    return (
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : text}
        </button>
      );
    };
    
    export default SubmitButton;