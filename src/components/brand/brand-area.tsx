import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 

// slider setting
const slider_setting = {
  dots: false,
	infinite: true,
	speed: 500,
	autoplay: true,
	arrows: false,
	slidesToShow: 6,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
};

// brands
const brands = [
	'/assets/img/brand/brand01.png',
	'/assets/img/brand/brand02.png',
	'/assets/img/brand/brand03.png',
	'/assets/img/brand/brand04.png',
	'/assets/img/brand/brand05.png',
	'/assets/img/brand/brand06.png',
	'/assets/img/brand/brand07.png',
	'/assets/img/brand/brand02.png',
	'/assets/img/brand/brand05.png'
]
const BrandArea = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="brand-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="brand__title text-center">
                    <h2 className="title">they trust us</h2>
                </div>
            </div>
        </div>
        <Slider {...slider_setting} className="row brand-active">
          {brands.map((b,i) => (
            <div key={i} className="col">
                <div className="brand__item" onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} style={{ opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.3, transition: 'opacity 0.3s'}}>
                    <NavLink to="#" className="brand__link">
                      <img src={b} alt="brand"/>
                    </NavLink>
                </div>
            </div>
          ))}
        </Slider>
    </div>
  </section>
  );
};

export default BrandArea;