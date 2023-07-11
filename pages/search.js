import Search from "../components/Search";
import Layout from "../components/layouts/Layout";

////////ACTIONS
import { getAllRooms } from "../redux/actions/roomsAction";

/////STORE
import { wrapper } from "../redux/store.js";

const SearchPage = () => {
  return (
    <div>
      <Layout title="Search Rooms">
        <Search />
      </Layout>
    </div>
  );
};

export default SearchPage;
