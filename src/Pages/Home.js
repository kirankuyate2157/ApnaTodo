import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";

// to get the data from LS

const getLocalItmes = () => {
  let list = localStorage.getItem("lists");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Home = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItmes());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  // delete the items
  const deleteItem = (index) => {
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });

    setItems(updateditems);
  };

  // edit the item
  //     When user clikc on edit button

  // 1: get the id and name of the data which user clicked to edit
  // 2: set the toggle mode to change the submit button into edit button
  // 3: Now update the value of the setInput with the new updated value to edit.
  // 4: To pass the current element Id to new state variable for reference

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem);

    setToggleSubmit(false);

    setInputData(newEditItem.name);

    setIsEditItem(id);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <div className="search-bar">
            <input
              type="search"
              placeholder="Search for Tasks..."
              className="search"
            />
            <RiSearch2Line className="search-icon" />
          </div>
        </div>
        <div className="cards-box">items.map((ele)=>{<Card {...data} />})</div>
      </div>
    </>
  );
};

export default Home;
