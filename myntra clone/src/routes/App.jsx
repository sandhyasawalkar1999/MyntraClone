import { Outlet } from "react-router"
import Footer from "../componets/Footer"
import Header from "../componets/Header"
import HomeItem from "../componets/HomeItem"
import FetchItems from "../componets/fetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../componets/LoadingSpinner";
function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App
