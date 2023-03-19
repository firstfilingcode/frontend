import React, { useState } from "react";
import { loginUser } from "../common/services/user-services";
import { ReactSession } from 'react-client-session';
import NewLogin from "../Login/newLogin";

const OrderSummaryLogin = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [ErrorEmail, setErrorEmail] = useState("");
    const [Serror, setSerror] = useState("");
    const [ErrorPass, setErrorPass] = useState("");
    const [errorColor, setErrorColor] = useState("white");
    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
        setErrorEmail("");
        setErrorPass("");
        setErrorColor("white");
        setSerror("");
        // console.log(data);
    };

    const [lodar, setLodar] = useState("");
    const [lodarText, setLodarText] = useState("block");

    const normalLogin = async () => {
        function isValidLogin(email) {
            return /\S+@\S+\.\S+/.test(email);
        }

        if (data.email === "") {
            // toast.error("Email Required");
            setErrorEmail("Email Field Can't Be Null");
            setErrorColor("red");
        } else if (!isValidLogin(data.email)) {
            setErrorEmail("Please type a valid email");
            setErrorColor("red");
        } else if (data.password === "") {
            setErrorPass("Password Field Can't Be Null");
            setErrorColor("red");
        } else {
            try {
                setLodar("20px")
                setLodarText("none")
                const normalSignIn = () => {
                    loginUser(data).then((resp) => {
                        if (resp.success) {
                            localStorage.setItem("displayName", resp.data.name);
                            localStorage.setItem("user_id", resp.data.id);
                            ReactSession.set("user_id", resp.data.id);
                            localStorage.setItem("email", resp.data.email);
                            localStorage.setItem("photoURL", resp.data.photoURL);
                            localStorage.setItem("mobile", resp.data.mobile);
                            localStorage.setItem("address", resp.data.address);
                            localStorage.setItem("aadhar_card", resp.data.aadhar_card);
                            localStorage.setItem("pan_card", resp.data.pan_card);
                            localStorage.setItem("doc_status", resp.data.doc_status);
                            setLodar("0px")
                            setLodarText("block")
                            window.dispatchEvent(new Event("storage"));

                        } else {
                            setSerror(resp.message);
                            setErrorColor("red");
                            setLodar("0px")
                            setLodarText("block")
                        }
                        // console.log(data);
                    });
                };
                normalSignIn();
            } catch (error) {
                document.getElementById("lodar").style.height = "0px";
                document.getElementById("btnTextLogin").innerHTML = "Login";
                // console.log(error);
            }
        }
    };

    const [passShow, setPassShow] = useState(true)

    const handlePass = event => {
        if (passShow) {
            setPassShow(false)
        } else {
            //console.log('⛔️ Checkbox is NOT checked');
            setPassShow(true)
        }
        // setIsSubscribed(current => !current);
    };

    return (
        <>
            <div className="col-md-12 mb-3 order_wlogin_acc_1">
                <div class="input-group mt-0">
                    <div class="input-group-prepend order_wlogin_ac">
                        <span class="input-group-text" id="">
                            <i class="fa fa-envelope-o"></i>
                        </span>
                    </div>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="form-control"
                        onChange={(e) => handleChange(e, "email")}
                        value={data.email}
                    />

                </div>
                <span style={{ color: errorColor }}>
                    {ErrorEmail}
                </span>
            </div>
            <div className="col-md-12 order_wlogin_acc_1">
                <div class="input-group mt-0">
                    <div class="input-group-prepend order_wlogin_ac">
                        <span class="input-group-text" id="">
                            <i class="fa fa-lock"></i>
                        </span>
                    </div>
                    <input
                        type={passShow ? "password" : "text"}
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) => handleChange(e, "password")}
                        value={data.password}
                    />
                    <div className="input-group-prepend order_wlogin_ac345">
                        <span className="input-group-text" id="">
                            <i onClick={handlePass} className={passShow ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                        </span>
                    </div>

                </div>
                <span style={{ color: errorColor }}>
                    {ErrorPass}
                </span>
                <span style={{ color: errorColor }}>{Serror}</span>
            </div>
            <div className="col-md-12 formcheckFlex mt-3">
                <div className="row w-100">
                    <div className="col-md-6">
                        <input
                            check
                            type="checkbox"
                            class="form-check-input form-check-input"
                        />

                        <span class="forgot text-end px-2">
                            Remember me
                        </span>
                    </div>
                    <div className="col-md-6 text-right">
                        <span class="forgot text-end">
                            Forgot Password
                        </span>
                    </div>
                </div>

            </div>
            <div className="col-md-12 mt-3 order_login_bt">
                <button className="btn" onClick={normalLogin}>
                    <div
                        class="loading"
                        id="newsletter"
                        style={{ height: lodar }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div style={{ display: lodarText }}>
                        <small>
                            Login &nbsp;&nbsp;
                            <i className="fa fa-angle-right"></i>
                        </small>
                    </div>
                </button>
            </div>
            <div className="col-md-12 text-center slash_0">
                <span className="connectwith">or connect with</span>
            </div>
            <div className="col-md-12 samegapediv">
                <NewLogin />
            </div>
        </>
    )
}

export default OrderSummaryLogin