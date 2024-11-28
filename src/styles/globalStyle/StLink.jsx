import { Link } from "react-router-dom";

const StLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="m-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
    >
      {children}
    </Link>
  );
};
export default StLink;
