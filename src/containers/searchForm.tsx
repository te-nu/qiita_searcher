import SearchForm, { Events, Props } from "../components/searchForm";
import { search } from '../actions';
import { connect } from 'react-redux'


const mapStateToProps = (state): Props => {
    return { articles: state.displayArticles };
}

const mapDispatchToProps = (dispatch): Events => {
    return {
        onSearchSubmit: (searchWord: string) => {
            dispatch(search(searchWord))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)