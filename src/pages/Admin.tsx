import { NavLink, Outlet } from 'react-router-dom';
import razzy from "../assets/images/razzy.jpg";

interface IAdminProps {}

const Admin: React.FC<IAdminProps> = () => {
  return (
    <main className="grid grid-cols-4 bg-gray-100">
      <aside className="col-span-1 h-screen bg-gray-200 p-5">
        <h1 className="text-2xl font-medium mb-8 text-center">SpeedPay</h1>
        <div className="ml-[-10px] flex flex-col items-center mb-5">
          <div className="rounded-full">
            <img
              src={razzy}
              alt="admin-image"
              width={50}
              height={70}
              className="rounded-full border-2 border-white"
            />
          </div>
          <h1 className="text-slate-900 font-medium">Solomon Razak</h1>
          <p className="font-thin text-[12px]">Admin</p>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col justify-center gap-5">
            <li>
              <NavLink
                to="overview"
                className={({ isActive }) =>
                  isActive ? 'px-3 py-1 bg-gray-800 text-white rounded-md font-medium' : 'p-2'
                }
              >
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="setup-zone/new-user"
                className={({ isActive }) =>
                  isActive ? 'px-3 py-1 bg-gray-800 text-white rounded-md font-medium' : 'p-2'
                }
              >
                Set up Zone
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services/manage-user/all-user"
                className={({ isActive }) =>
                  isActive ? 'px-3 py-1 font-medium bg-gray-800 text-white rounded-md' : 'p-2'
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reports/all-transactions"
                className={({ isActive }) =>
                  isActive ? 'px-3 py-1 font-medium bg-gray-800 text-white rounded-md' : 'p-2'
                }
              >
                Reports
              </NavLink>
            </li>
            <li>
              <NavLink
                to="profile"
                className={({ isActive }) =>
                  isActive ? 'px-3 py-1 bg-gray-800 text-white font-medium rounded-md' : 'p-2'
                }
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <div className="col-span-3 col-start-2 flex gap-3 px-7">
        <div className="w-[1px] h-full bg-black ml-[-28px]"></div>
        <div className="ml-7 mt-10">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Admin;
