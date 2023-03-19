import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgetPass } from "../common/services/forgetpass";
import Reset from "./Reset";


const Forgot = () => {
    const [lodar, setLodar] = useState("");
    const [lodarText, setLodarText] = useState("block");
    const navigate = useNavigate();

    const [otp, setOtp] = useState(false);
    const [reset, setReset] = useState("block");
    const [reset1, setReset1] = useState("none");
    const handleClick = () => setOtp((value) => !value);

    const [data, setData] = useState({
        email: "",
        otp: "",
    });

    const [Serror, setSerror] = useState("");
    const [Serror1, setSerror1] = useState("");
    const [errorColor, setErrorColor] = useState("white");
    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
        setSerror("");
        setSerror1("");
        setErrorColor("white");
    };
    // console.log(data);

    const submitForm = (event) => {
        event.preventDefault();
        setLodar("20px")
        setLodarText("none")
        forgetPass(data).then((resp) => {
            // console.log(resp);
            if (resp.status) {
                localStorage.setItem("otp", resp.otp);
                localStorage.setItem("email", data.email);
                alert('Please Check Your Email');
                setLodar("0px")
                setLodarText("block")
                setOtp(true);
            } else {
                setSerror(resp.message);
                setErrorColor("red");
                setLodar("0px")
                setLodarText("block")
            }
        });
    };

    const submitOtp = (event) => {
        event.preventDefault();
        setLodar("20px")
        setLodarText("none")

        if (localStorage.getItem("otp") === data.otp) {
            localStorage.removeItem("otp");
            setReset("none");
            setReset1("block");
            setLodar("0px")
            setLodarText("block")
        } else {
            setSerror1("Invalid Otp");
            setErrorColor("red");
            setReset("block");
            setReset1("none");
            setLodar("0px")
            setLodarText("block")
        }
    };

    return (
        <>
            <section style={{ display: reset }}>
                {otp ? (
                    <form onSubmit={submitOtp}>
                        <div className="col-md-12 forgotinput">
                            <div class="input-group">
                                <div class="input-group-prepend LoginICons">
                                    <span class="input-group-text" id="">
                                        <i class="fa fa-file"></i>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    id="otp"
                                    className="form-control mt-3 form_control2"
                                    placeholder="Type Your Otp"
                                    onChange={(e) => handleChange(e, "otp")}
                                    value={data.otp}
                                />
                            </div>
                            <span style={{ color: errorColor }}>
                                {Serror1}
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
                                        Send
                                    </small>
                                </div>

                            </button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={submitForm}>
                        <div className="col-md-12 forgotinput">
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
                                {Serror}
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
                                        Get Otp
                                    </small>
                                </div>

                            </button>
                        </div>
                    </form>
                )}

            </section>

            <section style={{ display: reset1 }}>
                <Reset />
            </section>
        </>
    );
};

export default Forgot;
