import { ApolloProvider } from '@apollo/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';
import { client } from './graphql/apollo-client';
import Home from './pages/Home';
import LoginPage from './pages/auth/login';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Layout>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth/login" element={<LoginPage />} />
            </Routes>
          </Router>
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
