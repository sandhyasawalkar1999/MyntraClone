// import HomeItem from "./components/HomeItem";
import HomeItem from "../componets/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
    const items = useSelector((store) => store.items);
    console.log(items); // To check if items are fetched correctly from the store.

    return (
        <main>
            <div className="items-container">
                {items.map((item) => (
                    <HomeItem key={item.id} item={item} />
                ))}
            </div>
        </main>
    );
};

export default Home;