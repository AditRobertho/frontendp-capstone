import { Field, Form, Formik } from "formik";
import "./BookingForm.style.css";

function BookingForm() {
  return (
    <div className="form">
      <Formik>
        <Form className="form-container">
          <div className="input__date">
            <label htmlFor="date">Date</label>
            <Field type="date" name="date" className="input__field" />
          </div>
          <div className="input__time">
            <label htmlFor="time">Time</label>
            <Field as="select" name="time" className="input__field">
              <option value="5">17.00</option>
              <option value="6">18.00</option>
              <option value="7">19.00</option>
              <option value="8">20.00</option>
              <option value="9">21.00</option>
              <option value="10">22.00</option>
            </Field>
          </div>
          <div className="input__guests">
            <label htmlFor="guests">Number of guests</label>
            <Field type="number" placeholder="1" min="1" max="10" id="guests" className="input__field" />
          </div>
          <div className="input__occasion">
            <label htmlFor="occasion">Occasion</label>
            <Field as="select" name="occasion" className="input__field">
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </Field>
          </div>

          <Field type="submit" value="Make Your Reservation" className="input__btn" />
        </Form>
      </Formik>
    </div>
  );
}

export default BookingForm;
