import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import Floor from "./components/Floor";
import Lift from "./components/Lift";

function App() {
  const numOfFloors = 10;
  const [currentFloor, setcurrentFloor] = useState("0");

  const prevFloor = useRef();
  useEffect(() => {
    prevFloor.current = currentFloor;
  });
  const prevFloorCount = prevFloor.current;

  const liftSpeed = {
    transform: `translateY(-${currentFloor * 140}px)`,
    transitionDuration: `${(currentFloor - prevFloorCount) * 2.0}s`,
  };

  function switchFloor(e) {
    const presentFloor = e.target.key;
    setcurrentFloor(presentFloor);
  }

  return (
    <div className="app">
      <div className="app__heading">
        <h1>Lift Simulation</h1>
      </div>
      {[...Array(numOfFloors)].map((element, floorNumber) => (
        <div key={floorNumber}>
          <Floor
            floorNumber={numOfFloors - floorNumber}
            onClick={(e) => switchFloor(e)}
          />
        </div>
      ))}

      <Lift style={liftSpeed} />
    </div>
  );
}

export default App;
