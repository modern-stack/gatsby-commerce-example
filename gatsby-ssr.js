import React from 'react'
import { ApolloProvider } from 'react-apollo'
const { renderToString } = require('react-dom/server')

import { Context } from './src/Context'
import { client } from './src/Api'

const initialState = {
  order: {
    items: [],
  },
  user: null,
  auth: null,
}

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const App = () => {
    return (
      <ApolloProvider client={client}>
        <Context initialState={initialState}>{bodyComponent}</Context>
      </ApolloProvider>
    )
  }

  const body = renderToString(<App />)

  replaceBodyHTMLString(body)
}
