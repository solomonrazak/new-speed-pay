import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <main>
      <div className="flex gap-2">
      <p><Link to="manage-user">Manage User</Link></p>
      <p><Link to="manage-service">Manage Service</Link></p>
      </div>
      <div className="border border-gray-900 p-3">
        <Outlet />
      </div>
    </main>
  )
}

export default Services;