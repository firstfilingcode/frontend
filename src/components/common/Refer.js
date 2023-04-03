import React, { useState, useEffect } from "react";
import { BASE_URL, myAxios } from "./services/Helper";
import { ReactSession } from 'react-client-session';
import { useNavigate } from "react-router-dom";

ReactSession.setStoreType("localStorage");


function Refer() {
  const navigate = useNavigate();
  let formData = new FormData();
  const [referCode, setReferCode] = useState(window.location.pathname.split("/")[1]);
 
  
  const [error, setError] = useState(false);
  const array= referCode.split("@")[1];

  useEffect(() => {

    const myInterval = setInterval(myTimer, 4000);

    function myTimer() {
      if(array === undefined)
{
      navigate("/")
      myStopFunction()
}
else{
  myStopFunction()
}
    }

    function myStopFunction() {
      clearInterval(myInterval);
    }

  }, [error])
  useEffect(() => {

  

if(array === undefined)
{
formData.append("referral_code", referCode);
    myAxios({
      method: "post",
      url: BASE_URL + "/getReferral",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //alert(JSON.stringify(response.data.data[0].id))
        if (response.data.data[0].id === ReactSession.get("user_id")) {
          setError(true)


          // navigate("/");
        }
        else {
          sessionStorage.setItem("referral_id", response.data.data[0].id);
          sessionStorage.setItem("referral_code", response.data.data[0].referral_code);
           navigate("/");
        }

      })
      .catch(function (response) {
        console.log("");

        //   
      });
}
else{
  sessionStorage.setItem("subscription_token", array);
  navigate("/UnsubscribeNewsLetter");

}

    
  }, [referCode]);
  return (
    <>
      {
        error ?
          <div>
            <div className="bg">
              <div id="overlay-header">
                <div className="text-center center">
                  <div className="container">
                    <div className="row spinner-border text-light" role="status">

                    </div>
                    <h1 className="text-white mt-4"> You Can not Use Your Referral Code</h1>
                  </div>
                </div>
              </div>
              <div className="foot-message">
                <p className="text-white">You are being redirected to <a className="text-warning" href="https://firstfilling.in/">https://firstfilling.in</a></p><a className="text-warning" href="https://firstfilling.in/">
                </a></div><a className="text-warning" href="https://firstfilling.in/">
              </a></div><a className="text-warning" href="https://firstfilling.in/">
            </a></div>

          :
          <div>
            <div className="bg">
              <div id="overlay-header">
                <div className="text-center center">
                  <div className="container">
                    <div className="row spinner-border text-light" role="status">
                      <span className="sr-only">Loading...sdfsdf</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="foot-message">
                <p className="text-white">You are being redirected to <a className="text-warning" href="https://firstfilling.in/">https://firstfilling.in</a></p><a className="text-warning" href="https://firstfilling.in/">
                </a></div><a className="text-warning" href="https://firstfilling.in/">
              </a></div><a className="text-warning" href="https://firstfilling.in/">
            </a></div>

      }



    </>
  );
}

export default Refer
