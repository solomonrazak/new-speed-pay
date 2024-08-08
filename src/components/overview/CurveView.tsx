import React from 'react'
import { GoDownload } from "react-icons/go";
import LineCurve from './charts/LineCurve';

const CurveView: React.FC = () => {
  return (
    <div className='w-[27rem] bg-gray-200 p-5 my-4 rounded-lg'>
        <div className='flex justify-between'>
            <p className='flex flex-col gap-1'>
                <span className='text-[11px] font-medium text-slate-900'>Transactions</span>
                <span className="text-xs font-light">These are all the transactions for the year</span>
            </p>
            <button className="border-1 border-amber-600 rounded-large px-3 gap-1 text-amber-600 flex justify-center items-center"><GoDownload />Save Report</button>
        </div>
        <LineCurve />
    </div>
  )
}

export default CurveView;