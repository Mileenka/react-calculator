import { useState } from "react";
import "./App.css";
import Screen from "./components/Screen";
import Card from "./components/Card";
import Button from "./components/Button";
import { evaluate } from "mathjs";

const App = () => {
  const [value, setValue] = useState("");

  const handleButtonClick = (val) => {
    console.log(val);
    if (val !== "=") {
      setValue((prevValue) => prevValue + val);
    } else {
      try {
        setValue(evaluate(value));
      } catch (error) {
        setValue('')
      }
      
    }
  };

  const buttonValues = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
  ];

  return (
    <>
      <Card>
        <Screen value={value} />
        <div className="btn-container">
          {buttonValues.map((row, rowIndex) => (
            <div key={rowIndex} className="btn-row">
              {row.map((btnValue) => (
                <Button
                  key={btnValue}
                  text={btnValue}
                  style="btn"
                  clickHandler={() => handleButtonClick(btnValue)}
                />
              ))}
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default App;
