import {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import TextAnimation from "../common/text-animation";
import ImageLightBox from "../common/image-lightbox";

// slider setting
const slider_setting = {
  slidesPerView: 4,
  spaceBetween: 15,
  breakpoints: {
    "1500": {
      slidesPerView: 4,
    },
    "1200": {
      slidesPerView: 4,
    },
    "992": {
      slidesPerView: 3,
    },
    "768": {
      slidesPerView: 3,
    },
    "576": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 1.5,
      centeredSlides: true,
      centeredSlidesBounds: true,
    },
  },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 24,
  },
};

// project data
const project_data = [
  '/assets/img/gallery/project_01.jpg',
  '/assets/img/gallery/project_02.jpg',
  '/assets/img/gallery/project_03.jpg',
  '/assets/img/gallery/project_04.jpg',
  '/assets/img/gallery/project_05.jpg',
  '/assets/img/gallery/project_06.jpg',
  '/assets/img/gallery/project_07.jpg',
  '/assets/img/gallery/project_08.jpg',
];

const ProjectArea = () => {
   // photoIndex
   const [photoIndex, setPhotoIndex] = useState(0);
   // image open state
   const [open, setOpen] = useState(false);
   // images
   const images = project_data.map(img => img);
   // handleImagePopup
   const handleImagePopup = (index:number) => {
      setPhotoIndex(index)
      setOpen(true)
   }
  return (
    <>
    <section className="project-area project-bg section-pt-120 section-pb-140">
      <div className="container custom-container">
        <div className="project__wrapper">
          <div className="section__title text-start">
            <h3 className="title">PROJECTS MYKD</h3>
            <TextAnimation title="our LATEST gallery" />
          </div>
          <Swiper
            {...slider_setting}
            modules={[Navigation, Scrollbar]}
            className="swiper-container project-active"
          >
            {project_data.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="project__item">
                  <a
                    onClick={() => handleImagePopup(i)} className="popup-image cursor-pointer"
                  >
                    <img src={p} alt="img" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-button-prev">
            <i className="flaticon-right-arrow"></i>
            <i className="flaticon-right-arrow"></i>
          </div>
        </div>
      </div>
      <div className="swiper-scrollbar"></div>
    </section>

      {/* image light box start */}
      <ImageLightBox images={images} visible={open} setVisible={setOpen}
        index={photoIndex} setIndex={setPhotoIndex} />
      {/* image light box end */}
    </>
  );
};

export default ProjectArea;
