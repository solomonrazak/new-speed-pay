import razzy from "../../assets/images/razzy.png";

const AdminLayout = ({children}: {children: React.ReactNode}) => {
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
          <ul className="flex flex-col justify-center">
            <li>Overview</li>
            <li>Set up Zone</li>
            <li>Services</li>
            <li>Reports</li>
            <li>Reports</li>

          </ul>

        </div>
            
        </aside>
        <div className="col-span-3 col-start-2 flex gap-3 px-7">
        <div className="w-[1px] h-full bg-black ml-[-28px]"></div>
        <div className="ml-7 mt-10">
          {children}
        </div>

        </div>
    </main>
    
  )
}

export default AdminLayout;