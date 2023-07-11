import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

import { toast } from "react-toastify";
import Pagination from "react-js-pagination";
import RoomItem from "./room/roomItem";
import { clearAllErrors } from "../redux/actions/roomsAction";

const Home = () => {
  const { rooms, roomCounts, resultPerPage, filteredRoomsCount, error } =
    useSelector((state) => state.allRooms);
  const router = useRouter();
  let { location, page = 1 } = router.query;
  page = Number(page);

  const dispatch = useDispatch();

  useEffect(() => {
    toast.error(error);
    dispatch(clearAllErrors());
  }, []);

  let queryparams;

  if (typeof window !== "undefined") {
    queryparams = new URLSearchParams(window.location.search);
  }

  const handlePagination = (pageNumber) => {
    if (queryparams.has("page")) {
      queryparams.set("page", pageNumber);
    } else {
      queryparams.append("page", pageNumber);
    }

    router.replace({
      search: queryparams.toString(),
    });
  };

  let count = roomCounts;
  if (location) {
    count = filteredRoomsCount;
  }

  return (
    <Fragment>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">
          {location ? `Stays in ${location}` : "All Rooms"}
        </h2>

        <Link href="/search">
          <a className="ml-2 back-to-search">
            <i className="fa fa-arrow-left"></i>
            Back to Search
          </a>
        </Link>
        <div className="row">
          {!rooms ? (
            <div className="alert alert-danger mt-5 w-100">
              <b>No Rooms.</b>
            </div>
          ) : (
            rooms &&
            rooms.map((room) => <RoomItem key={room._id} room={room} />)
          )}
        </div>
      </section>
      {resultPerPage < count && (
        <div className="d-flex justify-content-center mt-5">
          <Pagination
            activePage={page}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={roomCounts}
            onChange={handlePagination}
            nextPageText={"Next"}
            prevPageText={"Previous"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </Fragment>
  );
};

export default Home;
