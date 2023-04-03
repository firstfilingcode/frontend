import React from "react";
import { useState } from "react";
import HandRupee from "../common/Images/HandRupee.png";
import Enquiry2 from "../Enquiry/enquiry2";
import Faq from "../FAQ/Faq";
const TaxationAdvisoryCryptocurrency = () => {
  const [scrollTab, setScrollTab] = useState("");
  function ScrollSpy(event) {
    setScrollTab(event.target.getAttribute("data-lable"));
  }

  return (
    <>
      <div className="container">
        <div className="col-md-12">
          <span className="titleOfFirstFilling">Ask An Expert</span>

          <p className="partnershiptollp_p">
            QLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="fixwidthPremtive"></div>
            <section className="TDStopimig"></section>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <Enquiry2 />
          </div>
        </div>
      </div>

      <div className="container paddingtopAsk">
        <div className="row">
          <div className="col-md-3">
            <section className="backgroundAskExpert">
              <ul>
                <li onClick={ScrollSpy} data-lable="Pacage1">
                  Salaried Individual - IncomeTax Return Filing (ITR)
                </li>
                <li onClick={ScrollSpy} data-lable="Pacage2">
                  Salaried Individual - IncomeTax Return Filing ( ITR )
                  (Premium)
                </li>
                <li onClick={ScrollSpy} data-lable="Pacage3">
                  Filing of Income Tax Return for Sale of ESOP or RSU
                </li>
                <li onClick={ScrollSpy} data-lable="Pacage4">
                  Resident with Foreign IncomeTax Return Filing
                </li>
              </ul>
            </section>
          </div>
          <div className="col-md-9">
            <section>
              <div className="card asknexpertService">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-1">
                      <img src={HandRupee} alt="HandRupee" width={"100%"} />
                    </div>
                    <div className="col-md-11">
                      <span className="asknExpertTitle">
                        Salaried Individual - IncomeTax Return Filing ( ITR )
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="col-md-12">
                    <p className="Boldpartnershiptollp_p">
                      This Service includes :
                    </p>

                    <div class="partnershiptollpli">
                      <ul>
                        <li>
                          Tax filing for salaried individuals with single Form
                          16 (Online submission only)
                        </li>
                        <li>Tax Due/Refund Status and Filing Confirmation</li>
                        <li>Expert Assisted Tax Filing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 flexAskExpert">
                    <p className="ServiceRuppe">₹1299</p>
                    <button className="btn btn-asknexpert">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="card asknexpertService">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-1">
                      <img src={HandRupee} alt="HandRupee" width={"100%"} />
                    </div>
                    <div className="col-md-11">
                      <span className="asknExpertTitle">
                        Salaried Individual - IncomeTax Return Filing ( ITR )
                        (Premium)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="col-md-12">
                    <p className="Boldpartnershiptollp_p">
                      This Service includes :
                    </p>

                    <div class="partnershiptollpli">
                      <ul>
                        <li>
                          Tax filing for salaried individuals with single or
                          multiple Form 16 with Salary more than Rs. 50 Lacs
                        </li>
                        <li>Dividend Income of more than Rs. 10 Lacs</li>
                        <li>Director in any Company</li>
                        <li>House property</li>
                        <li>Tax Due/Refund Status and Filing Confirmation</li>
                        <li>Expert Assisted Tax Filing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 flexAskExpert">
                    <p className="ServiceRuppe">₹2999</p>
                    <button className="btn btn-asknexpert">Buy Now</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row backgroundPicItr">
          <div className="col-md-12 mb-3 what_income_1 slash_1">
            <span>Why First Filing?</span>
          </div>

          <div className="col-md-12">
            <p className="partnershiptollp_p">
              Corpbiz is one of the best platforms aiming to fulfil all your
              legal and financial requirements and connect you to professionals.
              Yes, our clients are pleased with our legal service; because of
              our focus on simplifying legal requirements, they have
              consistently regarded us highly and provided regular updates.
            </p>
            <p className="partnershiptollp_p">
              Our clients can also track the progress at all times on our
              platform. If you have any questions about the ITR Return Filing,
              our experienced representatives are just a phone call away.
              Corpbiz will ensure that your communication with professionals is
              c seamless.
            </p>

            <div class="gstlist_10 gstlist_31 incomelispace">
              <ul>
                <li>Purchase a Plan for Expert Assistance</li>
                <li>Add Queries Regarding ITR Return Filing</li>
                <li>Provide Documents to Corpbiz Expert</li>
                <li>
                  Prepare Application for ITRReturn Filing+ complete all
                  Admissibility Criteria for Preliminary Screening
                </li>
                <li>Complete Procedural Actions</li>
                <li>Get your ITR Return Filing done at your Door Step!</li>
              </ul>
            </div>

            <p className="partnershiptollp_p">
              The elementary information would be mandatory from your end to
              start the process. The Attorney will begin working on your request
              once all the information is provided and the payment is received.
            </p>
          </div>
        </div>
      </div>

      <Faq />
    </>
  );
};

export default TaxationAdvisoryCryptocurrency;
