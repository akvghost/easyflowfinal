import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

function MainComponent(props) {
  const [authentication, setAuthentication] = useState(false);

  const [previousDetails, setPreviousDetails] = useState({});

  const printDetailsLogIn = (jsonObject) => {
    console.log(jsonObject);
    setPreviousDetails(JSON.parse(JSON.stringify(jsonObject)));
    setAuthentication(jsonObject["logIn"]);
  };

  const printDetailsRegister = (jsonObject) => {
    console.log(jsonObject);
  };

  const isLoggedIn = authentication;

  if (isLoggedIn) {
    return (
      <RegistrationForm
        printDetails={printDetailsRegister}
        previousDetails={previousDetails}
      />
    );
  }
  return <LoginForm printDetails={printDetailsLogIn} />;
}

export default MainComponent;
