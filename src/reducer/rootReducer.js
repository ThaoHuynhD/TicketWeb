import { combineReducers } from "redux";
import { seatReducer } from "./seatReducer";

export let rootReducer = combineReducers({ seatReducer: seatReducer });