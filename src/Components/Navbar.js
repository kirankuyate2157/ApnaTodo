import React from "react";

import Card from "./Card";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <h1 className="logo">ApnaTodo</h1>
        <div className="nav-tab-task">
          <h4 className="task">Task</h4>
        </div>
        <div className="nav-tab-reminder">
          <h4 className="reminder">Reminder</h4>
        </div>
        <div className="nav-tab-new">
          <h4 className="new">New + </h4>
        </div>
      </div>
    </>
  );
};
export default Navbar;
