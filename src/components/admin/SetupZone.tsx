import { NavLink, Outlet } from "react-router-dom";
import { UserContextProvider } from "../context/UserContext";
import { ServiceContextProvider } from "../context/ServiceContext";



const SetupZone = () => {
  return (
    <ServiceContextProvider>
    <UserContextProvider>
    <main className="w-full">
      <div className="flex gap-2">
        <NavLink to="new-user" className={({isActive}) => isActive ? 'border-2 border-orange-400 border-b-0 rounded-t-md' : 'border-black border-1 border-b-0 rounded-t-md'}>
        <p className="border-1 border-b-0 rounded-t-md px-4 py-1">New User</p>
        </NavLink>
        <NavLink to="new-service" className={({isActive}) => isActive ? 'border-2 border-orange-400 border-b-0 rounded-t-md' : 'border-black border-1 border-b-0 rounded-t-md'}>
        <p className="border-1 border-b-0 rounded-t-md px-4 py-1">New Service</p>
        </NavLink>
      </div>
      <div className="flex justify-center items-center mx-auto">
      <div className="border border-slate-900 rounded-b-md p-20">
        <Outlet />

      </div>
      </div>
    </main>
    </UserContextProvider>
    </ServiceContextProvider>
  )
}

export default SetupZone;