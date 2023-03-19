import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BASE_URL } from "./services/Helper";

const TermCondition = () => {
  const [data, setData] = useState([]);
  const [isLoded, setIsLoded] = useState(false);

  useEffect(() => {
    const getPrivacy = () => {
      fetch(BASE_URL + "/getTermsConditions")
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setIsLoded(json.status);
        });
    };
    getPrivacy();
  }, []);

  return (
    <>
      <Header />

      {isLoded === false ? (
        <div className="container">
          <div className="col-md-12">
            <h1>Loding...</h1>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="col-md-12">
            <span dangerouslySetInnerHTML={{ __html: data.data }}></span>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default TermCondition;
