const initialState = {
    tepung  : 100,
    coklat  : 100,
    cherry  : 50,
};

const bahanReducer = (state = initialState, action) =>{
    if( action.type = 'BUAT_DONAT_COKLAT'){
        const newState = {
            tepung  : state.tepung - 10,
            coklat  : state.coklat - 20,
            cherry  : state.cherry,
        };
        return newState;
    }
    return state;
}

export default bahanReducer;