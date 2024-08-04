
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import razzy from "../assets/images/razzy.jpg";

interface IAdminProps {}

const Admin: React.FC<IAdminProps> = () => {
  const [activeLinkName, setActiveLinkName] = useState<string>("");

  const handleLinkClick = (name: string) => {
    setActiveLinkName(name);
  };

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
            <li
              className={
                activeLinkName === "Overview"
                  ? "px-3 py-1 bg-gray-800 text-white rounded-md font-medium"
                  : "px-3"
              }
              onClick={() => handleLinkClick("Overview")}
            >
              <NavLink to="overview">
                Overview
              </NavLink>
            </li>
            <li
              className={
                activeLinkName === "Setup Zone"
                  ? "px-3 py-1 bg-gray-800 text-white rounded-md font-medium"
                  : "px-3"
              }
              onClick={() => handleLinkClick("Setup Zone")}
            >
              <NavLink to="setup-zone/new-user">
                Setup Zone
              </NavLink>
            </li>
            <li
              className={
                activeLinkName === "Services"
                  ? "px-3 py-1 bg-gray-800 text-white rounded-md font-medium"
                  : "px-3"
              }
              onClick={() => handleLinkClick("Services")}
            >
              <NavLink to="services/manage-user/all-user">
                Services
              </NavLink>
            </li>
            <li
              className={
                activeLinkName === "Reports"
                  ? "px-3 py-1 bg-gray-800 text-white rounded-md font-medium"
                  : "px-3"
              }
              onClick={() => handleLinkClick("Reports")}
            >
              <NavLink to="reports/all-transactions">
                Reports
              </NavLink>
            </li>
            <li
              className={
                activeLinkName === "Profile"
                  ? "px-3 py-1 bg-gray-800 text-white rounded-md font-medium"
                  : "px-3"
              }
              onClick={() => handleLinkClick("Profile")}
            >
              <NavLink to="profile">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <div className="col-span-3 col-start-2 flex gap-3 px-7">
        <div className="w-[1px] h-full bg-black ml-[-28px]"></div>
        <div className="ml-7 mt-10 pb-10">
          <p className="pb-4 mt-[-12px] font-medium">{activeLinkName}</p>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Admin;

