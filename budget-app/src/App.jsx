import { useState } from "react";
import { Card } from "./components/Card";
import GetBudget from "./components/GetBudget";
import Navbar from "./components/Navbar";

const App = () => { 
  const [budgetMenu, setBudgetMenu]= useState(false);



  return (
    <>
    <GetBudget budgetMenu={budgetMenu} setBudgetMenu={setBudgetMenu}/>
      <Navbar budgetMenu={budgetMenu} setBudgetMenu={setBudgetMenu} />
      <Card name="Entertainment" amount={100} max={1000} />
      <Card name="Supper" amount={60} max={100} />
      <Card name="Supper" amount={60} max={100} />
    </>
  );
};

export default App;
