import React, { useContext } from "react";

import "./marketcard.css";

import Context from "../../../context";
import { useClient } from "../../../client";
import { EDIT_CARD_MUTATION } from "../../../graphql/mutations";

const MarketCard = ({ market }) => {
  const client = useClient();
  const {
    state: { totalCards },
    dispatch
  } = useContext(Context);

  const handleAddCard = async () => {
    const variables = {
      _id: market._id,
      cards: market.cards + 1
    };
    const { editCards } = await client.request(EDIT_CARD_MUTATION, variables);

    dispatch({
      type: "ADD_CARD",
      payload: editCards
    });
  };

  const handleDeleteCard = async () => {
    const variables = {
      _id: market._id,
      cards: market.cards - 1
    };
    const { editCards } = await client.request(EDIT_CARD_MUTATION, variables);

    dispatch({
      type: "DELETE_CARD",
      payload: editCards
    });
  };

  const percentageOfTotal = market.cards
    ? ((market.cards / totalCards) * 100).toFixed(2)
    : 0.0;

  return (
    <div className="card market-card">
      <ul>
        <li>
          <label>Market ID:</label>
          <span>{market._id}</span>
        </li>
        <li>
          <label>Location:</label>
          <span>{market.location}</span>
        </li>
        <li>
          <label>Cards:</label>
          <span>{market.cards}</span>
        </li>
        <li>
          <label>% of total:</label>
          <span>{percentageOfTotal}</span>
        </li>
      </ul>

      <button onClick={handleAddCard} type="button">
        Add Card
      </button>
      <button onClick={handleDeleteCard} type="button">
        Delete Card
      </button>
    </div>
  );
};

export default MarketCard;
