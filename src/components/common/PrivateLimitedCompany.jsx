import React from "react";
import Enquiry from "../Enquiry/enquiry";
import gere from "../common/Images/gere.png";
import checkcircle1 from "../common/Images/checkCircle.svg";
import checklist from "../common/Images/checklist.png";
import compliance from "../common/Images/compliance.png";
import startup from "../common/Images/startup.png";
import benefits from "../common/Images/benefits.png";
import ServiceName from "../Services/NameOfService";
import ServiceType2 from "../Services/ServiceType2";
import IncometaxItr from "../common/Images/IncometaxItr.png";
import Faq from "../FAQ/Faq";

const PrivateLimitedCompany = () => {
  return (
    <>
      <div className="container">
        <ServiceName />

        <div className="row IterNewPageBottom">
          <div className="col-md-10">
            <span className="slash_right hadingofitr">
              Private Limited (Pvt Ltd) Company Registration Online
            </span>

            <p className="Descriptionofitr">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem.
            </p>

            <div className="row">
              <div className="col-md-6">
                <span className="simpleSpanText">
                  Registering a Company is quick, easy, and can be done online
                  with FirstFiling in 3 simple steps:
                </span>

                <section>
                  <div className="card itrNewPageCard">
                    <div className="card-body">
                      <div className="row itrNewPageCardFlex">
                        <div className="col-md-2 col-2 itrflex2">
                          <div className="golCircle">1</div>
                        </div>
                        <div className="col-md-10 col-10">
                          <spna className="circleSpan">
                            We help you register your directors with the
                            Ministry of Corporate Affairs (MCA).
                          </spna>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card itrNewPageCard2">
                    <div className="card-body">
                      <div className="row itrNewPageCardFlex">
                        <div className="col-md-2 col-2 itrflex2">
                          <div className="golCircle">2</div>
                        </div>
                        <div className="col-md-10 col-10">
                          <spna className="circleSpan">
                            We help you pick the right company name.
                          </spna>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card itrNewPageCard3">
                    <div className="card-body">
                      <div className="row itrNewPageCardFlex">
                        <div className="col-md-2 col-2 itrflex2">
                          <div className="golCircle">3</div>
                        </div>
                        <div className="col-md-10 col-10">
                          <spna className="circleSpan">
                            We draft and file the documents required for your
                            company registration (MoA and AoA).
                          </spna>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-md-6">
                <Enquiry />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <section>
              <img src={gere} alt="gere" className="privateLimitedCompanyImg" />
            </section>
          </div>
        </div>
      </div>

      <section className="bgimgr3">
        <ServiceType2 />
      </section>

      <div className="container">
        <div className="col-md-12 what_income_1 slash_1 paddingtopBottom">
          <span>An Overview</span>
          <p className="itrSalarierP">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
          <p className="itrSalarierP">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
        </div>

        <div className="row">
          <div className="col-md-5 IncometaxItr_img mt-3">
            <div>
              <img src={benefits} alt="benefits" />
            </div>
          </div>
          <div className="col-md-1"></div>

          <div className="col-md-6 incometaxreture_4 IncometaxItr_img mt-3 ">
            <span className="slash_right">
              Benefits of Pvt Ltd Company Registration
            </span>
            <p>
              Registering a company offers many benefits. A registered company
              increases the authenticity of your business. It helps your
              business
            </p>

            <div class="gstlist_10 ">
              <ul>
                <li>
                  Shield from personal liability and protects from other risks
                  and losses
                </li>
                <li>Attract more customers</li>
                <li>
                  Procure bank credits and good investment from reliable
                  investors with ease
                </li>
                <li>
                  Offers liability protection to protect your company’s assets
                </li>
                <li>Greater capital contribution and greater stability</li>
                <li>Increases the potential to grow big and expand</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mb-3 bacgroundColorItrROw">
          <div className="col-md-12 what_income_1 slash_1">
            <span>
              Checklist for Private Limited Company Registration in India
            </span>

            <p className="itrPageDescription">
              As defined by the Companies Act, 2013 one must guarantee that the
              checklist requirements are met without fail.
            </p>
          </div>

          <div className="col-md-8">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Two Directors:</p>
            </div>

            <p className="fearItrp">
              A private limited company must have at least two directors, with a
              maximum of fifteen. A minimum of one of the company's directors
              must be a resident of India.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Unique Name:</p>
            </div>

            <p className="fearItrp">
              The name of your pvt ltd company must be unique. The suggested
              name should not match with any existing companies or trademarks in
              India.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Minimum Capital Contribution:</p>
            </div>

            <p className="fearItrp">
              There is no minimum capital amount for a Pvt ltd company. A Pvt
              limited company should have an authorised capital of at least ₹1
              lakh.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Registered Office:</p>
            </div>

            <p className="fearItrp">
              The registered office of a pvt ltd company does not have to be a
              commercial space. Even a rented home can be the registered office,
              so long as an NOC is obtained from the landlord.
            </p>
          </div>

          <div className="col-md-4">
            <img src={checklist} width={"100%"} alt="checklist" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              What is the process of filing Income Tax Returns for freelancers
            </p>

            <p className="partnershiptollp_p">
              Company registration in India benefits startups offering them an
              advantage over those who have not registered. The process of
              registering your company is complex and involves many compliances.
              However, you needn’t worry as long as you have Vakilsearch. Our
              professionals can help you with every step of the private limited
              company registration process.
            </p>
          </div>

          <div className="col-md-1">
            <div className="stepBackground">step - 1</div>
          </div>
          <div className="col-md-11">
            <p className="Boldpartnershiptollp_p">Two Directors:</p>
          </div>
          <p className="partnershiptollp_p">
            Determine the total income for the specified fiscal year from April
            1 to March 31. Loans and other debt commitments should be left out
            because they are not regarded as income.
          </p>
          <div className="col-md-1">
            <div className="stepBackground">step - 2</div>
          </div>
          <div className="col-md-11">
            <p className="Boldpartnershiptollp_p">Two Directors:</p>
          </div>
          <p className="partnershiptollp_p">
            Determine the total income for the specified fiscal year from April
            1 to March 31. Loans and other debt commitments should be left out
            because they are not regarded as income.
          </p>
          <p className="partnershiptollp_p">
            Determine the total income for the specified fiscal year from April
            1 to March 31. Loans and other debt commitments should be left out
            because they are not regarded as income.
          </p>
          <div className="col-md-1">
            <div className="stepBackground">step - 3</div>
          </div>
          <div className="col-md-11">
            <p className="Boldpartnershiptollp_p">Two Directors:</p>
          </div>
          <p className="partnershiptollp_p">
            Determine the total income for the specified fiscal year from April
            1 to March 31. Loans and other debt commitments should be left out
            because they are not regarded as income.
          </p>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Private Limited Company Compliances
            </p>
            <p className="partnershiptollp_p">
              Determine the total income for the specified fiscal year from
              April 1 to March 31. Loans and other debt commitments should be
              left out because they are not regarded as income.
            </p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Two Directors:</p>
            </div>

            <p className="fearItrp">
              A private limited company must have at least two directors, with a
              maximum of fifteen. A minimum of one of the company's directors
              must be a resident of India.
            </p>
          </div>

          <div className="col-md-8">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Two Directors:</p>
            </div>

            <p className="fearItrp">
              A private limited company must have at least two directors, with a
              maximum of fifteen. A minimum of one of the company's directors
              must be a resident of India.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Two Directors:</p>
            </div>

            <p className="fearItrp">
              The shareholders of the company must deposit the subscription
              amount specified in the MOA within 180 days of incorporation, and
              the company must create a bank current account. Therefore, in
              order to receive a business incorporation certificate, the
              shareholders of a company that is to be established with a paid-up
              capital of ₹1 lakh must deposit ₹1 lakh into the company's bank
              account and file a copy of the bank statement with the MCA.
            </p>
          </div>
          <div className="col-md-4">
            <section className="text-center">
              <img src={compliance} alt="compliance" className="mobileImg" />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>

          <div className="itrliNEw">
            <img src={checkcircle1} alt="checkcircle1" />
            <p>Two Directors:</p>
          </div>

          <p className="fearItrp">
            A private limited company must have at least two directors, with a
            maximum of fifteen. A minimum of one of the company's directors must
            be a resident of India.
          </p>
          <div className="itrliNEw">
            <img src={checkcircle1} alt="checkcircle1" />
            <p>Two Directors:</p>
          </div>

          <p className="fearItrp">
            A private limited company must have at least two directors, with a
            maximum of fifteen. A minimum of one of the company's directors must
            be a resident of India.
          </p>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Requirements to Start a Private Limited Company
            </p>

            <img src={startup} alt="startup" className="mobileImg" />
          </div>
          <div className="col-md-12 PaddingPrivate">
            <p className="partnershiptollp_p">
              Before a firm is incorporated, it must meet a specific set of
              conditions. The following are the conditions to be satisfied:
            </p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Two Directors:</p>
            </div>

            <p className="fearItrp">
              A private limited company must have at least two directors, with a
              maximum of fifteen. A minimum of one of the company's directors
              must be a resident of India.
            </p>
            <p className="afterArrowP afterArrowPLeft">
              Film artists, including a producer, actor, editor, director, art
              director, music director, singer, dance director, cameraman,
              lyricist, screenplay writer or dialogue writer, story writer, and
              costume designer.
            </p>
            <p className="afterArrowP afterArrowPLeft">
              Authorised representatives
            </p>
            <p className="afterArrowP afterArrowPLeft">
              Any notified professional other than these
            </p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Two Directors:</p>
            </div>

            <p className="fearItrp">
              A private limited company must have at least two directors, with a
              maximum of fifteen. A minimum of one of the company's directors
              must be a resident of India.
            </p>
            <p className="afterArrowP afterArrowPLeft">
              Film artists, including a producer, actor, editor, director, art
              director, music director, singer, dance director, cameraman,
              lyricist, screenplay writer or dialogue writer, story writer, and
              costume designer.
            </p>
            <p className="afterArrowP afterArrowPLeft">
              Authorised representatives
            </p>
            <p className="afterArrowP afterArrowPLeft">
              Any notified professional other than these
            </p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Two Directors:</p>
            </div>

            <p className="fearItrp">
              A private limited company must have at least two directors, with a
              maximum of fifteen. A minimum of one of the company's directors
              must be a resident of India.
            </p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Two Directors:</p>
            </div>

            <p className="fearItrp">
              A private limited company must have at least two directors, with a
              maximum of fifteen. A minimum of one of the company's directors
              must be a resident of India.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Comparative List of Different Types of Business Structures in
              India
            </p>
            <section className="responsiveTable">
              <table className="table table-bordered PrivateTable">
                <thead>
                  <tr>
                    <th>Company type</th>
                    <th>Ideal for</th>
                    <th>Tax advantages</th>
                    <th>Legal compliances</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Limited Liability Partnership</td>
                    <td>
                      Enterprises that focus on services or require little
                      investment
                    </td>
                    <td>Advantage on depreciation</td>
                    <td>
                      Company tax returns to be pointed ROC returns to be filed
                    </td>
                  </tr>
                  <tr>
                    <td>Limited Liability Partnership</td>
                    <td>
                      Enterprises that focus on services or require little
                      investment
                    </td>
                    <td>Advantage on depreciation</td>
                    <td>
                      Company tax returns to be pointed ROC returns to be filed
                    </td>
                  </tr>
                  <tr>
                    <td>Limited Liability Partnership</td>
                    <td>
                      Enterprises that focus on services or require little
                      investment
                    </td>
                    <td>Advantage on depreciation</td>
                    <td>
                      Company tax returns to be pointed ROC returns to be filed
                    </td>
                  </tr>
                  <tr>
                    <td>Limited Liability Partnership</td>
                    <td>
                      Enterprises that focus on services or require little
                      investment
                    </td>
                    <td>Advantage on depreciation</td>
                    <td>
                      Company tax returns to be pointed ROC returns to be filed
                    </td>
                  </tr>
                </tbody>
              </table>
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
              <img src={IncometaxItr} alt="IncometaxItr" width={"100%"} />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>
          <div className="col-md-8">
            <p className="Boldpartnershiptollp_p">Identity and Address Proof</p>
            <div class="partnershiptollpli">
              <ul>
                <li>
                  Scanned copy of PAN card or passport (foreign nationals &
                  NRIs)
                </li>
                <li>Scanned copy of voter ID/passport/driving licenses</li>
                <li>
                  Scanned copy of the latest bank statement/telephone or mobile
                  bill/electricity or gas bill
                </li>
                <li>
                  Scanned passport-sized photograph specimen signature (blank
                  document with signature [directors only)
                </li>
              </ul>
            </div>
            <p className="Boldpartnershiptollp_p">Registered Office Proof</p>
            <div class="partnershiptollpli">
              <ul>
                <li>
                  Scanned copy of the latest bank statement/telephone or mobile
                  bill/electricity or gas bill
                </li>
                <li>Scanned copy of notarised rental agreement in English</li>
                <li>
                  Scanned copy of no-objection certificate from the property
                  owner
                </li>
                <li>
                  Scanned copy of sale deed/property deed in English (in case of
                  owned property)
                </li>
              </ul>
            </div>

            <section className="text-justify">
              <spna>
                <b>Note : </b>
              </spna>
              <span className="llpNote">
                Your registered office need not be a commercial space; it can be
                your residence too.
              </span>
            </section>
          </div>
        </div>

        <div className="row backgroundPicItr mt-3 mb-3">
          <div className="col-md-12 mb-3 what_income_1 slash_1">
            <span>Why FirstFiling?</span>
          </div>

          <div className="col-md-12 why_first_filing">
            <p>
              Corpbiz is one of the best platforms aiming to fulfil all your
              legal and financial requirements and connect you to professionals.
              Yes, our clients are pleased with our legal service; because of
              our focus on simplifying legal requirements, they have
              consistently regarded us highly and provided regular updates.
            </p>

            <p>
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
    </>
  );
};

export default PrivateLimitedCompany;
