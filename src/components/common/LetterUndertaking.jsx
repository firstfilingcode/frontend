import React from "react";
import gstreg from "../common/Images/TAX4.png";
import gstreg2 from "../common/Images/TAX7.png";
import ServiceType2 from "../Services/ServiceType2";
import Enquiry from "../Enquiry/enquiry";
import Faq from "../FAQ/Faq";
import ServiceName from "../Services/NameOfService";

function LetterUndertaking() {
  return (
    <>
      <div className="container">
        <ServiceName />
        <div className="row">
          <div className="col-md-7">
            <Enquiry />
          </div>
          <div className="col-md-5">
            <img src={gstreg} width="100%" />
          </div>

          <div className="col-md-12">
            <div
            >
              <span className="secondrowheading slash_right">
                What is GST Registration?
              </span>
              <p className="partnershiptollp_p">
                GST registration is a process by which businesses register for
                the Goods and Services Tax (GST). It is an indirect tax, which
                is applicable to the sale of all goods and services. The GST
                registration process requires businesses to obtain a unique
                15-digit Goods and Services Tax Identification Number (GSTIN)
                from the government. The registration is mandatory for
                businesses making taxable supplies and whose annual turnover
                exceeds the specified limit. Businesses are required to register
                their business name, address, contact information, and other
                details with the relevant tax authority. GST registration is
                simple, seamless, and can be completed online within a few
                minutes. It enables businesses to track, manage and pay
                applicable taxes. It also helps businesses to avail the various
                benefits offered by the government. Businesses must ensure that
                they keep their GST registration updated with the latest
                information.
              </p>
            </div>
          </div>
        </div>
        <div className="row whatisgst">
          <div
            className="col-md-6 gstregis_p"
          >
            <h3 className="firstrowheadind slash_right">
              TDS/TCS Return Online
            </h3>
            <p className="textdetail1">
              Complete Online Document Submission &amp; Application Tracking
            </p>
            <div className="gstlist_">
              <ul className="listing_second">
                <li>Filing of Application for TDS/TCS Return</li>
                <li>Secure TDS/TCS Return Identification Number</li>
                <li>
                  Dedicated manager to process your TDS/TCS Return end to end
                </li>
                <li>Completely Online – No need to visit office</li>
                <li>
                  CA Assisted TDS/TCS Return Filing for all your TDS/TCS Return
                  needs
                </li>
                <li>
                  CA Assisted TDS/TCS Return Filing for all your TDS/TCS Return
                  needs
                </li>
                <li>
                  CA Assisted TDS/TCS Return Filing for all your TDS/TCS Return
                  needs
                </li>
              </ul>
            </div>
            <p className="textdetail">
              * Get Clear TDS/TCS Return invoicing and digital khata app free
              with this service
            </p>
          </div>
          <div className="col-md-6">
            <sapn className="secondrowheading slash_right">
              Who should obtain the TDS/TCS Return?
            </sapn>
            <div className="gstlist_">
              <ul className="listing_second">
                <li>
                  Individuals registered under the Pre-TDS/TCS Return law (i.e.,
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
            >
              <span>All About The TDS/TCS Return Process</span>
            </div>
          </h3>
        </div>

        <div className="row gstRow">
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
            <p>TDS/TCS ReturnIN Received</p>
          </div>
        </div>

        {/* <div className="row g-0">
          <div className="col-md-6">
            <iframe
              src="https://www.youtube.com/embed/S28JDAJq864"
              width="100%"
              height="100%"
              style={{ border: "0px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="col-md-6 gstRegistrationBack"
          >
            <section className="gst-registration-padding">
              <p className="web-color gsttext">Lorem ipsum dolor sit amet</p>

              <p className="web-color gsttext2">
                TDS/TCS Return can be obtained on the TDS/TCS Return portal. One must
                apply for TDS/TCS Return in Form REG-01 on the TDS/TCS Return portal
                following steps outlined in our article “How to apply for TDS/TCS Return
                Fillings?”. However, the TDS/TCS Return services at
                ClearTax helps you to get your business TDS/TCS Return registered and
                obtain your TDS/TCS ReturnIN. Clear TDS/TCS Return experts will guide you on the
                applicability and compliances under TDS/TCS Return for your business and
                get your business registered under TDS/TCS Return.
              </p>

              <p className="web-color gsttext3">
                TDS/TCS Return can be obtained on the TDS/TCS Return portal. One must
                apply for TDS/TCS Return in Form REG-01 on the TDS/TCS Return portal
                following steps outlined in our article “How to apply for TDS/TCS Return
                Fillings?”. However, the TDS/TCS Return services at
                ClearTax helps you to get your business TDS/TCS Return registered and
                obtain your TDS/TCS ReturnIN. Clear TDS/TCS Return experts will guide you on the
                applicability and compliances under TDS/TCS Return for your business and
                get your business registered under TDS/TCS Return.
              </p>
            </section>
          </div>
        </div> */}

        <div
          className="row"
          style={{ paddingTop: "42px", paddingBottom: "42px" }}
        >
          <div className="col-md-6 gstman">
            <img src={gstreg2} alt="gst-men" />
          </div>
          <div
            className="col-md-6 mt-3 gstman-text"
          >
            <h4>
              <span className="slash_right">
                Documents Required for TDS/TCS Return
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
              <span className="slash_right">TDS/TCS Return Fees</span>
            </h4>
            <p>
              TDS/TCS Return is a tedious 11 step process that involves the
              submission of many business details and scanned documents.
            </p>
            <p>
              Although there are no fees prescribed under the TDS/TCS Return law
              for obtaining TDS/TCS Return on the TDS/TCS Return portal on your
              own, you can save a huge time and effort by purchasing the TDS/TCS
              Return plan with ClearTax.
            </p>
            <p>
              You can opt for Clear TDS/TCS Return services where a TDS/TCS
              Return Expert will assist you, end to end with TDS/TCS Return.
            </p>
            <h4>
              <span className="slash_right">
                Penalty for not obtaining TDS/TCS Return
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
      <section className="sevicesBack18">
        <ServiceType2 />
      </section>
      <Faq />
    </>
  );
}

export default LetterUndertaking;
