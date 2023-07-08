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
    async ({ req,query }) => {
      await store.dispatch(getAllRooms(req,query.page,query.location,query.guests,query.category));
    }
);

export default Index;
