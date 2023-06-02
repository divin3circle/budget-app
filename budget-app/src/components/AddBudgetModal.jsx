const AddBudgetModal = ({ menu, setMenu }) => {
  function handleClose() {
    setMenu(!menu);
  }
  function handleSubmit(e) {}
  return (
    <div
      className=" absolute my-2 min-w-[450px] mx-1 z-10  w-full bg-slate-200 shadow-2xl h-[400px] rounded-lg"
      style={!menu ? { left: "10000px" } : { display: "block" }}
    >
      <div className="flex justify-between mx-2 p-1 font-bold text-2xl">
        <h1>New Budget</h1>
        <button
          className="bg-red-600 text-white m-2 p-2 rounded-lg"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
      <div className="flex justify-start m-1 p-2">
        <form className="w-full" onSubmit={handleSubmit}>
          <label className="text-xl font-semibold m-1" htmlFor="name">
            Name
          </label>
          <div className="m-2"></div>
          <input
            className="block font-mono rounded-lg h-[35px] w-[80%] mb-10"
            type="text"
            id="name"
            required
          />
          <label className="text-xl font-semibold m-1" htmlFor="max">
            Maximum Spending
          </label>
          <div className="m-2"></div>
          <input
            className="block font-mono rounded-lg h-[35px] w-[80%] m-1"
            type="number"
            id="max"
            required
          />
          <div className="flex justify-end mt-8 mx-8 p-4">
            <button
              className="bg-blue-600 text-white hover:bg-blue-600/50 font-bold rounded-xl p-4 w-[100px]"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBudgetModal;
