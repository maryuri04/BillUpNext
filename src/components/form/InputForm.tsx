import React from 'react';

interface InputFormProps {
    label: string;
    type?: string;
    register: any;
    name: string;
    validationRules?: any;
    errors?: any;
}

const InputForm = ({ label, type = 'text', register, name, validationRules, errors }: InputFormProps)  => {
    return (
        <div className="flex flex-col gap-y-2">
            <label htmlFor={name} className="text-lg font-semibold text-gray-200">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className="w-full max-w-md bg-gray-800 text-gray-300 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 px-3 py-2 transition-all duration-200"
                onWheel={(e) => e.currentTarget.blur()} // Evita que el input se enfoque al hacer scroll
                autoComplete='off'
                {...register(name, validationRules)}
            />
            {errors[name] && (
                <span className="text-red-500 text-sm font-medium">{errors[name].message}</span>
            )}
        </div>
    )
};

export default InputForm;
