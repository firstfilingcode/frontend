
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { BASE_URL, myAxios } from "../common/services/Helper";
import { ReactSession } from 'react-client-session';
ReactSession.setStoreType("localStorage");
const clientId = '29600525751-iot7t7t4pnbrm2fb8s8q4he87vhisvln.apps.googleusercontent.com';

function NewLogin() {
    const navigate = useNavigate();
    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token : " + response.credential)
        var userObject = jwt_decode(response.credential)
        console.log(userObject);

        if (localStorage.getItem('googleId') === null) {
            console.log("Login Success ! current user : ", userObject);
            checkRefer();
            localStorage.clear();
            localStorage.setItem("displayName", userObject.given_name);
            // localStorage.setItem("user_id", resp.data.id);
            localStorage.setItem("email", userObject.email);
            localStorage.setItem("photoURL", userObject.picture);
            localStorage.setItem("googleId", userObject.sub);
            window.dispatchEvent(new Event("storage"));
            // navigate('/Order');
        }
    }

    const [referCode, setReferCode] = useState(sessionStorage.getItem('referral_code'));
    const [error, setError] = useState(false);
    let formData = new FormData();
    const checkRefer = () => {
        formData.append("referral_code", referCode);
        myAxios({
            method: "post",
            url: BASE_URL + "/getReferral",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                // alert(JSON.stringify(response.data.data[0].id))
                if (response.data.data[0].id === ReactSession.get("user_id")) {
                    setError(true);
                    sessionStorage.removeItem("referral_id");
                    sessionStorage.removeItem("referral_code");
                }
                else {

                }

            })
            .catch(function (response) {

            });
    }

    useEffect(() => {
        window.onGoogleLibraryLoad = () => {
        /* global google */

        google.accounts.id.initialize({
            client_id: clientId,
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {
                'width': 800,
                'height': 50,
                'longtitle': false,
                'theme': 'dark',
            }
        )

        // google.accounts.id.prompt();
        }
    }, [])
    return (
        <>
            {
                error ?
                    alert('You Can not Use Your Referral Code') :
                    <div id="signInDiv"></div>
            }
        </>
    );
}

export default NewLogin;
