import React, { useContext, useReducer } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

//Context Set Up
import Context from "./context";
import reducer from "./reducer";

//Styles
import "./App.css";

//Components
import Header from "./components/Header/Header";
import Overview from "./components/Overview/Overview";
import CreateMarket from "./components/CreateMarket/CreateMarket";
import Markets from "./components/Markets/Markets";

const client = new ApolloClient({
  link: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

const App = props => {
  const store = useContext(Context);
  const [state, dispatch] = useReducer(reducer, store);
  return (
    <ApolloProvider client={client}>
      <Context.Provider value={{ state, dispatch }}>
        <div className="wrapper">
          <Header />
          <Overview />
          <main className="card main">
            <CreateMarket />
            <Markets />
          </main>
        </div>
      </Context.Provider>
    </ApolloProvider>
  );
};

export default App;
