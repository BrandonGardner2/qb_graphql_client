export default function(state, { type, payload }) {
  switch (type) {
    case "ADD_LOCATION":
      return {
        ...state,
        markets: [...state.markets, payload]
      };
    case "ADD_CARD":
      return {
        ...state,
        totalCards: state.totalCards + 1,
        markets: state.markets.map(market => {
          if (market._id === payload._id) {
            market.cards = payload.cards;
            return market;
          }
          return market;
        })
      };
    case "DELETE_CARD":
      return {
        ...state,
        totalCards: state.totalCards - 1,
        markets: state.markets.map(market => {
          if (market._id === payload._id) {
            market.cards = payload.cards;
            return market;
          }
          return market;
        })
      };
    case "GET_MARKETS":
      return {
        ...state,
        markets: payload,
        totalCards: payload.reduce((sum, cur) => {
          if (cur) {
            return sum + cur.cards;
          }
          return 0;
        }, 0)
      };
    default:
      return state;
  }
}
