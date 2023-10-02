import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as stockActions from "../../../store/stocks";
import './stock.css'


const Stocks = () => {
    // const user = useSelector((state) => state.session.user);
    const history = useHistory();
    const stocks = Object.values(useSelector((state) => state.stock));
    const filterStocks = stocks.slice(0, 30)

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(stockActions.fetchAllStock());
    }, [dispatch]);

    const isUp = (stock) => {
        if(stock.percent_change.startsWith('-')) return false
        else return true
    }

    const price = [100, 200, 500, 1000]
    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

      let rndInt = randomIntFromInterval(1, 6)


    return (
        <div>
            <div className="stock-feed">{filterStocks?.map((stock) => (
                <div key={stock.id}>
                    <div className="item-header3">
                        <div className="left">
                        </div>
                        <div className="right">
                            <div className="caption-wrapper">
                                <NavLink className="caption" to={`/stocks/${stock.id}`} exact={true}>{stock.Label} {stock.Furniture_Type}</NavLink>
                            </div>
                            <img src={stock.image_file}>
                            </img>
                            <div>
                                ${price[rndInt]}
                                </div>
                        </div>
                    </div>
                </div>))}</div>
        </div>
    );
};

export default Stocks;
