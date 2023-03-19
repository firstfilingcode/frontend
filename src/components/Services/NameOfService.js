import React, { useState, useEffect } from "react";
import { BASE_URL, myAxios, Timeout } from "../common/services/Helper";
import rightArrow from "../common/Images/rightArrow.png";

const ServiceName = () => {
  //alert(window.location.pathname.split("/")[1])
  const [data, setData] = useState('');
  const [serviceTypeName, setServiceTypeName] = useState('');
  const [serviceName, setServiceName] = useState('');
  let formData = new FormData();
  const getServiceInfo = async () => {
    formData.append("pageName", window.location.pathname.split("/")[1]);
     await myAxios({
        method: "post",
        url: BASE_URL + "/getServiceName",
        signal: Timeout(3000).signal,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(function (response) {
        // alert(JSON.stringify(response.data.data.name));
        setData(response.data.data);
        // alert(JSON.stringify(response.data.data))
        setServiceTypeName(response.data.service_type_name);
        setServiceName(response.data.route)
      })
      .catch();
  };

  const services = [
    "Itr1",
    "Itr2",
    "Itr3",
    "Itr4",
    "Itr5",
    "PartnershipFirmtoLLP",
    "Bookkeeping",
  ];

  let PageName = window.location.pathname.split("/")[1];


  useEffect(() => {
    if (services.indexOf(PageName) > -1) {
      document.getElementById('sevicetype1').style = "display: block";
      document.getElementById('sevicetype2').style = "display: none";
      // document.getElementById('sevicetype3').style = "display: none";
    } else {
      document.getElementById('sevicetype1').style = "display: none";
      document.getElementById('sevicetype2').style = "display: block";
      // document.getElementById('sevicetype3').style = "display: block";
    }
    getServiceInfo();
  }, []);


  return (
    <>

      <div className="col-md-12 order-list2" id="sevicetype1" >
        <ul>
          <li>
            <span>Home</span>
            <i className="fa fa-angle-right order-arrow-right"></i>
          </li>
          <li>
            <span>{serviceTypeName.name}</span>
            <i className="fa fa-angle-right order-arrow-right"></i>
          </li>
          <li>
            <span>{serviceName.page_name}</span>
          </li>
        </ul>
      </div>

      <div className="col-md-12 order-list" id="sevicetype2" >
        <ul>
          <li>
            <span>Home</span>
            <i className="fa fa-angle-right order-arrow-right"></i>
          </li>
          <li>
            <span>{serviceTypeName.name}</span>
            <i className="fa fa-angle-right order-arrow-right"></i>
          </li>
          <li>
            <span>{serviceName.page_name}</span>
          </li>
        </ul>
      </div>

      {/* <h3 className="businessreg" id="sevicetype3" data-aos="fade-right" data-aos-delay="600">
        {serviceName.page_name}
      </h3> */}
    </>
  );
};

export default ServiceName;
