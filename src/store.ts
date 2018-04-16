import { Store, createStore, applyMiddleware } from 'redux';
import articles from './reducers';
import thunk from 'redux-thunk'


const middlewares = [thunk]

const store: Store<any> = createStore(
    articles,
    applyMiddleware(...middlewares)
);

export default store;