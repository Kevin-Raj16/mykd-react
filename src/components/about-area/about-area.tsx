import TextAnimation from "../common/text-animation";
import { NavLink } from "react-router-dom";

// nav button
type INavProps = {id: string;img: string;isActive?:boolean}
function NavBtn({id,img,isActive}:INavProps) {
  // handle open search
  const handleClickSound = (audioPath: string) => {
    const audio = new Audio(audioPath);
    audio.play();
  };
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${isActive ? "active" : ""}`}
        id={`about${id}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#about${id}`}
        type="button"
        role="tab"
        aria-controls={`about${id}`}
        aria-selected={isActive?'true':'false'}
        tabIndex={-1}
        onClick={() => handleClickSound('/assets/audio/tab.mp3')}
      >
        <span className="img-shape"></span>
        <img src={img} alt="img" />
      </button>
    </li>
  );
}

// tab content item
// prop type
type ITabProps = {
  id: string;
  img: string;
  title: string;
  rate: string;
  isActive?: boolean;
}
function TabItem({id,img,title,rate,isActive}:ITabProps) {
  return (
    <div
      className={`tab-pane ${isActive ? "show active" : ""}`}
      id={`about${id}`}
      role="tabpanel"
      aria-labelledby={`about${id}-tab`}
    >
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-10">
          <div className="about__img">
            <img src={img} alt="img" />
          </div>
        </div>
        <div className="col-xl-7 col-lg-10">
          <div className="about__flex-wrap">
            <div className="about__content-wrap">
              <div className="about__content">
                <h4 className="title">{title}</h4>
                <span className="rate">rate {rate}</span>
                <p>
                  Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum
                  sollicitudin is yaugue euismods Nulla ullamcorper. Morbi
                  pharetra tellus miolslis, tincidunt massa venenatis.
                </p>
              </div>
              <div className="about__content-list">
                <ul className="list-wrap">
                  <li>
                    <img src="/assets/img/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball
                  </li>
                  <li>
                    <img src="/assets/img/icons/features_icon02.png" alt="img" /> Space Babe Night
                  </li>
                  <li>
                    <img src="/assets/img/icons/features_icon03.png" alt="img" /> Dragon Ball
                  </li>
                </ul>
              </div>
            </div>
            <div className="about__btn-wrap">
              <ul className="list-wrap">
                <li>
                  <NavLink to="/shop-details">Dragon Ball</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">nft market</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">support</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AboutArea = () => {
  return (
    <section className="about__area section-pt-130 section-pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="know about us" />
              <h3 className="title">top rated steamers</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="about__tab-wrap">
              <div className="about__buttons">
                <NavLink to="/shop" className="tg-btn-2">
                  buy Hero
                </NavLink>
                <NavLink to="/shop" className="tg-btn-2 -secondary">
                  buy nfts
                </NavLink>
              </div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <NavBtn id="01" img={"/assets/img/others/about_tab01.png"} isActive={true} />
                <NavBtn id="02" img={"/assets/img/others/about_tab02.png"} />
                <NavBtn id="03" img={"/assets/img/others/about_tab03.png"} />
                <NavBtn id="04" img={"/assets/img/others/about_tab04.png"} />
                <NavBtn id="05" img={"/assets/img/others/about_tab05.png"} />
                <NavBtn id="06" img={"/assets/img/others/about_tab06.png"} />
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          <TabItem
            id="01"
            img={"/assets/img/others/about_img01.jpg"}
            isActive={true}
            title="human game"
            rate="50%"
          />
          <TabItem id="02" img={"/assets/img/others/about_img02.jpg"} title="Axie Infinity" rate="60%" />
          <TabItem id="03" img={"/assets/img/others/about_img03.jpg"} title="The Walking Dead" rate="75%"/>
          <TabItem id="04" img={"/assets/img/others/about_img04.jpg"} title="The Dogami" rate="65%" />
          <TabItem id="05" img={"/assets/img/others/about_img05.jpg"} title="The Sandbox" rate="85%" />
          <TabItem id="06" img={"/assets/img/others/about_img06.jpg"} title="Pegaxy Horses" rate="90%" />
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
