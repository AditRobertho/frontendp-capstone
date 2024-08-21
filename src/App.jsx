import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// component import files
import NavBar from "./components/NavBar";
// page import file
import HomePage from "./pages/HomePage";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservations" element={<BookingForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
