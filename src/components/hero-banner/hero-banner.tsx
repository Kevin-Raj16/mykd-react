import {useState} from 'react';
import { MouseParallaxContainer,MouseParallaxChild } from 'react-parallax-mouse';
import { NavLink } from 'react-router-dom';

// brands
const brands:string[] = [
    '/assets/img/brand/brand_logo01.png',
    '/assets/img/brand/brand_logo02.png',
    '/assets/img/brand/brand_logo03.png'
]
const HeroBanner = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <MouseParallaxContainer>
     <section className="slider__area slider__bg" style={{backgroundImage:`url(/assets/img/slider/slider_bg.jpg)`}}>
        <div className="slider-activee">
            <div className="single-slider">
                <div className="container custom-container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="slider__content">
                                <h6 className="sub-title wow fadeInUp" data-wow-delay=".2s">live gaming</h6>
                                <h2 className="title wow fadeInUp" data-wow-delay=".5s">steaming</h2>
                                <p className="wow fadeInUp" data-wow-delay=".8s">video games online</p>
                                <div className="slider__btn wow fadeInUp" data-wow-delay="1.2s">
                                    <NavLink to="/contact" className="tg-btn-1"><span>contact us</span></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-5 col-lg-6">
                        <MouseParallaxChild factorX={0.03} factorY={0.03} className="slider__img text-center" >
                          <img src="/assets/img/slider/slider_img01.png" alt="img" />
                        </MouseParallaxChild>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div className="slider__shapes">
            <img src="/assets/img/slider/slider_shape01.png" alt="shape"/>
            <img src="/assets/img/slider/slider_shape02.png" alt="shape"/>
            <img src="/assets/img/slider/slider_shape03.png" alt="shape"/>
            <img src="/assets/img/slider/slider_shape04.png" alt="shape"/>
        </div>
        <div className="slider__brand-wrap">
            <div className="container custom-container">
                <ul className="slider__brand-list list-wrap">
                    {brands.map((b,i) => (
                    <li onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} style={{ opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.3, transition: 'opacity 0.3s'}} key={i}>
                        <NavLink to="#"><img src={b} alt="brand"/></NavLink>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
     </section>
  </MouseParallaxContainer>
  );
};

export default HeroBanner;