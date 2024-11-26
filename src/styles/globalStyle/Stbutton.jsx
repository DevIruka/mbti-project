export const StBlueButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
    >
      {children}
    </button>
  );
};

export const StRedButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-300"
    >
      {children}
    </button>
  );
};
