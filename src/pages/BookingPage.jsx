/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const initializeTimes = () => ["17.00", "18.00", "19.00", "20.00", "21.00", "22.00"];

const submitAPI = function (formData) {
  return true;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action, date);
    default:
      state;
  }
};

const initializeTimes = () => fetchAPI(new Date());

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);
  const navigate = useNavigate();

  const updateTimes = useCallback((date) => {
    dispatch({ type: "UPDATE_TIMES", date });
  }, []);

  const submitForm = useCallback(
    (formData) => {
      if (submitAPI(formData)) {
        // Directly use submitAPI from the external script
        navigate("/confirmation"); // Navigate to confirmation page on successful submission
      }
    },
    [navigate]
  );

  useEffect(() => {
    if (typeof fetchAPI === "function") {
      updateTimes(new Date());
    } else {
      console.error("fetchAPi is not defined");
    }
  });

  return (
    <>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} onSUbmit={submitForm} />
    </>
  );
}
export default BookingPage;
