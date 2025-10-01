import React, { useState } from "react";
import menuData from "./Data";
import { Menu } from "./Menu";
import '../styles/App.css';

const App = () => {
  const [category,setCategory] = useState("All");

  const filterMenu = category === "All" ? menuData : menuData.filter((item => item.category===category))
  return (
    <div id="main">
      <h1>Menu</h1>
      <div className="buttons">
        <button id="filter-btn-1" onClick={() => setCategory("Breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => setCategory("Lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => setCategory("Shakes")}>
          Shakes
        </button>
      </div>
      <Menu items={filterMenu}/>
    </div>
  );
};
export default App;
