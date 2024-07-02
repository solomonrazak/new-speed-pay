import { Link } from "react-router-dom";

const Home = () => {
  return (
    <center>
      <div className="w-screen flex flex-col items-center mt-9 min-h-full">
        <div className="flex flex-col mt-10 text-center gap-4 mb-9">
          <h1 className="text-lg font-bold">Welcome to Speedpay App</h1>
          <h2 className="text-[18px] font-medium">Choose Login Options</h2>
        </div>

        <div className="flex gap-5">
          <button className="bg-slate-900 text-white px-3 py-1 rounded-md font-medium">
            <Link to="/admin-login">Admin</Link>
          </button>
          <button className="bg-slate-900 text-white px-3 py-1 rounded-md font-medium">
            <Link to="/teller-login">Teller</Link>
          </button>
        </div>
      </div>
    </center>
  );
};

export default Home;
