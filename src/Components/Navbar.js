import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <h1 className="logo">ApnaTodo</h1>
        <div className="nav-tabs">
          <div className="nav-tab-task">
            <h4 className="task">Task</h4>
          </div>
          <div className="nav-tab-reminder">
            <h4 className="reminder">Reminder</h4>
          </div>
        </div>
        <div className="nav-tab-new">
          <Link to="/new">
            <h4 className="new">New + </h4>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
