import { combineReducers } from 'redux';
import bahanReducer from './bahanReducer';
import kasReducer from './kasReducer';

const rootReducer = combineReducers({
    bahan   : bahanReducer,
    kas     : kasReducer,
});

export default rootReducer;