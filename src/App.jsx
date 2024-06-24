import Header from './Components/Header';
import User from './Components/User';
import Result from './Components/Result';

import { useState } from 'react';

function App() {
  let [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expectedReturn: 1200,
    duration: 5,
  });

  let inputIsValid = userInput.duration >= 1 && userInput.duration <= 20;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  // console.log(
  //   calculateInvestmentResults({
  //     initialInvestment: userInput.InitialInvestment,
  //     annualInvestment: userInput.AnualInvestment,
  //     expectedReturn: userInput.ExpectedReturn,
  //     duration: userInput.Duration,
  //   })
  // );

  return (
    <>
      <Header />
      <User userInput={userInput} onChange={handleChange} />
      {inputIsValid ? (
        <Result input={userInput} />
      ) : (
        <p className='center'>Please Enter a Duration higher than</p>
      )}
    </>
  );
}

export default App;
