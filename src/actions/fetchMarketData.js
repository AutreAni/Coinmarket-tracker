import axios from "axios";

const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage='1h%2C24h%2C7d'`;

export const fetchMarketData = () => dispatch => {
    dispatch({ type: "RESQUEST_START"});
    axios.get(`${BASE_URL}`)
        .then(resp =>  dispatch({ type: 'GET_MARKET_DATA', payload: resp.data}))
        .catch(err => dispatch({ type: "REQUEST_FAILURE", payload: err.message}))
}
