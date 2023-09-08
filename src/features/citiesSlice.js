import { createSlice } from "@reduxjs/toolkit";


let savedCityList = localStorage.getItem('cityList');
let initialCities = JSON.parse(savedCityList)


const initialState = initialCities || []

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        addedCity: (state, action) => {
            state.push(action.payload)
        }, 
        removeCity: (state, action) => {
            return state.filter(city => city.id !== action.payload)
        }
    }

    
})

export const {addedCity, removeCity} = citiesSlice.actions;
export const selectCities = (state) => state.cities; //selettore 

export default citiesSlice.reducer; 