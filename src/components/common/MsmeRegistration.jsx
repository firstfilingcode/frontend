import React, { useState } from "react";
import gstreg from "../common/Images/gstreg.png";
import gstreg2 from "../common/Images/gstreg2.png";
import Services from "../Services/Services";
import Enquiry from "../Enquiry/enquiry";
import Faq from "../FAQ/Faq";
import ServiceName from "../Services/NameOfService";

function MsmeRegistration() {
  return (
    <>
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
                What is MSME Registration?
              </span>
              <p className="Tax">
                Under Goods And Services Tax (MSME), businesses whose turnover
                exceeds the threshold limitof Rs.40 lakh or Rs.20 lakh or Rs.10
                lakh as the case may be, must register as a normal taxable
                person. It is called MSME Registration.
              </p>
              <p>
                For certain businesses, filling under MSME is mandatory. If the
                organization carries on business without registering under
                ROC/ITR, it is an offence under MSME and heavy penalties will
                apply.
              </p>
              obtain MSME Registration faster in 3 easy steps.
              <p />
              <p>
                MSME Registration usually takes between 2-6 working days. Team
                Clear can help you obtain MSME Registration faster in 3 easy
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
              MSME Registration Online
            </h3>
            <p className="textdetail1">
              Complete Online Document Submission &amp; Application Tracking
            </p>
            <div className="gstlist_">
              <ul className="listing_second">
                <li>Filing of Application for MSME Registration</li>
                <li>Secure MSME Identification Number</li>
                <li>
                  Dedicated manager to process your MSME Registration end to end
                </li>
                <li>Completely Online – No need to visit office</li>
                <li>CA Assisted MSME Registration for all your MSME needs</li>
                <li>CA Assisted MSME Registration for all your MSME needs</li>
                <li>CA Assisted MSME Registration for all your MSME needs</li>
              </ul>
            </div>
            <p className="textdetail">
              * Get Clear MSME invoicing and digital khata app free with this
              service
            </p>
          </div>
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="500">
            <sapn className="secondrowheading slash_right">
              Who should obtain the MSME Registration?
            </sapn>
            <div className="gstlist_">
              <ul className="listing_second">
                <li>
                  Individuals registered under the Pre-MSME law (i.e., Excise,
                  VAT, Service Tax etc.)
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
              <span>All About The MSME Registration Process</span>
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
            <p>GSTIN Received</p>
          </div>
        </div>

        <div className="row g-0">
          <div className="col-md-6">
            {/* <iframe
              src="https://www.youtube.com/embed/HjZq1ugzWoc"
              width="100%"
              height="100%"
              style={{ border: "0px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
          {/* <div className="col-md-6 gstRegistrationBack" data-aos="fade-left" data-aos-delay="500">
            <section className="gst-registration-padding">
              <p className="web-color gsttext">Lorem ipsum dolor sit amet</p>

              <p className="web-color gsttext2">
                MSME Registration can be obtained on the MSME portal. One must
                apply for ROC Filling in Form REG-01 on the MSME portal
                following steps outlined in our article “How to apply for MSME
                registration?”. However, the MSME Registration services at
                ClearTax helps you to get your business MSME registered and
                obtain your MSME. Clear MSME experts will guide you on the
                applicability and compliances under MSME for your business and
                get your business registered under MSME.
              </p>

              <p className="web-color gsttext3">
                MSME Registration can be obtained on the MSME portal. One must
                apply for MSME Registration in Form REG-01 on the MSME portal
                following steps outlined in our article “How to apply for MSME Registration?”. 
                However, the MSME Registration services at
                ClearTax helps you to get your business MSME registered and
                obtain your MSME. Clear MSME experts will guide you on the
                applicability and compliances under MSME for your business and
                get your business registered under MSME.
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
                Documents Required for MSME Registration
              </span>
            </h4>
            <div className="gstlist">
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
            <h4>
              <span className="slash_right">MSME Registration Fees</span>
            </h4>
            <p>
              MSME Registration is a tedious 11 step process that involves the
              submission of many business details and scanned documents.
            </p>
            <p>
              Although there are no fees prescribed under the MSME law for
              obtaining GST registration on the ROC portal on your own, you can
              save a huge time and effort by purchasing the MSME Registration
              plan with ClearTax.
            </p>
            <p>
              You can opt for Clear MSME Registration services where a MSME
              Expert will assist you, end to end with MSME Registration.
            </p>
            <h4>
              <span className="slash_right">
                Penalty for not obtaining MSME Registration
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
    </>
  );
}

export default MsmeRegistration;
