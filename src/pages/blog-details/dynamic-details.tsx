import { useParams } from "react-router-dom";
import Wrapper from "../../layout/wrapper";
import SEOCom from "../../components/seo";
import Header from "../../layout/header/header";
import BreadcrumbAreaThree from "../../components/breadcrumb/breadcrumb-area-3";
import BlogDetailsArea from "../../components/blog-details/blog-details-area";
import Footer from "../../layout/footer/footer";
import blog_data from "../../data/blog-data";


export default function DynamicBlogDetailsPage() {
  const { id } = useParams();
  const blog = blog_data.find(b => Number(b.id) === Number(id))!;
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Blog Details" />
      {/* seo title */}

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbAreaThree title="BLOG DETAILS" subtitle="BLOG DETAILS" />
        {/* breadcrumb area end */}

        {/* blog area start */}
        <BlogDetailsArea blog={blog} />
        {/* blog area end */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
