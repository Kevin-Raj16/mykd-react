import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import TournamentArea from "../components/tournaments/tournament-area";
import TournamentListArea from "../components/tournaments/tournament-list-area";


export default function TournamentPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Tournament" />
      {/* seo title */}

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbArea title="TOURNAMENT" subtitle="TOURNAMENT" bg="/assets/img/bg/breadcrumb_bg03.jpg" brd_img="/assets/img/others/breadcrumb_img03.png" />
        {/* breadcrumb area end */}

        {/* tournament area start */}
        <TournamentArea />
        {/* tournament area end */}

        {/* tournament list area start */}
        <TournamentListArea />
        {/* tournament list area end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
