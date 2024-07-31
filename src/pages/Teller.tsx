import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import razzy from "../assets/images/razzy.jpg";

interface ITellerProps {}

const Teller = ({}: ITellerProps) => {

  const [activeLinkName, setActiveLinkName] = useState<string>("");

  const handleLinkClick = (name: string) => {
    setActiveLinkName(name);
  }
 
  return (
    <main className="grid grid-cols-4 bg-gray-100">
      <aside className="col-span-1 h-screen bg-gray-200 p-5 min-h-full">
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
          <p className="font-thin text-[12px]">Teller</p>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col justify-center gap-5">
            <NavLink to="tell-overview"  className={({ isActive }) =>
                  isActive ? 'py-1 bg-gray-800 text-white rounded-md font-medium' : ''
                }
                onClick={() => handleLinkClick("Overview")}
                >
              <li className="px-3">Overview</li>
            </NavLink>
            <NavLink to="bill-payments/new-invoice"  className={({ isActive }) =>
                  isActive ? 'py-1 bg-gray-800 text-white rounded-md font-medium' : ''
                }
                onClick={() => handleLinkClick("Bill Payments")}
                >
              <li className="px-3">Bill Payments</li>
            </NavLink>
            <NavLink to="bill-generator"  className={({ isActive }) =>
                  isActive ? 'py-1 bg-gray-800 text-white rounded-md font-medium' : ''
                }
                onClick={() => handleLinkClick("Bill Generator")}
                >
              <li className="px-3">Bill Generator</li>
            </NavLink>
            <NavLink to="tell-reports"  className={({ isActive }) =>
                  isActive ? 'py-1 bg-gray-800 text-white rounded-md font-medium' : ''
                }
                onClick={() => handleLinkClick("Reports")}
                >
              <li className="px-3">Reports</li>
            </NavLink>
            <NavLink to="profile"  className={({ isActive }) =>
                  isActive ? 'py-1 bg-gray-800 text-white rounded-md font-medium' : ''
                }
                onClick={() => handleLinkClick("Profile")}
                >
              <li className="px-3">Profile</li>
            </NavLink>
            
           
          </ul>
        </div>
      </aside>
      
      <div className="col-span-3 col-start-2 flex gap-3 px-7">
        <div className="w-[1px] h-full bg-black ml-[-28px]"></div>
        
        <div className="ml-7 mt-10">
        <p>{activeLinkName}</p>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Teller;
