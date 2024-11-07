import Wrapper from "../layout/wrapper";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import TeamInfoArea from "../components/team/team-info-area";
import TeamDetailsArea from "../components/team/team-details-area";
import VideoArea from "../components/video/video-area";
import TeamArea from "../components/team/team-area";
import SEOCom from "../components/seo";


export default function TeamDetailsPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Team Details" />
      {/* seo title */}

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbArea
          title="SHAKH DANIAL"
          subtitle="TEAM DETAILS"
          bg="/assets/img/bg/breadcrumb_bg01.jpg"
          brd_img="/assets/img/team/breadcrumb_team.png"
        />
        {/* breadcrumb area end */}

        {/* team info start */}
        <TeamInfoArea />
        {/* team info end */}

        {/* team details area start */}
        <TeamDetailsArea />
        {/* team details area end */}

        {/* video area start */}
        <VideoArea />
        {/* video area end */}

        {/* team area start */}
        <TeamArea />
        {/* team area end */}

        {/*  */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
