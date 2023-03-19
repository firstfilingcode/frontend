import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import IncometaxItr from "../common/Images/IncometaxItr.png";
import outer from "../common/Images/outer.png";
import clock6 from "../common/Images/clock6.png";
import incometax_men from "../common/Images/incometax_men.png";
import incometax_men2 from "../common/Images/incometax_men2.png";
import incometax_men2_register from "../common/Images/incometax_men2_register.png";
import doubts_img from "../common/Images/doubts_img.png";
import fine_1 from "../common/Images/fine_1.png";
import Faq from "../FAQ/Faq";
import Enquiry from "../Enquiry/enquiry";
import { Helmet } from "react-helmet";
import Services from "../Services/Services";
import ServiceName from "../Services/NameOfService";
function Itr3() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>First Filling-Gst Registration</title>
        <link rel="icon" href="" />
        <meta name="description" content="Gst" data-react-helmet="true" />
      </Helmet>
      <div className="backgroundvideoplay">
        <section className="video_backcolor">
          <Header />
          <div className="container">
            <ServiceName />
            <div className="row">
              <div className="col-md-5 mt-3 incometaxreture_2">
                <h3 className="slash_right">Free Consultation by Expert</h3>

                <p>
                  Get Expert assistance in tax filing for Salaried and
                  self-employed individuals, NRIs, Capital gains, and more.
                </p>

                <div className="income_box">
                  <div className="first_income_box">
                    <span>
                      No manual <br />
                      data entry
                    </span>
                  </div>
                  <div className="first_income_box">
                    <span>
                      100% <br />
                      pre-fill in a click
                    </span>
                  </div>
                  <div className="first_income_box ">
                    <span>
                      Maximum <br />
                      Tax savings
                    </span>
                  </div>
                </div>

                <button class="buynow_2 btn btn-secondary">
                  <span class="buytext">Schedule Free Consultation</span>
                </button>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 topEnquiry mt-3">
                <Enquiry />
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <div className="row what_income_row">
          <div
            className="col-md-12 slash_1 what_income_1 mb-4"
            data-aos="fade-bottom"
            data-aos-delay="500"
          >
            <span>What is Income Tax Returns?</span>
          </div>
          <div className="col-md-12 what_income_p">
            <p>
              Income tax return registration is the process of registering with
              the relevant taxation or revenue authority to ensure that you are
              paying the correct amount of tax on your income. This registration
              process is required for individuals, businesses, and other
              entities that receive income. The registration process requires
              the taxpayer to provide their contact details, as well as
              information about their income, assets, and liabilities.
            </p>
          </div>

          <div className="col-md-12 what_income_p">
            <p>
              Once the registration is complete, the taxpayer is liable to file
              their income tax returns and make any associated payments on time.
              It is important to ensure that the information provided on the
              income tax return registration is accurate in order to avoid any
              penalties or interest charges. Filing the correct income tax
              returns is a legal requirement, and failing to do so can result in
              serious penalties.
            </p>
          </div>

          <div className="col-md-12 mt-4 mb-4 incometaxreture_3">
            <span>Different types of Income Tax Forms in India :</span>
          </div>
          <div className="col-md-1">
            <div className="incometax_form_india">
              <p>ITR 1</p>
            </div>
          </div>
          <div className="col-md-11 incometax_form_india">
            <span>
              Individuals earning income from salary, single house property,
              agriculture, & Income from other sources. This form is to be filed
              by individual residents having total Income up to Rs. Fifty lakhs
              and agricultural Income up to Rs. 5,000.
            </span>
            <br />

            <span>
              {" "}
              <strong>Note: </strong>This is not applicable to an individual
              being director in a company, having invested in unlisted equity
              shares, or having foreign assets or foreign Income.
            </span>
          </div>
          <div className="col-md-1">
            <div className="incometax_form_india">
              <p>ITR 2</p>
            </div>
          </div>
          <div className="col-md-11 incometax_form_india">
            <span>
              This form is for individuals and HUFs earning from any source
              other than PGBP (profits and gain of business or profession). It
              may be from capital gain, lottery, foreign assets, etc., while
              total Income should exceed Rs. 50 lacs. In the case of agriculture
              income, it should exceed Rs. 5,000. Also, it is filed by those who
              invested in unlisted equity shares during the financial year.
            </span>
          </div>
          <div className="col-md-1">
            <div className="incometax_form_india">
              <p>ITR 3</p>
            </div>
          </div>
          <div className="col-md-11 incometax_form_india">
            <span>
              Individuals and HUFs have earnings from profits and gains of
              business or profession. It also needs to be filed by the
              individuals having their Income as a partner in a firm.
            </span>
          </div>
          <div className="col-md-1">
            <div className="incometax_form_india">
              <p>ITR 4</p>
            </div>
          </div>
          <div className="col-md-11 incometax_form_india">
            <span>
              For Individuals, HUFs, and Firms (other than LLP), being a
              Resident has an entire Income of up to Rs.50 lakhs from business
              or Profession. It also covers those who have opted presumptive
              income scheme under Section 44AD, Section 44ADA and Section 44AE
              of the Income Tax Act.
            </span>

            <br />

            <span>
              {" "}
              <strong>Note: </strong>This applies to individual director in a
              company or who has invested in unlisted equity shares
            </span>
          </div>
          <div className="col-md-1">
            <div className="incometax_form_india">
              <p>ITR 5</p>
            </div>
          </div>
          <div className="col-md-11 incometax_form_india">
            <span>
              ITR 5 is filed by firms, LLPs, AOPs (Association of Persons), Bois
              (Body of Individuals) etc.
            </span>
          </div>
          <div className="col-md-1">
            <div className="incometax_form_india">
              <p>ITR 6</p>
            </div>
          </div>
          <div className="col-md-11 incometax_form_india">
            <span>
              ITR 6 is filed by companies other than those claiming exemption
              under section 11 (Income from property held for charitable or
              religious purposes).
            </span>
          </div>
          <div className="col-md-1">
            <div className="incometax_form_india">
              <p>ITR 7</p>
            </div>
          </div>
          <div className="col-md-11 incometax_form_india">
            <span>
              It is required to be filed by those falling under section 139(4A)
              or section 139 (4B) or section 139 (4C) or section 139 4(D) that
              can either be individual or a company.
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row paddingbottomIncome">
          <div className="col-md-7 incometaxreture_4 ">
            <span className="slash_right">
              How Income Tax Return differs for business and individuals
            </span>

            <p>
              The differences between Income Tax Return filing for businesses
              and individuals can be quite substantial depending on the type of
              entity.
            </p>

            <div class="gstlist_10 mt-5">
              <ul>
                <li>
                  Businesses typically have to file more complex returns with
                  more deductions, credits, and other tax-related items than
                  individuals.
                </li>
                <li>
                  Businesses may need to file quarterly estimated tax payments
                  and a separate set of return forms depending on the type of
                  business they operate.
                </li>
                <li>
                  For individuals, their return is generally straightforward and
                  they can typically file a more simplified form.
                </li>
                <li>
                  Additionally, individuals are more likely to qualify for
                  certain tax deductions that are not available to businesses.
                </li>
                <li>
                  Businesses are also subject to different tax rates and may
                  qualify for special deductions or tax breaks that are not
                  available to individuals.
                </li>
                <li>
                  Generally, businesses have more complex tax requirements than
                  individuals and should consult with a tax professional to
                  ensure their return is filed correctly and efficiently.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-5">
            <div className="incometax_img_5">
              <img src={incometax_men} alt="" />
              <button class="buynow_2 btn btn-secondary">
                <span class="buytext">Schedule Free Consultation</span>
              </button>
            </div>
          </div>

          <div className="col-md-5 mb-5">
            <div className="incometax_img_6">
              <img src={incometax_men2} width="100%" alt="" />
              <img
                className="incometax_imG"
                src={incometax_men2_register}
                alt=""
              />
              <button class="buynow_2 btn btn-secondary">
                <span class="buytext">Schedule Free Consultation</span>
              </button>
            </div>
          </div>

          <div className="col-md-7 p-5 mb-5 what_income_11 what_income_31">
            <span className="slash_right">
              Eligibility Criteria for Income Tax Return Registration
            </span>
            <p>
              In India, income tax return registration is mandatory for all
              individuals who possess taxable income.
            </p>

            <div class="gstlist_10 mt-2">
              <ul>
                <li>
                  Eligibility criteria for income tax return registration in
                  India include having a valid PAN card, filing the return
                  within the prescribed due date, and earning an annual income
                  of more than Rs 2.5 lakhs.
                </li>
                <li>
                  Additionally, individuals who own a business and have an
                  annual turnover of more than Rs 1 crore, are also required to
                  register for income tax returns.
                </li>
                <li>
                  Individuals must also submit all relevant documents to the
                  Income Tax Department in order to be eligible for income tax
                  return registration.
                </li>
                <li>
                  Lastly, individuals must also provide accurate information in
                  the income tax return application form in order to complete
                  the registration process.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 mt-5 mb-5 incometaxreture_4">
            <span className="slash_right">
              What are the Benefits of Income Tax Return Filing
            </span>

            <p>
              Income tax return registration is an important step to ensure that
              you are compliant with the taxation policies of your country.
            </p>

            <div class="gstlist_10 mt-5">
              <ul>
                <li>
                  It offers numerous benefits, such as allowing you to file your
                  taxes online, access to tax-related assistance and advice, and
                  an easy way to track your income and deductions.
                </li>
                <li>
                  It also offers you the ability to receive refunds swiftly
                  after filing your tax returns. Furthermore, the registration
                  process will help you to keep yourself informed of any changes
                  in the taxation system, ensuring that you remain compliant.
                </li>
                <li>
                  Registration also provides a secure way to store your
                  tax-related information, allowing you to access it quickly as
                  needed.
                </li>
              </ul>
              <p>
                By signing up for income tax return registration, you can
                benefit from a streamlined and efficient filing process.
              </p>
            </div>
          </div>

          <div className="col-md-6 mt-5 mb-5 douts_section">
            <img src={doubts_img} alt="" />
            <button class="buynow_2 btn btn-secondary">
              <div class="loading" id="lodar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="buytext">Schedule Free Consultation</span>
            </button>
          </div>

          <div className="col-md-5 IncometaxItr_img mt-5">
            <div className="incometax_img_">
              <img src={IncometaxItr} alt="" />
            </div>
            <button class="buynow_2 btn btn-secondary">
              <div class="loading" id="lodar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="buytext">Schedule Free Consultation</span>
            </button>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 incometaxreture_4 IncometaxItr_img mt-5 ">
            <span className="slash_right">
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
                <li>
                  Data required regarding TDS return filing and advance tax
                  payments
                </li>
                <li>Investment proof</li>
                <li>TDS certificate in Form 16</li>
                <li>Interest income certificate in Form 16A</li>
                <li>Form 26AS</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 incometaxreture_4">
            <span className="slash_right">
              Penalty for not filing for Income Tax Returns
            </span>

            <p>
              The penalty for not filing an income tax return is serious and can
              have a long-term impact on an individual’s financial health.
            </p>

            <div class="gstlist_10 mt-5">
              <ul>
                <li>
                  The Internal Revenue Service (IRS) requires all individuals
                  and businesses to file an income tax return each year.
                </li>
                <li>
                  If an individual does not file a return, the IRS can assess a
                  penalty of up to 5% of the unpaid taxes for each month the
                  return is late, up to a maximum of 25%.
                </li>
                <li>
                  Additionally, the IRS will add a penalty of up to 100% of the
                  unpaid taxes if the return is more than 60 days late.
                </li>
                <li>
                  Furthermore, failure to file a return can also result in civil
                  and criminal penalties.
                </li>
              </ul>
              <p>
                It is important for all individuals and businesses to file their
                income tax returns on time, as failure to do so can have serious
                consequences.
              </p>
            </div>
          </div>

          <div className="col-md-6 douts_section">
            <div className="incometax_img_23">
              <img src={fine_1} alt="" />
            </div>
            <button class="buynow_2 btn btn-secondary">
              <div class="loading" id="lodar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="buytext">Schedule Free Consultation</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div
            className="col-md-12 slash_1 what_income_1 mb-4"
            data-aos="fade-bottom"
            data-aos-delay="500"
          >
            <span className="mb-5">
              Process of Income Tax Return Registration
            </span>
          </div>

          <div class="col-md-2">
            <img src={clock6} width="100%" alt="" />
          </div>
          <div class="col-md-2">
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
          <div class="col-md-2">
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
          <div class="col-md-2">
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
          <div class="col-md-2">
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
          <div class="col-md-2">
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
      </div>
      <Services />

      {/* <div id="calendar"></div> */}

      <div className="container">
        <div className="row backgroundcolor">
          <div className="col-md-12 mb-5 what_income_1 slash_1">
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
                <li>Provide Documents to Corpbiz Expert</li>

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
export default Itr3;
