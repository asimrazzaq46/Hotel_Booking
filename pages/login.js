import Login from "../components/auth/Login";
import Layout from "../components/layouts/Layout";
import { getSession } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      <Layout title="Login">
        <Login />
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default LoginPage;
