import {useState} from "react";
import ImageLightBox from "../common/image-lightbox";

const active_images = [
    {id:'one',img:'/assets/img/products/shop_details01.jpg'},
    {id:'two',img:'/assets/img/products/shop_details02.jpg'},
    {id:'three',img:'/assets/img/products/shop_details03.jpg'}
]
const ShopDetailsImages = () => {
   // photoIndex
   const [photoIndex, setPhotoIndex] = useState(0);
   // image open state
   const [open, setOpen] = useState(false);
   // images
   const images = active_images.map(item => item.img);
   // handleImagePopup
   const handleImagePopup = (index:number) => {
      setPhotoIndex(index)
      setOpen(true)
   }
  return (
    <>
       <div className="shop__details-images-wrap">
          <ul className="nav nav-tabs" id="imageTab" role="tablist">
              <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="one-tab" data-bs-toggle="tab" data-bs-target="#one" type="button" role="tab" aria-controls="one" aria-selected="true" tabIndex={-1}>
                      <img src="/assets/img/products/shop_nav01.jpg" alt="img"/>
                  </button>
              </li>
              <li className="nav-item" role="presentation">
                  <button className="nav-link" id="two-tab" data-bs-toggle="tab" data-bs-target="#two" type="button" role="tab" aria-controls="two" aria-selected="false" tabIndex={-1}>
                      <img src="/assets/img/products/shop_nav02.jpg" alt="img"/>
                  </button>
              </li>
              <li className="nav-item" role="presentation">
                  <button className="nav-link" id="three-tab" data-bs-toggle="tab" data-bs-target="#three" type="button" role="tab" aria-controls="three" aria-selected="false" tabIndex={-1}>
                      <img src="/assets/img/products/shop_nav03.jpg" alt="img"/>
                  </button>
              </li>
          </ul>
          <div className="tab-content" id="imageTabContent">
            {active_images.map((item,i) => (
              <div key={item.id} className={`tab-pane ${item.id === 'one'?'show active':''}`} id={item.id} role="tabpanel" aria-labelledby={`${item.id}-tab`}>
                  <a onClick={() => handleImagePopup(i)} className="popup-image cursor-pointer">
                    <img src={item.img} alt="img" />
                  </a>
              </div>
            ))}
          </div>
      </div>
      {/* image light box start */}
    <ImageLightBox images={images} visible={open} setVisible={setOpen}
        index={photoIndex} setIndex={setPhotoIndex} />
    {/* image light box end */}
    </>
  );
};

export default ShopDetailsImages;