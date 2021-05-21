import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [submarineCount, setSubmarineCount] = useState(0);
  const [carrierCount, setCarrierCount] = useState(0);

  const path = "submarine.js";
  const submarineWorker = useMemo(() => new Worker(path), [path]);

  useEffect(() => {
    submarineWorker.onmessage = ($event) => {
      if ($event && $event.data) {
        setSubmarineCount($event.data);
      }
    };

    return () => submarineWorker.terminate();
  }, [submarineWorker]);

  const handleSubmarineButtonClick = () => {
    submarineWorker.postMessage({
      msg: "incSubmarine",
      countSubmarine: submarineCount,
    });
  };

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td>Submarine:</td>
            <td>{submarineCount}</td>
            <td>
              <button onClick={handleSubmarineButtonClick}>+</button>
            </td>
          </tr>
          <tr>
            <td>Carrier:</td>
            <td>{carrierCount}</td>
            <td>
              <button onClick={() => setCarrierCount(carrierCount + 1)}>
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
