import React, { useState, useContext } from "react";

import "./createmarket.css";

import Context from "../../context";
import { ADD_MARKET_MUTATION } from "../../graphql/mutations";
import { useClient } from "../../client";

const CreateMarket = props => {
  const client = useClient();
  const { dispatch } = useContext(Context);
  const [location, setLocation] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    if (location.trim() !== "") {
      const { addMarket } = await client.request(ADD_MARKET_MUTATION, {
        location
      });
      dispatch({
        type: "ADD_LOCATION",
        payload: addMarket
      });
      setLocation("");
    } else {
      alert("Please add the name of your new location.");
    }
  };

  return (
    <div className="create-market_wrapper">
      <h2 className="create-market_title">Create New Market</h2>

      <form className="create-market_form" onSubmit={handleSubmit}>
        <label htmlFor="create-market_input">Location:</label>

        <input
          type="text"
          id="create-market_input"
          name="location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <button type="submit">Add Market</button>
      </form>
    </div>
  );
};

export default CreateMarket;
