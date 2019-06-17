import React, { useContext, useEffect } from "react";

import "./markets.css";

import Context from "../../context";
import { useClient } from "../../client";
import { GET_MARKETS_QUERY } from "../../graphql/queries";

import MarketCard from "./MarketCard/MarketCard";

const Markets = props => {
  const client = useClient();
  const {
    state: { markets },
    dispatch
  } = useContext(Context);

  useEffect(() => {
    client.request(GET_MARKETS_QUERY).then(({ getMarkets }) => {
      dispatch({
        type: "GET_MARKETS",
        payload: getMarkets
      });
    });
  }, []);

  return (
    <div className="markets-wrapper">
      <h3>Markets</h3>

      <div className="markets-cards">
        {markets.map(market => (
          <MarketCard key={market._id} market={market} />
        ))}
      </div>
    </div>
  );
};

export default Markets;
