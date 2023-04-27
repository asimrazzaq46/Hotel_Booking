import RoomDetails from "../../components/room/RoomDetails";
import Layout from "../../components/layouts/Layout";

////////ACTIONS
import { getRoomDetails } from "../../redux/actions/roomsAction";

/////STORE
import { wrapper } from "../../redux/store.js";
import { Fragment } from "react";

const RoomDetailsPage = () => {
  return (
    <Fragment>
      <div>
        <Layout>
          <RoomDetails title="Room Details" />
        </Layout>
      </div>
    </Fragment>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getRoomDetails(req, params.id));
    }
);

export default RoomDetailsPage;
