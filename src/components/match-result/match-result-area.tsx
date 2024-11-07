import { NavLink } from 'react-router-dom';
import SvgIconCom from '../common/svg-icon-anim';
import TextAnimation from '../common/text-animation';

// prop type
type IWinnerItem = {name:string;amount:string;img:string,id:string;place:string}
// match winner item
function MatchWinnerItem ({name,amount,img,id,place}:IWinnerItem) {
    return (
        <div className="match__winner-wrap">
            <div className="match__winner-info">
                <h4 className="name">{name}</h4>
                <span className="price-amount">${amount}</span>
            </div>
            <div className="match__winner-img tg-svg">
                <div className="team-logo-img">
                    <NavLink to="/team-details"><img src={img} alt="img"/></NavLink>
                </div>
                <SvgIconCom icon={"/assets/img/icons/win_shape.svg"} id={`svg-${id}`}/>
                <h3 className="match__winner-place">{place}</h3>
            </div>
      </div>
    )
}


const MatchResultArea = () => {
  return (
    <section className="match__result-area">
    <div className="match__result-bg" style={{backgroundImage:`url(/assets/img/bg/result_bg.png)`}}></div>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
                <div className="section__title text-center mb-55">
                    <TextAnimation title="LATEST RESULTS FOR" />
                    <h3 className="title">EXPERIENCE JUST FOR</h3>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h4 className="match__winner-title">Premier league</h4>
            </div>
        </div>
        <div className="row match__result-wrapper justify-content-center">
            <div className="col-xl-5 col-sm-6">
                <MatchWinnerItem name='black hunt' amount='500 000' img="/assets/img/others/win01.png" id='3' place='win'/>
            </div>
            <div className="col-xl-5 col-sm-6">
                <MatchWinnerItem name='sky Hunter' amount='300 000' img="/assets/img/others/win02.png" id='4' place='2nd'/>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="grand__final">
                    <h6 className="grand__final-date">December 19, 2021 | 9:50 am</h6>
                    <span className="grand__final-place">grand dubai</span>
                    <div className="grand__final-button">
                        <NavLink to="/contact" className="tg-btn-3 tg-svg mx-auto">
                            <SvgIconCom icon={"/assets/img/icons/shape.svg"} id="svg-5"/>
                            <span>read more</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  );
};

export default MatchResultArea;