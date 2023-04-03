import React from "react";
import gstreg from "../common/Images/gstreg.png";
import gstreg2 from "../common/Images/gstreg2.png";
import ServiceType2 from "../Services/ServiceType2";
import Enquiry from "../Enquiry/enquiry";
import Faq from "../FAQ/Faq";
import ServiceName from "../Services/NameOfService";

function GoodsAndServiceGST() {
  return (
    <>
      <div className="container">
        <ServiceName />
        <div className="row">
          <div className="col-md-7">
            <Enquiry />
            <div className="describe">
              <span className="secondrowheading slash_right">
                What is GST Registration?
              </span>
              <p className="Tax">
                Goods and Services Tax (GST) is an indirect tax levied on the
                supply of goods and services, which is applicable in India. GST
                registration is a crucial step for businesses in streamlining
                their financial processes and ensuring compliance with the Goods
                and Services Tax framework. This registration allows businesses
                to collect GST from their customers and pass it on to the
                government while claiming input credit on their own purchases,
                ultimately benefiting the supply chain. For many, the concept of
                GST registration may seem complex at first; however,
                understanding its significance and the process involved can
                greatly benefit businesses, big or small, and facilitate
                seamless financial transactions. Furthermore, timely
                registration and adherence to the GST guidelines ensures a
                smooth-running business, preventing any legal complications or
                penalties.
              </p>
              <p className="Tax">
                It is a mandatory requirement for businesses whose turnover
                exceeds a certain threshold, which varies from state to state.
                The registration process involves filing an application with the
                relevant authorities, providing necessary documents and
                obtaining a GSTIN (Goods and Services Tax Identification
                Number). Once registered, businesses are required to file
                periodic returns and pay taxes as per their turnover.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <img src={gstreg} width="100%" />
          </div>
        </div>
        <div className="row whatisgst">
          <div className="col-md-6 gstregis_p">
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
            <div className="slash_1">
              <span className="web-color">GST registration process</span>

              <p className="partnershiptollp_p mt-3">
                Breaking the walls of complexity when it comes to GST
                Registration! First Filing is here to make the process smooth
                and straightforward. Here's how First Filing can assist you with
                GST registration:
              </p>
            </div>
          </h3>
        </div>

        <div className="row gstRow">
          <div className="col-md-2 gstbg-1">
            <span className="circle">1</span>
            <p>Expert guidance on GST Registration.</p>
          </div>
          <div className="col-md-2 gstbg-2">
            <span className="circle">2</span>
            <p>
              Submit and verify all the necessary documents for GST registration
            </p>
          </div>
          <div className="col-md-2 gstbg-3">
            <span className="circle">3</span>
            <p>Quick and easy Online registration</p>
          </div>
          <div className="col-md-2 gstbg-4">
            <span className="circle">4</span>
            <p>
              Submission of GST registration application online through the GST
              portal
            </p>
          </div>
          <div className="col-md-2 gstbg-5">
            <span className="circle">5</span>
            <p>Track your GST registration application status</p>
          </div>
          <div className="col-md-2 gstbg-6">
            <span className="circle">6</span>
            <p>Get regular updates through First Filing</p>
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
          <div className="col-md-6 mt-3 gstman-text">
            <h4>
              <span className="slash_right">
                Documents Required for TDS/TCS Return
              </span>
            </h4>
            <div className="gstlist">
              <ul>
                <li>PAN Card of the Applicant</li>
                <li>Aadhaar Card (mandatory for individuals)</li>
                <li>Business Registration Documents:</li>
                <p className="fearItrp">
                  For Proprietorship: PAN card, Aadhaar card, and address proof
                  of the proprietor
                </p>
                <p className="fearItrp">
                  For Partnership Firms: Partnership deed and address proof of
                  the partners
                </p>
                <p className="fearItrp">
                  For Company: Certificate of Incorporation, MOA, AOA, and
                  address proof of the directors
                </p>
                <li>
                  Bank Account Details: Bank account statement, canceled cheque,
                  or passbook with the name of the account holder, account
                  number, and IFSC code.
                </li>
                <li>
                  Address Proof: such as electricity bill, rent agreement, or
                  property deed
                </li>
                <li>
                  Digital Signature Certificate (DSC) (mandatory for companies
                  and LLPs)
                </li>
                <li>
                  Photographs: Recent passport size photographs of the
                  applicant.
                </li>
              </ul>

              <p className="itrPageDescription">
                Please be aware that depending on the nature of the business or
                other particular needs, extra documents can be needed. To avoid
                any delays or rejections during the GST registration process, it
                is crucial to make sure that all documents are exact,
                comprehensive, and up to date.
              </p>
            </div>
            <h4>
              <span className="slash_right">Fees for GST registration</span>
            </h4>
            <p>
              Due to the government's decision to forego the registration costs,
              there is no cost to register for GST in India. However, any fees
              related to the registration procedure, including the cost of
              acquiring Digital Signature Certificates (DSC) may be incurred by
              the applicant.
            </p>
            <p>
              GST registration can be a daunting process, but with First Filing,
              you can purchase an easy and affordable GST registration plan.
            </p>
            <p>
              First Filing allows businesses to submit all their information
              online via a single portal, which makes it much easier than having
              to manually fill out multiple forms. Furthermore, it also offers
              an efficient way of tracking progress and ensuring accuracy of
              submitted data. Our team of experts is always available to help
              guide you through the process. So, if you’re looking for an easy
              and affordable way to get registered for GST, look no further than
              First Filing!
            </p>
            <h4>
              <span className="slash_right">
                Penalties for not obtaining GST
              </span>
            </h4>
            <p>
              Failure to register for GST or disobey GST rules can result in
              fines and legal action under the Goods and Services Tax (GST)
              regime in India. The following are the consequences for failing to
              register for GST:
            </p>

            <div class="partnershiptollpli">
              <ul>
                <li>
                  A late fee of Rs. 50 per day, up to a maximum of Rs. 5,000, is
                  due if someone fails to secure GST registration within the
                  allotted time frame.
                </li>
                <li>
                  If a person who is registered for GST violates the GST rules
                  while doing so, they may be subject to a fine of up to 10% of
                  the tax amount owed, or Rs. 10,000, whichever is larger.
                </li>
                <li>
                  If a person provides goods or services without acquiring GST
                  registration, the goods or services may be seized, and the
                  individual may be compelled to pay a penalty equal to 100% of
                  the tax amount owed.
                </li>
                <li>
                  A person who willfully evades taxes or commits fraud may be
                  prosecuted under the GST laws, which could result in an
                  imprisonment, a fine, or both.
                </li>
              </ul>
            </div>
            <p>
              It is therefore important for businesses and individuals to ensure
              that they are registered under GST if required and comply with the
              regulations to avoid any penalties or legal consequences.
            </p>
          </div>
        </div>
      </div>
      <section className="sevicesBack22">
        <ServiceType2 />
      </section>
      <Faq />
    </>
  );
}

export default GoodsAndServiceGST;
