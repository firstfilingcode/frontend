import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { ContactUs } from "../common/services/ContactUs";
import { ReactSession } from "react-client-session";
import map from "../common/Images/map.png";
import mail from "../common/Images/mail.png";
import phone2 from "../common/Images/phone2.png";
import { BASE_URL, Timeout } from "../common/services/Helper";

const Contacts = (valData) => {
    const errors = {};

    if (!valData.name) {
        errors.name = "Please Enter Name";
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
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valData.email)) {
        errors.email = "Invalid email address";
    }

    if (!valData.message) {
        errors.message = "Please Enter Message";
    }

    return errors;
};

const ContactFirst = () => {
    const [lodar, setLodar] = useState("");
    const [lodarText, setLodarText] = useState("block");

    const [initialValues, setInitialValues] = useState({
        user_id: ReactSession.get("user_id"),
        name: "",
        email: "",
        message: "",
        mobile: "",
    });

    const formik = useFormik({
        initialValues,
        validate: Contacts,
        onSubmit: (values, { resetForm }) => {
            setLodarText("none");
            setLodar("20px");
            ContactUs(values).then((resp) => {
                if (resp.success) {
                    setLodar("0px");
                    setLodarText("block");
                    resetForm();
                } else {
                    setLodar("0px");
                    setLodarText("block");
                }
            });
        },
    });

    const [setting, setSetting] = useState([]);
    useEffect(() => {
        getSetting();
    }, []);

    const getSetting = async () => {
        await fetch(BASE_URL + "/getSetting", {
            signal: Timeout(3000).signal,
        })
            .then((res) => res.json())
            .then((json) => {
                // alert(JSON.stringify(json.data));
                setSetting(json.data);
            })
            .catch();
    };
    return (
        <>
            <div className="col-md-4">
                <div className="detail">
                    {setting.address === null ? (
                        ""
                    ) : (
                        <>
                            <section className="contact_image-text">
                                <img src={map} alt="map" className="emaillogo" />
                                <span className="detail_text">Address</span>
                            </section>
                            <p className="text-white mt-3">
                                {setting.address}
                            </p>
                        </>
                    )}
                    {setting.phone === null ? (
                        ""
                    ) : (
                        <>
                            <section className="contact_image-text">
                                <img src={phone2} alt="phonelogo" className="	emaillogo" />
                                <span className="detail_text">Phone</span>
                            </section>
                            <p className="text-white mt-3">{setting.phone}</p>
                        </>
                    )}
                    {setting.email === null ? (
                        ""
                    ) : (
                        <>
                            <section className="contact_image-text">
                                <img src={mail} alt="mail" className="emaillogo" />
                                <span className="detail_text">Email</span>
                            </section>
                            <p className="text-white mt-3">{setting.email}</p>
                        </>
                    )}
                </div>
            </div >

            <div className="col-md-4 contactinput">
                <form onSubmit={formik.handleSubmit} id="contactId">
                    <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="Full Name"
                        name="name"
                        value={formik.values.name}
                        onChange={(e) => {
                            formik.handleChange(e);
                        }}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <span style={{ color: "red", fontSize: "12px" }}>
                            {formik.errors.name}
                        </span>
                    ) : null}
                    <input
                        type="email"
                        className="form-control mt-3"
                        placeholder="Email Address"
                        name="email"
                        value={formik.values.email}
                        onChange={(e) => {
                            formik.handleChange(e);
                        }}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <span style={{ color: "red", fontSize: "12px" }}>
                            {formik.errors.email}
                        </span>
                    ) : null}
                    <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="Phone No."
                        name="mobile"
                        maxLength={10}
                        value={formik.values.mobile}
                        onChange={(e) => {
                            formik.handleChange(e);
                        }}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.mobile && formik.errors.mobile ? (
                        <span style={{ color: "red", fontSize: "12px" }}>
                            {formik.errors.mobile}
                        </span>
                    ) : null}
                    <input
                        type="text"
                        className="form-control mt-3 contect_massage_"
                        placeholder="Message"
                        name="message"
                        value={formik.values.message}
                        onChange={(e) => {
                            formik.handleChange(e);
                        }}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <span style={{ color: "red", fontSize: "12px" }}>
                            {formik.errors.message}
                        </span>
                    ) : null}

                    <button className="sendbtn mt-3">
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
                                Send
                            </small>
                        </div>
                    </button>
                </form>

            </div>
        </>
    )
}

export default ContactFirst;