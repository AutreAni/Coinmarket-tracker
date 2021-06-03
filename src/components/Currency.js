
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrency } from '../actions/fetchCurrency';




const Currency = () => {
    const dispatch = useDispatch();
    const current = useSelector(state => state.currency.current);

    useEffect(() => {
        dispatch(fetchCurrency())
    }, []);

    const changeCurrency = e => dispatch({type: "SET_CURRENCY", payload: e.target.value });
    // console.log(chosenCurrency)
    
    return (
        <div className = "header">
         <div className = "container">
            <select value={current}
                onChange={changeCurrency}>
                <option value="THB">THB</option>
                <option value="USD">USD</option>
                <option value="AED">AED</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="HDK">HDK</option>
                <option value="JPY">JPY</option>
            </select>
            </div>
        </div>
    )
}

export default Currency;