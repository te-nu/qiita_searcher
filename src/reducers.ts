import { SEARCH } from './actions';
import { combineReducers } from 'redux';
// import axios from 'axios';
// import { getArticles } from '../api';

export function displayArticles(state = [], action): Array<any> {
    if (action.type == SEARCH) {
        return action.articles;
    }
    return state;
}

const articles = combineReducers({
    displayArticles
})

export default articles;