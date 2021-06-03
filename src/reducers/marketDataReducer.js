const initialState = {
    error:false,
    loading:false,
    data: []
}

const marketDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "RESQUEST_START":
            return {
                data: [],
                loading:true,
                error:false,
            };
        case "GET_MARKET_DATA":
            return {
                data: action.payload,
                loading:false,
                error: false,
            };
        case "REQUEST_FAILURE":
            return {
                data: [],
                loading:false,
                error: action.payload,
            };
        case "SORT_FROM_A_Z":
            return {
                ...state,
                data: state.data.slice().sort((obj1, obj2)=> (obj1.name > obj2.name) ? 1: ((obj2.name > obj1.name)? -1 : 0))
            };
        case "SORT_FROM_Z_A":
            return {
                ...state,
                data: state.data.slice().sort((obj1, obj2)=> (obj2.name > obj1.name) ? 1: ((obj1.name > obj2.name)? -1 : 0))
            };
            
        case "SORT_FROM_LOW_TO_HIGH":
            return {
                ...state,
                data: state.data.slice().sort((obj1, obj2) => obj1[action.payload] - obj2[action.payload])
            };
        case "SORT_FROM_HIGH_TO_LOW":
            return {
                ...state,
                data: state.data.slice().sort((obj1, obj2) => obj2[action.payload] - obj1[action.payload])
            }    
     
        default:
            return state;
    }
}



export default marketDataReducer;