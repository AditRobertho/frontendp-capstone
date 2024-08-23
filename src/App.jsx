import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// component import files
import NavBar from "./components/NavBar";
// page import file
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
