import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import pancard1 from "../common/Images/pancard1.png";
import Faq from "../FAQ/Faq";
import { useFormik } from "formik";
import { panApplication } from "./services/panApplication";
import Services from "../Services/Services";
import ServiceName from "../Services/NameOfService";

const validateBank = (valData) => {
  const errors = {};

  if (!valData.first_name) {
    errors.first_name = "Please Enter First Name";
  }
  if (!valData.title) {
    errors.title = "Please Select Title";
  }
  if (!valData.last_name) {
    errors.last_name = "Please Enter Last Name";
  }
  if (!valData.middle_name) {
    errors.middle_name = "Please Enter Middle Name";
  }
  if (!valData.application_type) {
    errors.application_type = "Please Select Type of Application";
  }
  if (!valData.category) {
    errors.category = "Please Select Category ";
  }
  if (!valData.mobile) {
    errors.mobile = "Please Enter Mobile";
  }
  if (!valData.email) {
    errors.email = "Please Enter Email";
  }
  if (!valData.dob) {
    errors.dob = "Please Enter Date of Birth";
  }

  return errors;
};

function PanApplication() {
  const [agree, setAgree] = useState(false);
  const handleAgree = (event) => {
    if (event.target.checked) {
      //console.log('✅ Checkbox is checked');
      setAgree(true);
    } else {
      //console.log('⛔️ Checkbox is NOT checked');
      setAgree(false);
    }
    // setIsSubscribed(current => !current);
  };

  const [initialValues, setInitialValues] = useState({
    title: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    dob: "",
    application_type: "",
    category: "",
    email: "",
    mobile: "",
  });

  const formik = useFormik({
    initialValues,
    validate: validateBank,
    onSubmit: (values) => {
      panApplication(values).then((resp) => {
        // console.log(resp)
        if (resp.success) {
          alert("Pan registration reqest send successfully");
        } else {
          alert(resp.message);
        }
      });
    },
  });

  return (
    <>
      <Header />
      <div className="container">
        <ServiceName />
        <h1
          className="text-center headingGST"
          data-aos="fade-top"
          data-aos-delay="500"
        >
          Online Pan Application
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div
              className="col-md-12 pan_application contactinput"
              data-aos="fade-top"
              data-aos-delay="500"
            >
              <div className="row input-padding-pan">
                <div className="col-md-4 mt-3">
                  <select
                    name="application_type"
                    className="form-control"
                    id="application_type"
                    value={formik.values.application_type}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select</option>
                    <option value="1">Figma</option>
                    <option value="2">Canva</option>
                    <option value="3">Photoshop</option>
                  </select>
                  {formik.touched.application_type &&
                    formik.errors.application_type ? (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.application_type}
                    </span>
                  ) : null}
                </div>

                <div className="col-md-4 mt-3">
                  <select
                    name="category"
                    className="form-control"
                    id="category"
                    value={formik.values.category}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select</option>
                    <option value="1">Figma</option>
                    <option value="2">Canva</option>
                    <option value="3">Photoshop</option>
                  </select>
                  {formik.touched.category && formik.errors.category ? (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.category}
                    </span>
                  ) : null}
                </div>

                <div className="col-md-4"></div>

                <div className="col-md-12 pan-input-heading-top">
                  <span className="pan-input-heading">
                    Applicant information:
                  </span>
                </div>

                <div className="col-md-4">
                  <select
                    name="title"
                    className="form-control"
                    id="title"
                    value={formik.values.title}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select</option>
                    <option value="1">Figma</option>
                    <option value="2">Canva</option>
                    <option value="3">Photoshop</option>
                  </select>
                  {formik.touched.title && formik.errors.title ? (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.title}
                    </span>
                  ) : null}
                </div>

                <div className="col-md-4"></div>
                <div className="col-md-4"></div>

                <div className="col-md-4 mt-3">
                  <input
                    type="text"
                    name="first_name"
                    className="form-control"
                    placeholder="First Name"
                    value={formik.values.first_name}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.first_name && formik.errors.first_name ? (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.first_name}
                    </span>
                  ) : null}
                </div>
                <div className="col-md-4 mt-3">
                  <input
                    type="text"
                    name="last_name"
                    className="form-control"
                    placeholder="Last Name"
                    value={formik.values.last_name}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.last_name && formik.errors.last_name ? (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.last_name}
                    </span>
                  ) : null}
                </div>
                <div className="col-md-4 mt-3">
                  <input
                    type="text"
                    name="middle_name"
                    className="form-control"
                    placeholder="Middle Name"
                    value={formik.values.middle_name}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.middle_name && formik.errors.middle_name ? (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.middle_name}
                    </span>
                  ) : null}
                </div>
                <div className="col-md-4 mt-3">
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    placeholder="Date of Birth"
                    value={formik.values.dob}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.dob && formik.errors.dob ? (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.dob}
                    </span>
                  ) : null}
                </div>
                <div className="col-md-4 mt-3">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email"
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
                </div>
                <div className="col-md-4 mt-3">
                  <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile"
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
                </div>

                <div className="col-md-12 mt-3">
                  <input
                    type="checkbox"
                    name="remamber"
                    className="form-check-input"
                    onChange={handleAgree}
                  />

                  <span className="pan-conform-text">
                    By submitting data to us and/or using our Protean e-Gov TIN
                    web site
                    https://www.onlineservices.Protean.com/paam/endUserRegisterContact.html
                    you give your consent that all personal data/information
                    that you submit to avail tax related services from Protean
                    eGov Technologies Limited may be received, stored,
                    processed, transmitted and or made available for view /use
                    as mandated by law or otherwise, shall be dealt with by us
                    in the manner and for the purposes specified / as described
                    in the privacy policy or as mandated by law.
                  </span>
                </div>

              </div>
            </div>
          </div>

          {agree ? (
            <div className="text-center">
              <button className="sumbitButton">
                <span className="buytext">Submit</span>
              </button>
            </div>
          ) : (
            ""
          )}
        </form>
        <div className="row">
          <div className="col-md-6">
            <img src={pancard1} width={"70%"} />
          </div>
          <div
            className="col-md-6 whatispan_col"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <h3 className="whatispan slash_right">What is a PAN Card?</h3>
            <p>
              The income tax department of India issues a laminated card which
              states the unique Permanent Account Number (PAN) and other
              identity details of any person who has applied to obtain a PAN
              Card.
            </p>
            <p>
              A PAN number is a unique, 10 digit alphanumeric code that is used
              to club all transactions of an individual with the IT department.
              These transactions involve tax payments, TDS/TCS credits, etc.
            </p>
            <p>
              All taxpayers in India, are mandatorily required to furnish their
              Permanent Account Number (PAN). So, it is compulsory to obtain a
              PAN card because it should be necessarily quoted in all
              communications with the Income Tax Department.
            </p>
            <h3 className="Structure_of_PAN slash_right">
              Structure of a PAN Number
            </h3>
            <div className="row ">
              <div className="col-md-6 Structure_of_PAN_col ">
                <h5 className="Character">Character(s) of the PAN Number</h5>
                <div className="Character_ul">
                  <ul>
                    <li className="firstli">First Three Characters</li>
                    <li>Fourth Character</li>
                    <li className="Fifth_Character_li">Fifth Character</li>
                    <li>Next four characters</li>
                    <li>Last character</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 Structure_of_PAN_col">
                <h5 className="Character">What does it represent?</h5>
                <div className="Structure_of_PAN_ul">
                  <ul>
                    <li className="firstli">
                      Alphabetical series that run from AAA to ZZZ
                    </li>
                    <li>
                      It represents the status of a PAN holder. For exam ple,
                      “P” represents an Individual, “F” represents a firm.
                    </li>
                    <li>Initial letter of the PAN holder’s last name</li>
                    <li>Numerical series running from 0001 to 9999</li>
                    <li>An alphabetic check digit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-md-12 text-center mt-3 pt-3"
          data-aos="fade-top"
          data-aos-delay="500"
        >
          <div class="slash_1 web-color">
            <span>How to Apply for a PAN Card?</span>
          </div>
        </div>

        <div className="row panRow">
          <div className="col-md-1" />
          <div className="col-md-2" data-aos="fade-bottom" data-aos-delay="500">
            <div className="pan-back">
              <div className="pan-bg">
                <span className="pan-count">1</span>
                <p className="panbox-text">
                  Complete simple <br /> form
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2" data-aos="fade-bottom" data-aos-delay="600">
            <div className="pan-back">
              <div className="pan-bg2">
                <span className="pan-count">2</span>
                <p className="panbox-text">
                  Verification of <br /> Document
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2" data-aos="fade-bottom" data-aos-delay="700">
            <div className="pan-back">
              <div className="pan-bg3">
                <span className="pan-count">3</span>
                <p className="panbox-text">
                  Submission of <br /> Documents
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2" data-aos="fade-bottom" data-aos-delay="800">
            <div className="pan-back">
              <div className="pan-bg4">
                <span className="pan-count">4</span>
                <p className="panbox-text">
                  Application for <br /> PAN
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2" data-aos="fade-bottom" data-aos-delay="900">
            <div className="pan-back">
              <div className="pan-bg5">
                <span className="pan-count">5</span>
                <p className="panbox-text">
                  You Receive <br /> PAN
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-1" />
          <div
            className="col-md-5 pan-headingtext"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <h4>
              <span className="slash_right">
                Why does an individual need a PAN Card
              </span>
            </h4>
            <p>
              PAN is a unique identification number that enables tax-paying in
              India and can act as the following
            </p>
            <div className="panlist">
              <ul>
                <li>Mandatory for Filing Taxes</li>
                <li>Proof of Identity</li>
                <li>Eligibility to open and operate Bank Accounts</li>
                <li>Financial transactions</li>
                <li>Proof of Address</li>
                <li>Registration of Business</li>
                <li>Phone Connection</li>
                <li>Gas Connection</li>
                <li>Mutual Funds</li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-5 pan-headingtext"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <h4>
              <span className="slash_right">
                Documents Required for PAN Card
              </span>
            </h4>
            <div className="panlist">
              <ul>
                <li>PAN of the Applicant</li>
                <li>Aadhaar card</li>
                <li>
                  Proof of business registration or Incorporation certificate
                </li>
                <li>
                  Identity and Address proof of Promoters/Director with
                  Photographs
                </li>
                <li>Address proof of the place of business</li>
                <li>Bank Account statement/Cancelled cheque</li>
                <li>Digital Signature</li>
                <li>
                  Letter of Authorization/Board Resolution for Authorized
                  Signatory
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-1"></div>
          <div className="col-md-12">
            <Services />
          </div>

          <div className="col-md-12 mt-5 gstman-text  text-center">
            <h3>
              <div
                class="slash_1 web-color"
                data-aos="fade-top"
                data-aos-delay="500"
              >
                <span>FAQ..! Need Help</span>
              </div>
            </h3>
          </div>
          <div
            className="col-md-12"
            data-aos="fade-bottom"
            data-aos-delay="500"
          >
            <div className="form-group gst-input">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                name="search"
              />
            </div>
          </div>
        </div>

        <Faq />
      </div>

      <Footer />
    </>
  );
}

export default PanApplication;
