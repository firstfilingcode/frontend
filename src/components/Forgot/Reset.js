import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPass } from "../common/services/resetPass";

// import "../css/About.css";
const Reset = () => {
    const navigate = useNavigate();

    const [lodar, setLodar] = useState("");
    const [lodarText, setLodarText] = useState("block");
    const [data, setData] = useState({
        password: '',
    })

    useEffect(() => {

        // console.log(data);
    }, [data])

    const [ErrorPass, setErrorPass] = useState("");
    const [errorColor, setErrorColor] = useState("white");
    const handleChange = (event, property) => {
        setErrorPass("");
        setErrorColor("white");
        //dynamic setting the values
        setData({ ...data, [property]: event.target.value })
    }
    const submitForm = (event) => {

        event.preventDefault()
        setLodar("20px")
        setLodarText("none")

        function isValidPassword(password) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);

        }

        if (data.password === "") {
            setLodar("0px")
            setLodarText("block")
            // toast.error("Email Required");
            setErrorPass("Email Field Can't Be Null");
            setErrorColor("red");
        } else if (!isValidPassword(data.password)) {
            setErrorPass("Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character");
            setErrorColor("red");
            setLodar("0px")
            setLodarText("block")
        }

        else {
            resetPass({ password: data.password, email: localStorage.getItem('email') }).then((resp) => {
                // console.log(resp)
                if (resp.success) {
                    setLodar("0px")
                    setLodarText("block")
                    toast.success("Password Update Successfully");
                    (document.getElementById("ForgetPage").style.width = "0%")
                }
                else {
                    setLodar("0px")
                    setLodarText("block")
                    toast.error(resp.message);
                }
                // console.log("success log");

            })
        }

    }
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

            <form onSubmit={submitForm}>
                <div className="col-md-12 forgotinput">
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
                    <button
                        type="submit"
                        className="forgotbutton mt-3"
                    >
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
                                Reset
                            </small>
                        </div>

                    </button>
                </div>
            </form>

        </>

    );
}

export default Reset;
