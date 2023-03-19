import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, input, Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../common/services/user-services";
import { toast } from "react-toastify";
import { signUp } from "../common/services/signUp";
import NewLogin from "../Login/newLogin";

const SignUp = () => {
    const handleShow = () =>
        (document.getElementById("myNav").style.width = "100%")(
            (document.getElementById("signUpPage").style.width = "0%")
        );

    const navigate = useNavigate();

    const [buttonActive, setButtonActive] = useState("grey");
    const [disable, setDisable] = useState(true);

    const handleChange1 = (event) => {
        if (event.target.checked) {
            ;
            setButtonActive(
                "linear-gradient(90deg, #4B74E6 0.85%, #C46CFB 64.31%, #EF6CFB 96.05%)"
            );
            setDisable(false);
        } else {

            setButtonActive("grey");
            setDisable(true);
        }

    };


    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        mobile: "",
    });
    const [error, setError] = useState({
        errors: {},
        isError: false,
    });

    useEffect(() => {
        // console.log(data);
    }, [data]);

    const [Serror, setSerror] = useState("");
    const [ErrorEmail, setErrorEmail] = useState("");
    const [ErrorFName, setErrorFName] = useState("");
    const [ErrorLName, setErrorLName] = useState("");
    const [ErrorPass, setErrorPass] = useState("");
    const [ErrorMobile, setErrorMobile] = useState("");
    const [errorColor, setErrorColor] = useState("white");
    const [border, setBorder] = useState("");
    const handleChange = (event, property) => {
        //dynamic setting the values
        setData({ ...data, [property]: event.target.value });
        setErrorEmail("");
        setErrorFName("");
        setErrorLName("");
        setErrorPass("");
        setErrorMobile("");
        setSerror("");

        setErrorColor("white");
        setBorder("");


        const normalSignIn = () => {
            // console.log(data);
            loginUser(data).then((resp) => {

                if (resp.success) {
                    toast.success("Logged In Successfully");
                    const data = {
                        displayName: resp.data.name,
                        email: resp.data.email,
                        photoURL: resp.data.photoURL,
                    };

                } else {
                    toast.error(resp.message);
                }
                // console.log("success log");
            });
        };
    };


    const submitForm = (event) => {
        event.preventDefault();

        function isValidSign(email) {
            return /\S+@\S+\.\S+/.test(email);
        }

        function isValidMobile(mobile) {
            return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
                mobile
            );
        }

        function isValidPassword(password) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);

        }

        if (data.first_name === "") {
            setErrorFName("First Name Field Can't Be Null");
            setErrorColor("red");
            setBorder("red");
        }
        else if (data.last_name === "") {
            // toast.error("Email Required");
            setErrorLName("Last Name Field Can't Be Null");
            setErrorColor("red");
            setBorder("red");
        } else if (data.email === "") {
            // toast.error("Email Required");
            setErrorEmail("Email Field Can't Be Null");
            setErrorColor("red");
            setBorder("red");
        } else if (!isValidSign(data.email)) {
            setErrorEmail("Please type a valid email");
            setErrorColor("red");
            setBorder("red");
        } else if (data.mobile === "") {
            setErrorMobile("Mobile Field Can't Be Null");
            setErrorColor("red");
            setBorder("red");
        } else if (!isValidMobile(data.mobile)) {
            setErrorMobile("Please type a valid phone number");
            setErrorColor("red");
            setBorder("red");
        } else if (data.password === "") {
            setErrorPass("Password Field Can't Be Null");
            setErrorColor("red");
            setBorder("red");
        } else if (!isValidPassword(data.password)) {
            setErrorPass("Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character");
            setErrorColor("red");
            setBorder("red");
        } else {
            try {
                document.getElementById("lodarsign").style.height = "20px";
                document.getElementById("signUPBtn").innerHTML = "";
                signUp(data).then((resp) => {
                    // console.log(resp);
                    if (resp.success) {
                        toast.success("SignUp Completed");
                        document.getElementById("signUpPage").style.width = "0%";
                    } else {
                        setErrorColor("red");
                        setSerror(resp.message);
                        document.getElementById("lodarsign").style.height = "0px";
                        document.getElementById("signUPBtn").innerHTML = "Sign Up";
                    }
                    // console.log("success log");
                });
            }
            catch (error) {
                document.getElementById("lodarsign").style.height = "0px";
                document.getElementById("signUPBtn").innerHTML = "Sign Up";
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
            <div className="col-md-12 mt-3 mb-3">
                <div className="col-md-12 contactinput">
                    <form onSubmit={submitForm}>
                        <div class="input-group">
                            <div class="input-group-prepend LoginICons">
                                <span class="input-group-text" id="">
                                    <i class="fa fa-user"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                id="first_name"
                                className="form-control mt-3 form_control2"
                                placeholder="First Name"
                                onChange={(e) => handleChange(e, "first_name")}
                                value={data.first_name}
                            />
                        </div>
                        <span style={{ color: errorColor }}>
                            {ErrorFName}
                        </span>
                        <div class="input-group">
                            <div class="input-group-prepend LoginICons">
                                <span class="input-group-text" id="">
                                    <i class="fa fa-user"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                id="last_name"
                                className="form-control mt-3 form_control2"
                                placeholder="Last Name"
                                onChange={(e) => handleChange(e, "last_name")}
                                value={data.last_name}
                            />
                        </div>
                        <span style={{ color: errorColor }}>
                            {ErrorLName}
                        </span>
                        <div class="input-group">
                            <div class="input-group-prepend LoginICons">
                                <span class="input-group-text" id="">
                                    <i class="fa fa-envelope-o"></i>
                                </span>
                            </div>
                            <input
                                type="email"
                                id="email"
                                className="form-control mt-3 form_control2"
                                placeholder="Email"
                                onChange={(e) => handleChange(e, "email")}
                                value={data.email}
                            />
                        </div>
                        <span style={{ color: errorColor }}>
                            {ErrorEmail}
                        </span>
                        <span style={{ color: errorColor }}>
                            {Serror}
                        </span>
                        <div class="input-group">
                            <div class="input-group-prepend LoginICons">
                                <span class="input-group-text" id="">
                                    <i class="fa fa-phone-square"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                className="form-control mt-3 form_control2"
                                placeholder="Mobile Number"
                                onChange={(e) => handleChange(e, "mobile")}
                                value={data.mobile}
                                maxLength="10"
                            />
                        </div>
                        <span style={{ color: errorColor }}>
                            {ErrorMobile}
                        </span>
                        <div class="input-group">
                            <div class="input-group-prepend LoginICons">
                                <span class="input-group-text" id="">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                            <input
                                type={passShow ? "password" : "text"}
                                id="password"
                                name="paasword"
                                className="form-control mt-3 form_control2"
                                placeholder="Password"
                                onChange={(e) => handleChange(e, "password")}
                                value={data.password}
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

                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-left checkbox-login mt-3">
                                    <input
                                        onChange={handleChange1}
                                        type="checkbox"
                                        name="remamber"
                                        className="form-check-input"
                                    />
                                    <span className="modal_subtitle text-end px-2">
                                        I accept all terms & conditions
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Button type="submit" className="login-btn mt-3" style={{ background: buttonActive }}
                            disabled={disable}>
                            <div class="loading" id="lodarsign">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div id="signUPBtn">
                                <span className="btntext">Sign Up</span>
                            </div>
                        </Button>
                    </form>

                    <div className="my-3 slash_1">
                        <span className="modal_subtitle">
                            or connect with
                        </span>
                    </div>

                    <div className="my-3">

                        <NewLogin />
                        <div className="my-3">
                            <span className="modal_subtitle">
                                Already have an account?,
                            </span>
                            <span className="sign">
                                <span className="loginbtntbtn" onClick={handleShow}>Login</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
