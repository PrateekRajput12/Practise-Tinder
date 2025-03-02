import { configureStore } from "@reduxjs/toolkit";
// import { addUser } from "./userSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer

    }
})


export default appStore