import authContext from '@/context/authContext';
import { LOGIN_NETWORK } from '@/graphql/mutations';
import { GET_GUEST_TOKEN } from '@/graphql/queries/getTokens';
import useSnackbar from '@/hooks/useSnackbar';
import { LoginNetworkResponse } from '@/types/gql/loginNetwork';
import { TokensResponse } from '@/types/gql/tokens';
import { ApolloClient, ApolloLink, useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useMemo, useState } from 'react';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState(localStorage.getItem('@userToken') || null);
  const client = useApolloClient();
  const { showSnackbar } = useSnackbar();

  const [loginNetwork] = useMutation<LoginNetworkResponse>(LOGIN_NETWORK);

  const { data } = useQuery<TokensResponse>(GET_GUEST_TOKEN, {
    variables: {
      networkDomain: import.meta.env.VITE_BETTERMODE_NETWORK_DOMAIN,
    },
    skip: !!token,
  });

  const guestToken = useMemo(() => data?.tokens?.accessToken, [data]);
  useMemo(() => {
    if (token) {
      updateApolloCache(client, token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  // useEffect(() => {
  //   if (token) {
  //     updateApolloCache(client, token);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [token]);

  const login = async (username: string, password: string) => {
    const response = await loginNetwork({
      variables: {
        usernameOrEmail: username,
        password: password,
      },
      context: {
        headers: {
          Authorization: `Bearer ${guestToken}`,
        },
      },
    });
    if (response.data?.loginNetwork.accessToken) {
      localStorage.setItem('@userToken', response.data.loginNetwork.accessToken);
      setToken(response.data.loginNetwork.accessToken);
    } else if (response.errors?.[0].message) {
      throw new Error(response.errors?.[0].message);
    } else {
      throw new Error('Something went wrong');
    }
  };

  const logout = async () => {
    setToken(null);
    localStorage.removeItem('@userToken');
    showSnackbar('Logout successful!', 'success');
  };

  return <authContext.Provider value={{ login, logout, token }}>{children}</authContext.Provider>;
}

function updateApolloCache(client: ApolloClient<object>, token: string | null) {
  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }));
    return forward(operation);
  });

  try {
    client.setLink(authLink.concat(client.link));
  } catch (error) {
    console.error('Error updating Apollo Client link:', error); // Error handling
  }

  client.resetStore();
}
