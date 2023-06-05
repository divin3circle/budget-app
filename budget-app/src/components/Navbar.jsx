const Navbar = ({ budgetMenu, setBudgetMenu }) => {
  const handleClose = () => {
    setBudgetMenu(!budgetMenu);
  };

  return (
    <div className="bg-slate-100 mt-0 p-2 shadow-2xl min-w-[450px]">
      <div className="flex justify-between p-2 md:justify-center">
        <div>
          <h1 className="font-bold font-mono text-2xl md:mr-16">
            My Budget App
          </h1>
        </div>
        <div>
          <button className="bg-blue-500 p-2 font-bold text-white font-mono text-lg rounded-md hover:bg-slate-50 hover:text-black" onClick={handleClose}>
            Add Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
