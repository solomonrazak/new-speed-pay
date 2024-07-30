import React from "react";
import { Input } from "@nextui-org/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import NewInvoiceTable from "./NewInvoiceTable";
import SubTotal from "./SubTotal";

const NewGeneratedInvoice: React.FC = () => {
  return (
    <div className="pb-8">
      <div>
        <h1 className="text-center font-medium mb-4">New Invoice</h1>
        <div className="border-1 border-gray-400 rounded-md ">
          <p className="p-2 font-medium">Basic Information</p>
          <div className="flex gap-3 border-t-1 border-gray-400 px-2 py-5">
            <div className="relative ">
              <Input
                isRequired
                variant="bordered"
                type="text"
                label="Customer"
                defaultValue="Company Name"
                className="max-w-xs bg-white"
                radius="none"
              />
              <RiArrowDropDownLine className="absolute top-6 left-[7.8rem] text-[26px]" />
            </div>
            <div className="">
              <Input
                isRequired
                variant="bordered"
                type="date"
                label="Invoice Date"
                defaultValue="Aug 08, 2023"
                className="w-[180px] bg-white"
                radius="none"
              />
            </div>
            <div className="">
              <Input
                isRequired
                variant="bordered"
                type="date"
                label="Due Date"
                defaultValue="Aug 08, 2023"
                className="w-[180px] bg-white"
                radius="none"
              />
            </div>
            <div className="relative">
              <Input
                isRequired
                variant="bordered"
                type="text"
                label="Currency"
                defaultValue="GHS"
                className="max-w-xs bg-white"
                radius="none"
              />
              <RiArrowDropDownLine className="absolute top-6 left-[7.8rem] text-[26px]" />
            </div>
            <div className="">
              <Input
                isRequired
                variant="bordered"
                type="text"
                label="Invoice Number"
                defaultValue="0941"
                className="max-w-xs bg-white"
                radius="none"
              />
            </div>
          </div>
        </div>
        <div className="border-1 border-gray-400 rounded-md mt-10">
          <h1 className="p-2 font-medium">Invoice Details</h1>
          <div className="border-t-1 border-gray-400">
            <NewInvoiceTable />
          </div>
        </div>
      </div>
      <SubTotal />
    </div>
  );
};

export default NewGeneratedInvoice;
