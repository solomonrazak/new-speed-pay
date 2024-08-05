import React from "react";
import newgreen from "../../assets/images/figma/newgreen.png";
import arrowgreen from "../../assets/images/arrowgreen.png";
import box1 from "../../assets/images/figma/box1.png";
import paperred from "../../assets/images/figma/paperred.png";
import bagnew from "../../assets/images/figma/bagnew.png";
import arrowred from "../../assets/images/arrowred.png";
import Card from "./Card";


const ImageAlign:React.FC = () => {
  return (
    <div className="flex gap-4">
      <Card
        image={newgreen}
        count="75"
        mainText="Total Generated"
        subText="Invoices"
        arrowImage={arrowgreen}
        arrowBgColor="bg-green-100"
        percentage="4% (30days)"
      />
      <Card
        image={box1}
        count="357"
        mainText="Total Transactions"
        subText=""
        arrowImage={arrowgreen}
        percentage="4% (30days)"
        arrowBgColor="bg-green-100"
      />
      <Card
        image={paperred}
        count="65"
        mainText="Total Cancelled"
        subText=""
        arrowImage={arrowred}
        percentage="4% (30days)"
        arrowBgColor="bg-red-100"
      />
      <Card
        image={bagnew}
        count="$128"
        mainText="Total Revenue"
        subText=""
        arrowImage={arrowred}
        percentage="4% (30days)"
        arrowBgColor="bg-red-100"
      />
    </div>
  );
};

export default ImageAlign;
