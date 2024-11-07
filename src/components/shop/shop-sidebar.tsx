import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import product_data from '../../data/product-data';
import InputRange from '../ui/input-range';

const ShopSidebar = () => {
  const related__products = product_data.slice(0,3);
  const [priceValue,setPriceValue] = useState([0,380]);
  // handleChanges
  const handleChanges = (val: number[]) => {
    setPriceValue(val);
  };
  return (
    <aside className="shop-sidebar">
    <div className="shop__widget">
        <h4 className="shop__widget-title">search</h4>
        <div className="shop__widget-inner">
            <div className="shop__search">
                <input type="text" placeholder="Search here"/>
                <button className="p-0 border-0"><i className="flaticon-search"></i></button>
            </div>
        </div>
    </div>
    <div className="shop__widget">
        <h4 className="shop__widget-title">filter by price</h4>
        <div className="shop__widget-inner">
            <div className="shop__price-filter">
                <div id="slider-range">
                <InputRange
                    MAX={380}
                    MIN={0}
                    STEP={1}
                    values={priceValue}
                    handleChanges={handleChanges}
                />
                </div>
                <div className="shop__price-slider-amount">
                    <input type="submit" className="p-0 border-0" value="Filter"/>
                    <span className=''>${priceValue[0]} - ${priceValue[1]}</span>
                </div>
            </div>
        </div>
    </div>
    <div className="shop__widget">
        <h4 className="shop__widget-title">Related products</h4>
        <div className="shop__widget-inner">
            {related__products.map((item) => (
            <div key={item.id} className="related__products-item">
                <div className="related__products-thumb">
                    <NavLink to={`/shop-details/${item.id}`}>
                        <img src={item.img} alt="img"/>
                    </NavLink>
                </div>
                <div className="related__products-content">
                    <h4 className="product-name">
                        <NavLink to={`/shop-details/${item.id}`}>{item.title}</NavLink>
                    </h4>
                    <span className="amount">${item.price}</span>
                </div>
            </div>
            ))}
        </div>
    </div>
    <div className="shop__widget">
        <h4 className="shop__widget-title">Categories</h4>
        <div className="shop__widget-inner">
            <ul className="product-categories list-wrap">
                <li><NavLink to="/shop">controller</NavLink><span className="float-right">12</span></li>
                <li><NavLink to="/shop">Headphone</NavLink><span className="float-right">03</span></li>
                <li><NavLink to="/shop">TOURNAMENTS</NavLink><span className="float-right">18</span></li>
                <li><NavLink to="/shop">E-SPORTS</NavLink><span className="float-right">05</span></li>
            </ul>
        </div>
    </div>
</aside>
  );
};

export default ShopSidebar;