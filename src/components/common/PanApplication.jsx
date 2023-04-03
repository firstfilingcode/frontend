import React, { useState } from "react";
import pancard1 from "../common/Images/pancard1.png";
import Faq from "../FAQ/Faq";
import { useFormik } from "formik";
import { panApplication } from "./services/panApplication";
import ServiceName from "../Services/NameOfService";
import ServiceType2 from "../Services/ServiceType2";

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
              The Income Tax Department of India issues PAN (Permanent Account
              Number) cards in India, having unique 10-digit alphanumeric
              identity numbers. According to Indian law, all people, businesses,
              and corporations that receive taxable income in India must have a
              PAN card.
            </p>
            <p>
              For many financial operations, including opening a bank account,
              investing in stocks and mutual funds, buying property, and
              submitting income tax returns, a PAN card is a required form of
              identification. Additionally, it aids in tracing a person's or an
              entity's financial transactions and helps the government prevent
              tax evasion.
            </p>
            <p>
              The PAN card contains the holder's name, date of birth,
              photograph, and signature. It also includes the PAN number, which
              is a unique identifier for the cardholder. The PAN card can be
              obtained by submitting an application form to the authorized
              agencies, along with the necessary documents and fees.
            </p>
            <h3 className="Structure_of_PAN slash_right">
              Structure of a PAN Number
            </h3>
            <p className="partnershiptollp_p">
              The card has a unique 10-character alphanumeric code, which serves
              as the PAN number, printed on it in black ink. The PAN number is a
              combination of letters and numbers in the following format:
              AAAPL1234C. The first five characters of the PAN number are
              letters, followed by four numbers, and then another letter. The
              card also includes the name, picture, birthdate, and signature of
              the holder. The card's magnetic strip and barcode for
              machine-readable identification are located on the back.
            </p>
            <div className="row">
              <div className="col-md-6 Structure_of_PAN_col ">
                <h5 className="Character">Character(s) of the PAN Number</h5>
                <div className="Character_ul">
                  <ul>
                    <li className="firstli">Three initial characters</li>
                    <li>The fourth character</li>
                    <li className="Fifth_Character_li">The fifth character</li>
                    <li>The next four digits</li>
                    <li>The last character</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 Structure_of_PAN_col">
                <h5 className="Character">what it stands for</h5>
                <div className="Structure_of_PAN_ul">
                  <ul>
                    <li className="firstli">
                      an alphabetical list going from AAA to ZZZ
                    </li>
                    <li>
                      the type of cardholder, i.e., P for person, F for
                      corporation, C for business, A for group of people, T for
                      trust, and H for HUF (Hindu Undivided Family).
                    </li>
                    <li>the initial letter of the owner's last or surname.</li>
                    <li>a sequence running from 0001 to 9999</li>
                    <li>
                      calculation of the check digit using a mathematical
                      method.
                    </li>
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
              <span className="slash_right">Need of pan card</span>
            </h4>
            <p>
              A PAN card is necessary for a person for a number of reasons,
              including:
            </p>
            <div className="panlist">
              <ul>
                <li>Valid identity proof for individuals in India.</li>
                <li>filing income tax returns</li>
                <li>paying taxes</li>
                <li>Necessary financial transactions</li>
                <li>Opening bank account</li>
                <li>
                  Investing in financial products (mutual funds, stocks, and
                  bonds)
                </li>
                <li>Buying/selling property</li>
                <li>Availing government schemes</li>
                <li>Cash transactions</li>
                <li>Foreign travel</li>
                <li>
                  Business purposes (registering a business, obtaining business
                  loans, etc.)
                </li>
                <li>
                  Other purposes like new mobile phone connection, applying for
                  a passport, etc.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-5 pan-headingtext"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <h4>
              <span className="slash_right">Documents required</span>
            </h4>
            <div className="panlist">
              <ul>
                <li>Identity Proof of the Authorized Signatory</li>
                <p>
                  (Aadhaar Card issued by UIDAI/ Voter ID Card/ Driving License/
                  Passport/ Photo ID Card issued by the Central Government or
                  State Government or Public Sector Undertaking (PSU))
                </p>
                <li>Address Proof of the Authorized Signatory</li>
                <p>
                  (Aadhaar Card issued by UIDAI/ Voter ID Card/ Driving License/
                  Passport/Electricity Bill (not more than three months
                  old)/Telephone Bill (not more than three months old)/ Bank
                  Account Statement/ Credit Card Statement/ Depository Account
                  Statement/ Rent Agreement)
                </p>
                <li>Proof of Business Registration</li>
                <p>
                  (Certificate of Incorporation issued by ROC/ Partnership Deed
                  in case of a partnership firm/ Trust Deed in case of a trust/
                  Registration Certificate issued by the Registrar of Firms in
                  case of a proprietorship firm)
                </p>
                <li>
                  Photograph of the Authorized Signatory: Two recent passport
                  size photographs
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>

      <section className="sevicesBack15">
        <ServiceType2 />
      </section>

      <Faq />
    </>
  );
}

export default PanApplication;
