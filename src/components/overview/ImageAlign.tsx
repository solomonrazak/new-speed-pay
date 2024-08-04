import React from "react";
import newgreen from "../../assets/images/figma/newgreen.png";
import arrowgreen from "../../assets/images/arrowgreen.png";
import box1 from "../../assets/images/figma/box1.png";
import paperred from "../../assets/images/figma/paperred.png";
import bagnew from "../../assets/images/figma/bagnew.png";
import arrowred from "../../assets/images/arrowred.png";

const ImageAlign: React.FC = () => {
  return (
    <div className="flex gap-4 pr-4">
      <div className="w-52 h-[7rem] flex justify-center items-center bg-white px-4 gap-5 rounded-lg">
        <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mt-[-8px]">
          <img src={newgreen} />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">75</h1>
          <p className="flex flex-col text-[10px]">
            <span>Total Generated</span>
            <span>Invoices</span>
          </p>
          <div className="flex gap-2 mt-1">
            <div className="w-4 h-4 flex justify-center items-center rounded-full bg-green-100">
              <img src={arrowgreen} />
            </div>
            <p className="text-[9px]">4% (30days)</p>
          </div>
        </div>
      </div>

      <div className="w-52 h-[7rem] flex justify-center items-center bg-white px-4 gap-5 rounded-lg">
        <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mt-[-8px]">
          <img src={box1} />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">357</h1>
          <p className="flex text-[10px] mt-2 mb-1">
            <span>Total Transactions</span>
            
          </p>
          <div className="flex gap-2 mt-1">
            <div className="w-4 h-4 flex justify-center items-center rounded-full bg-green-100">
              <img src={arrowgreen} />
            </div>
            <p className="text-[9px]">4% (30days)</p>
          </div>
        </div>
      </div>
      <div className="w-52 h-[7rem] flex justify-center items-center bg-white px-4 gap-5 rounded-lg">
        <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mt-[-8px]">
          <img src={paperred} />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">65</h1>
          <p className="flex flex-col text-[10px] mt-2 mb-1">
            <span>Total Cancelled</span>
            
          </p>
          <div className="flex gap-2 mt-1">
            <div className="w-4 h-4 flex justify-center items-center rounded-full bg-red-100">
              <img src={arrowred} />
            </div>
            <p className="text-[9px]">4% (30days)</p>
          </div>
        </div>
      </div>

      <div className="w-52 h-[7rem] flex justify-center items-center bg-white px-4 gap-5 rounded-lg">
        <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mt-[-8px]">
          <img src={bagnew} />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">$128</h1>
          <p className="flex flex-col text-[10px] mt-2 mb-1">
            <span>Total Revenue</span>
            
          </p>
          <div className="flex gap-2 mt-1">
            <div className="w-4 h-4 flex justify-center items-center rounded-full bg-red-100">
              <img src={arrowred} />
            </div>
            <p className="text-[9px]">4% (30days)</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ImageAlign;
