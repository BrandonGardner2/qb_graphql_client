import React, { useContext } from "react";

import "./overview.css";

import Context from "../../context";

const Overview = props => {
  const {
    state: { markets, totalCards }
  } = useContext(Context);

  return (
    <div className="card overview-wrapper">
      <div className="overview-row">
        <h3>Total Cards:</h3>
        <span>{totalCards}</span>
      </div>

      <div className="overview-row">
        <h3>Total Markets:</h3>
        <span>{markets.length}</span>
      </div>
    </div>
  );
};

export default Overview;
