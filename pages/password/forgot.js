import ForgotPassword from "../../components/user/ForgotPassword";
import Layout from "../../components/layouts/Layout";

const forgotPasswordPage = () => {
  return (
    <div>
      <Layout title="Forgot Password">
        <ForgotPassword />
      </Layout>
    </div>
  );
};

export default forgotPasswordPage;
