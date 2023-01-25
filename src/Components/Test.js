import React, { useState } from "react";

const Test = () => {
  const [inputLists, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvents = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((old) => {
      return [...old, inputLists];
    });
  };
  return (
    <>
      <div
        style={{
          color: "blue",
          background: "red",
          justifyContent: "center",
          margin: "15px",
          alignItems: "center",
          textAlign: "center",
          height: "100%",
        }}
      >
        <div>
          <br />
          <h1>ApnaTodo</h1>
          <br />
          <input
            type="text"
            placeholde="Add items f**k tasks.."
            // value={inputLists}
            onChange={itemEvents}
          />
          <button onClick={listOfItems}>+</button>
          <div style={{ color: "yellow", padding: "20px" }}>
            <ol>
              {items.map((ele) => {
                return <li>{ele}</li>;
              })}

              <li>{inputLists}</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default Test;
