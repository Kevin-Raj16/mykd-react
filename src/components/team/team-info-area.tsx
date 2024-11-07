import { NavLink } from 'react-router-dom';

const TeamInfoArea = () => {
  return (
    <section className="team__info-area">
     <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="team__info-wrap">
                    <div className="team__info-discord">
                        <div className="about__content-circle">
                            <img src="/assets/img/icons/circle02.svg" alt="img" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                <text>
                                    <textPath href="#textPath">super nft Gaming sits</textPath>
                                </text>
                            </svg>
                            <i className="flaticon-discord"></i>
                        </div>
                        <div className="team__info-discord-info">
                            <span className="sub">Join Us</span>
                            <h5 className="title"><NavLink to="https://discord.com/" target="_blank">DISCORD</NavLink></h5>
                        </div>
                    </div>
                    <div className="team__info-list">
                        <ul className="list-wrap">
                            <li>
                                <div className="team__info-item">
                                    <div className="team__info-icon">
                                        <img src="/assets/img/others/team_vs02.png" alt="img"/>
                                    </div>
                                    <div className="team__info-content">
                                        <span className="sub">Member</span>
                                        <h5 className="title">Black ninja</h5>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="team__info-item">
                                    <div className="team__info-icon">
                                        <i className="flaticon-swords-1"></i>
                                    </div>
                                    <div className="team__info-content">
                                        <span className="sub">Game play</span>
                                        <h5 className="title">Pubg Mobile</h5>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="team__info-item">
                                    <div className="team__info-icon">
                                        <i className="flaticon-diamond"></i>
                                    </div>
                                    <div className="team__info-content">
                                        <span className="sub">Win Time</span>
                                        <h5 className="title">04</h5>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  );
};

export default TeamInfoArea;