import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filters',
    initialState: '',
    reducers: {
        setTextFilter: (state, action) => {
            return action.payload
        }
    }
})



export const {setTextFilter} = filterSlice.actions
export const selectFilters = (state) => state.filters; 
export default filterSlice.reducer