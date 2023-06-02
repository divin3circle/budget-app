import { currencyFormatter } from "../utils";

const Card = ({ name, amount, max }) => {
  //card bg
  let cardColor;
  if (amount > max) {
    cardColor = "#f5c6c5";
  } else {
    cardColor = "fff";
  }
  const cardStyle = {
    backgroundColor: cardColor,
  };
  //percentage usage calculation
  const rate = amount / max;
  const value = rate * 100;
  //conditional style assignment
  let backgroundClass;
  if (value <= 50) {
    backgroundClass = "blue";
  } else if (value > 50 && value < 75) {
    backgroundClass = "yellow";
  } else {
    backgroundClass = "red";
  }

  const cardWidthStyle = {
    width: `${value * 3.9}px`,
    backgroundColor: backgroundClass,
  };

  return (
    <div
      className="max-w-md my-6 mx-auto rounded-lg bg-slate-100 drop-shadow-2xl transition"
      style={cardStyle}
    >
      <div>
        <div className="flex justify-between items-baseline font-bold mb-3">
          <div className="m-2 p-4">{name}</div>
          <div className="flex items-baseline justify-end p-4">
            {currencyFormatter.format(amount)}
            <span className="text-gray-800/50 text-sm ml-1">
              / {currencyFormatter.format(max)}
            </span>
          </div>
        </div>
        <div className="m-1 p-6 overflow-hidden">
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className={`h-4 rounded-full text-xs text-center transition`}
              style={cardWidthStyle}
            >
              <p className="font-bold relative bottom-4 left-0">
                {Math.floor(value)}%
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end m-2 p-2">
          <button className="p-2 m-2 bg-slate-200 hover:bg-blue-500 rounded-l-lg">
            Add Expense
          </button>
          <button className="p-2 m-2 bg-slate-200 hover:bg-blue-500 rounded-r-lg">
            View Expense
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
