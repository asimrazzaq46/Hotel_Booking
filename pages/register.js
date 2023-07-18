import Register from "../components/auth/Register";
import Layout from "../components/layouts/Layout";
import { getSession } from "next-auth/react";

const RegisterPage = () => {
  return (
    <div>
      <Layout title="Register">
        <Register />
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

export default RegisterPage;
