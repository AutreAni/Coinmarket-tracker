import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchMarketData } from '../actions/fetchMarketData';
import Loading from './Loading';
import Error from './Error';


const MarketData = () => {
    const {loading, data, error } = useSelector(state => state.marketData);
    const [bool, setBool] = useState(false);
    
    const dispatch = useDispatch();
    const currency = useSelector(state => state.currency);

    const rateVsEur = currency.list.length? currency.list.find(elem => elem[0]===currency.current)[1] : 1;
       

    useEffect(() => {
        dispatch(fetchMarketData())
    }, []);

 
    const sortByPrice = (fieldname) => {
        dispatch({type: `SORT_FROM_${bool ? "HIGH_TO_LOW" : "LOW_TO_HIGH"}`, payload: fieldname})
        setBool(!bool);
    };

    const sortByName = () => {
        dispatch({type: `SORT_FROM_${bool ? "A_Z" : "Z_A"}`});
        setBool(!bool);
    }


    const dataList = data.length? data.map(elem => {
       return <tr key = {elem.id}>
            <td className = "name-wrapper"><img src = {elem.image} alt = {elem.symbol}></img>
            <span className = "coin-name">{elem.name}</span> </td>
            <td className = "coin-symbol">{elem.symbol}</td>
            <td>{(elem.current_price * rateVsEur).toFixed(2)}</td>
            <td className = {`${elem.price_change_percentage_24h > 0 ? "above": "below"}`}>{elem.price_change_percentage_24h.toFixed(2)}%</td>
            <td>{elem.total_volume * rateVsEur}</td>
            <td className = "market-cap">{elem.market_cap * rateVsEur}</td>
            <td className = "supply">{elem.total_supply? Math.trunc(elem.total_supply) : null}</td>          
        </tr>
    }): null;


    return (
        <div className ="market-data">
        {data.length? <table>
        <thead>
            <tr>
                <th onClick = {sortByName}>Coin</th>
                <th className = "coin-symbol"></th>
                <th onClick = {()=>sortByPrice("current_price")}>Price</th>
                <th onClick = {()=>sortByPrice("price_change_percentage_24h")}>24h</th>
                <th  onClick = {()=>sortByPrice("total_volume")}>24h Volume</th>
                <th className = "market-cap" onClick = {()=>sortByPrice("market_cap")}>Mkt Cap</th>
                <th className = "supply" onClick = {()=>sortByPrice("total_supply")}>Total Supply</th>
            </tr>
            </thead>
            <tbody>
                {dataList}
            </tbody>
        </table>
        : null}
        {loading? 
        <Loading />
        :null
        }
        {error? 
        <Error message = {error} />
        :null
        }
        </div> 
     );
}
 
export default MarketData;