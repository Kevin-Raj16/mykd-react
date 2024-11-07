import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import nft_data from '../../data/nft-data';
import { NavLink } from "react-router-dom";

// slider setting 
const slider_setting = {
  observer: true,
  observeParents: true,
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    '1500': {
        slidesPerView: 3,
    },
    '1200': {
        slidesPerView: 3,
    },
    '992': {
        slidesPerView: 2,
    },
    '768': {
        slidesPerView: 2,
    },
    '576': {
        slidesPerView: 1,
    },
    '0': {
        slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  }
}
const TrendingNftItems = () => {
  return (
    <section className="trendingNft-area section-pt-120 section-pb-90">
     <div className="container">
        <div className="trendingNft__title-wrap">
            <div className="row">
                <div className="col-md-7">
                    <div className="trendingNft__title">
                        <h2 className="title">top Trending <img src="/assets/img/icons/fire.png" width="35" alt="icon"/></h2>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="trendingNft__nav">
                        <button className="slider-button-prev"><i className="fas fa-angle-left"></i></button>
                        <button className="slider-button-next"><i className="fas fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <Swiper {...slider_setting} modules={[Navigation]} className="swiper-container trendingNft-active">
          {nft_data.filter(i => i.trending).map((item) => (
            <SwiperSlide key={item.id}>
              <div className="trendingNft__item">
                  <div className="trendingNft__item-top">
                      <div className="trendingNft__item-avatar">
                          <div className="image">
                              <NavLink to="/shop-details">
                                <img src={item.creator} alt="img"/>
                              </NavLink>
                          </div>
                          <div className="info">
                              <h6 className="name">{item.title}</h6>
                              <NavLink to="/shop-details" className="userName">@{item.creator_name}</NavLink>
                          </div>
                      </div>
                      <div className="trendingNft__item-wish">
                          <NavLink to="#"><i className="far fa-heart"></i></NavLink>
                      </div>
                  </div>
                  <div className="trendingNft__item-image">
                      <NavLink to="/shop-details">
                        <img src={item.img} alt="img" />
                      </NavLink>
                  </div>
                  <div className="trendingNft__item-bottom">
                      <div className="trendingNft__item-price">
                          <span className="bid">Last Bid</span>
                          <h6 className="eth"><i className="fab fa-ethereum"></i> {item.eth} <span>Eth</span></h6>
                      </div>
                      <NavLink to="/shop-details" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                  </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  </section>
  );
};

export default TrendingNftItems;