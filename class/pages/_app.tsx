// import "../styles/globals.css";
import "antd/dist/antd.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkKksE3jmPd6mQxsfpLTtJ8sNX57cSxUs",
  authDomain: "mysite1234-9ba99.firebaseapp.com",
  projectId: "mysite1234-9ba99",
  storageBucket: "mysite1234-9ba99.appspot.com",
  messagingSenderId: "486288941499",
  appId: "1:486288941499:web:e45ae91f62e2141abea49e",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
