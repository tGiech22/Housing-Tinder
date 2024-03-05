
import "./main.css"
import Select from "react-select";
import React from "react";

import { StylesConfig } from 'react-select';

const options = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" }
];

const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      width: 400,
      height: 50,
      backgroundColor: "#2B2B2B",
      borderRadius: 30,
      color: "white",
      borderColor: "white",
      borderWidth: 0.5,
      borderStyle: "solid",
      marginBottom: 20,
      marginRight: 40,
      textAlign: "center"
    }),
    placeholder: (provided) => ({
      ...provided,
      textAlign: "center",
      color: "white",
      fontSize : 14
    }),
    menu: (provided) => ({
      ...provided,
      width:400,
      marginTop: 0,
      marginBottom: 0,
      paddingTop: 0, // Add paddingTop to remove any top padding
      paddingBottom: 0, // Add paddingBottom to remove any bottom padding
    }),
  };
  
  
function MainSignup() {
    return (
        <div className="button-signup-container">
            <button className="signup-button">Name</button>
            <button className="signup-button">Phone Number</button>
            <button className="signup-button">City</button>
            <Select styles={customStyles}
                options={options}
                placeholder="State" />
            <button className="signup-button">Price Range</button>
            <button className="signup-button">Preferences</button>
        </div>
    )
}

export default MainSignup