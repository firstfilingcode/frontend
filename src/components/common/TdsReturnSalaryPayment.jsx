import React, { useState } from "react";
import ServiceType2 from "../Services/ServiceType2";
import costTds from "../common/Images/costTds.png";
import calTDS from "../common/Images/calTDS.png";
import JanTDS from "../common/Images/JanTDS.png";
import TDSimg_1 from "../common/Images/TDSimg_1.png";
import advanTds from "../common/Images/GraphGif.gif";
import RedArrow from "../common/Images/RedArrow.gif";
import certificategif from "../common/Images/certificategif.gif";
import ServiceName from "../Services/NameOfService";
import secureLocalStorage from "react-secure-storage";
import { NavLink } from "react-router-dom";
import Faq from "../FAQ/Faq";
import Enquiry2 from "../Enquiry/enquiry2";

function TdsReturnSalaryPayment() {
  const [buyNow, setbuyNow] = useState("");
  window.addEventListener("itr_service", () => {
    setbuyNow(
      secureLocalStorage.getItem("itr_service_price").base_price_redirect
    );
  });
  return (
    <>
      <div className="container">
        <ServiceName />
        <div className="row">
          <div className="col-md-6">
            <span className=" itrPageHeading">
              Tax Deducted at Source Return
            </span>
            <div className="fixwidthPremtive">
              <p className="itrPageDescription">
                Quickly file error-free TDS Returns with FirstFiling. This
                ensures seamless credit to the deductee. Prices Starting INR
                999/-.
              </p>
            </div>

            {buyNow !== "" ? (
              <NavLink to={"/OrderSummary2/" + buyNow}>
                <button className="fileNowBtn btn">Buy Now</button>
              </NavLink>
            ) : (
              ""
            )}
            <section className="TDStopimig">
              <img src={RedArrow} alt="RedArrow" className="redArrow" />
            </section>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <Enquiry2 />
          </div>
        </div>
      </div>
      <section>
        <section className="ServiceBack22">
          <ServiceType2 />
        </section>
      </section>

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6">
            <p className="titleOfFirstFilling">What is TDS return filing</p>
            <p className="partnershiptollp_p">
              A GST return is a document containing details of all income/sales
              and/or expenses/purchases that a GST-registered taxpayer (every
              GSTIN) is required to file with the tax administrative
              authorities. This is used by tax authorities to calculate net tax
              liability.
            </p>

            <div class="partnershiptollpli">
              <ul>
                <li>PAN of the deductor and the deductee.</li>
                <li>Amount of tax that is paid to the government</li>
                <li>TDS challan information</li>
                <li>Others, if any.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <p className="titleOfFirstFilling">What is TDS</p>
            <p className="partnershiptollp_p">
              Tax deducted at source or TDS is the tax that is collected by the
              Government of India at the time when a transaction takes place.
              Here, in this case, the tax is to be deducted at the time the
              money is credited to the payee's account or at the time of payment
              whichever happens earlier.
            </p>
            <p className="partnershiptollp_p">
              In this case of salary payment or the life insurance policy, the
              tax is deducted at the time when the payment is done. The deductor
              is required to deposit this amount with the Income Tax Department.
              Through TDS a portion of the tax is paid directly to the Income
              Tax Department. The Tax is deducted usually over a range of 10%.
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12 mt-3 mb-3">
            <p className="titleOfFirstFilling">
              Who is Eligible for TDS Return
            </p>
          </div>
          <div className="col-md-7 TDSresived_text">
            <p className="partnershiptollp_p">
              Employers and organisations with a valid TAN are qualified for
              filing TDS returns. Individuals whose accounts are audited under
              Section 44AB, and hold an office under the government or companies
              are liable to file online TDS returns every quarter.
            </p>
            <p className="partnershiptollp_p">
              It means that the deductor can be – an individual, group of
              individuals, HUFs, limited companies, local authorities, an
              association of individuals, partnership firms, etc.
            </p>
            <p className="partnershiptollp_p">
              As per ITA, TDS is filed against these following pay-outs -
            </p>

            <div class="partnershiptollpli">
              <ul>
                <li>Salary income</li>
                <li>Income on securities</li>
                <li>Insurance commission</li>
                <li>Pay-outs towards NSC</li>
                <li>Earnings generated on winning horse race</li>
                <li>Earnings generated on winning a lottery, puzzles, etc.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 costTds_bt text-center">
            <img src={costTds} alt="costTds" width={"100%"} />
            <button className="btn itrFIleButton">
              Schedule Free Consultation
            </button>
          </div>
        </div>

        <div className="row calTds_section">
          <div className="col-md-12 mt-3 mb-3">
            <p className="titleOfFirstFilling">
              When should TDS be deducted and by whom?
            </p>
          </div>
          <div className="col-md-7 TDSresived_text">
            <p className="partnershiptollp_p">
              Any person making specified payments mentioned under the Income
              Tax Act is required to deduct TDS at the time of making such
              specified payment. But no TDS has to be deducted if the person
              making the payment is an individual or HUF whose books are not
              required to be audited.
            </p>
            <p className="partnershiptollp_p">
              However, in case of rent payments made by individuals and HUF
              exceeding Rs 50,000 per month, are required to deduct TDS @ 5%
              even if the individual or HUF is not liable for a tax audit. Also,
              such Individuals and HUF liable to deduct TDS @ 5% need not apply
              for TAN. Your employer deducts TDS at the income tax slab rates
              applicable. Banks deduct TDS @10%. Or they may deduct @ 20% if
              they do not have your PAN information.
            </p>
          </div>
          <div className="col-md-5 p-2">
            <img src={calTDS} className="mobileImg" />
          </div>
          <div className="col-md-5 p-2 janTds_bt text-center">
            <img src={JanTDS} className="mobileImg" />
            <button className="btn itrFIleButton">
              Schedule Free Consultation
            </button>
          </div>
          <div className="col-md-7 TDSresived_text">
            <p className="partnershiptollp_p">
              For most payments rates of TDS are set in the income tax act and
              TDS is deducted by the payer basis of these specified rates. If
              you submit investment proofs (for claiming deductions) to your
              employer and your total taxable income is below the taxable limit
              – you do not have to pay any tax. And therefore no TDS should be
              deducted from your income.
            </p>
            <p className="partnershiptollp_p">
              Similarly, you can submit Form 15G and Form 15H to the bank if
              your total income is below the taxable limit so that they don’t
              deduct TDS on your interest income. In case you have not been able
              to submit proofs to your employer or if your employer or bank has
              already deducted TDS and your total income is below the taxable
              limit) – you can file a return and claim a refund of this TDS. The
              complete list of Specified Payments eligible for TDS deduction
              along with the rate of TDS.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              TDS Return for Individuals and Businesses
            </p>
          </div>
          <div className="col-md-12 TDSresived_text">
            <p className="partnershiptollp_p ">
              An employer or company with a valid TAN - Tax Collection and
              Deduction Account Number can file for an online TDS return. Any
              individual or business that makes a particular payment stated
              under the I-T Act needs to deduct tax at source. The deposit for
              the same has to be made within the stipulated time. The payment
              categories include:
            </p>
          </div>
          <div className="col-md-6">
            <div class="partnershiptollpli">
              <ul>
                <li>Salary</li>
                <li>Insurance commission</li>
                <li>Income from winning horse races</li>
                <li>Income by way of 'Income on Securities'</li>
                <li>
                  Income by way of winning the lottery, puzzles, and others
                </li>
                <li>
                  Payment in respect of National Saving Scheme and many <br />{" "}
                  others
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 TDSresived_text">
            <p className="partnershiptollp_p">
              An assessee can submit an e-TDS return if the same was deducted
              from their income. As mentioned earlier, it is the obligation of
              the assessee to file within the due date or be liable to pay the
              penalty for delay. The categories of assessees eligible to
              electronically file TDS return every quarter are:
            </p>
            <div class="partnershiptollpli">
              <ul>
                <li>Company</li>
                <li>Persons whose accounts are audited u/s44AB</li>
                <li>Persons holding an office under the Government</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Benefits of TDS Return Filing Online
            </p>
          </div>
          <div className="col-md-12 TDSresived_text">
            <p className="partnershiptollp_p">
              As per the IT Act of 1961 filing TDS return is mandatory as well
              as it fetches some benefits to person or company. A few advantages
              of submitting a return and knowing the refund status are
            </p>
          </div>
          <div className="col-md-6 TDSresived_text">
            <div class="partnershiptollpli">
              <ul>
                <li>A steady inflow of income to the government.</li>
                <li>
                  Facilitates a smooth collection of taxes used for welfare.
                </li>
                <li>
                  No burden of paying tax lump sum as the payment is done every
                  three months for the whole year
                </li>
              </ul>
            </div>
            <p className="partnershiptollp_p">
              Now you can calculate TDS on salary online at Vakilsearch. With
              the help of the online TDS Interest Calculator, you can calculate
              your TDS while you sit at home.
            </p>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 advanTds_img_bt text-center">
            <img src={advanTds} width="100%" />
            <button className="btn itrFIleButton">
              Schedule Free Consultation
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mt-3 mb-3">
            <p className="titleOfFirstFilling">What Is a TDS Certificate</p>
          </div>
          <div className="col-md-4 text-center">
            <img src={certificategif} className="mobileImg" width={"100%"} />
            <button className="btn itrFIleButton">
              Schedule Free Consultation
            </button>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6 TDSresived_text">
            <p className="partnershiptollp_p">
              A TDS Certificate, also known as Form 16 or Form 16A, is a
              document issued by an employer or other deductor to an employee or
              payee that details the tax deducted at source (TDS) from their
              salary or income.
            </p>
            <p className="partnershiptollp_p">
              It is issued at the end of the financial year and includes
              information such as the amount of income earned, the number of TDS
              deducted, and the amount of tax paid by the employee or payee. The
              employee or payee uses the TDS Certificate to claim credit for the
              tax paid while filing their income tax returns.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mt-3 mb-3">
            <p className="titleOfFirstFilling">TDS Return Forms: An Overview</p>
          </div>
          <div className="col-md-12 TDSresived_text">
            <p className="partnershiptollp_p">
              As the deductor is liable to deduct tax and file the TDS Return
              form as the supporting document, it is important to note that
              there are various types of TDS Return Forms for different
              situations. The type of TDS Return Form to be submitted is based
              on the Nature of Income of the deductee or the type of deductee
              who pays the TDS.
            </p>
          </div>
          <div className="col-md-12">
            <section className="responsiveTable">
              <table class="table table-bordered BusinessTable gstreturnTable_content">
                <thead>
                  <tr className="theadRow">
                    <th>Type of TDS Return Forms</th>
                    <th>Particulars of the TDS Return Forms</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tbodyRow1">
                    <td>Form 24Q</td>
                    <td>Statement for tax deducted at source from salaries</td>
                  </tr>
                  <tr className="tbodyRow2">
                    <td>Form 26Q</td>
                    <td>
                      Statement for tax deducted at source on all payments other
                      than salaries.
                    </td>
                  </tr>
                  <tr className="tbodyRow1">
                    <td>Form 27Q</td>
                    <td>
                      Statement for tax deduction on income received from
                      interest, dividends, or any other sum payable to non
                      residents.
                    </td>
                  </tr>
                  <tr className="tbodyRow2">
                    <td>Form 27EQ</td>
                    <td>Statement of collection of tax at source.</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>

          <div className="col-md-12">
            <p className="partnershiptollp_p">
              Let us study in detail the various types of TDS Return Forms.
            </p>
          </div>
          <div className="col-md-6 TdsTable_content ">
            <p className="">Form 24Q:</p>
            <div class="partnershiptollpli">
              <ul>
                <li>
                  It is used for preparing eTDS returns for the TDS deducted on
                  salary under Section 192 of the Income Tax Act, 1961.
                </li>
                <li>
                  It has to be submitted on a quarterly basis by the deductor.
                </li>
                <li>
                  It contains details like salaries paid and the TDS deducted of
                  the employees by the employer.
                </li>
                <li>
                  It contains 2 annexures namely Annexure-I and Annexure II.
                  Annexure-I contains details of the deductor, deductees and
                  challans, while Annexure II contains the salary details of the
                  deductees.
                </li>
                <li>
                  Annexure-I is to be submitted by the deductor for all the four
                  quarters of the financial year.
                </li>
                <li>
                  Annexure II need not be submitted in the first three quarters
                  of the financial year, but has to be furnished and submitted
                  in the fourth quarter of the financial year with details of
                  the employees’ salaries of the entire financial year.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 TdsTable_content ">
            <p className="">Form 26Q:</p>
            <div class="partnershiptollpli">
              <ul>
                <li>
                  It is to be submitted for tax deduction at source for all the
                  payments received other than the salary.
                </li>
                <li>
                  It is submitted on a quarterly basis by the deductor and is
                  applicable for tax deducted at source under section 200(3),
                  193 and 194 of the Income Tax Act of 1961.
                </li>
                <li>
                  The income on which the tax is deducted at source includes
                  interest on securities, dividend securities, professional
                  fees, directors’ remuneration, etc.
                </li>
                <li>
                  It is compulsory to furnish PAN by the deductors who are
                  non-government deductors. For government deductors
                  “PANNOTREQD” has to be mentioned on the form.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 TdsTable_content ">
            <p className="">Form 27Q:</p>
            <div class="partnershiptollpli">
              <ul>
                <li>
                  It is applicable for payments made to non-resident Indians and
                  foreigners other than salary.
                </li>
                <li>
                  It has to be filled in for the declaration of Tax Deducted at
                  source for the NRIs and Foreigners.
                </li>
                <li>
                  It is submitted on a quarterly basis by the deductor and is
                  applicable for tax deducted at source under section 200(3) of
                  the Income Tax Act of 1961.
                </li>
                <li>
                  The income on which the tax is deducted at source includes
                  interest, bonus, any additional income or any other sum owed
                  to non-resident Indian or foreigner.
                </li>
                <li>
                  It is compulsory for non-government deductors to furnish PAN.
                  For government deductors the code “PANNOTREQD”has to be
                  mentioned on the form.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 TdsTable_content ">
            <p className="">Form 27EQ:</p>
            <div class="partnershiptollpli">
              <ul>
                <li>
                  It is a quarterly statement that furnishes the details and
                  information of the tax collected at source as per section 206C
                  of the Income Tax Act of 1961.
                </li>
                <li>
                  The form 27EQ is submitted on a quarterly basis. In this form
                  it is mandatory to furnish TAN.
                </li>
                <li>
                  It is the statement to show the Tax Collected at Source (TCS),
                  which is the tax collected by the seller. When a buyer
                  purchases certain goods or commodities, the seller collects
                  the tax from the buyer through the TCS route. This tax is
                  collected on the payment received from the buyer either in
                  cash, credit, cheque, demand draft or from any other mode of
                  payment.
                </li>
                <li>
                  It is to be furnished by corporate deductors and collectors
                  but not by government deductors and collectors. It is
                  compulsory to furnish PAN by the deductors who are
                  non-government deductors. For government deductors, the code
                  “PANNOTREQD” has to be mentioned on the form.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mt-3 mb-3">
            <p className="titleOfFirstFilling">
              How Do We Help in Filing TDS Return?
            </p>
          </div>
          <div className="col-md-12 TDSresived_text">
            <p className="partnershiptollp_p">
              Every deductor must submit a TDS return to the Income Tax
              Department of India in quarterly statements. Every detail of the
              returns has to be accurate and precise. Keeping up with the
              quarterly payments can be cumbersome, and if not done on time, you
              may attract huge penalty.
            </p>
            <p className="partnershiptollp_p">
              The IT department sets the rate of TDS based on expenses
              recognised by them. Hence the prescribed rate of the deduction
              varies. Keeping the threshold limit in mind while making payments
              can be tedious.
            </p>
            <p className="partnershiptollp_p">
              Once you choose us, our affiliates prepare the account and file a
              TDS refund on your behalf. From the very first stage of preparing
              the returns till the last phase of the refund, we act as your
              consultants. Vakilsearch does all the paperwork for you and
              ensures that every government interaction is smooth. Our process
              is truly transparent and always meets your expectations. We take
              care of:
            </p>
            <div class="partnershiptollpli">
              <ul>
                <li>Computing your TDS payments</li>
                <li>e-filing the TDS return</li>
                <li>Adherence to compliance with regulations</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row panRow">
          <div className="col-md-12 mt-3 mb-3">
            <p className="titleOfFirstFilling">TDS Returns-Process Flow</p>
          </div>
          <div className="col-md-1" />
          <div className="col-md-2">
            <div className="pan-back">
              <div className="TDSreturn_prossess">
                <span className="pan-count">1</span>
                <p className="panbox-text">
                  We receive TAN <br /> and Challans
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="TDSreturn_prossess1">
                <span className="pan-count">2</span>
                <p className="panbox-text">
                  You fill in a <br /> simple excel <br /> template
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="TDSreturn_prossess2">
                <span className="pan-count">3</span>
                <p className="panbox-text">
                  Your return is <br /> prepared
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="TDSreturn_prossess3">
                <span className="pan-count">4</span>
                <p className="panbox-text">
                  Your return is <br /> submitted
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="TDSreturn_prossess4">
                <span className="pan-count">5</span>
                <p className="panbox-text">
                  You receive <br /> return <br /> acknowledgem <br /> ent
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row">
          <div className="col-md-12 mt-3 mb-3">
            <p className="titleOfFirstFilling">TDS Returns-Process Flow</p>
          </div>
          <div className="col-md-12 TDSresived_text">
            <p className="partnershiptollp_p">
              For any person who has a TDS reduction in their pay, TDS return
              can be filed online. Return preparation has to be done within the
              prescribed time frame because for individuals who are deemed as
              regular defaulters in India, a grave penalty can be charged.
              Therefore submitting an e-TDS Return in the prescribed time is
              essential.
            </p>
            <p className="partnershiptollp_p">
              For the deductor, it is vital to deposit the subtracted TDS to the
              concerned government department along with the details.
            </p>
            <p className="partnershiptollp_p">
              For online TDS returns, everyone who has made the TDS deduction
              should file the TDS return without fail. The deductor should make
              the quarterly submissions at the Income Tax department. Different
              types of forms are available in accordance with the change in the
              intent of the TDS deductions made. The PAN details of both the
              deductees and the deductor should be added in the statement. The
              statement should also contain information about the TDS challan
              and the tax details, among other important details.
            </p>
            <p className="partnershiptollp_p">
              In online TDS return, the statement/ TDS return is defined as the
              summary of every transaction made in relation to the quarterly TDS
              payments. This statement should be submitted by the deductor to
              the department of income tax for filing income tax returns.
            </p>
            <p className="partnershiptollp_p">
              The period within which the deductor should deposit the amount,
              and the deductee has to file for TDS refund, are given below. It
              is essential to stick to the schedule to avoid incurring a
              penalty.
            </p>
            <p className="partnershiptollp_p">
              For all deductors, the submission of TDS return is mandatory. It
              contains the details of TDS deductions and deposits made by the
              deductor. It should also contain PAN card details of both
              deductees and deductor, tax paid particulars, information about
              TDS challan and any other extra information the form demands.
            </p>
          </div>
          <div className="col-md-6 TDSresived_text">
            <h6 className="titleOfFirstFilling">Filing Revised TDS Returns</h6>

            <p className="partnershiptollp_p">
              In the case of online TDS return, if there are any errors
              committed due to incorrect challan details, incorrect PAN details
              or lack of PAN card details, the amount which is credited as the
              tax will not be reflected in the Form 16A/Form16/Form 26AS. In
              such cases a revised TDS return must be filed.
            </p>
            <p className="partnershiptollp_p">
              To file a revised TDS return, you need two files - a consolidated
              file containing the details of the deductions made in the quarter;
              and the one is the justification report containing the information
              on the errors filed in the return.
            </p>
          </div>
          <div className="col-md-6 TDSresived_text">
            <h6 className="titleOfFirstFilling">
              The Period of Filing TDS Refund
            </h6>

            <p className="partnershiptollp_p">
              While filing online TDS returns, if you pay in excess of the
              actual tax amount payable, you will be eligible to claim TDS
              refund. The time within which the refund is done depends on
              whether you have made the income tax return filing before or after
              the due date. If the returns were filed on time, you will receive
              the refund of the excess amount within 3-6 months.
            </p>
            <p className="partnershiptollp_p">
              In online TDS return, if there is a case of late filing or failure
              to file the returns, the individual or the company will have to
              face two types of penalties:
            </p>
            <div class="partnershiptollpli">
              <ul>
                <li>The late filing fee- U/s 2 and 234E</li>
                <li>Non-filing penalty - U/s 271 H</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row TDSimg_section">
          <div className="col-md-6 TDSresived_text">
            <h6 className="titleOfFirstFilling">
              Documents Required for TDS Returns
            </h6>

            <p className="partnershiptollp_p">
              The following documents have to be submitted for filing the TDS
              returns.
            </p>

            <div class="partnershiptollpli">
              <ul>
                <li>TAN details</li>
                <li>PAN details</li>
                <li>Last TDS filing details, if applicable</li>
                <li>The period for which TDS has to be filed</li>
                <li>Date of incorporation of the business</li>
                <li>No. of transactions for filing TDS returns</li>
                <li>Name of the entity - Proprietorship/ / Company/ LLP</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="gstdocument_smallimg gstdocument_smallimg1">
              <img src={TDSimg_1} alt="" />
            </div>
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
}
export default TdsReturnSalaryPayment;
