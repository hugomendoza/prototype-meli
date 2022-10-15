import { Helmet } from "react-helmet";

interface PropsSeo  {
  name: string
}
export const Seo = ({name}:PropsSeo) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mercado Libre | {name}</title>
        <meta name="description" content="Prueba de consumo de API para mercado libre" />
        <meta name="keywords" content="e-commerce, test, API-REST" />
        <link rel="canonical" href="http://mysite.com/" />
        <meta name="author" content="Hugo mendoza" />
      </Helmet>
    </>
  )
}

const defaultProps:PropsSeo = {
  name: "Home"
}

Seo.defaultProps = defaultProps;
