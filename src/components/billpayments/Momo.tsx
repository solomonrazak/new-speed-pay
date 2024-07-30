import React from "react";
import { Input } from "@nextui-org/react";

const Momo: React.FC = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-medium">Mobile Money</h1>
        <div className="flex flex-col gap-2 items-center mt-10">
          <Input
            variant="bordered"
            type="text"
            label="Wallet Number"
            defaultValue="000 000 000"
            radius="none"
            className="max-w-xs bg-white"
          />
          <div className="flex flex-col items-start">
            <p className="font-thin text-[13px] ml-[-9rem]">
              Account Verification
            </p>
            <p className="font-medium ml-[-9rem]">Jane Doe</p>
          </div>

          <Input
            variant="bordered"
            type="text"
            label="Amount"
            defaultValue="200"
            radius="none"
            className="max-w-xs bg-white"
          />
          <Input
            variant="bordered"
            type="text"
            label="Paid By"
            defaultValue="Company/Customer Name"
            radius="none"
            className="max-w-xs bg-white"
          />
          <button className="bg-slate-950 text-white w-[320px] py-1 rounded-md">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Momo;
