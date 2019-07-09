import { createStore, combineReducers } from 'redux';
import studentListReducer from '../reducers/studentListReducer';
import searchReducer from '../reducers/searchReducer';

const store = createStore(combineReducers({
    studentListReducer,
    searchReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;