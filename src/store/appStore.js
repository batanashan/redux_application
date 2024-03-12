import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "@/reducers/appReducer";
import { createLogger } from "redux-logger";

const logger = createLogger()
export const appStore = configureStore({
    
   reducer:{appReducer},
   middleware:function(){
    return [logger]
   }
})