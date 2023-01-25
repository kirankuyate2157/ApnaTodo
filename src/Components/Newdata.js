import React, { useState, useEffect } from "react";

const getLocalItmes = () => {
  let list = localStorage.getItem("formValues");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("formValues"));
  } else {
    return [];
  }
};
const Newdata = () => {
  const [inputData, setInputData] = useState({
    title: "",
    img: "",
    status: false,
    desc: "",
    date: new Date(),
  });
  const [formValues, setFormValues] = useState([]);

  const submitForm = () => {
    setFormValues((old) => {
      return [...old, inputData];
    });
    console.log(formValues);
  };

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  return (
    <>
      <div id="contact-form">
        <div className="greet">
          <h1>ApnaTodo</h1>
          <h4>prioritise tasks, manage tasks effectively, use time wisely </h4>
        </div>
        <p id="failure">Oopsie...data not save.</p>
        <p id="success">Your tasks added successfully. Thank you!</p>

        {/* <form> */}
        <div>
          <label for="name">
            <span className="required">Title : </span>
            <input
              placeholder=" Designing.."
              value={inputData.title}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  title: e.target.value,
                })
              }
              required="required"
            />
          </label>
        </div>
        <div>
          <label for="email">
            <span className="required">Images Url :</span>
            <input
              name="URL"
              value={inputData.img}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  img: e.target.value,
                })
              }
              placeholder="https://encrypted-tbn0.gstatic.com/images.png"
              required="required"
            />
          </label>
        </div>

        <div>
          <label for="message">
            <span className="required">Description : </span>
            <textarea
              id="desc"
              name="desc"
              value={inputData.desc}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  desc: e.target.value,
                })
              }
              placeholder="Task implies work imposed by a person in authority or an employer or by circumstance charged with a variety of tasks."
              tabindex="5"
              required="required"
            ></textarea>
          </label>
        </div>
        <div>
          <button name="submit" onClick={submitForm} id="submit">
            Save
          </button>
          <ol>
            {formValues.map((ele) => {
              return <li>{ele.desc}</li>;
            })}
            <li>{inputData.desc}</li>
          </ol>
        </div>
        {/* </form> */}
      </div>
    </>
  );
};
export default Newdata;
