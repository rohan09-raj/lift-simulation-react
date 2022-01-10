import React from "react";

const Lift = ({ style }) => {
  return (
    <div className="lift" style={style}>
      <div className="lift__container">
        <div className="lift__left-door"></div>
        <div className="lift__right-door"></div>
      </div>
    </div>
  );
};

export default Lift;
