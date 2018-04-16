import * as React from 'react';
import Articles from './articles';

export interface Events {
    onSearchSubmit: () => void;
}

export interface Props {
    articles: Array<any>;
}

const SearchForm = ({ onSearchSubmit, articles }: Events & Props) => (
    <div>
        <button className="btn btn-primary" onClick={onSearchSubmit}>
            探す
        </button>
        <Articles articles={articles} />
    </div>
)

export default SearchForm;