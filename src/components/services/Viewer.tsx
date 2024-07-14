import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";

const Viewer: React.FC = () => {
  return (
    <div className="p-3 w-full">
      <table className="w-full">
        <thead className="bg-gray-300 text-[10px]">
          <tr>
            <th className="px-6 py-3 rounded-l-lg font-normal">Date Created</th>
            <th className="px-6 py-3 font-normal">FIRST NAME</th>
            <th className="px-6 py-3 font-normal">SURNAME</th>
            <th className="px-6 py-3 font-normal">EMAIL ADDRESS</th>
            <th className="px-6 py-3 font-normal">PHONE NUMBER</th>
            <th className="px-6 py-3 font-normal">ACCESS</th>
            <th className="px-6 py-3 font-normal">DEPARTMENT</th>
            <th className="px-6 py-3 rounded-r-lg"></th>
          </tr>
        </thead>
        <tbody>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">JANE</td>
            <td className="px-6 py-2">DOE</td>
            <td className="px-6 py-2">doe@gmail.com</td>
            <td className="px-6 py-2">000 000 000</td>
            <td className="px-6 py-2">Viewer</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          {/* Repeat the above tr block for each row in the table */}
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">JANE</td>
            <td className="px-6 py-2">DOE</td>
            <td className="px-6 py-2">doe@gmail.com</td>
            <td className="px-6 py-2">000 000 000</td>
            <td className="px-6 py-2">Viewer</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">JANE</td>
            <td className="px-6 py-2">DOE</td>
            <td className="px-6 py-2">doe@gmail.com</td>
            <td className="px-6 py-2">000 000 000</td>
            <td className="px-6 py-2">Viewer</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">JANE</td>
            <td className="px-6 py-2">DOE</td>
            <td className="px-6 py-2">doe@gmail.com</td>
            <td className="px-6 py-2">000 000 000</td>
            <td className="px-6 py-2">Viewer</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}

export default Viewer;
