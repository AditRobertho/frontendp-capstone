import { useState } from "react";
import "./BookingForm.style.css";

function BookingForm() {
  const [value, setValue] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [availableTimes, setAvailableTimes] = useState(["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"]);

  function handleChange(e) {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Successfully Submit: ", value);
    // You can also send the form data to an API or handle it as needed here
  }

  return (
    <div className="form">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input__date">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" className="input__field" onChange={handleChange} value={value.date} />
        </div>
        <div className="input__time">
          <label htmlFor="time">Time</label>
          <select name="time" className="input__field" onChange={handleChange} value={value.time}>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="input__guests">
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" name="guests" className="input__field" onChange={handleChange} value={value.guests} />
        </div>
        <div className="input__occasion">
          <label htmlFor="occasion">Occasion</label>
          <select name="occasion" className="input__field" onChange={handleChange} value={value.occasion}>
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
