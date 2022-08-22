import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import carditems from './Services/Reducers/Reducer.js'
import  ProductsList from './Services/Reducers/reducerlist.js'


const reducer = combineReducers({

 carditems,
 Lists:ProductsList
    
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;