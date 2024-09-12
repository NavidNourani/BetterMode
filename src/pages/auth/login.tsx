import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';
import Input from '@/components/shared/Input';
import useAuth from '@/hooks/useAuth';
import useSnackbar from '@/hooks/useSnackbar';
import { FormEvent, useState } from 'react';

const LoginPage = () => {
  const { login } = useAuth();
  const { showSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(e.currentTarget.username.value, e.currentTarget.password.value);
      showSnackbar('Login successful!', 'success');
    } catch (error: unknown) {
      showSnackbar('Login failed. Please try again.', 'error');
      console.error(error);
    } finally {
      setLoading(false);
    }
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
