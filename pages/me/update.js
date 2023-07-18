import React from "react";
import { getSession } from "next-auth/react";

const updateProfilePage = () => {
  return <div>user Profile</div>;
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

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
