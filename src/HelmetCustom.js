import { Helmet } from "react-helmet";

export const HelmetCustom = ({ newtitle }) => (
    <Helmet>
      <title>Dashboard - {newtitle} </title>
      <meta name="description" content="Safe site!" />
      <meta name="keywords" content="react,helmet,dashboard" />
    </Helmet>
  );