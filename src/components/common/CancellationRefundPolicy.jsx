import React, { useEffect, useState } from "react";
import { BASE_URL } from "./services/Helper";

const CancellationRefundPolicy = () => {
  const [data, setData] = useState([]);
  const [isLoded, setIsLoded] = useState(false);

  const getCancellationRefundPolicy = () => {
    fetch(BASE_URL + "/getCancellationRefundPolicy")
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setIsLoded(json.status);
      });
  };
  useEffect(() => {
    getCancellationRefundPolicy();
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

export default CancellationRefundPolicy;
