import React, { useState } from "react";

const Newdata = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItmes());
  const [toggleSubmit, setToggleSubmit] = useState(true);

  const getLocalItmes = () => {
    let list = localStorage.getItem("lists");
    console.log(list);

    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };
  const addItem = () => {
    if (!inputData) {
      alert("plzz fill data");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);

      setInputData("");

      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  return (
    <>
      <div id="contact-form">
        <div class="greet">
          <h1>ApnaTodo</h1>
          <h4>prioritise tasks, manage tasks effectively, use time wisely </h4>
        </div>
        <p id="failure">Oopsie...message not sent.</p>
        <p id="success">Your message was sent successfully. Thank you!</p>

        <form method="post" action="/">
          <div>
            <label for="name">
              <span class="required">Title : </span>
              <input placeholder=" Designing.." required="required" />
            </label>
          </div>
          <div>
            <label for="email">
              <span class="required">Images Url :</span>
              <input
                name="URL"
                // value=""
                placeholder="https://encrypted-tbn0.gstatic.com/images.png"
                // tabindex="2"
                // required="required"
              />
            </label>
          </div>

          <div>
            <label for="message">
              <span class="required">Description : </span>
              <textarea
                id="desc"
                name="desc"
                placeholder="Task implies work imposed by a person in authority or an employer or by circumstance charged with a variety of tasks."
                tabindex="5"
                required="required"
              ></textarea>
            </label>
          </div>
          <div>
            <button name="submit" type="submit" id="submit">
              SEND
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Newdata;
