import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger'; // redux-logger middlewar ygdigunakan untuk debugging
import rootReducer from './reducers';

const middlewares = applyMiddleware(reduxLogger);//jika lebih dari 1 middle maka (midle1,midel2)

const store = createStore(rootReducer, middlewares);

export default store;