

// import React from 'react';
// import InvoiceTable from './InvoiceTable';
// import { Link, Outlet, useMatch } from 'react-router-dom';

// const InvoiceDetails: React.FC = () => {
//   const isChildRoute = useMatch("/teller/bill-payments/invoice-details/*");

//   return (
//     <div className='w-[53rem] h-full pb-14'>
     
//         <div className="">
//           <h1 className="text-center text-[15px] font-medium mb-5">Invoice Details</h1>
//           <div className="border-1 border-gray-300 p-4 rounded-lg">
//             <div className="flex justify-between">
//               <div>
//                 <p className="font-light text-[13px] mb-5">BILL TO</p>
//                 <p className="font-medium text-[20px] mb-3">Company Name</p>
//                 <div className="font-light">
//                   <p>Address 1</p>
//                   <p>Address 2</p>
//                   <p>City, Country</p>
//                   <p>Contact</p>
//                 </div>
//               </div>
//               <div className="w-[0.8px] h-48 bg-gray-300"></div>
//               <div className="flex items-end">
//                 <p className="font-light">INVOICE 0941</p>
//               </div>
//             </div>
//             <InvoiceTable />
//             <div className="flex flex-col items-end p-3 mr-16 gap-2">
//               <div className="flex gap-24">
//                 <p className="text-[13px] font-light ml-[-20px]">Subtotal</p>
//                 <p className="text-[13px] font-medium">$1300</p>
//               </div>
//               <div className="flex gap-32">
//                 <p className="text-[13px] font-light">Tax</p>
//                 <p className="text-[13px] font-medium">20%</p>
//               </div>
//               <div className="w-[170px] h-[0.5px] bg-gray-200"></div>
//               <div className="flex gap-28">
//                 <p className="text-[13px] font-light">Due</p>
//                 <p className="text-[13px] font-medium">$1560</p>
//               </div>
//               <div className="w-[170px] h-[0.5px] bg-gray-200"></div>
//               <div className="flex gap-[6.5rem]">
//                 <p className="text-[13px] font-medium">Total</p>
//                 <p className="text-[13px] font-medium">$1560</p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p className="text-center mb-3 font-medium mt-3">Payment Mode</p>
//             <div className="flex justify-center gap-2">
//               <Link to="pay-by-cash">
//                 <button className="bg-slate-900 w-[170px] text-white rounded py-1 text-[13px] font-medium">
//                   Cash
//                 </button>
//               </Link>
//               <Link to="pay-by-momo">
//               <button className="bg-slate-900 w-[170px] text-white rounded py-1 text-[13px] font-medium">
//                 Mobile Money
//               </button>
//               </Link>
//               <button className="bg-slate-900 w-[170px] text-white rounded py-1 text-[13px] font-medium">
//                 UMB Cheque
//               </button>
//               <button className="bg-slate-900 w-[170px] text-white rounded py-1 text-[13px] font-medium">
//                 Other Bank Cheque
//               </button>
//             </div>
//           </div>
//         </div>
  
//       {isChildRoute &&
//       <div>
//       <Outlet />

//       </div>
// }
       
//     </div>
//   );
// };

// export default InvoiceDetails;

import React from 'react';
import InvoiceTable from './InvoiceTable';
import { Link, Outlet, useMatch } from 'react-router-dom';

const InvoiceDetails: React.FC = () => {
  const isChildRoute = useMatch("/teller/bill-payments/new-invoice/invoice-details/*");

  return (
    <div className='w-[53rem] h-full pb-14'>
      {!isChildRoute && (
        <div className="">
          <h1 className="text-center text-[15px] font-medium mb-5">Invoice Details</h1>
          <div className="border-1 border-gray-300 p-4 rounded-lg">
            <div className="flex justify-between">
              <div>
                <p className="font-light text-[13px] mb-5">BILL TO</p>
                <p className="font-medium text-[20px] mb-3">Company Name</p>
                <div className="font-light">
                  <p>Address 1</p>
                  <p>Address 2</p>
                  <p>City, Country</p>
                  <p>Contact</p>
                </div>
              </div>
              <div className="w-[0.8px] h-48 bg-gray-300"></div>
              <div className="flex items-end">
                <p className="font-light">INVOICE 0941</p>
              </div>
            </div>
            <InvoiceTable />
            <div className="flex flex-col items-end p-3 mr-16 gap-2">
              <div className="flex gap-24">
                <p className="text-[13px] font-light ml-[-20px]">Subtotal</p>
                <p className="text-[13px] font-medium">$1300</p>
              </div>
              <div className="flex gap-32">
                <p className="text-[13px] font-light">Tax</p>
                <p className="text-[13px] font-medium">20%</p>
              </div>
              <div className="w-[170px] h-[0.5px] bg-gray-200"></div>
              <div className="flex gap-28">
                <p className="text-[13px] font-light">Due</p>
                <p className="text-[13px] font-medium">$1560</p>
              </div>
              <div className="w-[170px] h-[0.5px] bg-gray-200"></div>
              <div className="flex gap-[6.5rem]">
                <p className="text-[13px] font-medium">Total</p>
                <p className="text-[13px] font-medium">$1560</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center mb-3 font-medium mt-3">Payment Mode</p>
            <div className="flex justify-center gap-2">
              <Link to="pay-by-cash">
                <button className="bg-slate-900 w-[170px] text-white rounded py-1 text-[13px] font-medium">
                  Cash
                </button>
              </Link>
              <Link to="pay-by-momo">
                <button className="bg-slate-900 w-[170px] text-white rounded py-1 text-[13px] font-medium">
                  Mobile Money
                </button>
              </Link>
              <button className="bg-slate-900 w-[170px] text-white rounded py-1 text-[13px] font-medium">
                UMB Cheque
              </button>
              <button className="bg-slate-900 w-[170px] text-white rounded py-1 text-[13px] font-medium">
                Other Bank Cheque
              </button>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default InvoiceDetails;

