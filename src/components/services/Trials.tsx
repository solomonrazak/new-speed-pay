import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";

const Trials: React.FC = () => {
  return (
    <div className="p-3 w-full">
      <table className="w-full">
        <thead className="bg-gray-300 text-[10px]">
          <tr>
          <th className="px-6 py-3 rounded-l-lg font-normal">DATE CREATED</th>
            <th className="px-6 py-3 font-normal">SERVICE ID</th>
            <th className="px-6 py-3 font-normal">SERVICE</th>
            <th className="px-6 py-3 font-normal">DESCRIPTION</th>
            <th className="px-6 py-3 font-normal">CREATED BY</th>
            <th className="px-6 py-3 font-normal">PRICE</th>
            <th className="px-6 py-3 font-normal">DEPARTMENT</th>
            <th className="px-6 py-3 rounded-r-lg "></th>
          </tr>
        </thead>
        <tbody>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">101</td>
            <td className="px-6 py-2">Trials</td>
            <td className="px-6 py-2">Clinical Trials</td>
            <td className="px-6 py-2">Jane Doe</td>
            <td className="px-6 py-2">$500</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          {/* Repeat the above tr block for each row in the table */}
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">102</td>
            <td className="px-6 py-2">Trials</td>
            <td className="px-6 py-2">Clinical Trials</td>
            <td className="px-6 py-2">Jane Doe</td>
            <td className="px-6 py-2">$500</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">103</td>
            <td className="px-6 py-2">Trials</td>
            <td className="px-6 py-2">Product Advert</td>
            <td className="px-6 py-2">Jane Doe</td>
            <td className="px-6 py-2">$500</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">104</td>
            <td className="px-6 py-2">Trials</td>
            <td className="px-6 py-2">Clinical Trials</td>
            <td className="px-6 py-2">Jane Doe</td>
            <td className="px-6 py-2">$500</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}

export default Trials;
