import React, { useEffect, useState } from "react";
import { BASE_URL } from "./services/Helper";
import { Helmet } from "react-helmet";  
const AboutUs = () => {
  const [data, setData] = useState([]);
  const [isLoded, setIsLoded] = useState(false);

  const getPrivacy = () => {
    fetch(BASE_URL + "/getAbout")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setIsLoded(json.status);
      });
  };
  useEffect(() => {
    getPrivacy();
  }, []);

  return (
    <>
    <Helmet>  
        <title>FirstFiling-Aboutus</title>  
        <meta name="description" content="First Filing Aboutus Page" />  
       
      </Helmet>  

      {isLoded === false ? (
        <div className="container">
          <div className="col-md-12">
            <h1>Loding...</h1>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="col-md-12 mt-3">
            <img src={data.data.photo} alt="about images" />
            <p>{data.data.name}</p>
            <p>{data.data.short_description}</p>
            <p>{data.data.long_description}</p>
          </div>
        </div>
      )}

    </>
  );
};

export default AboutUs;
