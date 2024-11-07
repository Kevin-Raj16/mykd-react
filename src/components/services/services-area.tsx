import {useState} from 'react';
import { NavLink } from 'react-router-dom';

// service images
const service_images = [
  '/assets/img/others/services_img01.jpg',
  '/assets/img/others/services_img02.jpg',
  '/assets/img/others/services_img03.jpg',
  '/assets/img/others/services_img04.jpg'
];
const service_items:{
  id: number;
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    id:1,
    icon:'flaticon-diamond',
    title:'Year Experience',
    desc:'Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods'
  },
  {
    id:2,
    icon:'flaticon-user-profile',
    title:'Expert Teams',
    desc:'Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods'
  },
  {
    id:3,
    icon:'flaticon-ethereum',
    title:'Best NFT Game',
    desc:'Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods'
  },
  {
    id:4,
    icon:'flaticon-settings-1',
    title:'Worldwide Client',
    desc:'Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods'
  }
];

const ServicesArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleMouseOver = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseOut = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section className="services-area services__bg-color section-pt-120 section-pb-120">
    <div className="container">
        <div className="row align-items-end align-items-xl-start">
            <div className="col-lg-6">
                <div className="section__title text-start mb-65">
                    <span className="sub-title tg__animate-text">powerful services</span>
                    <h3 className="title">Our Powerful Services Done on time</h3>
                </div>
                <div className="services__wrapper">
                  {service_items.map((item,i) => (
                    <div key={item.id} className="services__item" onMouseOver={() => handleMouseOver(i)} onMouseOut={()=> handleMouseOut(i)}>
                        <div className="services__icon">
                            <i className={item.icon}></i>
                        </div>
                        <div className="services__content">
                            <h4 className="title"><NavLink to="/service-details">{item.title}</NavLink></h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                  ))}
                </div>
            </div>
            <div className="col-lg-6">
                <div className="services__images">
                  {service_images.map((s,i) => (
                    <div key={i} className={`services__images-item ${activeIndex === i ? "active" : ""}`}>
                        <img src={s} alt="img" />
                        <NavLink to="/service-details" className="services__link">
                            <i className="flaticon-next"></i>
                        </NavLink>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    </div>
  </section>
  );
};

export default ServicesArea;