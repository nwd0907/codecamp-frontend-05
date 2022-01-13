import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
