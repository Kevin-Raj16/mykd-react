import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import ServicesArea from "../components/services/services-area";
import VideoArea from "../components/video/video-area";
import RoadMapArea from "../components/road-map/road-map-area";


export default function ServicesPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Services" />
      {/* seo title */}

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbArea title="SERVICES" subtitle="OUR SERVICES" bg="/assets/img/bg/breadcrumb_bg01.jpg" brd_img="/assets/img/others/breadcrumb_img02.png" />
        {/* breadcrumb area end */}

        {/* services area start */}
        <ServicesArea/>
        {/* services area end */}

        {/* video area start */}
        <VideoArea/>
        {/* video area end */}

        {/* road map area start */}
        <RoadMapArea/>
        {/* road map area end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
