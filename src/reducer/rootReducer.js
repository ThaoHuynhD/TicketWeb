import { combineReducers } from "redux";
import { chairReducer } from "./chairReducer";

export let rootReducer = combineReducers({ chairReducer: chairReducer });