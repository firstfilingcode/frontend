import React, { useEffect, useState } from "react";
import { BASE_URL } from "./services/Helper";

const PrivacyPolicy = () => {
  const [data, setData] = useState([]);
  const [isLoded, setIsLoded] = useState(false);

  useEffect(() => {
    const getPrivacy = () => {
      fetch(BASE_URL + "/getPrivacyPolicy")
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
    </>
  );
};

export default PrivacyPolicy;
