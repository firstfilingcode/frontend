import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";
import secureLocalStorage from 'react-secure-storage';
import { BASE_URL, Timeout } from '../common/services/Helper';

const ServiceType2 = () => {

    window.dispatchEvent(new Event("calender"));

    window.addEventListener("calender", () => {
        document.getElementsByClassName("event-header")[0].style.textAlign = "center";
        document.getElementsByClassName("event-header")[0].innerHTML = "<h3 style='margin-top:-30px'>Check your due dates</h3>";
    });
    const [services, setServices] = useState([])
    const [pageName, setPageName] = useState(window.location.pathname.split('/')[1])

    if (pageName == "") {
        setPageName("Home")
    }


    localStorage.setItem('currentURL', pageName);

    useEffect(() => {
        getServices();

    }, [])

    const [metaTag, setMetaTag] = useState([]);
    const getServices = async () => {
        await fetch(BASE_URL + '/getServices/' + pageName, {
            signal: Timeout(3000).signal
        })
            .then(res => res.json())
            .then(json => {
                setMetaTag(json.WebMeta[0])
                setServices(json.data)
                secureLocalStorage.setItem("itr_service_price", {
                    base_price: json.data[0].price,
                    base_price_redirect: json.data[0].service_detail_id,
                })

                window.dispatchEvent(new Event("itr_service"));
            }).catch();
    }


    return (
        <>
            {/* {metaTag === "null" ? "" :
                <Helmet>
                    <title>{metaTag.tittle}</title>
                    <link rel="icon" href={metaTag.photo} />
                    <meta name="description" content={metaTag.meta_description} />
                    <meta name="theme-color" content="#f70505" />
                </Helmet>
            } */}
            
            {
                services.length !== 0 ?
                    <section className='ServiceOverlay'>
                        <div className="container">
                            <div className="row">
                                <div class="col-md-12 what_income_1 mt-2 ">
                                    <p className='ServicesP'>
                                        Select the complete tax filing package that suits your
                                        requirements
                                    </p>
                                </div>
                            </div>

                            <div className="row service-padding1">
                                {
                                    services.map((item, index) => {
                                        return <>
                                            <div className="col-md-4" key={index}>
                                                <section className="serviceFLex">
                                                    <div className="card_head_itr">
                                                        <span className="price_tag">Rs .{item.price}</span>
                                                    </div>
                                                </section>
                                                <div className="card service-card card_itr">
                                                    <div className="card-body card_body_itr">
                                                        <div className="text-center">
                                                            <span className="plansNameItr">{index == 0 ? 'Basic Plan' : index == 1 ? 'Standard Plan' : index == 2 ? 'Premier Plan' : ''}</span>
                                                        </div>
                                                        <div className="itrlisection serviceType2">
                                                            <span dangerouslySetInnerHTML={{ __html: item.short_des }}>

                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <center>
                                                    <NavLink to={'/OrderSummary2/' + item.service_detail_id}>
                                                        <button className="buybtn mt-3">
                                                            <span className="buytext1">Buy</span>
                                                        </button>
                                                    </NavLink>
                                                </center>
                                            </div>
                                        </>
                                    })
                                }
                            </div>
                        </div>
                    </section>
                    :
                    ""
            }
        </>
    );

}

export default ServiceType2;