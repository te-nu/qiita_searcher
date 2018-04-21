import axios from "axios";

export const SEARCH = "SEARCH";

export function search(searchWord) {
    if (searchWord == "") {
        searchWord = null
    }
    return (dispatch, getState) => {
        axios.get("https://qiita.com/api/v2/items", {
            params: { query: searchWord }
        }).then((response) => {
            dispatch(getArticles(response.data));
        })
    }
}

function getArticles(data) {
    return { type: SEARCH, articles: data }
}