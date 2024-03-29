import { GraphQLClient } from "graphql-request";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_URL
    : "http://localhost:4000/graphql";

export const useClient = () => {
  return new GraphQLClient(BASE_URL);
};
