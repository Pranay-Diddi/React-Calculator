import { useState } from "react";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/IndexFile.css";

function App() {
  const [eqn, setEqn] = useState("");

  const onBtnClicked = (event) => {
    const clickedValue = event.target.innerText; // Move this line to the top to ensure it's declared before use

    if (clickedValue === "C") {
      setEqn("");
    } else if (clickedValue === "=") {
      try {
        const result = eval(eqn);
        setEqn(result.toString());
      } catch (error) {
        setEqn("");
        // setEqn('');
      }
    } else {
      setEqn(eqn + clickedValue);
    }
  };

  return (
    <>
      <figure class="text-center">
        <h2 className="heading">Calculator</h2>
      </figure>

      <div className="calculator">
        <Display calVal={eqn} />
        <ButtonsContainer onBtnClick={onBtnClicked} />
      </div>
    </>
  );
}

export default App;
