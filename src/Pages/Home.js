import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";

// to get the data from LS

const Home = () => {
  const getLocalItmes = () => {
    let list = localStorage.getItem("formValues");
    console.log(list);

    if (list) {
      return JSON.parse(localStorage.getItem("formValues"));
    } else {
      return [];
    }
  };
  console.log(getLocalItmes());
  const tasks = [
    {
      title: "design",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0FCCO8OtEVLKrZgzrzjcESqiMg0qxADnWcvJzFON&s",
      status: false,
      desc: "heellomve r2  4 3  34r 34 r 34r 3 r 3r 3 r3 r 3r 3  3r 3r 3 r 3r 3 r 3r 3r 3 r 3r 3 r 3r3jnfwnfjkerngknrgrrr  svnw45nfjwnfw",
      date: new Date(),
    },
  ];

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
            <RiSearch2Line onClick={getLocalItmes} className="search-icon" />
          </div>
        </div>
        <div className="cards-box">
          {tasks.map((task) => (
            <Card {...task} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
