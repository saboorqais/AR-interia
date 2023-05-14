import { legacy_createStore, combineReducers } from 'redux';
import cartReducer from './reducers/reducersCart';
import { configureStore } from '@reduxjs/toolkit'

const reducer: any = {
    cart: cartReducer
}

const store = configureStore({ reducer })
export default store;