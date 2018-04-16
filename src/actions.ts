import axios from "axios";

export const SEARCH = "SEARCH";

export function search() {
    // return { type: SEARCH }
    return (dispatch, getState) => {
        axios.get("https://qiita.com/api/v2/items").then((response) => {
            dispatch(getArticles(response.data));
        })
    }
}

function getArticles(data) {
    return { type: SEARCH, articles: data }
}