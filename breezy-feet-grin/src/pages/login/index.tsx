import { AuthPage } from "@refinedev/antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: { email: "priyankaa261103@gmail.com", password: "demodemo" },
      }}
    />
  );
};
