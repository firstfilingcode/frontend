import React, { useState } from "react";
import ServiceType2 from "../Services/ServiceType2";
import Footer from "./Footer";
import Header from "./Header";
import Benifits from "../common/Images/Benifits.png";
import subsi from "../common/Images/subsi.png";
import Subs from "../common/Images/Subs.png";
import checkcircle1 from "../common/Images/checkCircle.svg";
import ServiceName from "../Services/NameOfService";
import secureLocalStorage from "react-secure-storage";
import { NavLink } from "react-router-dom";
import Faq from "../FAQ/Faq";
import Enquiry2 from "../Enquiry/enquiry2";

function IncorporateSubsidiary() {
  const [buyNow, setbuyNow] = useState("");
  window.addEventListener("itr_service", () => {
    setbuyNow(
      secureLocalStorage.getItem("itr_service_price").base_price_redirect
    );
  });
  return (
    <>
      <Header />
      <div className="container">
        <ServiceName />
        <div className="row">
          <div className="col-md-6">
            <span className=" itrPageHeading">Incorporate A Subsidiary</span>
            <div className="fixwidthPremtive">
              <p className="itrPageDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. industry's standard dummy text ever
                since.
              </p>
              <p className="itrPageDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>
            </div>

            {buyNow !== "" ? (
              <NavLink to={"/OrderSummary2/" + buyNow}>
                <button className="fileNowBtn btn">Buy Now</button>
              </NavLink>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <Enquiry2 />
          </div>
          <section className="backgroundSubsidiry"></section>
        </div>
      </div>
      <section>
        <section className="sevicesBack20">
          <ServiceType2 />
        </section>
      </section>

      <div className="container">
        <div className="row mt-3 contact_image-text">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Indian Subsidiary Registration
            </p>

            <p className="partnershiptollp_p">
              A Indian Subsidiary Company is also known as a subsidiary or a
              sister company of parent company; andthe company which practices
              control over it, is called as the parent company of subsidiary
              company, or holding company.
            </p>
            <p className="partnershiptollp_p">
              A subsidiary company always controlled by the parent company
              (holding company)partially or fully.A Indian subsidiary company is
              termed as subsidiary or sister company of holding or parent
              company.bellow given content, we will understand detailed
              information of Indian Subsidiary company registration procedure,
              documentation, types, and procedure required for it.
            </p>
          </div>

          <div className="col-md-6">
            <p className="itrnomatterp">Application in the prescribed form:</p>

            <p className="partnershiptollp_p">
              SPICe+ Form, which is an integrated form for the reservation of
              name and other services, is to be filled for the registration of
              subsidiary companies.SPICe+ form has two parts: –
            </p>

            <p className="itrnomatterp">Part A</p>

            <div class="partnershiptollpli">
              <ul>
                <li>Name Reservation (New Companies)</li>
              </ul>
            </div>

            <p className="itrnomatterp">Part B</p>

            <div class="partnershiptollpli">
              <ul>
                <li>Incorporation of Company</li>
                <li>Application For DIN</li>
                <li>PAN and TAN Application</li>
                <li>EPFO and ESIC Registration</li>
                <li>Bank Account Opening</li>
                <li>GSTIN Application</li>
                <li>
                  Professional Tax Registration(Applicable to Companies in
                  Maharashtra)
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <section className="text-center">
              <img src={subsi} alt="subsi" className="mobileImg" />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>
        </div>
        <div className="row backgroundrowPresumtive">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">Meaning of subsidiary company</p>
            <p className="partnershiptollp_p">
              An Indian subsidiary, the parent company must own at least 50% or
              more of the subsidiary. When the parent company owns 100% of the
              subsidiary of parent company is known as a wholly-owned or fully
              owned subsidiary.
            </p>
            <p className="partnershiptollp_p">
              But main thing is that the subsidiary company of a foreign parent
              company is a separate legal entity from parent company, and the
              subsidiary company is obligated to function under the rules and
              compliances of the country where it is situated or registered.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Advantages of Opening Indian subsidiary
            </p>
            <p className="partnershiptollp_p">
              For forming an Indian subsidiary company there was various
              advantages in the business compliances in the case of the Indian
              subsidiary the following advantages will apply.
            </p>
          </div>

          <div className="col-md-6">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Independent legal structure:</p>
            </div>

            <p className="fearItrp">
              The Indian subsidiary is an independent or separate legal
              structure from its parent company and it is regulated under the
              Indian commercial legislation.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Independent legal structure:</p>
            </div>

            <p className="fearItrp">
              The Indian subsidiary is an independent or separate legal
              structure from its parent company and it is regulated under the
              Indian commercial legislation.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Independent legal structure:</p>
            </div>

            <p className="fearItrp">
              The Indian subsidiary is an independent or separate legal
              structure from its parent company and it is regulated under the
              Indian commercial legislation.
            </p>
          </div>

          <div className="col-md-6">
            <section className="text-center">
              <img src={Subs} alt="Subs" className="mobileImg" />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>
        </div>

        <div className="row privetFlex">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Documents Required for Online Company Registration
            </p>
            <p className="partnershiptollp_p">
              In India, private limited company registration cannot be done
              without proper identity and address proof. Listed below are the
              documents accepted by the MCA for the online company registration
              process:
            </p>
          </div>

          <div className="col-md-4">
            <section className="text-center">
              <img src={Benifits} alt="IncometaxItr" width={"100%"} />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-7">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>For Office Address:</p>
            </div>

            <p className="fearItrp">
              Office Address proof (Electricity bill or rent agreement) and
              latest self- attested electricity bill in case of rented
              accommodation.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>For Office Address:</p>
            </div>

            <p className="fearItrp">
              Office Address proof (Electricity bill or rent agreement) and
              latest self- attested electricity bill in case of rented
              accommodation.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>For Office Address:</p>
            </div>

            <p className="fearItrp">
              Office Address proof (Electricity bill or rent agreement) and
              latest self- attested electricity bill in case of rented
              accommodation.
            </p>

            <p className="smalltitleofllp">
              Minimum Requirement To Incorporate Indian Subsidiary Company
            </p>
            <div class="partnershiptollpli">
              <ul>
                <li>At list Two Directors</li>
                <li>Two Shareholders</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-12 slash_1 what_income_1">
          <span className="mb-3">
            Process to Incorporate Indian Subsidiary Company
          </span>
        </div>

        <div className="row panRow">
          <div className="col-md-1" />
          <div className="col-md-2">
            <div className="pan-back">
              <div className="Subsidairy">
                <span className="pan-count">1</span>
                <p className="panbox-text">
                  Obtain Digital <br /> Signature
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="Subsidairy2">
                <span className="pan-count">2</span>
                <p className="panbox-text">
                  Reserve Your <br /> Company Name
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="Subsidairy3">
                <span className="pan-count">3</span>
                <p className="panbox-text">
                  Submission of <br /> MOA & AOA
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="Subsidairy4">
                <span className="pan-count">4</span>
                <p className="panbox-text">
                  Get Incorporation <br /> Certificate
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="Subsidairy5">
                <span className="pan-count">5</span>
                <p className="panbox-text">
                  Open Company <br /> Bank Account
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row backgroundPicItr mt-3">
          <div className="col-md-12 mb-3 what_income_1 slash_1">
            <span>Why FirstFiling?</span>
          </div>

          <div className="col-md-12 why_first_filing">
            <p>
              First Filing is one of the best platforms aiming to fulfil all
              your legal and financial requirements and connect you to
              professionals. Yes, our clients are pleased with our legal
              service; because of our focus on simplifying legal requirements,
              they have consistently regarded us highly and provided regular
              updates.
            </p>

            <p>
              Our clients can also track the progress at all times on our
              platform. If you have any questions about the ITR Return Filing,
              our experienced representatives are just a phone call away. First
              Filing will ensure that your communication with professionals is c
              seamless.
            </p>

            <div class="gstlist_10 gstlist_31 incomelispace">
              <ul>
                <li>Purchase a Plan for Expert Assistance</li>
                <li>Add Queries Regarding ITR Return Filing</li>
                <li>Provide Documents to First Filing Expert</li>

                <li>
                  Prepare Application for ITRReturn Filing+ complete all
                  Admissibility Criteria for Preliminary Screening
                </li>
                <li>Complete Procedural Actions</li>
                <li>Get your ITR Return Filing done at your Door Step!</li>
              </ul>
            </div>
            <p>
              The elementary information would be mandatory from your end to
              start the process. The Attorney will begin working on your request
              once all the information is provided and the payment is received.
            </p>
          </div>
        </div>
      </div>

      <Faq />
      <Footer />
    </>
  );
}
export default IncorporateSubsidiary;
