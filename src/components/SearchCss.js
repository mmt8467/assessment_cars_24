const styles = {
    searchBoxContainer: {
        position: 'relative',
        textAlign: 'center',
        marginTop: 25,
        display: 'flex',
        justifyContent: 'center'
    },
    serachBox: {
        width: 400,
        height: 40,
        border: '1px solid #ccc',
        borderRadius: 10,
        paddingLeft: 42
    },
    searchResultContainer: {
        textAlign: 'left',
        color: '#000',
        borderRadius: '0 0 10px 10px',
        position: 'absolute',
        background: '#fff',
        boxShadow: '0 9px 8px -3px rgba(64,60,67,.24), 8px 0 8px -7px rgba(64,60,67,.24), -8px 0 8px -7px rgba(64,60,67,.24)',
        width: 430,
        padding: 3,
        top: 46,
        maxHeight: 270,
        overflow: 'auto',
        zIndex: 1
    },
    searchItems: {
        padding: 10,
        cursor: 'pointer'
    },
    serachIcon: {
        height: 20,
        position: 'absolute',
        margin: 12
    }
};
  
export default styles;