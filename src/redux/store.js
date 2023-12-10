import {configureStore} from '@reduxjs/toolkit';
import phonesReducer from './actions';

export const store = configureStore({reducer: {phones: phonesReducer}});