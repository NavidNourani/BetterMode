import { ApolloProvider } from '@apollo/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import { ProtectedRoute, PublicRoute } from './components/RouteManager';
import Snackbar from './components/shared/Snackbar';
import { ThemeProvider } from './context/ThemeContext';
import { client } from './graphql/apollo-client';
import Post from './pages/Post';
import Posts from './pages/Posts';
import LoginPage from './pages/auth/login';
import { SnackbarProvider } from './providers/SnackbarProvider';
import { AuthProvider } from './providers/authProvider';

function App() {
  return (
    <ApolloProvider client={client}>
      <SnackbarProvider>
        <AuthProvider>
          <ThemeProvider>
            <Router>
              <Layout>
                <Routes>
                  <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Posts />} />
                    <Route path="/posts/:id/:title" element={<Post />} />
                  </Route>
                  <Route element={<PublicRoute />}>
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Route>
                </Routes>
              </Layout>
            </Router>
            <Snackbar />
          </ThemeProvider>
        </AuthProvider>
      </SnackbarProvider>
    </ApolloProvider>
  );
}

export default App;
