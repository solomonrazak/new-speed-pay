import { Link, Outlet } from 'react-router-dom';
import razzy from "../assets/images/razzy.jpg";

interface ITellerProps {

}

const Teller = ({}: ITellerProps) => {
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
            <li><Link to="tell-overview">Overview</Link></li>
            <li><Link to="bill-payments/new-invoice">Bill Payments</Link></li>
            <li><Link to="bill-generator">Bill Generator</Link></li>
            <li><Link to="tell-reports">Reports</Link></li>
            <li>Profile</li>

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
  )
}

export default Teller;
