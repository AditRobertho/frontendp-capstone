/* eslint-disable no-unused-vars */
// BookingForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { test, expect } from "vitest";

// Mock updateTimes function
const mockUpdateTimes = (date) => {};

test("renders BookingForm component and checks form fields", () => {
  render(<BookingForm availableTimes={["12:00 PM", "1:00 PM"]} updateTimes={mockUpdateTimes} />);

  // Check if form fields are rendered
  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
});

test("updates form value when input fields change", () => {
  render(<BookingForm availableTimes={["12:00 PM", "1:00 PM"]} updateTimes={mockUpdateTimes} />);

  // Simulate user interactions
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2024-08-30" } });
  fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: "1:00 PM" } });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "4" } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "anniversary" } });

  // Check if form values are updated
  expect(screen.getByLabelText(/Date/i).value).toBe("2024-08-30");
  expect(screen.getByLabelText(/Time/i).value).toBe("1:00 PM");
  expect(screen.getByLabelText(/Number of guests/i).value).toBe("4");
  expect(screen.getByLabelText(/Occasion/i).value).toBe("anniversary");
});

test("calls updateTimes function when date changes", () => {
  const mockUpdateTimes = (date) => {
    expect(date).toBe("2024-08-30");
  };

  render(<BookingForm availableTimes={["12:00 PM", "1:00 PM"]} updateTimes={mockUpdateTimes} />);

  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2024-08-30" } });
});
