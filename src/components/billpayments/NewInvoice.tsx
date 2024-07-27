import { Input } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa6";
import { Link, Outlet} from "react-router-dom";

const NewInvoice: React.FC = () => {
  return (
    <div className="p-5 w-full flex flex-col items-center justify-center mx-auto ml-[10rem]">
      <div className="space-y-3 mt-[10rem]">
        <div className="relative">
          <Input
            type="text"
            label="Invoice Number"
            variant="bordered"
            defaultValue="454541s"
            className="max-w-xs"
            radius="none"
          />
          <FaCheck className="absolute top-9 left-[18.5rem] transform -translate-y-1/2 text-green-500" />
        </div>
        <Link to="../invoice-details">
        <button className="text-white bg-slate-900 w-[320px] py-2">
          Continue
        </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default NewInvoice;
