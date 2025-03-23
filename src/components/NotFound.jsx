import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Oops! Page not found.</p>
      <Link
        to="/"
        className="mt-4 px-6 py-3 bg-black text-white rounded-md text-lg"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
