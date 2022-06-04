import { Fragment } from "react";

import Home from "../components/Home";
import Layout from "../components/layouts/Layout";

////////ACTIONS
import { getAllRooms } from "../redux/actions/roomsAction";

/////STORE
import { wrapper } from "../redux/store.js";

const Index = () => {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllRooms(req));
    }
);

export default Index;
