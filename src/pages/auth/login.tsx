import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';
import Input from '@/components/shared/Input';
import { LOGIN_NETWORK } from '@/graphql/mutations';
import { GET_GUEST_TOKEN } from '@/graphql/queries';
import { LoginNetworkResponse } from '@/types/gql/loginNetwork';
import { TokensResponse } from '@/types/gql/tokens';
import { useMutation, useQuery } from '@apollo/client';
import { FormEvent, useState } from 'react';

const LoginPage = () => {
  const [guestToken, setGuestToken] = useState<string | null>(null);
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
  const [loginNetwork, { loading }] = useMutation<LoginNetworkResponse>(LOGIN_NETWORK);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await loginNetwork({
      variables: {
        usernameOrEmail: e.currentTarget.username.value,
        password: e.currentTarget.password.value,
      },
      context: {
        headers: {
          Authorization: `Bearer ${guestToken}`,
        },
      },
    });
    console.log(response.data?.loginNetwork.accessToken);
  };

  return (
    <div className="flex items-center justify-center flex-col gap-2 h-full">
      <h1 className="h">Sign in to your account</h1>
      <Card className="w-[448px]" as="form" onSubmit={handleSubmit}>
        <Input name="username" placeholder="Email" type="email" label="Email" />
        <Input name="password" placeholder="Password" type="password" label="Password" />
        <Button loading={loading} variant="primary" className="w-full">
          Login
        </Button>
      </Card>
    </div>
  );
};

export default LoginPage;
