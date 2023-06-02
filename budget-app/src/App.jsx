import { useState } from "react";
import AddBudgetModal from "./components/AddBudgetModal";
import Card from "./components/Card";

function App() {
  const [menu, setMenu] = useState(false);
  let blur;
  if (menu) {
    blur = "blur-sm";
  } else {
    blur = "";
  }

  return (
    <div>
      <AddBudgetModal menu={menu} setMenu={setMenu} style={{ z: "1000" }} />
      <div className={blur}>
        <nav className="flex justify-between">
          <h1 className="text-3xl px-4 py-4 m-4">Budgets</h1>
          <div className="flex mx-4 px-4 justify-center">
            <button
              className="bg-blue-500 rounded-lg px-4 py-4 m-4 text-white font-bold hover:bg-gray-200 hover:text-black"
              onClick={() => setMenu(!menu)}
            >
              Add Budget
            </button>
            <button className="bg-gray-100 rounded-lg px-4 py-4 m-4 font-bold hover:bg-blue-500 hover:text-white">
              Add Expense
            </button>
          </div>
        </nav>
        <div>
          <Card name="Entertainment" amount={65} max={90} />
          <Card name="Supper" amount={15} max={100} />
          <Card name="Lunch" amount={40} max={60} />
          <Card name="Utilities" amount={3} max={40} />
        </div>
      </div>
    </div>
  );
}

export default App;
