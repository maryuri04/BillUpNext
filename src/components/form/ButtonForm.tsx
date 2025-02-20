interface ButtonFormProps {
    name: string;
    type: "submit" | "reset" | "button";
    onClick?: () => void;
}

const ButtonForm = ({ name, type, onClick }: ButtonFormProps) => {
    return (
        <button
            type={type}
            className="bg-indigo-600 text-white py-3 px-6 min-w-40 text-lg rounded-lg w-full border-2 border-indigo-700 font-semibold 
            hover:bg-indigo-700 hover:border-indigo-600 transition-all duration-200 
            shadow-lg hover:shadow-xl transform hover:scale-105 
            focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={onClick}
        >
            {name}
        </button>
    );
};

export default ButtonForm;