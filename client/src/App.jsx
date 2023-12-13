import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: '/graphql',
});

// create auth middleware to attatch JWT to all req in authorization header
const auth = setContext((_, { headers }) => {
  const localToken = localStorage.getItem('id_token');
  return {
    ...headers,
    authorization: localToken ? `Bearer ${localToken}` : '',
  }
});

const client = new ApolloClient({
  // link will configure client to use auth middleware before connecting to graphql endpoint
  link: auth.contact(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <Outlet />
      </ApolloProvider>
    </>
  );
}

export default App;
