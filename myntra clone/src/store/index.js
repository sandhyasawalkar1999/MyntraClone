import { configureStore } from "@reduxjs/toolkit"
import itemSlice from "./itemSlices";
import fetchStatusSlice from "./fetchstatusSlice";

import bagSlice from "./bagSlice";



const myntraStore = configureStore({
    reducer: {
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer,

    }
});

export default myntraStore;