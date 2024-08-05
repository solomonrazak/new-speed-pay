import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import DoughnutChart from "./charts/DoughnutChart";

const DonutView: React.FC = () => {
  return (
    <div className="w-[23rem] h-[15rem] bg-gray-100 p-4">
      <div className="flex justify-between items-center">
        <p className="text-[12px] font-medium text-slate-900">
          Current Insight
        </p>
        <div className="bg-white w-4 h-5 flex justify-center items-center rounded-md p">
          <BsThreeDotsVertical className="text-gray-500" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="">
          <div style={{ width: "100px", height: "100px" }} className="my-3">
            <DoughnutChart
              value={81}
              backgroundColor={["#FFBF00", "#FFFFF0"]}
            />
          </div>
          <p className="text-[13px]">Total Transactions</p>
        </div>
        <div>
          <div style={{ width: "100px", height: "100px" }} className="my-3">
            <DoughnutChart
              value={22}
              backgroundColor={["#333333", "#E6E6E6"]}
            />
          </div>
          <p className="text-[13px]">Current Growth</p>
        </div>
        <div>
          <div style={{ width: "100px", height: "100px" }} className="my-3">
            <DoughnutChart
              value={62}
              backgroundColor={["#FFFAA0", "#FFFFF0"]}
            />
          </div>
          <p className="text-[13px]">Total Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default DonutView;
