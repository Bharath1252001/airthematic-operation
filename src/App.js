
// import React, { useState } from 'react';

// const ArithmeticOperations = () => {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [result, setResult] = useState(0);
//   const [error, setError] = useState(false);

//   const handleNum1 = (e) => {
//     setNum1(e.target.value);
//   };

//   const handleNum2 = (e) => {
//     setNum2(e.target.value);
//   };

//   const handleAddition = () => {
//     if (isNaN(num1) || isNaN(num2)) {
//       setError(true);
//     } else {
//       setResult(num1 + num2);
//       setError(false);
//     }
//   };

//   const handleSubtraction = () => {
//     if (isNaN(num1) || isNaN(num2)) {
//       setError(true);
//     } else {
//       setResult(num1 - num2);
//       setError(false);
//     }
//   };

//   const handleMultiplication = () => {
//     if (isNaN(num1) || isNaN(num2)) {
//       setError(true);
//     } else {
//       setResult(num1 * num2);
//       setError(false);
//     }
//   };

//   const handleDivision = () => {
//     if (isNaN(num1) || isNaN(num2)) {
//       setError(true);
//     } else {
//       setResult(num1 / num2);
//       setError(false);
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={num1} onChange={handleNum1} />
//       <input type="text" value={num2} onChange={handleNum2} />
//       <button onClick={handleAddition}>Add</button>
//       <button onClick={handleSubtraction}>Subtract</button>
//       <button onClick={handleMultiplication}>Multiply</button>
//       <button onClick={handleDivision}>Divide</button>
//       {error ? (
//         <p style={{ color: 'red' }}>Please enter numbers</p>
//       ) : (
//         <p style={{ color: 'green' }}>Result: {result}</p>
//       )}
//     </div>
//   );
// };

// export default ArithmeticOperations;

import "./App.css";
import React, { useState } from "react";

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const [successmessage, setSuccessMessage] = useState("");
  const [resultmessage, setResultMessage] = useState("");

  const Change = (event) => {
    const { name, value } = event.target;
    if (name === "number1") {
      setNumber1(parseInt(value));
    } else if (name === "number2") {
      setNumber2(parseInt(value));
    }
  };

  const validInputs = () => {
    if (number1 === "") {
      setErrorMessage("Error: Success: num1 can't be empty");

      return false;
    } else if (number2 === "") {
      setErrorMessage("Error: Success: num2 can't be empty");

      return false;
    } else if (isNaN(number1) || isNaN(number2)) {
      setErrorMessage("inputs must be numbers");

      return false;
    } else {
      setErrorMessage("");

      return true;
    }
  };

  const Addition = () => {
    if (!validInputs()) return;
    setResult(number1 + number2);
    setResultMessage("Result : ");
    setSuccessMessage("Success: Your result is shown above!");
  };
  const Subtraction = () => {
    if (!validInputs()) return;
    setResult(number1 - number2);
    setResultMessage("Result : ");
    setSuccessMessage("Success: Your result is shown above!");
  };
  const Multiplication = () => {
    if (!validInputs()) return;
    setResult(number1 * number2);
    setResultMessage("Result : ");
    setSuccessMessage("Success: Your result is shown above!");
  };
  const Division = () => {
    if (!validInputs()) return;
    setResult(number1 / number2);
    setResultMessage("Result : ");
    setSuccessMessage("Success: Your result is shown above!");
  };

  return (
    <div className="App">
      <div>
        <h1>React Calculator</h1>
        <input
          type="text"
          name="number1"
          placeholder="Number1 "
          onChange={Change}
        />
        <br />
        <input
          type="text"
          name="number2"
          placeholder="Number2"
          onChange={Change}
        />
        <br />
        <button onClick={Addition}>+</button>
        <button onClick={Subtraction}>-</button>
        <button onClick={Multiplication}>*</button>
        <button onClick={Division}>/</button>
        <br />

        <p className="ErrorMessage">{errormessage}</p>
        <h3>
          {resultmessage}
          {result}
        </h3>
        <p className="SuccessMessage">{successmessage}</p>
      </div>
    </div>
  );
}

export default App;