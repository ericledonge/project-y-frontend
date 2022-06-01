const Input = ({ label, placeholder, type, name, id, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={id}
        autoComplete={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
    </div>
  );
};

export default Input;
