import axios from "axios";
const API_KEY = "c42a0bf6dee14c66ce9cb743fb004374"
export const fetchCurrency = () => dispatch => {
    axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=THB,USD,AED,AUD,CAD,CHF,EUR,GBP,HDK,JPY`)
        .then(resp =>  dispatch({ type: 'GET_CURRENCY_RATES', payload:resp.data.rates}))
        .catch(err => console.log(err))
}

