import { Helmet } from "react-helmet-async";

// prop type 
type IProps = {
  title:string;
}
const SEOCom = ({ title }:IProps) => {
  return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? `${title} - MYKD eSports and Gaming React Template` : 'MYKD - eSports and Gaming React Template'}</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="MYKD eSports and Gaming React Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
  );
};

export default SEOCom;