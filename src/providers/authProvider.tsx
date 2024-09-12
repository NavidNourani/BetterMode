import { tokenAtom } from '@/atoms/authAtom';
import authContext from '@/context/authContext';
import { LOGIN_NETWORK } from '@/graphql/mutations';
import { GET_GUEST_TOKEN } from '@/graphql/queries';
import useSnackbar from '@/hooks/useSnackbar';
import { LoginNetworkResponse } from '@/types/gql/loginNetwork';
import { TokensResponse } from '@/types/gql/tokens';
import { ApolloClient, useApolloClient, useMutation, useQuery } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useAtom(tokenAtom);
  const client = useApolloClient();
  const [guestToken, setGuestToken] = useState<string | null>(null);
  const { showSnackbar } = useSnackbar();

  const [loginNetwork] = useMutation<LoginNetworkResponse>(LOGIN_NETWORK);

  useQuery<TokensResponse>(GET_GUEST_TOKEN, {
    variables: {
      networkDomain: import.meta.env.VITE_BETTERMODE_NETWORK_DOMAIN,
    },
    onCompleted: (data) => {
      if (data.tokens && data.tokens.accessToken) {
        setGuestToken(data.tokens.accessToken);
      }
    },
    onError: (error) => {
      console.error('Error fetching guest token:', error);
    },
  });

  useEffect(() => {
    updateApolloCache(client, token);
  }, [client, token]);

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
      setToken(response.data.loginNetwork.accessToken);
    } else if (response.errors?.[0].message) {
      throw new Error(response.errors?.[0].message);
    } else {
      throw new Error('Something went wrong');
    }
  };

  const logout = async () => {
    setToken(null);
    showSnackbar('Logout successful!', 'success');
  };

  return <authContext.Provider value={{ login, logout }}>{children}</authContext.Provider>;
}

function updateApolloCache(client: ApolloClient<object>, token: string | null) {
  client.setLink(
    client.link.concat(
      setContext((_, { headers }) => ({
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      }))
    )
  );
}
