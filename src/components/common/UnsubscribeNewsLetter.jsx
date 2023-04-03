import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { myAxios, BASE_URL } from "./services/Helper";
import { ReactSession } from 'react-client-session';
const UnsubscribeNewsLetter = () => {
   // let PageName = window.location.pathname.split("/")[1];
   
    const [token, setToken] = useState( sessionStorage.getItem("subscription_token" ));
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    let formData2 = new FormData();
    const handleChange = (event, property) => {
        formData2.append("token", token);
        formData2.append("email", data.email);
        myAxios({
            method: "post",
            url: BASE_URL + "/unSubscribed",
            data: formData2,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                // alert(JSON.stringify(response)
                navigate("/");
            })
            .catch(function (response) {
                // console.log("");
                //
            });


    };
    let formData = new FormData();
    const getData = () => {
        formData.append("token", token);
        myAxios({
            method: "post",
            url: BASE_URL + "/getSubscription",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                if (response.data.status === true) {
                    setData(response.data.data)
                }
                else {
                    // alert("No Subscription Found")
                }

            })
            .catch(function (response) {
                // console.log("");
                //
            });
    };

    useEffect(() => {

        getData();

    }, [token]);
    return (
        <>
            <div className="container">
                <section className="unsubscribeflexCenter">
                    <div className="card unsubscribeCard">
                        <div className="card-header">
                            <h3 className="titleOfFirstFilling text-white">{data.email}</h3>
                        </div>
                        <div className="card-body">
                            <p className="partnershiptollp_p text-center">Are you sure for unsubscribe our newsletter</p>

                            {/* <h5>{data.email ? <b>{data.email}</b> : ""}</h5> */}

                            <button className="btn btn-primary mt-3" onClick={handleChange} type="submit">
                                Unsubscribe
                            </button>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default UnsubscribeNewsLetter;
