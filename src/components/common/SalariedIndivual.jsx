import React, { useState } from "react";
import Enquiry from "../Enquiry/enquiry";
import ServiceType2 from "../Services/ServiceType2";
import incometax_men from "../common/Images/incometax_men.png";
import checkcircle from "../common/Images/checkCircleWhite.png";
import incometax_men2 from "../common/Images/incometax_men2.png";
import checkcircle1 from "../common/Images/checkCircle.svg";
import IncometaxItr from "../common/Images/IncometaxItr.png";
import ArrowANimationItr from "../common/Images/ArrowANimationItr.gif";
import doubts_img from "../common/Images/doubts_img.png";
import fine_1 from "../common/Images/fine_1.png";
import outer from "../common/Images/outer.png";
import clock6 from "../common/Images/clock6.png";
import { NavLink } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Faq from "../FAQ/Faq";
import { Helmet } from "react-helmet";
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
        <div className="row">
          <div className="col-md-6">
            <span className=" itrPageHeading">Income Tax For Individuals</span>
            <p className="itrPageDescription">
            Income tax is a Direct tax levied by the government on the income of individuals, 
            corporations, and other entities. Income refers to any money earned from a job,
             investments, or any other source. Individuals are subject to income tax on their
              earnings from a variety of sources, including salaries, wages, bonuses, commissions, 
              and investment profits.
              Worry not when First Filing is at your service!
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

      <section className="bgimgr2">
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

          <NavLink  to="/Contact" onClick={()=>localStorage.setItem("setEmailAdress","contact@firstfiling.in")}>
          <button className="btn itrbutton"> Contact Us Today! fff</button></NavLink>
        </div>

        <div className="row itrrowcolor">
          <div className="col-md-10 slash_1">
            <span className="spanITR2">Don’t know which ITR to file?</span>
          </div>
          <div className="col-md-2 flexTHink">
            <img src={incometax_men} alt="incometax_men" width={"100%"} />
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
                  <button className="btn itrFIleButton">File ITR-1 Here</button>
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
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        If you are a Director of a company or have investments
                        in unlisted equity shares during the financial year, you
                        must use ITR-2.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="itrflex">
                  <button className="btn itrFIleButton">File ITR-2 Here</button>
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
                  Individuals and HUFs with an income from Business or
                  Profession (PGBP) must submit Form ITR-3. This form can also
                  cover income from
                </p>
                <div className="itrlisection">
                  <ul>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span> Salary or Pension;</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Property;</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Capital Gains;</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        Other Sources (including Lottery Winnings and Race Horse
                        Winnings).
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="itrflex">
                  <button className="btn itrFIleButton">File ITR-3 Here</button>
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
                  Individuals who generate income from the following sources
                  must file ITR 4 Form:
                </p>
                <div className="itrlisection">
                  <ul>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Business Income under Sections 44AD/44AE</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>Professional Income as per Section 44ADA</span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        Salary or Pension Income not exceeding Rs. 50 lakh
                      </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        Income from One House Property (excluding any brought
                        forward or loss to be brought forward) up to Rs. 50 lakh
                      </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        Income from Other Sources up to Rs.50 lakh (excluding
                        winnings from lottery/horse races)
                      </span>
                    </li>
                    <li>
                      <img src={checkcircle} alt="checkcircle" />
                      <span>
                        Freelancers generating income not exceeding Rs.50 lakh
                        must also file Form ITR 4.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="itrflex">
                  <button className="btn itrFIleButton">File ITR-4 Here</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-3 mb-3 mainsectionflexdiv">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-5">
                <div className="card itrWhyFiling" style={{ marginTop: "50%" }}>
                  <div className="card-body text-center">
                    <section className="itrflex">
                      <div className="backgroundcircleSvg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          class="bi bi-file-earmark-bar-graph-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                        </svg>
                      </div>
                    </section>

                    <span>Why First Filing?</span>
                    <p>
                      First Filing is an AI - driven technology platform which
                      provides legal & financial services through its team of
                      professionals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5">
                <div className="card itrWhyFiling2">
                  <div className="card-body text-center">
                    <section className="itrflex">
                      <section className="itrflex">
                        <div className="backgroundcircleSvg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            class="bi bi-file-earmark-bar-graph-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                          </svg>
                        </div>
                      </section>
                    </section>

                    <span>Asia Top 10 Consulting Firms</span>
                    <p>
                      First Filing, is a professional service firm, which
                      provides a range of Government registration besides
                      Taxation services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5">
                <div className="card itrWhyFiling2">
                  <div className="card-body text-center">
                    <section className="itrflex">
                      <div className="backgroundcircleSvg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          class="bi bi-file-earmark-bar-graph-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                    </section>

                    <span>99.9% Client Satisfaction</span>
                    <p>
                      As a professional service firm we are continually striving
                      to improve the service we offer to our client.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>

              <div className="col-md-5">
                <div className="card itrWhyFiling2" style={{ marginTop: "2%" }}>
                  <div className="card-body text-center">
                    <section className="itrflex">
                      <div className="backgroundcircleSvg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          class="bi bi-file-earmark-bar-graph-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z" />
                        </svg>
                      </div>
                    </section>
                    <span>Excellent Advisory Services</span>
                    <p>
                      We are best in rendering consultancy services in the
                      industry through expert professionals associated with us.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <span className="titleOfFirstFilling">
              Why Choose First Filling?
            </span>
            <p className="itrPageDescription">
              At First Filing, we use technology to make your life easier. We're
              always available to respond to your calls and emails quickly.
              Plus, we have tons of automation and customer empowerment tools
              that make it super easy to get in touch with us.
            </p>

            <section className="whyFirstFilingLi">
              <ul>
                <li>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <span>
                    We offer corporate services that take the stress out of
                    registering your establishment. Our team will educate you
                    and suggest the best approach for your project after doing
                    thorough research and inspection.
                  </span>
                </li>
                <li>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <span>
                    And if you need global certification and approval, we've got
                    you covered. We have an extensive network around the world
                    that can get you what you need without any hassle.
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <section className="marginOfImage">
              <div className="">
                <img src={incometax_men2} width="70%" alt="" />
              </div>
              <NavLink to="/Contact" onClick={()=>localStorage.setItem("setEmailAdress","consult@firstfiling.in")}>
              <button className="btn itrFIleButton">Consult A Call</button>
              </NavLink>
            </section>
          </div>

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
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Invested in stocks and mutual funds?</p>
            </div>

            <p className="fearItrp">
              All you have to do is upload your P&L report, and we'll
              automatically fill in your information and handle filing.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Pension income and interest income? </p>
            </div>

            <p className="fearItrp">
              No sweat! Just add the details to the Income Sources Page, and
              we'll do the rest.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Have foreign income?</p>
            </div>

            <p className="fearItrp">
              We're equipped to handle that too! Add your foreign income details
              under income sources, and we'll help you file your returns
              effortlessly.
            </p>
          </div>

          <div className="col-md-6 mt-3 mb-3 incometaxreture_4">
            <span className="">
              Benefits of filing ITR as a Salaried Individual:
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

          <div className="col-md-6 mt-3 mb-3 douts_section">
            <img src={doubts_img} alt="" />
          </div>

          <div className="col-md-5 IncometaxItr_img mt-3">
            <div className="incometax_img_">
              <img src={IncometaxItr} alt="" />
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 incometaxreture_4 IncometaxItr_img mt-3 ">
            <span className="">Documents Required</span>

            <div class="gstlist_10 ">
              <ul>
                <li>PAN</li>
                <li>Form-16 issued by your employer</li>
                <li>Month-wise salary slips</li>
              </ul>
              <button className="btn itrFIleButton">
                Confirm Your Documents
              </button>
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
              Process of Income Tax Return Registration in 5 steps
            </span>

            <p className="partnershiptollp_p text-center">
              Here are five simple steps to register your income tax return:
            </p>
          </div>

          <div class="col-md-2 col-6">
            <img src={clock6} width="100%" alt="" />
          </div>
          <div class="col-md-2 col-6">
            <div class="bg-clock1">
              <div class="bg-clock">
                <span>1</span>
                <p>
                  Gather all <br /> the required <br /> documents
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
                  Choose an <br /> e-filing portal
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
                  Register on <br /> the portal
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
                  Upload your <br /> income details
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
                  Submit your <br /> Income Tax <br /> Return
                </p>

                <img src={outer} width="100%" alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-12 mt-3">
            <div class="partnershiptollpli">
              <ul>
                <li>
                  You will need to gather all your income-related documents,
                  such as Form 16, salary slips, bank statements, and any other
                  relevant financial statements.
                </li>
                <li>
                  Choose a government-approved e-filing portal to register your
                  income tax return. You can choose from the official website of
                  the Income Tax Department, or other authorized third-party
                  websites.
                </li>
                <li>
                  Once you have selected the e-filing portal, register yourself
                  by providing all the necessary details such as name, date of
                  birth, PAN, and contact information.
                </li>
                <li>
                  After registering on the e-filing portal, you need to upload
                  your income details such as Form 16, salary slips, bank
                  statements, and any other relevant financial statements.
                </li>
                <li>
                  The last step is to verify your income details and submit your
                  Income Tax Return (ITR) online. You can verify your ITR using
                  Aadhaar OTP, bank account OTP, or through the e-verification
                  code. Once you have successfully submitted your ITR, you will
                  receive an acknowledgment receipt.
                </li>
              </ul>
            </div>
            <p className="partnershiptollp_p">
              That's it! These five simple steps will help you register your
              income tax return and stay compliant with the tax authorities.
            </p>
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
            <p className="Boldpartnershiptollp_p text-center">Why Choose First Filling?</p>
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
