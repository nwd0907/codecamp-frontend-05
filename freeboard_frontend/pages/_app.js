import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
