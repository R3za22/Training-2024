import { useState } from "react";

import UserInput from "./Components/UserInput";
import Header from "./Components/header";
import Results from "./Components/Results";



function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;


  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please Enter Correct Duration !!</p>}
      {inputIsValid && <Results input = {userInput} />}
    </>
  );
}

export default App;
