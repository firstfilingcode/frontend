import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../common/services/user-services";
import { toast } from "react-toastify";
import { ReactSession } from 'react-client-session';
import NewLogin from './newLogin';
import secureLocalStorage from "react-secure-storage";
ReactSession.setStoreType("localStorage");

const clientId = '29600525751-iot7t7t4pnbrm2fb8s8q4he87vhisvln.apps.googleusercontent.com';

const Login = () => {

    const signUpOpen = () =>
        (document.getElementById("signUpPage").style.width = "100%")(
            (document.getElementById("myNav").style.width = "0%")
        );

    const forgotopen = () =>
        (document.getElementById("ForgetPage").style.width = "100%")(
            (document.getElementById("myNav").style.width = "0%")
        );

    //  localStorage.clear();
    const navigate = useNavigate();

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
                document.getElementById("lodar").style.height = "20px";
                document.getElementById("btnTextLogin").innerHTML = "";
                const normalSignIn = () => {
                    loginUser(data).then((resp) => {
                        if (resp.success) {
                            localStorage.setItem("displayName", resp.data.name);
                            localStorage.setItem("user_id", resp.data.id);
                            ReactSession.set("user_id", resp.data.id);
                            secureLocalStorage.setItem("wallet",resp.data.wallet);
                            localStorage.setItem("email", resp.data.email);
                            localStorage.setItem("photoURL", resp.data.photoURL);
                            localStorage.setItem("mobile", resp.data.mobile);
                            localStorage.setItem("address", resp.data.address);
                            localStorage.setItem("aadhar_card", resp.data.aadhar_card);
                            localStorage.setItem("pan_card", resp.data.pan_card);
                            localStorage.setItem("doc_status", resp.data.doc_status);

                            document.getElementById("myNav").style.width = "0%";
                            // navigate('/Order');
                            toast.success("Logged In Successfully");
                            //window.location.reload(true)
                            window.dispatchEvent(new Event("storage"));

                        } else {
                            setSerror(resp.message);
                            setErrorColor("red");
                            document.getElementById("lodar").style.height = "0px";
                            document.getElementById("btnTextLogin").innerHTML = "Login";
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

    useEffect(() => {
        document.getElementById("lodar").style.height = "0px";
        document.getElementById("btnTextLogin").innerHTML = "Login";
    });

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
            <div className="col-md-12 contactinput">
                <div class="input-group">
                    <div class="input-group-prepend LoginICons">
                        <span class="input-group-text" id="">
                            <i class="fa fa-envelope-o"></i>
                        </span>
                    </div>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => handleChange(e, "email")}
                        value={data.email}
                        className="form-control mt-3 form_control2"
                        placeholder="Email Address"
                    />
                </div>
                <span style={{ color: errorColor }}>
                    {ErrorEmail}
                </span>
                <div class="input-group">
                    <div class="input-group-prepend LoginICons">
                        <span class="input-group-text" id="">
                            <i class="fa fa-lock"></i>
                        </span>
                    </div>
                    <input
                        type={passShow ? "password" : "text"}
                        name="password"
                        onChange={(e) => handleChange(e, "password")}
                        value={data.password}
                        className="form-control mt-3 form_control2"
                        placeholder="Password"
                    />
                    <div class="input-group-append LoginICons2">
                        <span class="input-group-text">
                            <i onClick={handlePass} className={passShow ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                        </span>
                    </div>
                </div>
                <span style={{ color: errorColor }}>
                    {ErrorPass}
                </span>

                <span style={{ color: errorColor }}>{Serror}</span>
                <div className="row">
                    <div className="col-md-6 col-6">
                        <div className="text-left checkbox-login mt-3">
                            <Input
                                type="checkbox"
                                name="remamber"
                                className="form-check-input"
                            />
                            <span className="modal_subtitle text-end px-2">
                                Remember me
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3 text-end forget col-6">
                            <span className="modal_subtitle" onClick={forgotopen}>
                                Forgot Password
                            </span>
                    </div>
                </div>
                <Button
                    onClick={normalLogin}
                    type="submit"
                    className="login-btn mt-3"
                >

                    <div class="loading" id="lodar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span className="btntext" id="btnTextLogin">
                        <span>Sign In</span>
                    </span>

                </Button>

                <div className="my-3 slash_1">
                    <span className="modal_subtitle">
                        or connect with
                    </span>
                </div>

                <div className="my-3">
                    <NewLogin />
                   
                    <div className="my-3">
                        <span className="modal_subtitle">
                            Don’t have an account?,
                        </span>
                        <span className="sign">
                            <span className="loginbtntbtn" onClick={signUpOpen}>Sign Up</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
