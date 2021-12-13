import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    models: ["Model S", "Model 3", "Model X", "Model Y"]
}


const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.models
// state.car.cars

export default carSlice.reducer