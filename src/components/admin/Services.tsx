import { NavLink, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <main>
      <div className="flex gap-2">
      <NavLink to="manage-user/all-user"  className={({isActive}) => isActive ? 'border-2 border-orange-400 border-b-0 rounded-t-md' : 'border-black border-1 border-b-0 rounded-t-md'}>
      <p className="border-1 border-b-0 rounded-t-md px-4 py-1">Manage User</p>
      </NavLink>
      <NavLink to="manage-service/all-services"  className={({isActive}) => isActive ? 'border-2 border-orange-400 border-b-0 rounded-t-md' : 'border-black border-1 border-b-0 rounded-t-md'}>
      <p className="border-1 border-b-0 rounded-t-md px-4 py-1">Manage Service</p>
      </NavLink>
      </div>
      <div className="border border-gray-900 p-3">
        <Outlet />
      </div>
    </main>
  )
}

export default Services;