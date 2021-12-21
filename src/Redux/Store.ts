import {  combineReducers, createStore } from "redux";
import { list } from "./List/Reducer"

const reducers=combineReducers({list});


export const store=createStore(reducers)


export type AppState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;



