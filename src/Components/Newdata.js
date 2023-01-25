import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const getLocalItmes = () => {
  let list = localStorage.getItem("formValues");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("formValues"));
  } else {
    return [];
  }
};
const longEnUSFormatter = new Intl.DateTimeFormat("en-IN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
const Newdata = (props) => {
  const [inputData, setInputData] = useState({
    title: "",
    img: "",
    status: false,
    desc: "",
    date: longEnUSFormatter.format(new Date(), "dd/mm/yyyy"),
  });
  const [formValues, setFormValues] = useState([]);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  const submitForm = (event) => {
    setFormValues((old) => {
      return [...old, inputData];
    });
    console.log(formValues);
    event.preventDefault();
  };

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  const handleClick = () => {
    props.toggle();
  };
  return (
    <>
      <div id="contact-form">
        <span className="close" onClick={handleClick}>
          &times;
        </span>
        {/* <form action="/"> */}
        <div className="greet">
          <h1>ApnaTodo</h1>
          <h4>prioritise tasks, manage tasks effectively, use time wisely </h4>
        </div>
        <p id="failure">Oopsie...data not save.</p>
        <p id="success">Your tasks added successfully. Thank you!</p>

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
