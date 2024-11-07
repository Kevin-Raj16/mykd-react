import { INftType } from "../../data/nft-data";
import { NavLink } from "react-router-dom";

const NftItemBox = ({ item }: { item: INftType }) => {
  return (
    <div className="nft-item__box">
      <div className="nft-item__thumb">
        <NavLink to="/shop-details">
          <img src={item.img} alt="img" />
        </NavLink>
      </div>
      <div className="nft-item__content">
        <h4 className="title">
          <NavLink to="/shop-details">wolf gaming art</NavLink>
        </h4>
        <div className="nft-item__avatar">
          <div className="avatar-img">
            <NavLink to="/shop-details">
              <img src={item.creator} alt="img" />
            </NavLink>
          </div>
          <div className="avatar-name">
            <h5 className="name">
              <NavLink to="/shop-details">{item.creator_name}</NavLink>
            </h5>
            <span className="designation">Creator</span>
          </div>
        </div>
        <div className="nft-item__bid">
          <div className="nft-item__price">
            <p>
              {item.eth}
              <span className="currency">Eth</span>
            </p>
            <NavLink to="/shop-details" className="bid-btn">
              Bid <i className="fas fa-long-arrow-alt-right"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftItemBox;
