import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";

const AllServices: React.FC = () => {
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
          {[
            {
              id: 1,
              date: '27.05.2024',
              serviceId: '101',
              service: 'Forms',
              description: 'Registration Form',
              createdBy: 'Jane Doe',
              price: '$350.00',
              department: 'DEPT 1'
            },
            {
              id: 2,
              date: '27.05.2024',
              serviceId: '102',
              service: 'Permit',
              description: 'Manufacturing Permit',
              createdBy: 'Jane Doe',
              price: '$350.00',
              department: 'DEPT 1'
            },
            // Add other rows as needed
          ].map(({ id, date, serviceId, service, description, createdBy, price, department }) => (
            <tr key={id} className="border border-solid border-l-0 border-r-0 text-[12px]">
              <td className="px-6 py-2">{date}</td>
              <td className="px-6 py-2">{serviceId}</td>
              <td className="px-6 py-2">{service}</td>
              <td className="px-6 py-2">{description}</td>
              <td className="px-6 py-2">{createdBy}</td>
              <td className="px-6 py-2">{price}</td>
              <td className="px-6 py-2">{department}</td>
              <td>
                <div className="flex flex-row items-center text-[18px]">
                  <RiArrowDropDownLine />
                  <PiDotsThreeOutlineVerticalThin />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllServices;
