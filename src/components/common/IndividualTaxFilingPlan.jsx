import React, { useState } from "react";
import Enquiry from "../Enquiry/enquiry";
import ServiceType2 from "../Services/ServiceType2";
import thinkingman1 from "../common/Images/thinkingman1.png";
import checkcircle from "../common/Images/checkCircleWhite.png";
import checkcircle1 from "../common/Images/checkCircle.svg";
import IncometaxItr from "../common/Images/benifitsItr.png";
import ArrowANimationItr from "../common/Images/ArrowANimationItr.gif";
import doubts_img from "../common/Images/incometaxitr1.png";
import fine_1 from "../common/Images/Fine1.png";
import outer from "../common/Images/outer.png";
import clock6 from "../common/Images/clock6.png";
import ServiceName from "../Services/NameOfService";
import secureLocalStorage from "react-secure-storage";
import { NavLink } from "react-router-dom";
import Faq from "../FAQ/Faq";

function SalariedIndivual() {
  const [buyNow, setbuyNow] = useState("");
  window.addEventListener("itr_service", () => {
    setbuyNow(
      secureLocalStorage.getItem("itr_service_price").base_price_redirect
    );
  });
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

      <section className="servicebgpic1">
        <ServiceType2 />
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

         <NavLink to="/Contact" > <button className="btn itrbutton">Contact Us Today!</button></NavLink>
        </div>

        <div className="row itrrowcolor">
          <div className="col-md-10 slash_1">
            <span className="spanITR2">Don’t know which ITR to file?</span>

            <p className="partnershiptollp_p text-center">
              As your income exceeds Rs. 50 lakhs you are eligible to file for
              ITR-2
            </p>
          </div>
          <div className="col-md-2 flexTHink">
            <img src={thinkingman1} alt="thinkingman1" width={"100%"} />
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
                      <span>Salary or Pension;</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Income from House Property;</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Income from Capital Gains;</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Other Sources (including winnings); </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Agriculture income of over Rs.5000;</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Any Foreign Asset or Foreign Income.</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        If you are a Director of a company or have investments
                        in unlisted equity shares during the financial year, you
                        must use ITR-2.
                      </span>
                    </li>
                  </ul>

                  <p className="partnershiptollp_p">
                    ITR-2 is not for those with income from Business or
                    Profession.
                  </p>
                </div>
                <div className="itrflex">
                  <button className="btn itrFIleButton">File ITR-2 Here</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row bgColorNew">
          <div className="col-md-5">
            <p className="titleOfFirstFilling">
              World’s Largest Services Platform
            </p>

            <p className="partnershiptollp_p">
              First Filing is one of India's leading consultancy and business
              management firms. First Filing provides personalized assistance
              and advisory services to businesses across India, including
              assistance for legal, audit, compliance and licensing matters.
            </p>

            <p className="partnershiptollp_p">
              First Filing is a unit of Enterslice that focuses predominantly on
              assisting entrepreneurs or SMEs by providing services such as
              Business Registration, Government Registration, Regulatory
              Measures, Environmental Laws, Tax Filing, IPR, and much more. Our
              team comprises over 200 well-experienced Chartered Accountants,
              Company Secretaries, CMAs and Lawyers who have years of expertise
              in assisting entrepreneurs, MSMEs and large corporate houses with
              their growing needs - irrespective of their size, scale, geography
              and industry.
            </p>
          </div>

          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <div className="row marginTopNewSection">
                  <div className="col-md-2 iconUser">
                    <i className="fa fa-bar-chart"></i>
                  </div>
                  <div className="col-md-10">
                    <p className="NewTitleofFirm">Startup Registration</p>
                  </div>

                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <p className="partnershiptollp_p">
                      First Filing will help you from start to finish right from
                      incorporating your company to getting your Startup
                      recognition...
                    </p>
                  </div>
                  <div className="col-md-2 iconUser">
                    <i className="fa fa-envira"></i>
                  </div>
                  <div className="col-md-10">
                    <p className="NewTitleofFirm">Environmental Consultancy</p>
                  </div>

                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <p className="partnershiptollp_p">
                      Managing, restoring & protecting the environment are
                      integral to our services. Our environmental experts will
                      help you in all aspects of environment services...
                    </p>
                  </div>
                  <div className="col-md-2 iconUser">
                    <i className="fa fa-users"></i>
                  </div>
                  <div className="col-md-10">
                    <p className="NewTitleofFirm">
                      Regulatory (BIS, CDSCO, ISO)
                    </p>
                  </div>

                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <p className="partnershiptollp_p">
                      First Filing has a huge team of professional who can help
                      and guide you in BIS, CDSCO and ISO related services...
                    </p>
                  </div>
                  <div className="col-md-2 iconUser">
                    <i className="fa fa-line-chart"></i>
                  </div>
                  <div className="col-md-10">
                    <p className="NewTitleofFirm">On Demand CA/CS Services</p>
                  </div>

                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <p className="partnershiptollp_p">
                      We have our team of expert managers, CA and CS provide
                      business-centric solutions to clients to make sure that
                      there is no turbulence in their business operations...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row marginTopNewSection">
                  <div className="col-md-2 iconUser">
                    <i className="fa fa-file-code-o"></i>
                  </div>
                  <div className="col-md-10">
                    <p className="NewTitleofFirm">Tax and Auditing</p>
                  </div>

                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <p className="partnershiptollp_p">
                      First Filing will help you from start to finish right from
                      incorporating your company to getting your Startup
                      recognition...
                    </p>
                  </div>
                  <div className="col-md-2 iconUser">
                    <i className="fa fa-file"></i>
                  </div>
                  <div className="col-md-10">
                    <p className="NewTitleofFirm">Advisory and Consultancy</p>
                  </div>

                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <p className="partnershiptollp_p">
                      We have a team of highly experienced professional who can
                      help you in all the advisory and consultancy related
                      services...
                    </p>
                  </div>
                  <div className="col-md-2 iconUser">
                    <i className="fa fa-graduation-cap"></i>
                  </div>
                  <div className="col-md-10">
                    <p className="NewTitleofFirm">Licensing</p>
                  </div>

                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <p className="partnershiptollp_p">
                      Corpbiz assist companies in complying with various laws on
                      several Licenses such as FSSAI License, Trade License,
                      PSARA License etc...
                    </p>
                  </div>
                  <div className="col-md-2 iconUser">
                    <i className="fa fa-files-o"></i>
                  </div>
                  <div className="col-md-10">
                    <p className="NewTitleofFirm">Free Business Templates</p>
                  </div>

                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <p className="partnershiptollp_p">
                      Need help writing your business plan? Contact Corpbiz, we
                      have over 500 real-world business plan examples from an
                      extensive variety of industries to guide you through
                      writing your own plan...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-3 incometaxreture_4">
            <span className="">
              What are the Benefits of Income Tax Return Filing
            </span>

            <div class="gstlist_10 mt-3">
              <ul>
                <li>Compliance with the law and avoiding penalties</li>
                <li>Faster loan approvals</li>
                <li>Claim refunds for excess taxes paid</li>
                <li>
                  Creating a financial history and improving your credit score
                </li>
                <li>
                  Plan for the future with a clear understanding of income,
                  expenses, and investments
                </li>
                <li>
                  Use ITR receipts as supporting documents for various
                  applications.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 mt-5 douts_section incometaxreture_4">
            <img src={doubts_img} alt="" />
          </div>

          <div className="col-md-5 IncometaxItr_img ">
            <div className="incometax_img_">
              <img src={IncometaxItr} alt="" />
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 incometaxreture_4 IncometaxItr_img mt-3">
            <span className="">
              Documents required for Income Tax Return Registration
            </span>
            <div class="gstlist_10 ">
              <ul>
                <li>PAN</li>
                <li>Form-16 issued by your employer</li>
                <li>Month-wise salary slips</li>
                <li>TDS Certificate</li>
                <li>Form 26AS</li>
                <li>Rent receipts (For people living on rent)</li>
                <li>Capital Gains statements</li>
                <li>Bank Passbook/ FDs (To calculate the income)</li>
                <li>Tax Saving documents (80C, 80D, 80G, 80GG)</li>
              </ul>
              <button className="btn itrFIleButton">
                {" "}
                Confirm Your Documents
              </button>
            </div>
          </div>

          <div className="col-md-8 incometaxreture_4 slash_1">
            <span className="">Penalty</span>

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
                  <td className="td20persent">234A</td>
                  <td className="td40persent">
                    Outstanding unpaid tax with late ITR filing
                  </td>
                  <td className="td40persent">
                    1% interest per month on outstanding tax amount
                  </td>
                </tr>
                <tr className="tbodyRow1">
                  <td className="td20persent">271H</td>
                  <td className="td40persent">
                    Late filing of TDS/TCS returns
                  </td>
                  <td className="td40persent">
                    Penalty of Rs. 10,000 to Rs. 100,000
                  </td>
                </tr>
                <tr className="tbodyRow1">
                  <td className="td20persent"></td>
                  <td className="td40persent"></td>
                  <td className="td40persent">
                    Late filing penalty of Rs. 200 per day
                  </td>
                </tr>
                <tr className="tbodyRow2">
                  <td className="td20persent">270A</td>
                  <td className="td40persent">
                    Failure to file ITR or under-reporting of income
                  </td>
                  <td className="td40persent">
                    Penalty of 50% of the total tax payable on income
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
                  deductions, and any other applicable information. After the
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
            <span>Why First Filing?</span>
          </div>

          <div className="col-md-12">
            <p className="partnershiptollp_p">
              First Filing is an AI - driven technology platform which provides
              legal & financial services through its team of professionals.
            </p>

            <div class="gstlist_10 gstlist_31 incomelispace">
              <ul>
                <li>Best Financial Consulting Firm</li>
                <li>
                  First Filing - the best professional service firm out there.
                  We offer a range of government registration and taxation
                  services. People all around Asia think we're pretty amazing.
                </li>
                <li>99.9% Client Satisfaction</li>

                <li>
                  We work hard to make sure our clients are happy. Our team is
                  always trying to improve the service we offer. We're here to
                  help you and make sure you're satisfied.
                </li>
                <li>Excellent Advisory Services</li>
                <li>
                  We have some of the most expert professionals working with us.
                  That means we offer the best consultancy services in the
                  industry.
                </li>
              </ul>
            </div>
            <p className="Boldpartnershiptollp_p text-center">
              Why Choose First Filling?
            </p>
            <p className="partnershiptollp_p">
              At First Filing, we use technology to make your life easier. We're
              always available to respond to your calls and emails quickly.
              Plus, we have tons of automation and customer empowerment tools
              that make it super easy to get in touch with us.
            </p>
            <p className="partnershiptollp_p">
              We offer corporate services that take the stress out of
              registering your establishment. Our team will educate you and
              suggest the best approach for your project after doing thorough
              research and inspection.
            </p>
            <p className="partnershiptollp_p">
              And if you need global certification and approval, we've got you
              covered. We have an extensive network around the world that can
              get you what you need without any hassle.
            </p>
          </div>
        </div>
      </div>

      <Faq />
    </>
  );
}
export default SalariedIndivual;
