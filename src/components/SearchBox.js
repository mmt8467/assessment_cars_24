import React, { useState, useEffect, useCallback, useRef } from 'react';
import characterApiRequest from '../data/fetchCharacter';
import { debounce } from '../utils';
import styles from './SearchCss';
import SearchItems from './SearchItems';
import searchIcon from '../icon_search.svg';

const SearchBox = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, []);

    useEffect(() => {
        searchRequest(searchText);
    }, [searchText]);

    const onSearchTextChange = (event) => {
        const value = event && event.target && event.target.value ? event.target.value : '';
        updateSearchText(value);
    };

    const updateSearchText = debounce((value) => setSearchText(value));

    const searchRequest = (val) => {
        if(!val && searchResult) {
            setSearchResult(null);
        } else if(val) {
            characterApiRequest(val).then((result) => {
                setSearchResult(result);
            })
        }
    };

    const onSelectItem = useCallback((info) => {
        textInput.current.value = info.name;
        setSearchResult(null);
    }, [searchResult]);

    return (
        <div style={styles.searchBoxContainer}>
            <div style={{ position: 'relative' }}>
                <img src={searchIcon} style={styles.serachIcon} />
                <input ref={textInput} onChange={onSearchTextChange} style={styles.serachBox} type="text"></input>
            </div>
            <SearchItems searchResult={searchResult} onSelect={onSelectItem} />
        </div>
    );
}

export default SearchBox;