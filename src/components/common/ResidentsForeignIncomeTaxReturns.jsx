import React, { useState } from "react";
import ServiceType2 from "../Services/ServiceType2";
import backgroundForPresumptive1 from "../common/Images/backgroundForPresumptive1.gif";
import incometax_men2 from "../common/Images/questionMark8.png";
import Presumptive12 from "../common/Images/Presumptive12.png";
import Presumptive11 from "../common/Images/calculator9.png";
import Presumptive10 from "../common/Images/Thumsup8.png";
import Presumptive9 from "../common/Images/TAX8.png";
import checkcircle1 from "../common/Images/checkCircle.svg";
import ServiceName from "../Services/NameOfService";
import secureLocalStorage from "react-secure-storage";
import { NavLink } from "react-router-dom";
import Faq from "../FAQ/Faq";
import Enquiry2 from "../Enquiry/enquiry2";

function ResidentsForeignIncomeTaxReturns() {
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
              Presumptive / Freelancing Income{" "}
            </span>
            <section className="Teamwork8">
              <div className="fixwidthPremtive">
                <p className="itrPageDescription">
                  Freelancing in India has a bright future. As per the Income
                  Tax Act, income from such profession will be taxable under the
                  head ‘Profits and Gains of Business and Profession’.The income
                  earned by a freelancer is also taxable under the same head.
                </p>
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

        <div className="col-md-12 mt-3">
          <p className="titleOfFirstFilling">
            Presumptive Tax – Easiest way to File Returns & Save Taxes for
            Creative Professionals
          </p>

          <p className="partnershiptollp_p text-center">
            Professions for the purpose of Indian tax laws
          </p>
        </div>

        <div className="row llpflex">
          <div className="col-md-2">
            <div class="partnershiptollpli">
              <ul>
                <li>Engineering</li>
                <li>Legal</li>
                <li>Architectural profession</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div class="partnershiptollpli">
              <ul>
                <li>YouTuber</li>
                <li>TikToker</li>
                <li>Vlogger</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div class="partnershiptollpli">
              <ul>
                <li>Medical</li>
                <li>Technical consultant</li>
                <li>Interior decoration</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div class="partnershiptollpli">
              <ul>
                <li>Blogger</li>
                <li>Accountant</li>
                <li>Interior decoration</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div class="partnershiptollpli">
              <ul>
                <li>Consultant</li>
                <li>Freelancers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <section className="sevicesBack21">
          <ServiceType2 />
        </section>
      </section>

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12 mt-3">
            <p className="titleOfFirstFilling">
              What are the TDS rates for freelancers?
            </p>
          </div>

          <div className="col-md-7">
            <p className="partnershiptollp_p">
              Tax Deducted at Source (TDS) is the amount of money deducted as
              tax by the payer before making a payment for any service. TDS is a
              part of your tax obligation to the government on your income. The
              only difference is that it is deducted before you receive payment.
            </p>

            <p className="partnershiptollp_p">
              In case of professional services, TDS is applicable at a rate of
              10% under Section 194J whenever a professional/ organisation pays
              a freelancer more than Rs 30,000 (per transaction or in total for
              the financial year). The deducted tax must be deposited with the
              government.
            </p>

            <p className="partnershiptollp_p">
              For instance, let us assume that you are a freelancer and have
              invoiced a client for ₹40,000. The client will subtract ₹4,000
              (10% of your invoiced amount) and pay you the remainder of
              ₹36,000. The client is responsible for depositing the deducted
              amount with the government as Tax Deducted at Source (TDS).
            </p>
          </div>

          <div className="col-md-5">
            <section className="backgroundForPresumptive">
              <img
                src={backgroundForPresumptive1}
                alt="backgroundForPresumptive"
              />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>
          <div className="col-md-6 itrnomatter">
            <p className="itrnomatterp">Do freelancers have to pay tax?</p>

            <p className="partnershiptollp_p">
              In India, there are 15 million freelancers. Around 40% of all
              freelance jobs offered around the world are done by freelancers
              from India (1). According to industry estimates the Indian
              'freelancers' market size is likely to grow to a whopping $20-$30
              billion by 2025(1).
            </p>

            <p className="partnershiptollp_p">
              Freelancers are the people who prefer working for themselves,
              mostly from home and not a registered company. They get hired to
              work on specific tasks for a specific duration and get paid upon
              the completion of their assignment.
            </p>

            <p className="partnershiptollp_p">
              But all of this comfort comes at a cost, and like other salaries
              of business professionals, freelancers also have to pay tax on
              whatever they earn.
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 itrnomatter">
            <p className="itrnomatterp">Presumptive Taxation</p>

            <p className="partnershiptollp_p">
              Sec 44ADA contains the provision for computing gains from
              profession on a presumptive basis.
            </p>

            <span className="boldTextItr">
              “A sum equal to or higher than 50 % of the total gross receipts”
            </span>
            <p className="partnershiptollp_p">
              shall be deemed to be the gain from such profession under the head
              "Profits and gains of business or profession.”In simple words, if
              a person is a specified professional and having gross receipts
              less than or equal to Rs. 50 lakhs then sec 44ADA is for him!
            </p>

            <p className="partnershiptollp_p">
              As per sec 44ADA, he has to offer at least 50% of his gross
              receipts as profit i.e. the amount on which tax shall be levied.
              or, we can say out of your gross receipts, government considers
              50% as expenses and 50 % as profit.
            </p>
          </div>

          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Applicability of Taxes and ITR Filing for Freelancers
            </p>

            <p className="partnershiptollp_p">
              Freelancers in India come under the purview of Income Tax and GST
              (Goods and Service Tax). Since freelancer also falls under the per
              view of GST, a freelancer would be required to get registered in
              the State/Union Territory (other than special category states)
              from where he makes taxable supplies of goods or services or both
              if his aggregate turnover exceeds ₹ 20 lakhs. However, if the
              freelancer is exclusively engaged in the supply of goods only, the
              threshold limit for obtaining registration is ₹ 40 lakhs.
            </p>

            <p className="partnershiptollp_p">
              In case of special category states (which includes Sikkim,
              Arunachal Pradesh, Himachal Pradesh, Uttarakhand, Assam &
              Meghalaya), the freelancer making taxable supplies has to obtain
              registration if the aggregate turnover exceed ₹ 10 lakhs (₹ 20
              lakhs in case of exclusive supply of goods only). Depending on the
              goods and services offered by the freelancer, the GST rate may
              vary.
            </p>

            <p className="partnershiptollp_p">
              Freelancers also need to pay income tax as per the applicable
              rate. The following are the income tax slabs and rates for
              Individual (resident or non-resident) under the age of 60 years
              anytime during the previous year:
            </p>

            <table class="table table-bordered itrTable" width={"100%"}>
              <thead>
                <tr className="theadRow">
                  <th className="th40persent">Tax Slab(₹)</th>
                  <th className="th20persent">Old Tax Rates</th>
                  <th className="th20persent">New Tax Rates</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tbodyRow1">
                  <td className="td40persent">0 – 2,50,000</td>
                  <td className="td20persent">0%</td>
                  <td className="td20persent">0%</td>
                </tr>
                <tr className="tbodyRow2">
                  <td className="td40persent">2,50,001 – 5,00,000</td>
                  <td className="td20persent">5%</td>
                  <td className="td20persent">5%</td>
                </tr>
                <tr className="tbodyRow1">
                  <td className="td40persent">5,00,001 – 7,50,000</td>
                  <td className="td20persent">20%</td>
                  <td className="td20persent">10%</td>
                </tr>
                <tr className="tbodyRow2">
                  <td className="td40persent">7,50,001 – 10,00,000</td>
                  <td className="td20persent">20%</td>
                  <td className="td20persent">15%</td>
                </tr>
                <tr className="tbodyRow1">
                  <td className="td40persent">10,00,001 – 12,50,000</td>
                  <td className="td20persent">30%</td>
                  <td className="td20persent">20%</td>
                </tr>
                <tr className="tbodyRow2">
                  <td className="td40persent">12,50,001 – 15,00,000</td>
                  <td className="td20persent">30%</td>
                  <td className="td20persent">25%</td>
                </tr>
                <tr className="tbodyRow1">
                  <td className="td40persent">15,00,001 & above</td>
                  <td className="td20persent">30%</td>
                  <td className="td20persent">30%</td>
                </tr>
              </tbody>
            </table>

            <p className="partnershiptollp_p">
              Depending on which tax regime the freelancer opts for, tax
              deductions can be claimed. Freelancers can make use of the
              Presumptive Taxation Scheme under Section 44AD or Section 44ADA of
              the Income Tax Act, 1961, depending on the nature of income he/she
              is earning. Let us learn in detail about the section and its
              benefits for freelancers.
            </p>
          </div>

          <div className="col-md-4">
            <section className="marginOfImage text-center">
              <div>
                <img
                  src={incometax_men2}
                  width={"217px"}
                  height="396px"
                  alt="incometax_men2"
                />
              </div>
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>

          <div className="col-md-8 itrnomatter">
            <p className="itrnomatterp">
              How can presumptive taxation benefit freelancers?
            </p>

            <p className="partnershiptollp_p">
              As a relief to freelancers, the government added them to the
              presumptive taxation category under Section 44AD of the Income Tax
              Act in 2016.
            </p>
            <p className="partnershiptollp_p">
              In order to relieve small taxpayers with a revenue of less than ₹
              2 crores from maintaining books of accounts, Section 44AD was
              enacted. The presumptive income system relieves the taxpayer from
              the requirement to maintain the books of accounts by allowing them
              to assume the minimum profits at a defined rate of the entire
              turnover.
            </p>

            <p className="itrnomatterp">
              How to calculate tax under section 44AD?
            </p>

            <p className="partnershiptollp_p">
              Section 44AD is a presumptive taxation scheme under which income
              is estimated on the basis of 8% of turnover (or 6% in the case of
              digital receipts and payments) and the taxpayer is not required to
              maintain books of accounts.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row paddingtopBottom">
          <div className="col-md-6 itrnomatter">
            <p className="itrnomatterp">What is Section 44ADA</p>

            <p className="partnershiptollp_p">
              Under Section 44ADA, the following freelancing professionals
              qualify for presumptive taxation if their gross income for the
              year does not exceed ₹50 lakhs:
            </p>

            <div className="row">
              <div className="col-md-6">
                <div class="partnershiptollpli">
                  <ul>
                    <li>Interior decorators</li>
                    <li>Technical consultants</li>
                    <li>Medical practitioners</li>
                    <li>Engineers</li>
                    <li>Other professionals:</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div class="partnershiptollpli">
                  <ul>
                    <li>Accountants</li>
                    <li>Architects</li>
                    <li>Lawyers</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-1"></div>
              <div className="col-md-11">
                <p className="afterArrowP">
                  Film artists, including a producer, actor, editor, director,
                  art director, music director, singer, dance director,
                  cameraman, lyricist, screenplay writer or dialogue writer,
                  story writer, and costume designer.
                </p>
                <p className="afterArrowP">Authorised representatives</p>
                <p className="afterArrowP">
                  Any notified professional other than these
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 itrnomatter">
            <p className="itrnomatterp">
              Why is Section 44ADA suitable for freelancers
            </p>

            <div class="partnershiptollpli">
              <ul>
                <li>
                  Freelancers generally don’t have a lot of expenses. This
                  scheme saves them the work of maintaining books of accounts.
                </li>
                <li>
                  Profits are presumptively equal to 50% of gross receipts under
                  the presumptive taxation system.
                </li>
                <li>
                  Deductions under Section 80 can also be claimed over and above
                  presumptive tax.
                </li>
                <li>
                  No need of maintaining books required under Section 44AA
                </li>
              </ul>
            </div>

            <p className="partnershiptollp_p">
              This scheme has given impetus to the ever-growing community of
              freelancers in India.
            </p>

            <section className="text-justify">
              <spna>
                <b>Note : </b>
              </spna>
              <span className="llpNote">
                In accordance with the Presumptive Taxation Scheme, freelancers
                may file income tax returns using the ITR-4 Form. Freelancers
                who choose not to take advantage of the Presumptive Taxation
                Scheme may file their taxes using the ITR-3 Form, which is used
                for income from a business or profession. The deadline to submit
                an ITR in case of non-audited taxpayer for the FY 2021–22 i.e.,
                AY 2022–23 is July 31, 2022.
              </span>
            </section>
          </div>

          <div className="col-md-12 mt-3">
            <p className="partnershiptollp_p">
              Once the quarter ends, the client will provide you with Form 16A,
              which will state that ₹4,000 was deducted as tax from your
              payment. It will likewise have different detailed elements like
              the receipt number for the payment, the date when the sum was
              deposited with the government, and so on.
            </p>
            <p className="partnershiptollp_p">
              The freelancer can use the online facility provided by TRACES to
              generate form 26AS. This form lists all the TDS deductions that
              have been made on their income through the year. This information
              can be used when filing returns to ensure that you are not paying
              taxes on your income twice. It must be remembered that this system
              is linked to one’s PAN, so it is essential that the client has
              your PAN details and has linked the TDS to your PAN.
            </p>
          </div>

          <div className="col-md-5">
            <section className="text-center">
              <img
                src={Presumptive12}
                alt="backgroundForPresumptive"
                className="mobileImg"
              />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>

          <div className="col-md-7">
            <p className="partnershiptollp_p">
              If your profit for the entire financial year doesn’t fall under
              the tax bracket, here’s what you can do:
            </p>

            <div class="partnershiptollpli">
              <ul>
                <li>
                  Let’s say you made a total earning of ₹2.2 lakh from different
                  customers and every one of them deducted TDS from your
                  earnings. The total tax deducted would total ₹22,000 (10% of
                  2.2 lakh).
                </li>
                <li>
                  Let’s additionally assume that you don’t have any other source
                  of income. Then your aggregate salary for the current
                  financial year hasn’t crossed the tax slab of 2.5 lakh (which
                  is tax-exempted). As a result, you won’t have to pay any taxes
                  to the government. So what happens to the deducted tax at this
                  point? In this case, you would need to file for a refund from
                  the Income Tax Department.
                </li>
                <li>
                  Since the tax was deducted at the source without taking into
                  account how much your total income for the year would be, you
                  would qualify for a tax refund.
                </li>
                <li>
                  In this scenario, you will be able to recover the entire
                  amount of ₹22,000 in the form of tax refund.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-12 mt-3">
            <p className="titleOfFirstFilling">
              How can freelancers calculate their advance tax
            </p>
          </div>

          <div className="col-md-7">
            <p className="partnershiptollp_p">
              The following steps should be followed to calculate advance tax:
            </p>

            <div class="partnershiptollpli">
              <ul>
                <li>
                  Calculate your total taxable income by adding up all of your
                  earnings.
                </li>
                <li>
                  Calculate your tax liability by learning which tax bracket you
                  fall under.
                </li>
                <li>
                  Any TDS deducted can be reduced from the tax liability in
                  order to calculate remaining tax to be paid.
                </li>
                <li>
                  You are supposed to pay advance tax by the set deadlines if
                  the amount is more than Rs. 10,000.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-5">
            <section className="text-center">
              <img src={Presumptive11} alt="Presumptive11" />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>
        </div>

        <div className="row backgroundrowPresumtive mb-3">
          <p className="titleOfFirstFilling">
            How can freelancers calculate their advance tax
          </p>

          <p className="partnershiptollp_p">
            If you earn income from clients who are based overseas, you may
            receive the money as a direct remittance to your bank account or via
            such services like PayPal. Two cases are to be noted here:
          </p>

          <div class="partnershiptollpli">
            <ul>
              <li>
                If the money you have received was already subject to a tax
                deduction at source, then you will not have to charge it as
                taxable income. This is because of the provision of the Double
                Tax Avoidance Agreement (DTAA). If the receipt you get has
                already been treated for tax at source and then you end up
                paying tax in India too, it will get taxed twice. The DTAA is
                signed between India and 80 countries to prevent this from
                happening. All in all, your money has to be taxed either in the
                source country or in the country of residence. So, if there’s a
                DTAA between the two countries, you might not have to add it to
                taxable income if TDS was deducted in the source country.
              </li>
              <li>
                In case the TDS was not deducted in the remittance, you will
                treat this income just like you would treat any other income you
                earn as a freelancer, irrespective of the geographic boundary it
                is being transferred from. Thus, your professional fees from the
                foreign client are to be treated just like any money you earn
                locally.
              </li>
            </ul>
          </div>

          <p className="partnershiptollp_p">
            As a rule, the process involves adding up all the revenue - whether
            from clients in India or abroad and adjusting for expenses incurred
            in freelancing to arrive at the final figure of your freelance
            income.
          </p>
        </div>

        <div className="row">
          <p className="titleOfFirstFilling">Tax Deductions for Freelancers</p>

          <div className="col-md-7">
            <p className="partnershiptollp_p">
              Freelancers can also reap tax deduction benefits as individuals
              and business owners. As individuals, they can claim tax-saving
              deductions available to salaried individuals and as freelancers,
              they can claim deductions available to business owners. There are
              multiple expenses for freelancers to claim as deductions. The only
              requirement is that these expenses must be related and directly
              linked to the work they’re doing with the following conditions:
            </p>

            <div class="partnershiptollpli">
              <ul>
                <li>
                  The expenses should only be for the purpose of freelancing
                  work
                </li>
                <li>
                  Money that is spent exclusively for the purpose of the
                  freelancing work
                </li>
                <li>Expenses incurred during the financial year</li>
                <li>
                  Expenses should not be related to the capital expenditure of
                  the freelancer
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-5">
            <section className="text-center">
              <img src={Presumptive10} alt="Presumptive10" width={"100%"} />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>

          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Expenses that Freelancers can Claim as Tax Deduction
            </p>

            <p className="partnershiptollp_p">
              As a rule, the process involves adding up all the revenue -
              whether from clients in India or abroad and adjusting for expenses
              incurred in freelancing to arrive at the final figure of your
              freelance income.
            </p>
          </div>

          <div className="col-md-6">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Property Rent:</p>
            </div>

            <p className="fearItrp">
              Simply put, if a freelancer rents a property for work, the rent
              amounts are tax-deductible. So, if you rent a desk, co-working
              space, or office space, you can deduct said amount from your
              income. If you work from your rented home, you can claim a part of
              the rent amount as deductions.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Repairs Undertaken:</p>
            </div>

            <p className="fearItrp">
              By agreeing to pay for repairs on a rented property, those costs
              can also be deducted. Even repair costs on the business properties
              such as laptops or printers you own are allowed deductions.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Expenses on Meals, Entertainment, and Hospitality:</p>
            </div>

            <p className="fearItrp">
              If you conduct meetings with clients, particularly taking them out
              for meals or outings, any money spent to that end can be claimed
              as deductions. The money spent must be for the sole intention of
              winning new business deals or maintaining existing contracts.
            </p>
          </div>

          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Office Expenses:</p>
            </div>

            <p className="fearItrp">
              Expenses you incur to do your work, such as purchasing
              electronics, office supplies, telecommunication bills, and
              transportation expenses can be claimed as deductions.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Depreciation of Assets:</p>
            </div>

            <p className="fearItrp">
              When a freelancer purchases capital assets, benefits can last for
              a while. As assets are used, their value depreciates. These
              portions of the asset value can be claimed as deductions from
              taxable income every year. Even vehicles used for commuting to
              work are assets that you can claim depreciation on. The rate and
              methods of depreciation vary across assets.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Contracting Costs:</p>
            </div>

            <p className="fearItrp">
              Certain projects require freelancers to enlist the services of
              another person or firm. Such payments made on a long-term
              contractual basis are also deductible.
            </p>
          </div>
        </div>

        <div className="row backgroundImagesPrimstive">
          <p className="titleOfFirstFilling">
            Expenses that Freelancers CANNOT Claim as Tax Deduction
          </p>
          <div className="col-md-7">
            <p className="partnershiptollp_p">
              The following expenses cannot be claimed by freelancers as tax
              deduction:
            </p>

            <div class="partnershiptollpli">
              <ul>
                <li>
                  Those expenses which have been carried out for personal
                  purposes are explicitly invalid for deductions. For instance,
                  phone bills or meals expenditure for personal reasons are
                  invalid. In the case of phone bills, if the phone has been
                  used for business as well as personal purposes, only the
                  proportionate business expenditure will be allowed for
                  deduction.
                </li>
                <li>
                  Money paid to relatives in exchange for products and services
                  which aren’t crucial to the business cannot be deducted. For
                  instance, if someone rents a house from their sister and pays
                  more than market rent to avail higher deduction, such an
                  expense can’t be deducted as an expense.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-5">
            <section className="text-center">
              <img
                src={Presumptive9}
                alt="Presumptive9"
                className="mobileImg"
              />
            </section>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              What is the process of filing Income Tax Returns for freelancers
            </p>

            <p className="partnershiptollp_p">
              The following is a step-by-step process:
            </p>
          </div>

          <div className="col-md-1">
            <div className="stepBackground">step - 1</div>
          </div>
          <div className="col-md-11">
            <p className="partnershiptollp_p">
              Determine the total income for the specified fiscal year from
              April 1 to March 31. Loans and other debt commitments should be
              left out because they are not regarded as income.
            </p>
          </div>
          <div className="col-md-1">
            <div className="stepBackground">step - 2</div>
          </div>
          <div className="col-md-11">
            <p className="partnershiptollp_p">
              Calculate your expenses of the business to obtain a tax deduction.
            </p>
          </div>
          <div className="col-md-1">
            <div className="stepBackground">step - 3</div>
          </div>
          <div className="col-md-11">
            <p className="partnershiptollp_p">
              Choose the relevant form as given below and complete it with the
              necessary data.
            </p>

            <div class="partnershiptollpli">
              <ul>
                <li>
                  Individuals who gain financial profits via a business are
                  subject to the ITR-3. Such people could operate a business or
                  profession and earn money from rent, capital gains, wages,
                  pensions, and other sources.
                </li>
                <li>
                  ITR-4 is applicable to those who choose presumptive income
                  schemes in accordance with Sections 44AD, ADA and 44AE of the
                  Income Tax Act. If freelancers have business incomes as
                  described in Sections 44AD, ADA or 44AE, as well as salaries,
                  pensions, or any other kind of income that exceeds 50 lakhs,
                  ITR-4 Form will be relevant.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-1">
            <div className="stepBackground">step - 4</div>
          </div>
          <div className="col-md-11">
            <p className="partnershiptollp_p">
              Determine the total income for the specified fiscal year from
              April 1 to March 31. Loans and other debt commitments should be
              left out because they are not regarded as income.
            </p>
          </div>

          <div className="col-md-12 slash_1 what_income_1 mb-4">
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
export default ResidentsForeignIncomeTaxReturns;
