interface CardProps {
  image: string;
  count: string;
  mainText: string;
  subText: string;
  arrowImage: string;
  percentage: string;
  arrowBgColor: string;
}

const Card = ({
  image,
  count,
  mainText,
  subText,
  arrowImage,
  percentage,
  arrowBgColor,
}: CardProps) => {
  return (
    <div className="w-52 h-[7rem] flex justify-center items-center bg-white px-4 gap-5 rounded-lg">
    <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mt-[-8px]">
      <img src={image} alt={mainText} />
    </div>
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl">{count}</h1>
      <p className="flex flex-col text-[10px] mt-2 mb-1">
        <span>{mainText}</span>
        <span>{subText}</span>
      </p>
      <div className="flex gap-2 mt-1">
        <div className={`w-4 h-4 flex justify-center items-center rounded-full ${arrowBgColor}`}>
          <img src={arrowImage} alt="arrow" />
        </div>
        <p className="text-[9px]">{percentage}</p>
      </div>
    </div>
  </div>
  );
};

export default Card;
