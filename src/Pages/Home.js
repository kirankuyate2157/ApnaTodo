import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

import Card from "../Components/Card";
import Newdata from "../Components/Newdata";

const Home = () => {
  const [state, setState] = useState({ seen: false });
  const [search, setSearch] = useState();

  // useEffect(() => {
  //   return () => {};
  // }, [input]);

  const togglePop = () => {
    setState({
      seen: !state.seen,
    });
  };
  const getLocalItmes = () => {
    let list = localStorage.getItem("formValues");
    // console.log(list);

    if (list) {
      return JSON.parse(localStorage.getItem("formValues"));
    } else {
      return [];
    }
  };
  const arr = getLocalItmes() || [];

  return (
    <>
      <div>
        <div className="container-bx">
          <div className="main-bar">
            <h1>do you task honestly daily...</h1>
            <div className="search-bar">
              <input
                type="search"
                placeholder="Search for Tasks..."
                className="search"
              />
              <RiSearch2Line onClick={getLocalItmes} className="search-icon" />
            </div>
          </div>
        </div>
        <div className="cards-box">
          <span className="new" onClick={togglePop}>
            Add new +
          </span>
          <div>{state.seen ? <Newdata toggle={togglePop} /> : null}</div>

          {arr.map((task) => (
            <Card {...task} />
          ))}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
