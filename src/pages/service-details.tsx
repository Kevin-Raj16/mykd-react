import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import ServiceDetailsArea from "../components/service-details/service-details-area";
import FaqArea from "../components/faq/faq-area";


export default function ServiceDetailsPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Service Details" />
      {/* seo title */}

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbArea
          title="SERVICE SINGLE"
          subtitle="SERVICES DETAILS"
          bg="/assets/img/bg/breadcrumb_bg01.jpg"
          brd_img="/assets/img/others/breadcrumb_img02.png"
        />
        {/* breadcrumb area end */}

        {/* services details area start */}
        <ServiceDetailsArea />
        {/* services details area end */}

        {/* faq area start */}
        <FaqArea />
        {/* faq area end */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
