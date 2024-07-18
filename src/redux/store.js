// Acá cargamor lo que se exporta en slice y  poder asignarlo
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer,userReducer } from "./slice";

// Crear el store

const  store =configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
        }
});

export default store;