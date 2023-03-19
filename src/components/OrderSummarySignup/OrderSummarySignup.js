import React, { useState } from "react";
import { signUp } from "../common/services/signUp";
import OrderSummaryLogin from "../OrderSummaryLogin/OrderSummaryLogin";
import { ReactSession } from 'react-client-session';
import { useFormik } from 'formik';
import NewLogin from "../Login/newLogin";

const OrdersignUp = valData => {
    const errors = {};

    if (!valData.first_name) {
        errors.first_name = 'Please Enter First Name';
    }
    if (!valData.last_name) {
        errors.last_name = 'Please Enter Last Name';
    }

    if (!valData.mobile) {
        errors.mobile = "Please Enter Mobile Number";
    } else if (
        !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(
            valData.mobile
        )
    ) {
        errors.mobile = "Invalid Mobile Number";
    }

    if (!valData.email) {
        errors.email = "Please Enter Email ID";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valData.email)
    ) {
        errors.email = "Invalid email address";
    }

    if (!valData.password) {
        errors.password = "Please Enter Password";
    } else if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(valData.password)
    ) {
        errors.password = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    }

    return errors;
};


const OrderSummarySignup = () => {
    const [userId, setUserId] = useState(localStorage.getItem("user_id"));
    const [gstinSubmit, setGstinSUbmit] = useState(false);
    const [email, setEmail] = useState(localStorage.getItem("email"));

    const [lodar, setLodar] = useState("");
    const [lodarText, setLodarText] = useState("block");

    const [initialValues, setInitialValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        password: "",
    });

    const [Serror, setSerror] = useState("");
    const formik = useFormik({
        initialValues,
        validate: OrdersignUp,
        onSubmit: values => {
            setLodarText("none");
            setLodar("20px");
            setSerror("");
            signUp(values).then((resp) => {
                if (resp.success) {
                    // toast.success("SignUp Completed");
                    localStorage.setItem("displayName", resp.data.first_name);
                    localStorage.setItem("user_id", resp.data.id);
                    ReactSession.set("user_id", resp.data.id);
                    localStorage.setItem("email", resp.data.email);
                    localStorage.setItem("photoURL", resp.data.photoURL);
                    localStorage.setItem("mobile", resp.data.mobile);
                    localStorage.setItem("address", resp.data.address);
                    localStorage.setItem("aadhar_card", resp.data.aadhar_card);
                    localStorage.setItem("pan_card", resp.data.pan_card);
                    localStorage.setItem("doc_status", resp.data.doc_status);
                    setEmail(localStorage.getItem("email"));
                    setUserId(resp.data.id);
                    setGstinSUbmit(true);
                    setLodar("0px");
                    setLodarText("block");
                    window.dispatchEvent(new Event("storage"));
                }
                else {
                    setSerror(resp.message)
                    setLodar("0px");
                    setLodarText("block");
                }
            })
        }
    });



    const [isLogin, setIsLogin] = useState(false);

    function loginChange() {
        setIsLogin(true);
    }

    function signChange() {
        setIsLogin(false);
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
        <div>
            {isLogin === false ?
                <>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Register Now...!</h4>
                                <p>Please enter your contact details</p>
                            </div>
                            <div className="col-md-6 mt-3">
                                <label className="mt-2 mb-2">
                                    First Name <span className="redColor">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="first_name"
                                    name="first_name"
                                    placeholder="First Name"
                                    value={formik.values.first_name}
                                    onChange={(e) => { formik.handleChange(e) }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.first_name && formik.errors.first_name ? <span style={{ color: "red", fontSize: "12px" }}>{formik.errors.first_name}</span> : null}
                            </div>
                            <div className="col-md-6 mt-3">
                                <label className="mt-2 mb-2">
                                    Last Name <span className="redColor">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="last_name"
                                    name="last_name"
                                    placeholder="Last Name"
                                    value={formik.values.last_name}
                                    onChange={(e) => { formik.handleChange(e) }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.last_name && formik.errors.last_name ? <span style={{ color: "red", fontSize: "12px" }}>{formik.errors.last_name}</span> : null}
                            </div>
                            <div className="col-md-6 mt-3">
                                <label className="mt-2 mb-2">
                                    Contact No <span className="redColor">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="form-control"
                                    value={formik.values.email}
                                    onChange={(e) => { formik.handleChange(e) }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? <span style={{ color: "red", fontSize: "12px" }}>{formik.errors.email}</span> : null}
                            </div>
                            <div className="col-md-6 mt-3">
                                <label className="mt-2 mb-2">
                                    Contact No <span className="redColor">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobile"
                                    name="mobile"
                                    placeholder="Mobile"
                                    value={formik.values.mobile}
                                    onChange={(e) => { formik.handleChange(e) }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.mobile && formik.errors.mobile ? <span style={{ color: "red", fontSize: "12px" }}>{formik.errors.mobile}</span> : null}
                            </div>
                            <div className="col-md-6 mt-3">
                                <label className="mt-2 mb-2">
                                    Password <span className="redColor">*</span>
                                </label>
                                <input
                                    type={passShow ? "password" : "text"}
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={formik.values.password}
                                    onChange={(e) => { formik.handleChange(e) }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password ? <span style={{ color: "red", fontSize: "12px" }}>{formik.errors.password}</span> : null}
                            </div>

                            <div className="col-md-12 mt-3 order_login_bt">
                                <button className="btn">
                                    <div
                                        className="loading"
                                        id="newsletter"
                                        style={{ height: lodar }}
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div style={{ display: lodarText }}>
                                        <small>
                                            Sign Up &nbsp;&nbsp;
                                            <i className="fa fa-angle-right"></i>
                                        </small>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </form>
                </>
                :
                ""
            }
        </div>
    )
}

export default OrderSummarySignup