import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait,screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

// updated test cases

it("should show validation on click",  () => {
   render(<App />);

   const lastName = screen.getByLabelText(/lastName/i);
   fireEvent.blur(lastName);
    screen.findByText("Required lastName")
   
   const FirstName = screen.getByLabelText(/FirstName/i);
   fireEvent.blur(FirstName);
    screen.findByText("Required firstName");

   const emailInput = screen.getByLabelText("Enter Email");

        
        fireEvent.blur(emailInput);

         screen.findByText("Required");

        userEvent.type(emailInput, "test");
        
        fireEvent.blur(emailInput);

        screen.findByText("Invalid email.");

        userEvent.clear(emailInput);

        userEvent.type(emailInput, "kishor@gmail.com");
   
        const phoneNumber = screen.getByLabelText("Enter Valid phone");
        fireEvent.blur(phoneNumber);
        screen.findByText("Phone No Required");

        

        const DepartureDate = screen.getByLabelText("DepartureDate");
        fireEvent.blur(DepartureDate);
        screen.findByText("DepartureDate Required");

        const ArrivealDate = screen.getByLabelText("ArrivealDate");
        fireEvent.blur(ArrivealDate);
        screen.findByText("ArrivealDate Required");
   
});







