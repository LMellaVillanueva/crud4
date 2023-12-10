import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    phones: []
}

const actions = createSlice({
    name: 'phones',
    initialState,
    reducers:{
        getPhones: (state, action) => {
            state.phones = [...action.payload];
        }
    }
})

export const getAllPhones = () => async(dispatch) => {
    try {
        const {data} = await axios.get('http://localhost:3010/phones');
        if(data.status) dispatch(getPhones(data.obtainPhones));
        else dispatch(getPhones([]));

    } catch (error) {
        throw Error(error.message);
    }
}

export const {getPhones} = actions.actions;
export default actions.reducer;