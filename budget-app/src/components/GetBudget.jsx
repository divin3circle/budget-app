const GetBudget = ({ budgetMenu, setBudgetMenu }) => {
  const handleClose = () => {
    setBudgetMenu(!budgetMenu);
  };
  return (
    <div
      className={`${
        budgetMenu
          ? "shadow-2xl absolute z-10 bg-blue-100 w-full top-0 p-2"
          : "shadow-2xl absolute z-10 bg-blue-100 w-full top-0 p-2 hidden"
      }`}
    >
      <div className="flex justify-between">
        <h1 className="font-mono font-bold text-2xl p-2"> Add Budget</h1>
        <button
          className="p-2 font-bold text-3xl align-baseline text-red-600 hover:bg-blue-100 hover:text-black"
          onClick={handleClose}
        >
          X
        </button>
      </div>
      <div className="p-2">
        <form>
          <div className="">
            <label className="block font-bold font-mono text-xl" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-sm h-[30px] p-2 my-2 font-mono "
              type="text"
              required
              id="name"
            />
          </div>
          <div>
            <label className="block font-bold font-mono text-xl" htmlFor="max">
              Maximum Amount
            </label>
            <input
              className="w-full rounded-sm h-[30px] my-2 p-2 font-mono"
              id="max"
              type="number"
              step={1}
              required
            />
          </div>
          <div className="flex justify-end p-2 mt-2">
            <button
              className="bg-blue-500 rounded-lg p-2 
             font-bold font-mono text-white  hover:bg-blue-100 hover:text-black"
            >
              Add Budget
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetBudget;
