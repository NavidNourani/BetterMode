import Button from "../../components/shared/Button";
import Card from "../../components/shared/Card";
import Input from "../../components/shared/Input";

const LoginPage = () => {
  return (
    <Card title="Login form">
      <Input placeholder="Email" type="email" label="Email" />
      <Button variant="primary" >Login</Button>
    </Card>
  );
};

export default LoginPage;
