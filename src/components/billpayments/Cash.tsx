// import React, { useState } from "react";
// import { Input } from "@nextui-org/react";
// import Receipt from "./receipt/Receipt";

// const CountCash: React.FC = () => {
//   const [showReceipt, setShowReceipt] = useState(false);
//   const [hideCash, setHideCash] = useState(false);
//   const [values, setValues] = useState({
//     paidBy: "Company/Customer Name",
//     denominations: [
//       { value: 200, quantity: 1, amount: 200 },
//       { value: 100, quantity: 0, amount: 0 },
//       { value: 50, quantity: 0, amount: 0 },
//       { value: 20, quantity: 0, amount: 0 },
//       { value: 10, quantity: 0, amount: 0 },
//       { value: 5, quantity: 0, amount: 0 },
//       { value: 2, quantity: 0, amount: 0 },
//       { value: 1, quantity: 0, amount: 0 },
//     ],
//     coins: [
//       { value: 2, quantity: 1, amount: 2 },
//       { value: 1, quantity: 0, amount: 0 },
//       { value: 0.5, quantity: 0, amount: 0 },
//       { value: 0.2, quantity: 0, amount: 0 },
//       { value: 0.1, quantity: 0, amount: 0 },
//       { value: 0.05, quantity: 0, amount: 0 },
//       { value: 0.01, quantity: 0, amount: 0 },
//     ],
//   });

//   const handleInputChange = (
//     index: number,
//     type: "denominations" | "coins",
//     field: "quantity" | "amount",
//     value: number
//   ) => {
//     const updatedValues = { ...values };
//     updatedValues[type][index][field] = value;
//     updatedValues[type][index].amount =
//       updatedValues[type][index].value * updatedValues[type][index].quantity;
//     setValues(updatedValues);
//   };

//   return (
//     <div>
//       {!hideCash && (
//         <div>
//           <h1 className="text-center font-medium">Count Cash</h1>
//           <div className="flex justify-center gap-16">
//             <div>
//               <p className="ml-20">Expected Amount:</p>
//               <div className="flex text-[10px] gap-[6.5rem] mb-2">
//                 <p>Notes Denomination/Quantity</p>
//                 <p>Amount</p>
//               </div>
//               <div className="flex flex-col gap-1">
//                 {values.denominations.map((denomination, index) => (
//                   <div
//                     key={index}
//                     className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md"
//                   >
//                     <div>
//                       <p className="text-gray-400">{denomination.value}</p>
//                       <input
//                         type="number"
//                         value={denomination.quantity}
//                         onChange={(e) =>
//                           handleInputChange(
//                             index,
//                             "denominations",
//                             "quantity",
//                             Number(e.target.value)
//                           )
//                         }
//                         className="w-16 text-center"
//                       />
//                     </div>
//                     <div className="bg-gray-400 h-full ml-[9rem] w-[0.5px]"></div>
//                     <p>{denomination.amount}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <div>
//                 <p className="font-bold">200 GHS</p>
//                 <div className="flex text-[10px] gap-[6.5rem] mb-2">
//                   <p>Coins Denomination/Quantity</p>
//                   <p>Amount</p>
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   {values.coins.map((coin, index) => (
//                     <div
//                       key={index}
//                       className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md"
//                     >
//                       <div>
//                         <p className="text-gray-400">{coin.value}</p>
//                         <input
//                           type="number"
//                           value={coin.quantity}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "coins",
//                               "quantity",
//                               Number(e.target.value)
//                             )
//                           }
//                           className="w-16 text-center"
//                         />
//                       </div>
//                       <div className="bg-gray-400 h-full ml-[9rem] w-[0.5px]"></div>
//                       <p>{coin.amount}</p>
//                     </div>
//                   ))}
//                   <div className="flex w-72 h-12  bg-transparent justify-between items-center px-2 rounded-md">
//                     <div>
//                       <p className="font-medium">Overall</p>
//                     </div>
//                     <p>
//                       {values.denominations.reduce(
//                         (acc, curr) => acc + curr.amount,
//                         0
//                       ) +
//                         values.coins.reduce((acc, curr) => acc + curr.amount, 0)}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="space-y-3 w-full flex flex-col items-center mt-5">
//             <Input
//               variant="bordered"
//               type="text"
//               label="Paid By"
//               value={values.paidBy}
//               onChange={(e) =>
//                 setValues({ ...values, paidBy: e.target.value })
//               }
//               radius="none"
//               className="max-w-xs bg-white"
//             />
//             <button
//               className="bg-slate-950 text-white w-[20rem] px-2 py-1"
//               onClick={() => {
//                 setShowReceipt(true);
//                 setHideCash(true);
//               }}
//             >
//               Continue
//             </button>
//           </div>
//         </div>
//       )}
//       {showReceipt && (
//         <div>
//           <Receipt />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CountCash;
