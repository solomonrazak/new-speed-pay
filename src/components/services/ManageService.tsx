import {Input} from "@nextui-org/react";
import SearchIcon from "../icons/SearchIcon";
import { Outlet, NavLink } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const ManageService = () => {
  return (
    <div>
    <div className="flex justify-between items-center gap-5">
      <div>
      <Input
      isClearable
      radius="md"
      className="w-[200px] border-1 border-black"
      placeholder="Type to search..."
      startContent={
        <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
      }
     />
      </div>
      <div className="flex gap-3">
      <div className="flex gap-2 bg-gray-200 items-center rounded-md w-full">
        <NavLink to="all-services" className={({isActive}) => isActive ? 'bg-white font-semibold border-1 border-gray-400 rounded-md h-full' : ''}>
        <div className="cursor-pointer flex items-center text-[10px] h-full gap-1 px-4 justify-center">
          <p>All Services</p>
          <div className="rounded-full flex justify-center items-center h-4 w-4 bg-gray-300">54</div>
        </div>
        </NavLink>
        <NavLink to="forms" className={({isActive}) => isActive ? 'bg-white font-semibold border-1 border-gray-400 rounded-md h-full' : ''}>
        <div className="flex text-[8px] gap-1 cursor-pointer items-center w-full h-full px-4 justify-center">
          <p>Forms & Permits</p>
          <div className="rounded-full flex justify-center items-center h-4 w-4 bg-red-200 text-red-600">40</div>
        </div>
        </NavLink>
        <NavLink to="fees" className={({isActive}) => isActive ? 'bg-white font-semibold border-1 border-gray-400 rounded-md h-full' : ''}>
        <div className="flex text-[9px] gap-1 cursor-pointer items-center w-full h-full px-4 justify-center">
          <p>Fees & Charges</p>
          <div className="rounded-full flex justify-center items-center h-4 w-4 bg-yellow-100 text-yellow-500">10</div>
        </div>
        </NavLink>
        <NavLink to="trials" className={({isActive}) => isActive ? 'bg-white font-semibold border-1 border-gray-400 rounded-md h-full' : ''}>
        <div className="flex text-[10px] gap-1 cursor-pointer items-center h-full px-2 justify-center">
          <p>Trials & Adverts</p>
          <div className="rounded-full flex justify-center items-center h-4 w-4 bg-green-200 text-green-500">4</div>
        </div>
        </NavLink>
      </div>
      <div className="flex gap-2">
        <div className="flex text-black gap-2 text-[13px] items-center px-2 border-gray-500 bg-white rounded-md border-1 py-1">
        <CiFilter className="w-[25px] h-[25px]" />
          <p>Filter</p>
        </div>
        <div className="flex text-black gap-1 text-[9px] items-center px-2 border-gray-500 bg-white rounded-md border-1 py-1">
        <IoFilter className="w-[15px] h-[20px]" />
          <p>Newest First</p>
          <MdKeyboardArrowDown className="w-[18px] h-[20px] text-[30px]" />
        </div>

      </div>
      </div>

    </div>
    <div>
      <Outlet />
    </div>
  </div>
  )
}

export default ManageService