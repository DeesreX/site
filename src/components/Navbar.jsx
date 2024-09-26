import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          AI TECH
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
