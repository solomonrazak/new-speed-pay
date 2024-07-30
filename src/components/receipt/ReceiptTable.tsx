import React from 'react';

const ReceiptTable: React.FC = () => {
    return (
      <div className="w-full mt-5">
        <table className="w-full">
          <thead className="bg-gray-200 text-[10px]">
            <tr className="rounded-tl-lg">
              <th className="py-3 rounded-l-lg font-normal text-start px-6">Product/Service</th>
              <th className="py-3 font-normal text-start px-6">Category</th>
              <th className="py-3 font-normal text-start px-6">Description</th>
              <th className="py-3 font-normal text-start px-6">Quantity</th>
              <th className="py-3 font-normal text-start px-6">Price</th>
              <th className="py-3 font-normal rounded-r-lg text-start px-6">Amount</th>
              
            </tr>
          </thead>
          <tbody>
              <tr className="border border-solid border-l-0 border-r-0 text-[12px]">
                  <td className="px-6 py-2">Product 1</td>
                  <td className="px-6 py-2">Category 1</td>
                  <td className="px-6 py-2">123</td>
                  <td className="px-6 py-2">1</td>
                  <td className="px-6 py-2">$500</td>
                  <td className="px-6 py-2">$500</td>
              </tr>
              <tr className="border border-solid border-l-0 border-r-0 text-[12px]">
                  <td className="px-6 py-2">Product 1</td>
                  <td className="px-6 py-2">Category 3</td>
                  <td className="px-6 py-2">143</td>
                  <td className="px-6 py-2">1</td>
                  <td className="px-6 py-2">$250</td>
                  <td className="px-6 py-2">$500</td>
              </tr>
              <tr className="border border-solid border-l-0 border-r-0 text-[12px]">
                  <td className="px-6 py-2">Product 1</td>
                  <td className="px-6 py-2">Category 2</td>
                  <td className="px-6 py-2">133</td>
                  <td className="px-6 py-2">1</td>
                  <td className="px-6 py-2">$500</td>
                  <td className="px-6 py-2">$300</td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  }
  

  export default ReceiptTable;