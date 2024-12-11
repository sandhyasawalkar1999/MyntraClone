import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { itemsActions } from "../store/itemsSlice";
import { itemsActions } from "../store/itemSlices";
// import { fetchStatusActions } from "../store/fetchStatusSlice";

import {markFetchDone , markFetchingFinished , markFetchingStarted} from "../store/fetchStatusSlice";

const FetchItems = () => {
    const fetchStatus = useSelector((store) => store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus.fetchDone) return;

        // const controller = new AbortController();
        // const signal = controller.signal;

        dispatch(markFetchingStarted());
        fetch("http://localhost:8080/items")
            .then((res) => res.json())
            .then(({ items }) => {
                dispatch(markFetchDone());
                dispatch(markFetchingFinished());
                dispatch(itemsActions.addInitialItems(items[0]));
            });

        // return () => controller.abort();

    }, [fetchStatus]);

    return <></>;
};

export default FetchItems;