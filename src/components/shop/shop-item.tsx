import { NavLink } from "react-router-dom";
import { IProduct } from "../../types/product-type";

const ShopItem = ({ item }: { item: IProduct }) => {
  return (
    <div className="shop__item">
      <div className="shop__item-thumb">
        <NavLink to={`/shop-details/${item.id}`}>
          <img src={item.img} alt="img"/>
        </NavLink>
        <NavLink to="#" className="wishlist-button">
          <i className="far fa-heart"></i>
        </NavLink>
      </div>
      <div className="shop__item-line"></div>
      <div className="shop__item-content">
        <div className="shop__item-content-top">
          <h4 className="title">
            <NavLink to={`/shop-details/${item.id}`}>{item.title}</NavLink>
          </h4>
          <div className="shop__item-price">${item.price}</div>
        </div>
        <div className="shop__item-cat">
          <NavLink to="/shop">{item.category}</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
