import NewPassword from "../../../components/user/NewPassword";
import Layout from "../../../components/layouts/Layout";
import { getSession } from "next-auth/react";

const newPasswordPage = () => {
  return (
    <div>
      <Layout title="Forgot Password">
        <NewPassword />
      </Layout>
    </div>
  );
};

export default newPasswordPage;
