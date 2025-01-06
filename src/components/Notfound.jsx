import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="bg-white min-h-[100vh] flex justify-center items-center text-red-600">
      <div className="error">
        <h2 className="md:text-7xl text-3xl">404: Not Found Page🚫</h2>
        <button className="bg-red-600 hover:bg-red-700 text-white text-3xl p-4 mx-auto mt-5 block rounded-md">
          <Link to="/">Back To Home</Link>
        </button>
      </div>
    </div>
  );
}
