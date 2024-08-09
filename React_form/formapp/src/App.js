import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });

  // console.log(formData);

  function changeHandler(e) {
    const { name, value, type, checked } = e.target;
    // console.log(name, value, type, checked);
    console.log(
      "name: " + name,
      "value: " + value,
      "type: " + type,
      "checked: " + checked
    );
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    // print
    console.log("Finally printing all the entries...................");
    console.log(formData);
  }

  return (
    <div className="App">
      <h1>FORM APP</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="FirstName"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br></br>
        <br></br>

        <input
          type="text"
          placeholder="LastName"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br></br>
        <br></br>
        <input
          type="email"
          placeholder="Enter Email address here"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br></br>
        <br></br>

        <textarea
          placeholder="Enter your message here"
          onChange={changeHandler}
          name="message"
          value={formData.message}
        />

        <br></br>
        <br></br>

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I isVisible</label>

        <br></br>
        <br></br>

        <fieldset>
          <legend>MODES: </legend>
          <input
            type="radio"
            name="mode"
            onChange={changeHandler}
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online-Mode">Online Mode</label>

          <input
            type="radio"
            name="mode"
            onChange={changeHandler}
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>

        <label htmlFor="favCar">Tell your favorite car: </label>
        <select
          id="favCar"
          onChange={changeHandler}
          name="favCar"
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">fortuner</option>
          <option value="Defender">Defender</option>
          <option value="Urus">Urus</option>
          <option value="XUV 700">XUV 700</option>
          <option value="Thar">Thar</option>
        </select>
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
