import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

const Services = () => {
  window.dispatchEvent(new Event("calender"));

 
  const [services, setServices] = useState([])
  const [pageName, setPageName] = useState(window.location.pathname.split('/')[1])
  if (pageName == "") {
    setPageName("Home")
  }

  localStorage.setItem('currentURL', pageName);
  // console.log("page Name is : " + pageName);

  useEffect(() => {
    const getServices = () => {
      fetch('https://accounts.rusoft.in/api/getServices/' + pageName)
        .then(res => res.json())
        .then(json => {
          setServices(json.data)
        });

    }
    getServices();

  }, [])
  // console.log("data data data data data" + JSON.stringify(services.length))
  if (services.length !== 0) {
    return (
      <>
        <section className="mt-5 bgimgr">


          <div className="container">
            <div className="col-md-12 main_p text-center">
              <div
                className="slash_0 findforyou"
                data-aos="fade-down"
                data-aos-delay="800"
              >
                <span> Find a package suitable for you </span>
                <p className='serviceDetailsText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem
                  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
              </div>
            </div>
            <div className="row service-padding">
              {
                services.map((item, index) => {
                  return <>
                    <div className="col-md-4" key={index}>
                      <div className="card service-card">
                        <div
                          className="card-header text-center card_head"
                        >
                          <span className="texthaeder">{index == 0 ? 'Basic' : index == 1 ? 'Standard' : index == 2 ? 'Ultimate' : ''}</span>
                        </div>
                        <div
                          className='card-body card_body'

                        >
                          <div className="card-tittle">
                            <h1 className="text-center price">
                              <span>₹</span>{item.price}
                            </h1>
                            <p className="text-center GST">* GST as applicable</p>
                          </div>
                          <div className="card-text-box">
                            <div className="card-text">

                              <span className="iconwithtext" dangerouslySetInnerHTML={{ __html: item.short_des }}>

                              </span>
                            </div>
                          </div>
                          <center>
                            <NavLink to={'/OrderSummary2/' + item.service_detail_id}>
                              <button className="buybtn">
                                <span className="buytext1">Buy</span>
                              </button>
                            </NavLink>
                          </center>
                        </div>
                      </div>
                    </div>
                  </>
                })
              }
            </div>
          </div>

        </section>



      </>
    );
  }
}

export default Services;