import * as React from 'react';
import Articles from './articles';

export interface Events {
    onSearchSubmit: (searchWord: string) => void;
}

export interface Props {
    articles: Array<any>;
}

const SearchForm = ({ onSearchSubmit, articles }: Events & Props) => {
    let textInput: string;
    return (
        <div>
            <input type="text" onKeyUp={(event) => {textInput = (event.target as HTMLInputElement).value}}/>
            <button className="btn btn-primary" onClick={() => onSearchSubmit(textInput)}>
                探す
            </button>
            <Articles articles={articles} />
        </div>
    )
}

export default SearchForm;