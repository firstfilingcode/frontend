import React, { useEffect, useState } from "react";
import { BASE_URL } from "./services/Helper";

const SecurityPolicy = () => {
  const [data, setData] = useState([]);
  const [isLoded, setIsLoded] = useState(false);

  const getSecurityPolicy = () => {
    fetch(BASE_URL + "/getSecurityPolicy")
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setIsLoded(json.status);
      });
  };
  useEffect(() => {
    getSecurityPolicy();
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
          <div className="col-md-12 mt-3">
            <span dangerouslySetInnerHTML={{ __html: data }}></span>
          </div>
        </div>
      )}
    </>
  );
};

export default SecurityPolicy;
