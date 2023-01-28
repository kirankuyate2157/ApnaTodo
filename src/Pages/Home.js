import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

import Card from "../Components/Card";
import Newdata from "../Components/Newdata";

const longEnUSFormatter = new Intl.DateTimeFormat("en-IN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

var Default = [
  {
    title: "Early Physical Activity",
    img: "https://www.hunimed.eu/content/uploads/2019/11/iStock-479942862.jpg",
    status: false,
    desc: "Yoga- The Oldest Form of Exercise!! Did you know that the largest Yoga class was held in India and it involved over one lakh participants?! Did you also know that Lord Shiva is deemed the Lord of Yoga?! Well, all these facts make yoga an ancient practice that has been born and brought about for more than 5000 years",
    date: longEnUSFormatter.format(new Date(), "dd/mm/yyyy"),
  },
  {
    title: "Eat Some Healthy",
    img: "https://blog.nasm.org/hubfs/food-restriction-header.jpg",
    status: true,
    desc: "A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.",
    date: longEnUSFormatter.format(new Date(), "dd/mm/yyyy"),
  },
  {
    title: "Personal Reflection",
    img: "https://i.pinimg.com/originals/cb/bc/2e/cbbc2e8d7b01c49138d5b3f74571a6fa.png",
    status: true,
    desc: "Making time to reflect weekly helps you live more intentionally. It helps you understand if you're still running in the right direction or why you are even moving in that particular direction",
    date: longEnUSFormatter.format(new Date(), "dd/mm/yyyy"),
  },
  {
    title: "Time for Reading",
    img: "https://sites.google.com/site/learnenglishfeelhappy/_/rsrc/1418771031461/time-to-read/read-write-learn-5276161.jpg",
    status: true,
    desc: "you should have a window of at least one hour of free time before going to bed in order to enjoy a nice reading session before sleep. For evening reading sessions, the best time to read a book is generally between 6 and 9 pm",
    date: longEnUSFormatter.format(new Date(), "dd/mm/yyyy"),
  },
];

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
          {Default.map((task) => (
            <Card {...task} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
