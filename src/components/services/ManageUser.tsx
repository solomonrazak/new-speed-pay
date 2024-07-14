import { Input } from "@nextui-org/react";
import SearchIcon from "../icons/SearchIcon";
import { CiFilter } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";

const ManageUser = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-5 w-full">
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
          <div className="flex gap-2 bg-gray-200 items-center rounded-md w-[430px]">
            <Link to="all-user" className="w-full flex items-center">
              <div className="cursor-pointer flex items-center text-[10px] w-full h-full gap-1 px-2 justify-center">
                <p>All User</p>
                <div className="rounded-full flex justify-center items-center h-4 w-4 bg-gray-300">
                  54
                </div>
              </div>
            </Link>
            <Link to="inputter" className="flex w-full items-center">
            <div className="flex text-[10px] gap-1 cursor-pointer items-center w-full h-full px-2 justify-center">
              <p>Inputter</p>
              <div className="rounded-full flex justify-center items-center h-4 w-4 bg-red-200 text-red-600">
                40
              </div>
            </div>
            </Link>
            <Link to="approver" className="w-full flex items-center">
            <div className="flex text-[10px] gap-1 cursor-pointer items-center w-full h-full px-2 justify-center">
              <p>Approver</p>
              <div className="rounded-full flex justify-center items-center h-4 w-4 bg-yellow-100 text-yellow-500">
                10
              </div>
            </div>
            </Link>
            <Link to="viewer">
            <div className="flex text-[10px] gap-1 cursor-pointer items-center w-full h-full px-2 justify-center">
              <p>Viewer</p>
              <div className="rounded-full flex justify-center items-center h-4 w-4 bg-green-200 text-green-500">
                4
              </div>
            </div>
            </Link>
          </div>
          <div className="flex gap-2">
            <div className="flex text-black gap-1 text-[13px] items-center px-2 border-gray-500 bg-white rounded-md border-1 py-1">
              <CiFilter className="w-[25px] h-[25px]" />
              <p>Filter</p>
            </div>
            <div className="flex text-black gap-2 text-[11px] items-center px-2 border-gray-500 bg-white rounded-md border-1 py-1">
              <IoFilter className="w-[15px] h-[20px]" />
              <p>Newest First</p>
              <MdKeyboardArrowDown className="w-[10px] h-[20px] text-[30px]" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageUser;
