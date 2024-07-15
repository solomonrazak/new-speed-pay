import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";

const Forms: React.FC = () => {
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
            <th className="px-6 py-3 rounded-r-lg"></th>
          </tr>
        </thead>
        <tbody>
          <tr key={1} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">101</td>
            <td className="px-6 py-2">fees</td>
            <td className="px-6 py-2">Registration fees</td>
            <td className="px-6 py-2">Jane Doe</td>
            <td className="px-6 py-2">$560</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td>
              <div className="flex flex-row items-center text-[18px]">
                <RiArrowDropDownLine />
                <PiDotsThreeOutlineVerticalThin />
              </div>
            </td>
          </tr>
          
          <tr key={2} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">102</td>
            <td className="px-6 py-2">charges</td>
            <td className="px-6 py-2">Admin Charges</td>
            <td className="px-6 py-2">Jane Doe</td>
            <td className="px-6 py-2">$560</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td>
              <div className="flex flex-row items-center text-[18px]">
                <RiArrowDropDownLine />
                <PiDotsThreeOutlineVerticalThin />
              </div>
            </td>
          </tr>
          <tr key={3} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">103</td>
            <td className="px-6 py-2">fees</td>
            <td className="px-6 py-2">Application fees</td>
            <td className="px-6 py-2">Jane Doe</td>
            <td className="px-6 py-2">$560</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td>
              <div className="flex flex-row items-center text-[18px]">
                <RiArrowDropDownLine />
                <PiDotsThreeOutlineVerticalThin />
              </div>
            </td>
          </tr>
          <tr key={4} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">104</td>
            <td className="px-6 py-2">charges</td>
            <td className="px-6 py-2">Application fees</td>
            <td className="px-6 py-2">Jane Doe</td>
            <td className="px-6 py-2">$560</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td>
              <div className="flex flex-row items-center text-[18px]">
                <RiArrowDropDownLine />
                <PiDotsThreeOutlineVerticalThin />
              </div>
            </td>
          </tr>
          <tr key={5} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">105</td>
            <td className="px-6 py-2">fees</td>
            <td className="px-6 py-2">Application fees</td>
            <td className="px-6 py-2">Jane Doe</td>
            <td className="px-6 py-2">$560</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td>
              <div className="flex flex-row items-center text-[18px]">
                <RiArrowDropDownLine />
                <PiDotsThreeOutlineVerticalThin />
              </div>
            </td>
          </tr>
          <tr key={6} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">106</td>
            <td className="px-6 py-2">fees</td>
            <td className="px-6 py-2">Application fees</td>
            <td className="px-6 py-2">Jane Doe</td>
            <td className="px-6 py-2">$560</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td>
              <div className="flex flex-row items-center text-[18px]">
                <RiArrowDropDownLine />
                <PiDotsThreeOutlineVerticalThin />
              </div>
            </td>
          </tr>
          <tr key={7} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">107</td>
            <td className="px-6 py-2">fees</td>
            <td className="px-6 py-2">Application fees</td>
            <td className="px-6 py-2">Jane Doe</td>
            <td className="px-6 py-2">$560</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td>
              <div className="flex flex-row items-center text-[18px]">
                <RiArrowDropDownLine />
                <PiDotsThreeOutlineVerticalThin />
              </div>
            </td>
          </tr>
          <tr key={8} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">108</td>
            <td className="px-6 py-2">fees</td>
            <td className="px-6 py-2">Application fees</td>
            <td className="px-6 py-2">Jane Doe</td>
            <td className="px-6 py-2">$560</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td>
              <div className="flex flex-row items-center text-[18px]">
                <RiArrowDropDownLine />
                <PiDotsThreeOutlineVerticalThin />
              </div>
            </td>
          </tr>
          <tr key={9} className="border border-solid border-l-0 border-r-0 text-[12px]">
            <td className="px-6 py-2">27.05.2024</td>
            <td className="px-6 py-2">109</td>
            <td className="px-6 py-2">fees</td>
            <td className="px-6 py-2">Application fees</td>
            <td className="px-6 py-2">Jane Doe</td>
            <td className="px-6 py-2">$560</td>
            <td className="px-6 py-2">DEPT 1</td>
            <td>
              <div className="flex flex-row items-center text-[18px]">
                <RiArrowDropDownLine />
                <PiDotsThreeOutlineVerticalThin />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Forms;
