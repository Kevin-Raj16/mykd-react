import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import ShopArea from "../components/shop/shop-area";



export default function ShopPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Shop" />
      {/* seo title */}

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
       <BreadcrumbAreaThree title="NFT COLLECTIONS" subtitle="OUR SHOP" />
        {/* breadcrumb area end */}

        {/* shop area start */}
        <ShopArea/>
        {/* shop area end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
