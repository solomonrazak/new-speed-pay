import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubTotal: React.FC = () => {

    const navigate = useNavigate();
    const sendReceipt = () => {
        navigate("/teller/tell-overview")
    }
  return (
    <div className='pb-8 mt-5'>
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
            <div className="flex justify-center gap-4 mt-5">
                <button className="bg-slate-900 text-white w-[150px] py-1 px-2 rounded-md text-[13px] font-medium">Cancel</button>
                <button className="bg-slate-900 text-white w-[150px] py-1 px-2 rounded-md text-[13px] font-medium" onClick={sendReceipt}>Save</button>
            </div>
    </div>
  )
}

export default SubTotal