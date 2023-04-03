import React, { useState } from "react";
import ServiceType2 from "../Services/ServiceType2";
import digital3 from "../common/Images/TAX12.png";
import digital2 from "../common/Images/digital4.png";
import TAXwifi from "../common/Images/TAXwifi.png";
import gstr from "../common/Images/gstr.png";
import gstdocument2 from "../common/Images/gstdocument2.png";
import Latefees from "../common/Images/Latefees.png";
import checkcircle1 from "../common/Images/checkCircle.svg";
import gstG from "../common/Images/gstG.gif";
import gstS from "../common/Images/gstS.gif";
import gstT from "../common/Images/gstT.gif";
import ServiceName from "../Services/NameOfService";
import secureLocalStorage from "react-secure-storage";
import { NavLink } from "react-router-dom";
import Faq from "../FAQ/Faq";
import Enquiry2 from "../Enquiry/enquiry2";

function GSTR9C() {
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
              Goods and Services Tax Return
            </span>
            <div className="fixwidthPremtive">
              <p className="itrPageDescription">
                File error-free GST Return and in-time. Get your GST return
                filings done through experts. Prices start at INR 499/- only.
              </p>
            </div>
            <section className="BackgroundDigital2">
              <div>
                {buyNow !== "" ? (
                  <NavLink to={"/OrderSummary2/" + buyNow}>
                    <button className="fileNowBtn btn">Buy Now</button>
                  </NavLink>
                ) : (
                  ""
                )}
              </div>
              <div>
                <img src={gstG} alt="gstG" className="GSTICONS" />
                <img src={gstS} alt="gstS" className="GSTICONS" />
                <img src={gstT} alt="gstT" className="GSTICONS" />
              </div>
            </section>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <Enquiry2 />
          </div>
        </div>
      </div>
      <section>
        <section className="sevicesBack20">
          <ServiceType2 />
        </section>
      </section>

      <div className="container mt-3">
        <div className="row eldFlexrow">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">What is a GST Return?</p>

            <p className="partnershiptollp_p">
              A GST return is a document containing details of all income/sales
              and/or expenses/purchases that a GST-registered taxpayer (every
              GSTIN) is required to file with the tax administrative
              authorities. This is used by tax authorities to calculate net tax
              liability.
            </p>
          </div>
          <div className="col-md-8 itrnomatter">
            <div className="partnershiptollpli">
              <ul>
                <li>Purchases</li>
                <li>Sales</li>
                <li>Input tax credit (GST paid on purchases)</li>
              </ul>
            </div>
            <p className="partnershiptollp_p">
              To file GST returns or for GST filings, check out the Clear GST
              software that allows the import of data from various ERP systems
              such as Tally, Busy, custom Excel, to name a few. There is also
              the option to use the desktop app for Tally users to directly
              upload data and file.
            </p>
          </div>
          <div className="col-md-4 itrnomatter">
            <section className="text-center bgStars">
              <img src={digital2} alt="digital2" width={"100%"} />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>

          <div className="col-md-12">
            <p className="titleOfFirstFilling">Who should file GST Returns?</p>

            <p className="partnershiptollp_p">
              Under the GST regime, regular businesses having more than Rs.5
              crore as annual aggregate turnover (and taxpayers who have not
              opted for the QRMP scheme) have to file two monthly returns and
              one annual return. This amounts to 25 returns each year.
            </p>
            <p className="partnershiptollp_p">
              Taxpayers with a turnover of up to Rs.5 crore have the option to
              file returns under the QRMP scheme. The number of GSTR filings for
              QRMP filers is 9 each year, which include 4 GSTR-1 and GSTR-3B
              returns each and an annual return. Note that QRMP filers have to
              pay tax on a monthly basis even though they are filing returns
              quarterly.
            </p>
            <p className="partnershiptollp_p">
              There are also separate statements/returns required to be filed in
              special cases such as composition dealers where the number of GSTR
              filings is 5 each year (4 statement-cum-challans in CMP-08 and 1
              annual return GSTR-4).
            </p>
            <p className="partnershiptollp_p">
              Refer to the table below for details on the various types of GST
              returns and which category of businesses are eligible to file
              which type of returns:
            </p>
          </div>

          <div className="col-md-6">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>GSTR-1 :</p>
              <span className="fearItrp">
                All regular, GST-registered businesses
              </span>
            </div>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>GSTR-3B :</p>
              <span className="fearItrp">
                All regular, GST-registered businesses
              </span>
            </div>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>GSTR- 4 :</p>
              <span className="fearItrp">
                Dealers who have opted for the composition scheme
              </span>
            </div>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>GSTR-3B :</p>
              <span className="fearItrp">
                All regular, GST-registered businesses
              </span>
            </div>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>GSTR- 4 :</p>
              <span className="fearItrp">
                Dealers who have opted for the composition scheme
              </span>
            </div>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>GSTR- 4 :</p>
              <span className="fearItrp">
                Dealers who have opted for the composition scheme
              </span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>GSTR-1 :</p>
              <span className="fearItrp">
                All regular, GST-registered businesses
              </span>
            </div>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>GSTR-3B :</p>
              <span className="fearItrp">
                All regular, GST-registered businesses
              </span>
            </div>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>GSTR- 4 :</p>
              <span className="fearItrp">
                Dealers who have opted for the composition scheme
              </span>
            </div>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>GSTR-3B :</p>
              <span className="fearItrp">
                All regular, GST-registered businesses
              </span>
            </div>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>GSTR- 4 :</p>
              <span className="fearItrp">
                Dealers who have opted for the composition scheme
              </span>
            </div>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>GSTR- 4 :</p>
              <span className="fearItrp">
                Dealers who have opted for the composition scheme
              </span>
            </div>
          </div>

          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Types of GST Returns under New GST Law
            </p>
            <p className="partnershiptollp_p">
              The list of all types of GST returns in India along with frequency
              and the due date for filing returns.
            </p>
            <section className="responsiveTable">
              <table className="table table-bordered BusinessTable">
                <thead>
                  <tr className="theadRow">
                    <th>Return form</th>
                    <th>
                      Who should file the return and what should be filed?
                    </th>
                    <th>Surcharge on Net Income Less than Rs. 1 crore</th>
                    <th>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tbodyRow1">
                    <td>GSTR-1</td>
                    <td>
                      Registered taxable supplier should file details of outward
                      supplies of taxable goods and services as effected.
                    </td>
                    <td>Monthly</td>
                    <td>11th of the subsequent month.</td>
                  </tr>
                  <tr className="tbodyRow2">
                    <td>GSTR-1</td>
                    <td>
                      Registered taxable supplier should file details of outward
                      supplies of taxable goods and services as effected.
                    </td>
                    <td>Monthly</td>
                    <td>11th of the subsequent month.</td>
                  </tr>
                  <tr className="tbodyRow1">
                    <td>GSTR-1</td>
                    <td>
                      Registered taxable supplier should file details of outward
                      supplies of taxable goods and services as effected.
                    </td>
                    <td>Monthly</td>
                    <td>11th of the subsequent month.</td>
                  </tr>
                  <tr className="tbodyRow2">
                    <td>GSTR-1</td>
                    <td>
                      Registered taxable supplier should file details of outward
                      supplies of taxable goods and services as effected.
                    </td>
                    <td>Monthly</td>
                    <td>11th of the subsequent month.</td>
                  </tr>
                  <tr className="tbodyRow1">
                    <td>GSTR-1</td>
                    <td>
                      Registered taxable supplier should file details of outward
                      supplies of taxable goods and services as effected.
                    </td>
                    <td>Monthly</td>
                    <td>11th of the subsequent month.</td>
                  </tr>
                  <tr className="tbodyRow2">
                    <td>GSTR-1</td>
                    <td>
                      Registered taxable supplier should file details of outward
                      supplies of taxable goods and services as effected.
                    </td>
                    <td>Monthly</td>
                    <td>11th of the subsequent month.</td>
                  </tr>
                  <tr className="tbodyRow1">
                    <td>GSTR-1</td>
                    <td>
                      Registered taxable supplier should file details of outward
                      supplies of taxable goods and services as effected.
                    </td>
                    <td>Monthly</td>
                    <td>11th of the subsequent month.</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>

          <div className="col-md-12 mt-3">
            <p className="titleOfFirstFilling">
              Types of GST Return Filing Status
            </p>
            <p className="partnershiptollp_p">
              When you check the status of your GST return on the official GST
              portal, you may come across any of the four following statuses for
              your GST return:
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <section className="text-center">
              <img
                src={digital3}
                alt="digital3"
                width={"100%"}
                className="mobileImg"
              />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>To Be Filed:</p>
            </div>
            <p className="fearItrp">
              This status indicates that the return is due but has not been
              filed yet.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Submitted but Not Filed:</p>
            </div>
            <p className="fearItrp">
              This status means that your return has been filed and validated,
              but the same has not been updated in the GST records.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Submitted but Not Filed:</p>
            </div>
            <p className="fearItrp">
              This status means that your return has been filed and validated,
              but the same has not been updated in the GST records.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Submitted but Not Filed:</p>
            </div>
            <p className="fearItrp">
              This status means that your return has been filed and validated,
              but the same has not been updated in the GST records.
            </p>
          </div>
          <div className="col-md-12 slash_1 what_income_1 mb-4">
            <span>Due Dates for Income Tax Return Filing</span>
          </div>
        </div>
      </div>
      <div id="calendar"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Advantages of GST Return Filing Service
            </p>
          </div>

          <div className="col-md-6">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Ease & Flexibility:</p>
            </div>

            <p className="fearItrp">
              Filing GST Return is an online process to keep financial
              transactions accountable and provides the benefit of the ease of
              access and flexibility.
            </p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Avoids Unnecessary Fines & Penalties:</p>
            </div>

            <p className="fearItrp">
              Organizations can go paperless and save money previously spent on
              the physical resources, time, personnel and office space used to
              manage and transport documents.
            </p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Enhances Taxpayers’ Credibility:</p>
            </div>

            <p className="fearItrp">
              Timely and proper filing of GST return benefits taxpayers at the
              time of seeking loans from a bank or financial institution.
              Taxpayer’s credibility is evaluated based on his GST returns
              filing record.
            </p>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 mb-2">
            <section className="text-center">
              <img
                src={TAXwifi}
                alt="TAXwifi"
                width={"100%"}
                className="mobileImg"
              />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>

          <div className="col-md-4 mt-3">
            <section className="text-center">
              <img src={gstr} alt="gstr" width={"100%"} className="mobileImg" />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Ease & Flexibility:</p>
            </div>

            <p className="fearItrp">
              Filing GST Return is an online process to keep financial
              transactions accountable and provides the benefit of the ease of
              access and flexibility.
            </p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Avoids Unnecessary Fines & Penalties:</p>
            </div>

            <p className="fearItrp">
              Organizations can go paperless and save money previously spent on
              the physical resources, time, personnel and office space used to
              manage and transport documents.
            </p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Enhances Taxpayers’ Credibility:</p>
            </div>

            <p className="fearItrp">
              Timely and proper filing of GST return benefits taxpayers at the
              time of seeking loans from a bank or financial institution.
              Taxpayer’s credibility is evaluated based on his GST returns
              filing record.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <p className="titleOfFirstFilling">
              Documents Required for gST Returns
            </p>
          </div>
          <div className="col-md-6">
            <div>
              <p className="Boldpartnershiptollp_p">Quick Checklist:</p>
            </div>

            <div className="partnershiptollpli">
              <ul>
                <li>Invoices issued to persons with GSTIN or B2B invoices</li>
                <li>
                  Invoices issued to persons without GSTIN or B2C invoices
                </li>
                <li>
                  This needs to be submitted only when its total value is above
                  ₹2.5 lakhs
                </li>
                <li>A consolidation of inter-state sales</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 gstdocument_ text-center">
            <div className="gstdocument_smallimg">
              <img src={gstdocument2} alt="" />
            </div>
            <button className="btn itrFIleButton">
              Schedule Free Consultation
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Late Fees for not Filing GST Return on Time
            </p>
          </div>
          <div className="col-md-7 Latefees_text">
            <p>
              If GST returns are not filed within the specified time limits, you
              will be liable to pay interest and a late fee.
            </p>
            <p>
              Interest is charged at 18% per annum. It has to be calculated by
              the taxpayer on the amount of outstanding tax to be paid. The time
              period will be from the next day of filing to the date of payment.
            </p>
            <p>
              Late fees are charged at Rs.100 per day per Act. Hence, it will be
              Rs.100 under CGST and Rs.100 under SGST. The total will be Rs.200
              per day, subject to a maximum of Rs.5,000. Please note that from
              the month of/quarter ended June 2021, the maximum amount of late
              fees has been revised as below.
            </p>
          </div>
          <div className="col-md-5 late_fees_img text-center">
            <img src={Latefees} alt="" />
            <button className="btn itrFIleButton">
              Schedule Free Consultation
            </button>
          </div>
        </div>

        <div className="row mt-2">
          <section className="responsiveTable">
            <table className="table table-bordered BusinessTable gstreturnTable_content">
              <thead>
                <tr className="theadRow">
                  <th>Taxpayer category</th>
                  <th>Late fee capped at</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tbodyRow1">
                  <td>
                    Taxpayers whose total amount of central tax payable is Nil
                  </td>
                  <td>Rs.250^ </td>
                </tr>
                <tr className="tbodyRow2">
                  <td>
                    Taxpayers with an annual aggregate turnover up to Rs.1.5
                    crore in the previous financial year
                  </td>
                  <td>Rs.1,000^ </td>
                </tr>
                <tr className="tbodyRow1">
                  <td>
                    Taxpayers with an annual aggregate turnover exceeding Rs.1.5
                    crore and up to Rs.5 crore in the previous financial year
                  </td>
                  <td>Rs.2,500^</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Does GST have to be paid monthly?
            </p>
          </div>
          <div className="col-md-12 gstpaid_month">
            <p>
              GST is to be paid monthly by regular taxpayers, even those who
              have opted for quarterly filing of returns, i.e. the QRMP scheme.
            </p>
            <p>
              However, for small taxpayers, there is an option to choose the
              composition scheme under GST, if their annual aggregate turnover
              is up to Rs.1.5 crore for manufacturers/dealers and Rs.50 lakh for
              pure service providers. They can file a quarterly
              statement-cum-challan and pay taxes quarterly.
            </p>
          </div>
        </div>

        <div className="row panRow">
          <div className="col-md-12 mt-3 mb-5">
            <p className="titleOfFirstFilling">
              Process to File GST Return Online
            </p>
          </div>
          <div className="col-md-1" />
          <div className="col-md-2">
            <div className="pan-back">
              <div className="Gstreturn_prossess">
                <span className="pan-count">1</span>
                <p className="panbox-text">
                  We will remind <br /> you before due <br /> date
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="Gstreturn_prossess1">
                <span className="pan-count">2</span>
                <p className="panbox-text">
                  Submit <br /> Documents
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="Gstreturn_prossess2">
                <span className="pan-count">3</span>
                <p className="panbox-text">
                  Verification of <br /> Documents
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="Gstreturn_prossess3">
                <span className="pan-count">4</span>
                <p className="panbox-text">
                  Preparation of <br /> GST Return
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="Gstreturn_prossess4">
                <span className="pan-count">5</span>
                <p className="panbox-text">
                  GST Return <br /> filed & Ack <br /> Generated
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <div className="container">
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

            <div className="gstlist_10 gstlist_31 incomelispace">
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
export default GSTR9C;
