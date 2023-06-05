export const Card = ({ name, amount, max }) => {
  const displayWidthRatio = amount / max;
  const displayWidth = Math.floor(displayWidthRatio * 100 );


  return (
    <div className="flex justify-center min-w-[500px]">
      <div className="shadow-2xl mt-5 p-5 bg-slate-100  rounded-2xl">
        <div className="flex justify-between mt-8">
          <h1 className="whitespace-nowrap font-bold text-xl font-mono p-2 m-2">
            {name}
          </h1>
          <p className="font-bold font-mono p-2 m-2 whitespace-nowrap">
            Ksh.{amount} /<span className="text-slate-800/80"> Ksh.{max}</span>
          </p>
        </div>
        <div className="p-2 m-1">
          <div className="w-full bg-gray rounded-full h-2.5 dark:bg-gray-700 ">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width:"45%"  }}
            ></div>
          </div>
          <div className="flex justify-center p-2 mt-2 font-mono font-bold">
            <p className="bg-blue-500 text-white rounded p-2 ">{displayWidth}%</p>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 rounded-l p-2 font-bold font-mono text-white hover:bg-slate-100 hover:text-black">
              Add Expense
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
