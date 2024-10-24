import React from 'react';

interface inputFieldProps{
    id: string;
    name: string;
    type: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const InputField: React.FC<inputFieldProps> = ({
    id,
    name,
    type,
    label,
    value,
    onChange,
    required = false,
}) => {
    return (
        <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    );
};

export default InputField;
