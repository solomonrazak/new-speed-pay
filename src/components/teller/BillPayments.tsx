import NewInvoice from "../billpayments/NewInvoice";
import { Link, Outlet } from "react-router-dom";

const BillPayments = () => {
  return (
    <div className="w-full">
      <Outlet/>
    </div>
  )
}

export default BillPayments;