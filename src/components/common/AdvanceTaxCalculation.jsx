import React, { useState } from "react";
import Enquiry from "../Enquiry/enquiry";
import ServiceType2 from "../Services/ServiceType2";
import thinkingman3 from "../common/Images/thinkingman3.png";
import checkcircle from "../common/Images/checkCircleWhite.png";
import incometax_men2 from "../common/Images/docd2.png";
import checkcircle1 from "../common/Images/checkCircle.svg";
import IncometaxItr from "../common/Images/ReqDoc3.png";
import fine_1 from "../common/Images/Fine3.png";
import ArrowANimationItr from "../common/Images/ArrowANimationItr.gif";
import outer from "../common/Images/outer.png";
import clock6 from "../common/Images/clock6.png";
import ServiceName from "../Services/NameOfService";
import secureLocalStorage from "react-secure-storage";
import { NavLink } from "react-router-dom";
import Faq from "../FAQ/Faq";

function AdvanceTaxCalculation() {
  const [buyNow, setbuyNow] = useState("");
  window.addEventListener("itr_service", () => {
    setbuyNow(
      secureLocalStorage.getItem("itr_service_price").base_price_redirect
    );
  });

  const [tab, setTab] = useState("tab__1");

  const handleTabPanel = (event) => {
    // alert(event.target.id)

    setTab(event.target.id);
  }

  return (
    <>
      <div className="container marginBottomForService">
        <ServiceName />
        <div className="row">
          <div className="col-md-6">
            <span className=" itrPageHeading">Income Tax For Individuals</span>
            <p className="itrPageDescription">
              Income Tax For Individuals Express Plan / Income Tax For
              Individuals Easy Plan. Salaried Individual Return (less than 50
              lacs). Get Your Taxes Filed Within the Same Day.
            </p>

            <section className="backgroundAnimationItr">
              {buyNow !== "" ? (
                <NavLink to={"/OrderSummary2/" + buyNow}>
                  <button className="fileNowBtn btn">Buy Now</button>
                </NavLink>
              ) : (
                ""
              )}
              <section>
                <img
                  src={ArrowANimationItr}
                  alt="ArrowANimationItr"
                  className="opacityArrow"
                />
              </section>
            </section>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <Enquiry />
          </div>
        </div>
      </div>

      <section className="servicebgpic3">
        <ServiceType2 />
      </section>


      <div className="container">
        <div className="row mt-3">
          <div className="col-md-7 itrnomatter">
            <p className="itrnomatterp">
              Tax Filing Made Easy - No Matter Your Situation
            </p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Have no Form 16 ?</p>
            </div>

            <p className="fearItrp">
              Fear not! We'll simplify the process of completing your taxes by
              pre-filling your information using data from the IT Department.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Changed jobs in a financial year?</p>
            </div>

            <p className="fearItrp">
              No problem! You can easily upload multiple Form-16s and file your
              returns seamlessly.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Self-employed?</p>
            </div>

            <p className="fearItrp">
              We've got you covered too! You can file your tax returns manually
              or upload Form 26AS for added convenience.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Generating income from business ventures?</p>
            </div>

            <p className="fearItrp">
              We make it easy for you to file returns by adding your trading,
              speculative, and presumptive income.
            </p>
          </div>

          <div className="col-md-5">
            <section className="marginOfImage">
              <div className="incometax_img_6">
                <img src={incometax_men2} width="100%" alt="" />
              </div>
              <NavLink to="/Contact"> 
              <button className="btn itrFIleButton">Consult A Call</button></NavLink>
            </section>
          </div>

          <div className="col-md-5 IncometaxItr_img mt-3">
            <div className="incometax_img_">
              <img src={IncometaxItr} alt="" />
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 incometaxreture_4 IncometaxItr_img mt-3 ">
            <span className="">
              Documents required for Income Tax Return Registration
            </span>
            <p>
              Income Tax Return Registration requires certain documents that
              must be present in order for a person to register.
            </p>

            <div class="gstlist_10 ">
              <ul>
                <li>Copy & PAN of Aadhaar</li>
                <li>Address details</li>
                <li>Bank Account details</li>
                <li>
                  Additional disclosures regarding income from payroll & fixed
                  deposits
                </li>
                <li>Data required for claiming deduction</li>
              </ul>
              <button className="btn itrFIleButton">Consult A Call</button>
            </div>
          </div>

          <div className="col-md-8 incometaxreture_4 slash_1">
            <span className="">
              Penalty for not filing for Income Tax Returns
            </span>

            <p>
              If you file your Income Tax Returns (ITR) late or not at all,
              there are different penalties associated with the non-compliance,
              depending on the nature of the offense. Some of the sections and
              their penalties include:
            </p>
          </div>

          <div className="col-md-4">
            <div>
              <img src={fine_1} alt="fine_1" width={"100%"} />
            </div>
          </div>

          <div className="col-md-12">
            <table class="table table-bordered itrTable" width={"100%"}>
              <thead>
                <tr className="theadRow">
                  <th className="th20persent">Section</th>
                  <th className="th40persent">Nature of Offence</th>
                  <th className="th40persent">Penalty</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tbodyRow1">
                  <td className="td20persent">234F</td>
                  <td className="td40persent">Filing ITR past the due date</td>
                  <td className="td40persent">
                    ₹1,000 to ₹10,000 (depending on delay and income)
                  </td>
                </tr>
                <tr className="tbodyRow2">
                  <td className="td20persent">234F</td>
                  <td className="td40persent">Filing ITR past the due date</td>
                  <td className="td40persent">
                    ₹1,000 to ₹10,000 (depending on delay and income)
                  </td>
                </tr>
                <tr className="tbodyRow1">
                  <td className="td20persent">234F</td>
                  <td className="td40persent">Filing ITR past the due date</td>
                  <td className="td40persent">
                    ₹1,000 to ₹10,000 (depending on delay and income)
                  </td>
                </tr>
                <tr className="tbodyRow2">
                  <td className="td20persent">234F</td>
                  <td className="td40persent">Filing ITR past the due date</td>
                  <td className="td40persent">
                    ₹1,000 to ₹10,000 (depending on delay and income)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-12">
            <span className="redColor">*</span>
            <span className="starSpanText">
              It's important to keep in mind that these penalties may be subject
              to change and that it's always best to file your ITR on time to
              avoid incurring any penalties or fines.
            </span>

            <p className="StarPText">
              For salaried individuals, there are three categories to consider:
            </p>

            <div className="spaceItrListing">
              <img src={checkcircle1} alt="checkcircle1" />
              <span>
                Total annual income below ₹2.5 lakhs: There is no penalty for
                filing a nil return.
              </span>
            </div>
            <div className="spaceItrListing">
              <img src={checkcircle1} alt="checkcircle1" />
              <span>
                Total annual income below ₹5 lakhs: The maximum penalty for late
                or non-filing of ITR cannot exceed ₹1,000.
              </span>
            </div>
            <div className="spaceItrListing">
              <img src={checkcircle1} alt="checkcircle1" />
              <span>
                Total annual income above ₹5 lakhs: The penalty for late or
                non-filing of ITR can be up to ₹10,000.
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-3 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 what_income_1 slash_1 paddingtopBottom ">
              <span>Income Tax e-filing Popular Guides ?</span>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-md-4">
              <div className="row g-3">
                <div
                  className={tab === "tab__1" ? "col-md-12 tab__panel tab__panel_active" : "col-md-12 tab__panel"}

                  id="tab__1" onMouseEnter={handleTabPanel}>
                  <i className="fa fa-angle-right mt-1 p-2">  </i>
                  <span className="p-2">  Income Tax Deductions - The Most Comprehensive Guide to
                    Tax Saving in India [Updated]</span>
                </div>
                <div
                  className={tab === "tab__2" ? "col-md-12 tab__panel tab__panel_active" : "col-md-12 tab__panel"}
                  id="tab__2" onMouseEnter={handleTabPanel}>
                  <i className="fa fa-angle-right mt-1 p-2">  </i>
                  <span className="p-2"> Know the easiest way to link Aadhaar card with PAN card</span>

                </div>
                <div
                  className={tab === "tab__3" ? "col-md-12 tab__panel tab__panel_active" : "col-md-12 tab__panel"}
                  id="tab__3" onMouseEnter={handleTabPanel}>
                  <i className="fa fa-angle-right mt-1 p-2">  </i>
                  <span className="p-2">   Income Tax Slabs and Rates for FY 2022-23 (AY 2023-24)
                    [Updated]</span>
                </div>
                <div
                  className={tab === "tab__4" ? "col-md-12 tab__panel tab__panel_active" : "col-md-12 tab__panel"}
                  id="tab__4" onMouseEnter={handleTabPanel}>
                  <i className="fa fa-angle-right mt-1 p-2">  </i>
                  <span className="p-2"> What is verification of Income Tax Return? How to do
                    e-verification of ITR?</span>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              {tab === "tab__1" ? <div className="row  sub__tab__panel">
                <div className="col-md-12 ">
                  <img width="502px" src={IncometaxItr} />

                </div>
                <div className="col-md-12  ">
                  Your Income Tax Return (ITR) for FY 2022-23 (AY 2023-24)
                </div>
              </div>

                : ""}
              {tab === "tab__2" ?
                <div className="row  sub__tab__panel">
                  <div className="col-md-12 ">
                    <img src={incometax_men2} />
                  </div>
                  <div className="col-md-12  ">
                    Your Income Tax Return (ITR) for FY 2022-23 (AY 2023-24)
                  </div>
                </div>
                : ""}
              {tab === "tab__3" ?
                <div className="row  sub__tab__panel">
                  <div className="col-md-12 ">
                    <img width="502px" src={IncometaxItr} />
                  </div>
                  <div className="col-md-12  ">
                    Your Income Tax Return (ITR) for FY 2022-23 (AY 2023-24)
                  </div>
                </div>
                : ""}
              {tab === "tab__4" ?
                <div className="row  sub__tab__panel">
                  <div className="col-md-12 ">
                    <img width="502px" src={IncometaxItr} />
                  </div>
                  <div className="col-md-12  ">
                    Your Income Tax Return (ITR) for FY 2022-23 (AY 2023-24)
                  </div>
                </div>
                : ""}

            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="col-md-12 what_income_1 slash_1 paddingtopBottom">
          <span>Are You A Salaried Individual?</span>
          <p className="itrSalarierP">
            Are you a salaried individual in need of tax-related consultancy
            services? We can help! Our experienced team specializes in tax
            preparation and planning, and we'll work with you to ensure that
            you're in compliance with all applicable laws and regulations.
          </p>
          <NavLink to="/Contact"> 
          <button className="btn itrbutton">Contact Us Today!</button></NavLink>
        </div>

        <div className="row itrrowcolor">
          <div className="col-md-10 slash_1">
            <span className="spanITR2">Don’t know which ITR to file?</span>

            <p className="spanITR2p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="spanITR2p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. industry's standard dummy text ever since.
            </p>
          </div>
          <div className="col-md-2 flexTHink">
            <img src={thinkingman3} alt="thinkingman3" width={"100%"} />
          </div>

          <div className="col-md-3">
            <div className="card itrnamecard">
              <div className="card-body">
                <div className="itrflex">
                  <section className="itrNames1Secton">ITR-1</section>
                </div>
                <p>
                  The ITR-1 is for residents whose total income does not exceed
                  INR 50 lakhs. It includes the following:
                </p>
                <div className="itrlisection">
                  <ul>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Income from Salary or Pension.</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        Income from one House Property (except cases involving
                        loss from the previous year).
                      </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        Income from Other Sources (excluding Winnings & Gifts).
                      </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Income from Agriculture up to INR 5000.</span>
                    </li>
                  </ul>
                </div>
                <div className="itrflex">
                  <button className="btn itrFIleButton">File Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card itrnamecard">
              <div className="card-body">
                <div className="itrflex">
                  <section className="itrNames1Secton">ITR-2</section>
                </div>
                <p>
                  The ITR-2 is suitable for individuals or Hindu Undivided
                  Families (HUF) whose total income includes:
                </p>
                <div className="itrlisection">
                  <ul>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Income from Salary or Pension.</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        Income from one House Property (except cases involving
                        loss from the previous year).
                      </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        Income from Other Sources (excluding Winnings & Gifts).
                      </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Income from Agriculture up to INR 5000.</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        If you are a Director of a company or have investments
                        in unlisted equity shares during the financial year, you
                        must use ITR-2.
                      </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        ITR-2 is not for those with income from Business or
                        Profession.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="itrflex">
                  <button className="btn itrFIleButton">File Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card itrnamecard">
              <div className="card-body">
                <div className="itrflex">
                  <section className="itrNames1Secton">ITR-3</section>
                </div>
                <p>
                  The ITR-1 is for residents whose total income does not exceed
                  INR 50 lakhs. It includes the following:
                </p>
                <div className="itrlisection">
                  <ul>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Income from Salary or Pension.</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        Income from one House Property (except cases involving
                        loss from the previous year).
                      </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        Income from Other Sources (excluding Winnings & Gifts).
                      </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Income from Agriculture up to INR 5000.</span>
                    </li>
                  </ul>
                </div>
                <div className="itrflex">
                  <button className="btn itrFIleButton">File Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card itrnamecard">
              <div className="card-body">
                <div className="itrflex">
                  <section className="itrNames1Secton">ITR-4</section>
                </div>
                <p>
                  The ITR-2 is suitable for individuals or Hindu Undivided
                  Families (HUF) whose total income includes:
                </p>
                <div className="itrlisection">
                  <ul>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Income from Salary or Pension.</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        Income from one House Property (except cases involving
                        loss from the previous year).
                      </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        Income from Other Sources (excluding Winnings & Gifts).
                      </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Income from Agriculture up to INR 5000.</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        If you are a Director of a company or have investments
                        in unlisted equity shares during the financial year, you
                        must use ITR-2.
                      </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        ITR-2 is not for those with income from Business or
                        Profession.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="itrflex">
                  <button className="btn itrFIleButton">File Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ItrPaddingTopMain">
        <div className="row">
          <div
            className="col-md-12 slash_1 what_income_1 mb-4"
            data-aos="fade-bottom"
            data-aos-delay="500"
          >
            <span className="mb-3">
              Process of Income Tax Return Registration
            </span>
          </div>

          <div class="col-md-2 col-6">
            <img src={clock6} width="100%" alt="" />
          </div>
          <div class="col-md-2 col-6">
            <div class="bg-clock1">
              <div class="bg-clock">
                <span>1</span>
                <p>
                  Submit <br /> Documents
                </p>

                <img src={outer} width="100%" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-2 col-6">
            <div class="bg-clock1">
              <div class="bg-clock2">
                <span>2</span>
                <p>
                  Verification <br /> of Documents
                </p>

                <img src={outer} width="100%" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-2 col-6">
            <div class="bg-clock1">
              <div class="bg-clock3">
                <span>3</span>
                <p>
                  Selection of <br /> Appropriate <br />
                  Form
                </p>

                <img src={outer} width="100%" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-2 col-6">
            <div class="bg-clock1">
              <div class="bg-clock4">
                <span>4</span>
                <p>
                  Preparation <br /> of Your <br /> Return
                </p>

                <img src={outer} width="100%" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-2 col-6">
            <div class="bg-clock1">
              <div class="bg-clock5">
                <span>5</span>
                <p>
                  ITR Filed & Ack. <br /> Generated
                </p>

                <img src={outer} width="100%" alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <p className="clock_p mt-4">
              Income Tax Return Registration requires certain documents that
              must be present in order for a person to register.
            </p>

            <div class="gstlist_10 incomelispace">
              <ul>
                <li>
                  The first step is to register with the Internal Revenue
                  Service (IRS), which can be done through their website or by
                  mail.
                </li>
                <li>
                  Once the registration is complete, individuals must provide
                  all the necessary information to the IRS, such as income,
                  deductions, and any other applicable information. Afteconsult a clr the
                  information is collected, the IRS will review it and issue a
                  tax return form.
                </li>
                <li>
                  Finally, the individual must submit the form to the IRS,
                  either electronically or by mail, and wait for the tax return
                  to be processed.
                </li>
              </ul>
              <p className="clock_p">
                This process concludes the registration and allows individuals
                to receive their tax returns. It is important to note that each
                individual has a unique set of circumstances, so it is best to
                consult with tax professionals if there is any confusion or if
                further guidance is needed.
              </p>
            </div>
          </div>
        </div>

        <div className="row ItrPaddingTopMain">
          <div
            className="col-md-12 slash_1 what_income_1 mb-4"
            data-aos="fade-bottom"
            data-aos-delay="500"
          >
            <span>Due Dates for Income Tax Return Filing</span>
          </div>
        </div>
      </div>

      <div id="calendar"></div>

      <div className="container">
        <div className="row backgroundPicItr">
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
    </>
  );
}
export default AdvanceTaxCalculation;
