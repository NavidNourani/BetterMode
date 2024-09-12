import { ApolloProvider } from '@apollo/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { ProtectedRoute, PublicRoute } from './components/RouteManager';
import Snackbar from './components/shared/Snackbar';
import { ThemeProvider } from './context/ThemeContext';
import { client } from './graphql/apollo-client';
import Home from './pages/Home';
import LoginPage from './pages/auth/login';
import { SnackbarProvider } from './providers/SnackbarProvider';
import { AuthProvider } from './providers/authProvider';

function App() {
  return (
    <ApolloProvider client={client}>
      <SnackbarProvider>
        <AuthProvider>
          <ThemeProvider>
            <Layout>
              <Router>
                <Routes>
                  <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />
                  </Route>
                  <Route element={<PublicRoute />}>
                    <Route path="/auth/login" element={<LoginPage />} />
                  </Route>
                </Routes>
              </Router>
              <Snackbar />
            </Layout>
          </ThemeProvider>
        </AuthProvider>
      </SnackbarProvider>
    </ApolloProvider>
  );
}

export default App;
