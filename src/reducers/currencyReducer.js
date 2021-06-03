const initialState = {
    list: [],
    current: "EUR",
}

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CURRENCY_RATES":
            return {
                list:Object.entries(action.payload),
                current: "EUR",
            };
        case "SET_CURRENCY":
            return {
                ...state,
                current: action.payload,
            };
        default:
            return state;
    }
}



export default currencyReducer;