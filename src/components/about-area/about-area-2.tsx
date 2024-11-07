import { useState } from 'react';
import SvgIconCom from '../common/svg-icon-anim';
import VideoPopup from '../common/video-popup';
import CounterUp from "../common/counter-up";
import { NavLink } from 'react-router-dom';

const AboutAreaTwo = () => {
   const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
   return (
      <>
         <section className="about__area-two section-pt-160 section-pb-190">
            <div className="container">
               <div className="row justify-content-center align-items-center">
                  <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
                     <div className="about__funFact-images">
                        <img src="/assets/img/others/fun_fact_shape.png" alt="background" className="bg-shape" />
                        <img src="/assets/img/others/fun_fact.png" className="main-img" alt="image" />
                     </div>
                     <div className="about__funFact-trophy">
                        <div className="icon"><img src="/assets/img/icons/trophy.png" alt="trophy"/></div>
                        <div className="content">
                           <h5>Tournament</h5>
                           <span>Development</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-10">
                     <div className="section__title text-start mb-30">
                        <h3 className="title">The Journey of The <br /> NFT Sites</h3>
                     </div>
                     <div className="about__content-two">
                        <p>Gorem npsum dolor sit amet consectetur adipiscing elit. Duis elementum sollici tudin augue euismod. Nulla ullamcorper nunc. Morbi pharetra mi tellus mollis tincidunt massa venenatis. Etiam lacinia ipsumultrices.</p>
                     </div>
                     <div className="about__content-bottom">
                        <div className="about__content-circle">
                           <img src="/assets/img/icons/circle.svg" alt="img" />
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                              <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                              <text>
                                 <textPath href="#textPath">super nft Gaming sits</textPath>
                              </text>
                           </svg>
                        </div>
                        <div className="about__funFact-wrap">
                           <div className="about__funFact-lists">
                              <div className="about__funFact-item">
                                 <h2 className="count">
                                    <CounterUp number={40} text="K" />
                                 </h2>
                                 <p>Member</p>
                              </div>
                              <div className="about__funFact-item">
                                 <h2 className="count">
                                    <CounterUp number={12} text="K" />
                                 </h2>
                                 <p>NFT</p>
                              </div>
                              <div className="about__funFact-item">
                                 <h2 className="count">
                                    <CounterUp number={30} text="K" />
                                 </h2>
                                 <p>Artist</p>
                              </div>
                           </div>
                           <div className="about__content-btns">
                              <NavLink to="/contact" className="tg-btn-3 tg-svg">
                                 <SvgIconCom icon="/assets/img/icons/shape.svg" id="svg-6" />
                                 <span>read more</span>
                              </NavLink>
                              <a className="popup-video cursor-pointer"
                                 onClick={() => setIsVideoOpen(true)}><i className="fas fa-play">
                              </i><span className="text">How It Work</span></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"ssrNcwxALS4"}
         />
         {/* video modal end */}
      </>
   );
};

export default AboutAreaTwo;