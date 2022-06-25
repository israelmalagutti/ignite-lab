import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Router } from './routes';

import { ApolloProvider } from "@apollo/client";
import { client } from './lib/apollo';

const App = () => {
  return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
  );
};

export { App };
