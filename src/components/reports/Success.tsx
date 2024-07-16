import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";

const Success: React.FC = () => {
  return (
    <div className="p-3 w-full">
      <table className="w-full">
        <thead className="bg-gray-300 text-[10px]">
          <tr>
          <th className="px-3 py-3 rounded-l-lg font-normal">STATUS</th>
          <th className="px-3 py-3 font-normal">DATE CREATED</th>
            <th className="px-3 py-3 font-normal">INVOICE NUMBER</th>
            <th className="px-3 py-3 font-normal">TRANSACTION TYPE</th>
            <th className="px-3 py-3 font-normal">CUSTOMER</th>
            <th className="px-3 py-3 font-normal">PHONE NUMBER</th>
            <th className="px-3 py-3 font-normal">CURRENCY</th>
            <th className="px-3 py-3 font-normal">AMOUNT</th>
            <th className="px-3 py-3 rounded-r-lg "></th>
          </tr>
        </thead>
        <tbody>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
         <td className="px-3 py-2"><div className="text-green-500 bg-green-200 rounded-large px-2 py-1 text-center">Successful</div></td>
            <td className="px-3 py-2">27.05.2024</td>
            <td className="px-3 py-2">#9101</td>
            <td className="px-3 py-2">Revenue</td>
            <td className="px-3 py-2">Adom Merch</td>
            <td className="px-3 py-2">000 000 000</td>
            <td className="px-3 py-2">GHC</td>
            <td className="px-3 py-2">GHC1500.00</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          {/* Repeat the above tr block for each row in the table */}
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
         <td className="px-3 py-2"><div className="text-green-500 bg-green-200 rounded-large px-2 py-1 text-center">Successful</div></td>
            <td className="px-3 py-2">27.05.2024</td>
            <td className="px-3 py-2">#9102</td>
            <td className="px-3 py-2">charges</td>
            <td className="px-3 py-2">Adom Merch</td>
            <td className="px-3 py-2">000 000 000</td>
            <td className="px-3 py-2">GHC</td>
            <td className="px-3 py-2">GHC1500.00</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
         <td className="px-3 py-2"><div className="text-green-500 bg-green-200 rounded-large px-2 py-1 text-center">Successful</div></td>
            <td className="px-3 py-2">27.05.2024</td>
            <td className="px-3 py-2">#9103</td>
            <td className="px-3 py-2">Revenue</td>
            <td className="px-3 py-2">Adom Merch</td>
            <td className="px-3 py-2">000 000 000</td>
            <td className="px-3 py-2">GHC</td>
            <td className="px-3 py-2">GHC1500.00</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
         <td className="px-3 py-2"><div className="text-green-500 bg-green-200 rounded-large px-2 py-1 text-center">Successful</div></td>
            <td className="px-3 py-2">27.05.2024</td>
            <td className="px-3 py-2">#9104</td>
            <td className="px-3 py-2">charges</td>
            <td className="px-3 py-2">Adom Merch</td>
            <td className="px-3 py-2">000 000 000</td>
            <td className="px-3 py-2">GHC</td>
            <td className="px-3 py-2">GHC1500.00</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
         <td className="px-3 py-2"><div className="text-green-500 bg-green-200 rounded-large px-2 py-1 text-center">Successful</div></td>
            <td className="px-3 py-2">27.05.2024</td>
            <td className="px-3 py-2">#9105</td>
            <td className="px-3 py-2">Revenue</td>
            <td className="px-3 py-2">Adom Merch</td>
            <td className="px-3 py-2">000 000 000</td>
            <td className="px-3 py-2">GHC</td>
            <td className="px-3 py-2">GHC1500.00</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
         <td className="px-3 py-2"><div className="text-green-500 bg-green-200 rounded-large px-2 py-1 text-center">Successful</div></td>
            <td className="px-3 py-2">27.05.2024</td>
            <td className="px-3 py-2">#9106</td>
            <td className="px-3 py-2">Revenue</td>
            <td className="px-3 py-2">Adom Merch</td>
            <td className="px-3 py-2">000 000 000</td>
            <td className="px-3 py-2">GHC</td>
            <td className="px-3 py-2">GHC1500.00</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
         <td className="px-3 py-2"><div className="text-green-500 bg-green-200 rounded-large px-2 py-1 text-center">Successful</div></td>
            <td className="px-3 py-2">27.05.2024</td>
            <td className="px-3 py-2">#9107</td>
            <td className="px-3 py-2">Revenue</td>
            <td className="px-3 py-2">Adom Merch</td>
            <td className="px-3 py-2">000 000 000</td>
            <td className="px-3 py-2">GHC</td>
            <td className="px-3 py-2">GHC1500.00</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
         <td className="px-3 py-2"><div className="text-green-500 bg-green-200 rounded-large px-2 py-1 text-center">Successful</div></td>
            <td className="px-3 py-2">27.05.2024</td>
            <td className="px-3 py-2">#9108</td>
            <td className="px-3 py-2">Revenue</td>
            <td className="px-3 py-2">Adom Merch</td>
            <td className="px-3 py-2">000 000 000</td>
            <td className="px-3 py-2">GHC</td>
            <td className="px-3 py-2">GHC1500.00</td>
            <td><div className="flex flex-row items-center text-[18px]"><RiArrowDropDownLine /><PiDotsThreeOutlineVerticalThin /></div></td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

export default Success;
