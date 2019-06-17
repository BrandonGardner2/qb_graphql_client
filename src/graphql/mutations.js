export const ADD_MARKET_MUTATION = `
mutation($location: String!) {
    addMarket(input: {location: $location}) {
        _id
        location
        cards
    }
}
`;

export const EDIT_CARD_MUTATION = `
mutation($_id: String!, $cards: Int!) {
    editCards(input: {
            _id: $_id, 
            cards: $cards
        }) {
            _id
            location
            cards
    }
}
`;
