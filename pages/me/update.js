import React from "react";
import Layout from "../../components/layouts/Layout";
import Profile from "../../components/user/Profile";
import { getSession } from "next-auth/react";

const updateProfilePage = () => {
  return (
    <Layout title="Update Profile">
      <Profile />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  console.log(`context: `, context.req);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default updateProfilePage;
