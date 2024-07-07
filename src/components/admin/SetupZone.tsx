import { Link, Outlet } from "react-router-dom";
import { UserContextProvider } from "../context/UserContext";



const SetupZone = () => {
  return (
    <UserContextProvider>
    <main className="w-full">
      <div className="flex">
        <p><Link to="new-user">New User</Link></p>
        <p><Link to="new-service">New Service</Link></p>
      </div>
      <div className="flex justify-center items-center mx-auto">
      <div className="border border-slate-900 rounded-md p-20">
        <Outlet />

      </div>
      </div>
    </main>
    </UserContextProvider>
  )
}

export default SetupZone;