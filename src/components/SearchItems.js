import React from 'react';
import styles from './SearchCss';

const SearchItems = React.memo(({ searchResult, onSelect }) => {
    const { results } = searchResult || {};
    if(!results || results.length === 0) {
        return null;
    }
    
    return (
        <div style={styles.searchResultContainer}>
            {results.map(item => <div key={item.id} style={styles.searchItems} onClick={() => onSelect(item)}>{item.name}</div>)}
        </div>
    )
})

export default SearchItems;