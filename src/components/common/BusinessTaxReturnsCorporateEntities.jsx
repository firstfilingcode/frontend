import React, { useState } from "react";
import ServiceType2 from "../Services/ServiceType2";
import Footer from "./Footer";
import Header from "./Header";
import Rebates2 from "../common/Images/Rebates2.png";
import calculate from "../common/Images/calculate.png";
import Persent from "../common/Images/Persent.png";
import Persent2 from "../common/Images/Persent2.png";
import Rebates from "../common/Images/Rebates.png";
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
            <section className="businessBackAnimation">
              <span className=" itrPageHeading">Incorporate A Subsidiary</span>

              <div className="fixwidthPremtive">
                <p className="itrPageDescription">
                  Reduce the tax burden on your firm. Pay corporate tax in India
                  on time, that too in just a few clicks through Vakilsearch.
                </p>
                <div className="partnershiptollpli">
                  <ul>
                    <li>Guaranteed Error-Free Tax Filing</li>
                    <li>Maximum Tax Savings Solutions</li>
                    <li>Expert CA-Assisted Tax Filing</li>
                  </ul>
                </div>
              </div>

              {buyNow !== "" ? (
                <NavLink to={"/OrderSummary2/" + buyNow}>
                  <button className="fileNowBtn btn">Buy Now</button>
                </NavLink>
              ) : (
                ""
              )}
            </section>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <Enquiry2 />
          </div>
        </div>
      </div>
      <section>
        <section className="sevicesBack21">
          <ServiceType2 />
        </section>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Corporate Entities: Definitions and Types
            </p>
          </div>

          <div className="col-md-6">
            <p className="Boldpartnershiptollp_p">Definition:</p>
            <p className="partnershiptollp_p">
              A corporation is a company that is separate from its shareholders
              legally. Both domestic and foreign businesses are required to pay
              corporate tax in India under the Income-tax Act. In order to
              calculate the corporate tax in India the companies are further
              categorised as domestic and foreign companies. The domestic
              companies are registered under the Indian Companies Act. It
              involves any company that has its entire business and management
              in India.
            </p>
            <p className="partnershiptollp_p">
              On the other hand foreign companies are firms that are not
              registered under the Indian companies Act and have their base and
              management outside of India. Foreign firms are liable for
              corporate taxes in India only when the income is earned within the
              continent. On the other hand, domestic companies are taxed on
              their overall income.
            </p>
            <p className="partnershiptollp_p">
              The income of a corporation in India is subject to corporate tax
              post deductions like depreciation, administrative expenses, cost
              of goods sold and salary expenses. In India, corporations both
              domestic and foreign must pay a corporation tax based on the
              corporate income tax rate and their yearly turnover.
            </p>
          </div>
          <div className="col-md-6">
            <p className="Boldpartnershiptollp_p">Types:</p>
            <p className="partnershiptollp_p">
              A corporate entity or corporation is an artificial person that is
              legally considered to have certain rights and duties such that by
              law it has an independent legal identity separate from that of its
              shareholders. India, corporations are classified into two
              different categories as follows:
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Domestic Corporations:</p>
            </div>

            <p className="fearItrp">
              A company that is established in India and is registered under
              India’s Companies Act, 2013 is termed as a Domestic Corporate.
              Even a foreign company can be considered as a domestic corporate
              if the Indian arm’s management and control is wholly based in
              India.
            </p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Foreign Corporations:</p>
            </div>

            <p className="fearItrp">
              In case of Foreign Corporation, as the name suggests, a company
              that is situated overseas and not in India is called a foreign
              corporate. Again, if some part of a foreign company’s management
              and control is situated outside of India, then also it is called a
              foreign company.
            </p>
          </div>
        </div>
        <div className="row mt-3 contact_image-text">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Calculation of Net Income for Corporates
            </p>
          </div>

          <div className="col-md-6">
            <p className="partnershiptollp_p">
              Corporate tax is computed on the net revenue or net income of a
              company. A net income/net revenue of a company is the total amount
              left with the company after making necessary deduction of various
              expenses. There are a host of expenses that a company incurs for
              selling goods. These expenses are as follows:
            </p>

            <div class="partnershiptollpli">
              <ul>
                <li>Incorporation of Company</li>
                <li>Application For DIN</li>
                <li>PAN and TAN Application</li>
                <li>EPFO and ESIC Registration</li>
              </ul>
            </div>

            <p className="partnershiptollp_p">
              The income of a company includes net profit earned from the
              business, rent income, capital gains or income from other sources
              such as interest income or dividend income.
            </p>
          </div>

          <div className="col-md-6">
            <section className="text-center">
              <img src={calculate} alt="calculate" className="mobileImg" />
            </section>
          </div>

          <div className="col-md-12">
            <span className="partnershiptollp_p">Thus </span>
            <span className="Boldpartnershiptollp_p">
              Net Revenue = Gross Revenue – (Expenses + Depreciation)
            </span>
          </div>
        </div>

        <div className="row">
          <p className="titleOfFirstFilling">Corporate Tax Rate in India</p>
          <p className="partnershiptollp_p">
            The rate of corporate tax in India varies from one type of company
            to another i.e. domestic corporations and foreign corporations pay
            tax at different rates. Additionally, depending on the type of
            corporate entity and the different revenues earned by each of them,
            the corporation tax rate differs based on a slab rate system.
            Presently for the assessment year 2019-2020, the corporation tax
            rates in India are as follows:
          </p>

          <section className="responsiveTable">
            <table class="table table-bordered BusinessTable">
              <thead>
                <tr className="theadRow">
                  <th>Type of Company</th>
                  <th>Corporate Tax Rate</th>
                  <th>Surcharge on Net Income Less than Rs. 1 crore</th>
                  <th>
                    Surcharge on Net Income greater than Rs. 1 Crore and less
                    than Rs. 10 Crore
                  </th>
                  <th>Surcharge on Net Income greater than Rs. 10 Crore</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tbodyRow1">
                  <td>Domestic with annual turnover upto Rs 250 Crore</td>
                  <td>25%</td>
                  <td>Nil</td>
                  <td>7%</td>
                  <td>12%</td>
                </tr>
                <tr className="tbodyRow2">
                  <td>Domestic Company with turnover more than Rs 250 Crore</td>
                  <td>30%</td>
                  <td>Nil</td>
                  <td>7%</td>
                  <td>12%</td>
                </tr>
                <tr className="tbodyRow1">
                  <td>Foreign Companies</td>
                  <td>40%</td>
                  <td>Nil</td>
                  <td>2%</td>
                  <td>5%</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="col-md-12">
          <p className="titleOfFirstFilling">
            Corporation Tax Rates in India for a Domestic Corporation
          </p>
          <p className="partnershiptollp_p">
            A Domestic Corporate/Corporation is a company that is of Indian
            origin and whose management is located entirely in India. The
            applicable rate of corporate tax for AY 2019-20 in case of domestic
            companies as mentioned below:
          </p>
        </div>
        <div className="row g-0">
          <div className="col-md-9 mt-3">
            <section className="responsiveTable">
              <table class="table table-bordered BusinessTable">
                <thead>
                  <tr className="theadRow">
                    <th>Gross Turnover</th>
                    <th>Tax Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tbodyRow1">
                    <td className="align-items-start">Upto Rs. 250 Crore</td>
                    <td>25%</td>
                  </tr>
                  <tr className="tbodyRow2">
                    <td>More than Rs. 250 Crore</td>
                    <td>30%</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
          <div className="col-md-3">
            <img src={Persent} alt="Persent" width={"100%"} />
          </div>
        </div>

        <div className="col-md-12">
          <div class="partnershiptollpli">
            <ul>
              <li>
                A domestic corporate entity with a turnover upto Rs. 250 Crore,
                pays a flat rate of 25% corporate tax.
              </li>
              <li>
                For a particular financial year, if the total revenue earned by
                a company exceeds Rs. 1 crore, then a surcharge corporate tax of
                5% is levied on such a corporation.
              </li>
              <li>
                A Health and Educational Cess at 4% is also charged for a
                domestic company.
              </li>
              <li>
                If a particular domestic company has its branches overseas, then
                same amount of corporate tax is also charged on the total global
                earnings of such a company. Corporate tax in case of domestic
                companies in India also considers the revenue that is earned by
                a domestic company abroad.
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-12">
          <p className="titleOfFirstFilling">
            Corporate Tax for Foreign Corporation in AY 2019-20
          </p>
          <p className="partnershiptollp_p">
            A foreign corporate is defined as a company that is not of Indian
            origin. Its management and control takes place outside of India.
            These corporations are not registered under the Companies Act 2013.
            The rules pertaining to the taxation process for a foreign company
            is completely different from that of a domestic corporate. It all
            depends on the taxation agreement made between India and other
            foreign countries. Like for example, the corporate tax rate for
            foreign corporation based out of the US will depend on the taxation
            agreement that India has with the United States.
          </p>
        </div>
        <div className="row g-0">
          <div className="col-md-3">
            <img src={Persent2} alt="Persent2" width={"100%"} />
          </div>
          <div className="col-md-9">
            <table class="table table-bordered BusinessTable">
              <thead>
                <tr className="theadRow">
                  <th>Nature of Income</th>
                  <th>Tax Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tbodyRow1">
                  <td>
                    Royalty received or fees for technical services received by
                    a foreign corporation from the government or any indian
                    concern under an agreement made before April 1, 1976 and
                    approved by the central government
                  </td>
                  <td>50%</td>
                </tr>
                <tr className="tbodyRow2">
                  <td>Any other Income from Indian Operations</td>
                  <td>40%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-12">
          <div class="partnershiptollpli">
            <ul>
              <li>
                A domestic corporate entity with a turnover upto Rs. 250 Crore,
                pays a flat rate of 25% corporate tax.
              </li>
              <li>
                For a particular financial year, if the total revenue earned by
                a company exceeds Rs. 1 crore, then a surcharge corporate tax of
                5% is levied on such a corporation.
              </li>
              <li>
                A Health and Educational Cess at 4% is also charged for a
                domestic company.
              </li>
              <li>
                If a particular domestic company has its branches overseas, then
                same amount of corporate tax is also charged on the total global
                earnings of such a company. Corporate tax in case of domestic
                companies in India also considers the revenue that is earned by
                a domestic company abroad.
              </li>
            </ul>
          </div>
        </div>

        <div className="row privetFlex">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">Corporate Tax Rebates</p>
            <p className="partnershiptollp_p">
              For forming an Indian subsidiary company there was various
              advantages in the business compliances in the case of the Indian
              subsidiary the following advantages will apply.
            </p>
          </div>

          <div className="col-md-6">
            <section className="text-center">
              <img src={Rebates} alt="Rebates" className="mobileImg" />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>
          <div className="col-md-6">
            <div class="partnershiptollpli">
              <ul>
                <li>Interest Income can be deducted in certain cases.</li>
                <li>Capital gains of a corporate entity are not taxed.</li>
                <li>
                  Dividends may also be subject to tax rebate with applicable
                  terms and conditions.
                </li>
                <li>
                  The corporate entity has an authority to carry the losses
                  incurred in the business for a maximum of 8 years.
                </li>
                <li>
                  If a corporate sets up new sources of power or new
                  infrastructure, then they can be subjected to certain
                  deductions.
                </li>
                <li>
                  In case of exports and new undertakings of a corporate,
                  certain amount of deductions are allowed to the corporate.
                </li>
                <li>
                  Various amounts of provisions for deductions are allowed if
                  the corporate wishes to venture capital enterprises or fund.
                </li>
                <li>
                  If a domestic corporate receives some amount of dividends from
                  other domestic corporate, they have the provision to deduct
                  such dividends as rebates.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mt-3">
            <p className="smalltitleofllp">
              Basics of Corporation Tax Planning
            </p>
            <p className="partnershiptollp_p">
              Every taxpayer including business corporations require some tax
              planning that will enable them to maximise their profits by
              reducing the tax payment burden. Corporate tax planning involves
              development of a strategy in order to achieve this goal, so the
              corporations hire professionals who are well tuned with all the
              rules and regulations regarding the laws pertaining to tax
              payments. Proper corporate tax planning is required as every
              business involves significant financial risk.
            </p>
            <p className="partnershiptollp_p">
              It is important to keep in mind that corporate tax planning and
              tax evasion are two completely different concepts. Tax evasion is
              non-payment of tax and a punishable offence by law. Whereas, tax
              planning is a strategy to determine the amount of tax payable in
              such a way that the corporate has more net profit and less tax to
              pay legally. For successful corporate tax planning in India, the
              corporation must be well aware of all the tax laws as well as the
              financial rules set up by the Government of India.
            </p>
          </div>
          <div className="col-md-6 mt-3">
            <p className="smalltitleofllp">Dividend Distribution Tax</p>
            <p className="partnershiptollp_p">
              Dividend refers to distribution of profits to shareholders of a
              company and Dividend Distribution Tax (DDT) is charged on the
              profits distributed by this process. On the other hand,
              Corporation Tax is the tax calculated on the net profit of a
              company after deducting expenses incurred by them. So, dividend
              distribution tax is a type of tax that is payable on the dividends
              offered to its shareholders by the corporate thus higher dividends
              mean a greater tax burden for the corporate entity. It can also be
              termed as the percentage on the dividends paid to the shareholders
              by that particular corporate.
            </p>
            <p className="partnershiptollp_p">
              Dividend distribution tax is governed as per the provisions of
              Section 115-O of the Income Tax Act, 1961. Presently, the dividend
              distribution tax that is payable on the dividends offered to a
              company’s shareholders is 15% of the gross amount distributed as
              dividend which means it is levied effectively at a rate of 17.65%.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Checklist for Corporate Tax in India
            </p>
            <p className="partnershiptollp_p">
              When filing for a corporate tax in India, the following
              information must be provided:
            </p>
          </div>

          <div className="col-md-8">
            <p className="smalltitleofllp">Dividend Distribution Tax</p>

            <div class="partnershiptollpli">
              <ul>
                <li>Account balance for year-end transactions</li>
                <li>
                  Specify If this is your first year submitting corporate tax in
                  India
                </li>
                <li>
                  Address of the business corporation, business number, name of
                  the business corporation, number, and date of incorporation
                </li>
                <li>
                  Name and share percentages of the shareholders main product or
                  service of the business
                </li>
                <li>Phone number and name of the president or director</li>
                <li>Previous years' corporation tax returns if available</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <section className="text-center">
              <img src={Rebates2} alt="Rebates2" className="mobileImg" />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>

          <div className="col-md-12 mb-3">
            <span className="smalltitleofllp">
              Information about corporate income
            </span>
          </div>

          <div className="col-md-4">
            <div class="partnershiptollpli">
              <ul>
                <li>
                  Corporate gross income Information on corporate expenses
                </li>
                <li>Publicity and promotion</li>
                <li>Business fees, memberships, and taxes</li>
                <li>Charges on a credit card</li>
                <li>Franchising costs</li>
                <li>Office costs at home</li>
                <li>Office costs</li>
                <li>Materials acquisition Salaries</li>
                <li>Employee salary</li>
                <li>Supplies</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div class="partnershiptollpli">
              <ul>
                <li>Insurance for businesses</li>
                <li>Costs associated with computers</li>
                <li>Donations</li>
                <li>Administrative and general costs</li>
                <li>Bank fees and interest</li>
                <li>Both food and entertainment</li>
                <li>Fees for expertise</li>
                <li>Warehouse and shipping costs for a rental</li>
                <li>Subcontracts</li>
                <li>Telephone</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div class="partnershiptollpli">
              <ul>
                <li>Travelling costs</li>
                <li>Vehicle and additional costs</li>
                <li>Information on dividend</li>
                <li>Details of the dividend to shareholders</li>
                <li>Account R/P information</li>
                <li>Account Receivable information</li>
                <li>Information on payables</li>
                <li>
                  Information regarding the price of corporate capital assets
                </li>
                <li>Tax rates applicable</li>
                <li>Taxes on Income</li>
              </ul>
            </div>
          </div>

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
