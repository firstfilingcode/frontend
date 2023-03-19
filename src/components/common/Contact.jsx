import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import rightArrow from "../common/Images/rightArrow.png";
import Contact_map from "../common/Images/Contact_map.png";
import Contact_phone from "../common/Images/Contact_phone.png";
import Contact_email from "../common/Images/Contact_email.png";
import { useFormik } from "formik";
import { ContactUs } from "./services/ContactUs";
import { ReactSession } from "react-client-session";
import { BASE_URL, Timeout } from "./services/Helper";
import { NavLink } from "react-router-dom";
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
function Contact() {
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
      <Header />
      <div className="container">
        <section className="gst" data-aos="fade-right" data-aos-delay="600">
          <ul className="listing">
            <li>
              Home
              <span className="list_arrow">
                <img src={rightArrow} alt="rightArrow" />
              </span>
            </li>
            <li>Contact</li>
          </ul>
        </section>
      </div>
      <div className="container">
        <div className="row firstfiling_contact1">
          <div className="col-md-6 firstfiling_contact">
            <span>Contact Us</span>
            <h5>Are you looking for financial solutions?</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              nonumy eirmod tempor invidunt ut labore et dolore mag.
            </p>
          </div>
          <div className="col-md-6 firstfiling_us">
            <h5>Leave us a message</h5>
            <p>And we will get back to you soon.</p>
            <form onSubmit={formik.handleSubmit}>
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
              <button className="btn mt-3">
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
                  <small>Send</small>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="firstfiling_contect_mid">
          <div className="firstfiling_contect_midbg">
            <div className="row p-5 Contact_US_first">
              {setting.address === null ? (
                ""
              ) : (
                <div className="col-md-4 firstfiling_contect_mid_contenet">
                  <img src={Contact_map} alt="" />
                  <span>Address</span>
                  <p>{setting.address}</p>
                </div>
              )}
              {setting.phone === null ? (
                ""
              ) : (
                <div className="col-md-4 firstfiling_contect_mid_contenet">
                  <img src={Contact_phone} alt="" />
                  <span>Phone</span>
                  <p>{setting.phone}</p>
                </div>
              )}
              {setting.email === null ? (
                ""
              ) : (
                <div className="col-md-4 firstfiling_contect_mid_contenet">
                  <img src={Contact_email} alt="" />
                  <span>Email </span>
                  <p>{setting.email}</p>
                </div>
              )}
              <div className="col-md-12 mt-5 text-center contact_icon_links">
                <span>More Ways To Connect</span>
              </div>
              <div className="col-md-12 mt-4 text-center contact_links">
                {setting.instagram_link === null ? (
                  ""
                ) : (
                  <a href={setting.instagram_link} target="blank">
                    <i class="fa fa-instagram"></i>
                  </a>
                )}
                {setting.facebook_link === null ? (
                  ""
                ) : (
                  <a href={setting.facebook_link} target="blank">
                    <i class="fa fa-facebook-f"></i>
                  </a>
                )}
                {setting.twitter_link === null ? (
                  ""
                ) : (
                  <a href={setting.twitter_link} target="blank">
                    <i class="fa fa-twitter"></i>
                  </a>
                )}
                {setting.linkedin_link === null ? (
                  ""
                ) : (
                  <a href={setting.linkedin_link} target="blank">
                    <i class="fa fa-linkedin"></i>
                  </a>
                )}
                {setting.youtube_link === null ? (
                  ""
                ) : (
                  <a href={setting.youtube_link} target="blank">
                    <i class="fa fa-youtube-play"></i>
                  </a>
                )}
                {setting.watsapp_link === null ? (
                  ""
                ) : (
                  <a href={setting.watsapp_link} target="blank">
                    <i class="fa fa-whatsapp"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.515311324409!2d75.76921781482443!3d26.95057606494753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db376d6d4382b%3A0xc7a9a2ebb6dcbf1e!2sRukmani%20Software!5e0!3m2!1sen!2sin!4v1671770705700!5m2!1sen!2sin"
                width="100%"
                height="450px"
                style={{ border: "0px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
