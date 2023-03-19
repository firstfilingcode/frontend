import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import gstreg from "../common/Images/gstreg.png";
import gstreg2 from "../common/Images/gstreg2.png";
import Services from "../Services/Services";
import Enquiry from "../Enquiry/enquiry";
import Faq from "../FAQ/Faq";
import ServiceName from "../Services/NameOfService";

function AskAnExpert() {
  return (
    <>
      <Header />
      <div className="container">
        <ServiceName />
        <div className="row">
          <div className="col-md-7">
            <Enquiry />
            <div
              className="describe"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <span className="secondrowheading slash_right">
                What is ROC/ITR Filling?
              </span>
              <p className="Tax">
                Under Goods And Services Tax (ROC/ITR ), businesses whose
                turnover exceeds the threshold limitof Rs.40 lakh or Rs.20 lakh
                or Rs.10 lakh as the case may be, must register as a normal
                taxable person. It is called ROC/ITR Fillings.
              </p>
              <p>
                For certain businesses, Fillings under ROC/ITR is mandatory. If
                the organization carries on business without registering under
                ROC/ITR , it is an offence under ROC/ITR and heavy penalties
                will apply.
              </p>
              obtain ROC/ITR Fillings faster in 3 easy steps.
              <p />
              <p>
                ROC/ITR Fillings usually takes between 2-6 working days. Team
                Clear can help you obtain ROC/ITR Fillings faster in 3 easy
                steps.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <img src={gstreg} width="100%" />
          </div>
        </div>
        <div className="row whatisgst">
          <div
            className="col-md-6 gstregis_p"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <h3 className="firstrowheadind slash_right">
              ROC/ITR Filling Online
            </h3>
            <p className="textdetail1">
              Complete Online Document Submission &amp; Application Tracking
            </p>
            <div className="gstlist_">
              <ul className="listing_second">
                <li>Filing of Application for ROC/ITR Filling</li>
                <li>Secure ROC/ITR Identification Number</li>
                <li>
                  Dedicated manager to process your ROC/ITR Fillings end to end
                </li>
                <li>Completely Online – No need to visit office</li>
                <li>CA Assisted ROC/ITR Filing for all your ROC/ITR needs</li>
                <li>CA Assisted ROC/ITR Filing for all your ROC/ITR needs</li>
                <li>CA Assisted ROC/ITR Filing for all your ROC/ITR needs</li>
              </ul>
            </div>
            <p className="textdetail">
              * Get Clear ROC/ITR invoicing and digital khata app free with this
              service
            </p>
          </div>
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="500">
            <sapn className="secondrowheading slash_right">
              Who should obtain the ROC/ITR Fillings?
            </sapn>
            <div className="gstlist_">
              <ul className="listing_second">
                <li>
                  Individuals registered under the Pre-ROC/ITR law (i.e.,
                  Excise, VAT, Service Tax etc.)
                </li>
                <li>
                  Businesses with turnover above the threshold limit of Rs.40
                  lakh or Rs.20 lakh or Rs.10 lakh as the case may be
                </li>
                <li>Casual taxable person / Non-Resident taxable person</li>
                <li>Agents of a supplier &amp; Input service distributor</li>
                <li>Those paying tax under the reverse charge mechanism</li>
                <li>A person who supplies via an e-commerce aggregator</li>
                <li>Every e-commerce aggregator</li>
                <li>
                  Person supplying online information and database access or
                  retrieval services from a place outside India to a person in
                  India, other than a registered taxable person
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-12 text-center mt-3">
          <h3>
            <div
              className="slash_1 web-color"
              data-aos="fade-bottom"
              data-aos-delay="500"
            >
              <span>All About The ROC/ITR Filling Process</span>
            </div>
          </h3>
        </div>

        <div className="row gstRow" data-aos="fade-right" data-aos-delay="500">
          <div className="col-md-2 gstbg-1">
            <span className="circle">1</span>
            <p>Purchase of Plan</p>
          </div>
          <div className="col-md-2 gstbg-2">
            <span className="circle">2</span>
            <p>Expert Assigned</p>
          </div>
          <div className="col-md-2 gstbg-3">
            <span className="circle">3</span>
            <p>Upload Documents</p>
          </div>
          <div className="col-md-2 gstbg-4">
            <span className="circle">4</span>
            <p>Submission on Portal</p>
          </div>
          <div className="col-md-2 gstbg-5">
            <span className="circle">5</span>
            <p>ARN Number Gen</p>
          </div>
          <div className="col-md-2 gstbg-6">
            <span className="circle">6</span>
            <p>ROC/ITR IN Received</p>
          </div>
        </div>

        <div className="row g-0">
          <div className="col-md-6">
            {/* <iframe
              src="https://www.youtube.com/embed/S28JDAJq864"
              width="100%"
              height="100%"
              style={{ border: "0px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
          {/* <div
            className="col-md-6 gstRegistrationBack"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <section className="gst-registration-padding">
              <p className="web-color gsttext">Lorem ipsum dolor sit amet</p>

              <p className="web-color gsttext2">
                ROC/ITR  Fillings can be obtained on the ROC/ITR  portal. One must
                apply for ROC/ITR  Fillings in Form REG-01 on the ROC/ITR  portal
                following steps outlined in our article “How to apply for ROC/ITR 
                Fillings?”. However, the ROC/ITR  Fillings services at
                ClearTax helps you to get your business ROC/ITR  registered and
                obtain your ROC/ITR IN. Clear ROC/ITR  experts will guide you on the
                applicability and compliances under ROC/ITR  for your business and
                get your business registered under ROC/ITR .
              </p>

              <p className="web-color gsttext3">
                ROC/ITR  Fillings can be obtained on the ROC/ITR  portal. One must
                apply for ROC/ITR  Fillings in Form REG-01 on the ROC/ITR  portal
                following steps outlined in our article “How to apply for ROC/ITR 
                Fillings?”. However, the ROC/ITR  Fillings services at
                ClearTax helps you to get your business ROC/ITR  registered and
                obtain your ROC/ITR IN. Clear ROC/ITR  experts will guide you on the
                applicability and compliances under ROC/ITR  for your business and
                get your business registered under ROC/ITR .
              </p>
            </section>
          </div> */}
        </div>

        <div
          className="row"
          style={{ paddingTop: "42px", paddingBottom: "42px" }}
        >
          <div className="col-md-6 gstman">
            <img src={gstreg2} alt="gst-men" />
          </div>
          <div
            className="col-md-6 mt-5 gstman-text"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <h4>
              <span className="slash_right">
                Documents Required for ROC/ITR Filling
              </span>
            </h4>
            <div className="gstlist">
              <ul>
                <li>PAN of the Applicant</li>
                <li>Aadhaar card</li>
                <li>Proof of business Fillings or Incorporation certificate</li>
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
            <h4>
              <span className="slash_right">ROC/ITR Filling Fees</span>
            </h4>
            <p>
              ROC/ITR Filling is a tedious 11 step process that involves the
              submission of many business details and scanned documents.
            </p>
            <p>
              Although there are no fees prescribed under the ROC/ITR law for
              obtaining ROC/ITR Fillings on the ROC/ITR portal on your own, you
              can save a huge time and effort by purchasing the ROC/ITR Fillings
              plan with ClearTax.
            </p>
            <p>
              You can opt for Clear ROC/ITR Filling services where a ROC/ITR
              Expert will assist you, end to end with ROC/ITR Filling.
            </p>
            <h4>
              <span className="slash_right">
                Penalty for not obtaining ROC/ITR Fillings
              </span>
            </h4>
            <p>
              An offender not paying tax or making short payments (genuine
              errors) has to pay a penalty of 10% of the tax amount due subject
              to a minimum of Rs.10,000.
            </p>
            <p>
              The penalty will at 100% of the tax amount due when the offender
              has deliberately evaded paying taxes
            </p>
          </div>
        </div>
      </div>
      <Services />
      <div className="container">
        <div
          className="col-md-12 mt-5 gstman-text  text-center"
          data-aos="fade-top"
          data-aos-delay="500"
        >
          <h3>
            <div className="slash_1 web-color">
              <span>FAQ..! Need Help</span>
            </div>
          </h3>
        </div>
        <div className="col-md-12" data-aos="fade-bottom" data-aos-delay="500">
          <div className="form-group gst-input">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              name="search"
            />
          </div>
        </div>

        <Faq />
      </div>

      <Footer />
    </>
  );
}

export default AskAnExpert;