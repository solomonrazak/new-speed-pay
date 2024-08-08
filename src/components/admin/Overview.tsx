import React from "react";
import ImageAlign from "../overview/ImageAlign";
import DonutView from "../overview/DonutView";
import CurveView from "../overview/CurveView";

const Overview: React.FC = () => {
  return (
    <div>
      <ImageAlign />
      <div className="flex gap-4">
        <div className="w-1/2">
          <DonutView />
        </div>
        <div className="w-1/2">
          <CurveView />
        </div>
      </div>
    </div>
  );
};

export default Overview;
