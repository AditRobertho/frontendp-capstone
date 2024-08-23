/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./BookingForm.style.css";

function BookingForm({ availableTimes, updateTimes }) {
  const [value, setValue] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    if (name === "date") {
      updateTimes(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(value);
    }
  }

  return (
    <div className="form">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input__date">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" className="input__field" onChange={handleChange} value={value.date} />
        </div>
        <div className="input__time">
          <label htmlFor="time">Time</label>
          <select name="time" id="time" className="input__field" onChange={handleChange} value={value.time}>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="input__guests">
          <label htmlFor="guests">Number of guests</label>
          <input type="number" id="guests" placeholder="1" min="1" max="10" name="guests" className="input__field" onChange={handleChange} value={value.guests} />
        </div>
        <div className="input__occasion">
          <label htmlFor="occasion">Occasion</label>
          <select name="occasion" id="occasion" className="input__field" onChange={handleChange} value={value.occasion}>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <button type="submit" className="input__btn">
          Make Your Reservation
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
