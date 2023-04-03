import React, { useState } from "react";
import Enquiry2 from "../Enquiry/enquiry2";
import ServiceType2 from "../Services/ServiceType2";
import incometax_men2 from "../common/Images/Bookkeeping2.png";
import checkcircle1 from "../common/Images/checkCircle.svg";
import Bookkeeping3 from "../common/Images/Bookkeeping3.png";
import Bookkeeping4 from "../common/Images/Bookkeeping4.png";
import bookkeeping1 from "../common/Images/bookkeeping1.png";
import secureLocalStorage from "react-secure-storage";
import Faq from "../FAQ/Faq";
import { NavLink } from "react-router-dom";

function PartnershipFirmtoLLP() {
  const [buyNow, setbuyNow] = useState("");
  window.addEventListener("itr_service", () => {
    setbuyNow(
      secureLocalStorage.getItem("itr_service_price").base_price_redirect
    );
  });
  return (
    <>
      <div className="container">
        <div className="col-md-12 order-list">
          <ul>
            <li>
              <span>Home</span>
              <i className="fa fa-angle-right order-arrow-right"></i>
            </li>
            <li>
              <span>BookKeeping</span>
            </li>
          </ul>
        </div>

        <div className="row mb-3">
          <div className="col-md-5">
            <img src={bookkeeping1} alt="bookkeeping1" width={"100%"} />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <Enquiry2 />
          </div>
        </div>
      </div>
      <section>
        <section className="sevicesBack19">
          <ServiceType2 />
        </section>
      </section>

      <div className="container">
        <div className="row backgroundBookkkeping">
          <p className="titleOfFirstFilling">
            What are Accounting and Book Keeping Services?
          </p>

          <p className="partnershiptollp_p">
            Accounting is the process where a track of income and expenses is
            kept. Accounting is done by an Accountant and he is a person who
            shall offer strategic financial advice as well as he shall be well
            aware about the company’s financial situation.
          </p>

          <p className="partnershiptollp_p">
            While Book-Keeping is the process where the records of financial
            transactions are kept. Also, preparation of financial statements
            such as balance sheets and income statements are part of
            Book-Keeping. It is the responsibility of the Book-Keeper to ensure
            that the employees are filing invoices and expenses correctly. Also,
            handling payroll comes under the purview of Book-Keeping services.
          </p>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Connection Between Bookkeeping and Accounting
            </p>

            <p className="partnershiptollp_p">
              Bookkeeping is a separate process from accounting, which occurs
              within the broader scope of accounting. The accounts are prepared
              from the information provided by bookkeeping. A strong
              relationship between these two functions is necessary to take the
              business to the next level.
            </p>

            <p className="partnershiptollp_p">
              Bookkeeping is a segment of the whole accounting system.
              Bookkeeping is the basis for accounting as it contains the proper
              records of all financial transactions whereas, accounting involves
              organising, summarising, classification and reporting financial
              transactions.
            </p>
            <p className="partnershiptollp_p">
              If the bookkeeping is correct, the accounting of a company will be
              proper. Thus, accounting is broader than bookkeeping and
              accounting of a company relies on a proper and accurate
              bookkeeping system.
            </p>
            <p className="partnershiptollp_p">
              Bookkeeping helps to interpret the accounting information for
              decision making by both the internal and external users.
              Bookkeeping is a subset of accounting and clerical in nature which
              involves the following:
            </p>
          </div>
          <div className="col-md-6 itrnomatter mt-3">
            <div class="partnershiptollpli">
              <ul>
                <li>Recording financial transactions</li>
                <li>Posting credits and debits</li>
                <li>Producing invoices</li>
                <li>
                  Maintaining and balancing current account and general ledgers
                </li>
                <li>Completing payroll</li>
              </ul>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4 itrnomatter">
            <section>
              <div className="incometax_img_6">
                <img src={incometax_men2} width="100%" alt="incometax_men2" />
              </div>
              <button className="btn itrFIleButton">
                <NavLink to="/Contact" className="nav-link">
                  Schedule Free Consultation
                </NavLink>
              </button>
            </section>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row backgroundBookkkeping">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">Objectives of Bookkeeping</p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>To record the transactions:</p>
            </div>

            <p className="fearItrp">
              The first objective of bookkeeping is to maintain accurate and
              complete records of all financial transactions in an orderly
              manner. It systematically records all transactions and ensures
              that all financial transactions recorded are reflected in the
              books of accounts. These transactions can be used for future
              references.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>To show the correct position:</p>
            </div>

            <p className="fearItrp">
              Bookkeeping helps to ascertain the overall impact of all financial
              transactions of a company. It reflects the financial effect of all
              business transactions that have taken place in a financial year.
              It provides financial information to the shareholders and
              management of the company, thus helping them formulate future
              policies and plans.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>To detect errors and frauds:</p>
            </div>

            <p className="fearItrp">
              Bookkeeping helps to identify the transactions and summarise them
              chronologically in a systematic manner. It ensures that the books
              of accounts are correct, up-to-date, chronological and complete.
              Thus, it helps to detect any errors or frauds in the business.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">Types of Bookkeeping System</p>

            <p className="partnershiptollp_p">
              There are two types of bookkeeping systems. The business entities
              can choose any one of the types of bookkeeping system. Some
              entities use a combination of both types. The following are the
              two types of bookkeeping system:
            </p>
          </div>

          <div className="col-md-5">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Single-entry system of bookkeeping</p>
            </div>

            <p className="partnershiptollp_p">
              The single-entry system of bookkeeping is a basic system to record
              daily receipts or generate a weekly or daily report of a company’s
              cash flow. In the single-entry system of bookkeeping, the
              bookkeeper records one entry for each financial transaction or
              activity.
            </p>
            <p className="partnershiptollp_p">
              The single-entry system of bookkeeping involves recording only one
              side of the transaction or activity. It maintains only the
              purchases, cash receipts and payments and sales. It is used mainly
              by small businesses, which have minimal transactions.
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Double-entry system of bookkeeping</p>
            </div>

            <p className="partnershiptollp_p">
              The double-entry system of bookkeeping records a double entry for
              each financial activity or transaction. The double entry system
              provides balances and checks as it records the corresponding
              credit entry for every debit entry. It is not cash-based, and the
              transactions are entered when revenue is earned, or debt is
              incurred.
            </p>
            <p className="partnershiptollp_p">
              The double-entry system of bookkeeping is based on the duality
              concept, i.e. every financial transaction affects two accounts. It
              means that every debit entry to an account has a corresponding
              credit entry in another account and vice versa. This system is
              universally adopted and is considered accurate for recording
              business/financial transactions.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">Importance of Bookkeeping</p>

            <p className="partnershiptollp_p">
              Bookkeeping is necessary for all businesses, irrespective of the
              size, nature, business transactions, or any specific industry.
              Upon the commencement of a business, maintaining proper records is
              essential. The following points state the importance of
              bookkeeping:
            </p>
          </div>

          <div className="col-md-5">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Records the source of transactions:</p>
            </div>

            <p className="partnershiptollp_p">
              Bookkeeping acts as a source of all the financial transactions of
              a business since it records all the financial transactions from
              the source of the transaction, like receipts, invoices, payment
              notes, etc.
            </p>
            <p className="partnershiptollp_p">
              Bookkeeping keeps track of payments, receipts, purchases, sales
              and records every transaction made from and by the business. The
              financial statements or other accounting reports of a business are
              summarised from their books of accounts. Thus, all businesses
              irrespective of their size, need to have proper bookkeeping in
              place.
            </p>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <section>
              <div>
                <img src={Bookkeeping3} alt="Bookkeeping3" />
              </div>
              <button className="btn itrFIleButton">
                <NavLink to="/Contact" className="nav-link">
                  Schedule Free Consultation
                </NavLink>
              </button>
            </section>
          </div>

          <div className="col-md-5">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Legal requirement:</p>
            </div>

            <p className="partnershiptollp_p">
              The maintenance of financial statements and books of accounts is a
              legal requirement under many acts. In the case of banks or
              companies or insurance companies, the acts that regulate them
              require such firms to maintain and keep financial records. Thus,
              bookkeeping becomes necessary for such companies.
            </p>
            <section className="text-center mt-3">
              <div>
                <img src={Bookkeeping4} alt="Bookkeeping4" />
              </div>
              <button className="btn itrFIleButton">
                <NavLink to="/Contact" className="nav-link">
                  Schedule Free Consultation
                </NavLink>
              </button>
            </section>
          </div>

          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Helps in decision making:</p>
            </div>

            <p className="partnershiptollp_p">
              A correct and proper bookkeeping process provides companies with
              an accurate measure of their performance. It also provides
              information for making general strategic decisions and a benchmark
              for its income and revenue goals. Bookkeeping is a reliable source
              for companies to measure their financial performance.
            </p>

            <p className="partnershiptollp_p">
              One of the main reasons for bookkeeping is maintaining all
              financial records of a business that shows the financial position
              of every head or account of income and expenditure. The companies
              can obtain detailed information about each income or expense
              instantaneously through bookkeeping.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Gives information to prepare financial statements:</p>
            </div>

            <p className="partnershiptollp_p">
              Bookkeeping summarises the expenditures, income and other ledger
              records periodically. Since bookkeeping records and tracks all
              financial transactions, it becomes the starting point of
              accounting. If the bookkeeping of a company is not proper, the
              accounting of the company will not be accurate.
            </p>

            <p className="partnershiptollp_p">
              Bookkeeping provides information to prepare financial reports,
              which states the specific information about the business on how
              much profits it has made or the worth of the business at a
              specific point in time.
            </p>
          </div>
        </div>
      </div>

      <div className="container ItrPaddingTopMain">
        <div
          className="col-md-12 slash_1 what_income_1 mb-4"
          data-aos-delay="500"
        >
          <span className="mb-3">
            Process to acquire Book-Keeping and Accounting Services
          </span>
        </div>

        <div className="row panRow">
          <div className="col-md-1" />
          <div className="col-md-2">
            <div className="pan-back">
              <div className="BookKeepingbg">
                <span className="pan-count">1</span>
                <p className="panbox-text">Drop in Inquiry</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="BookKeepingbg2">
                <span className="pan-count">2</span>
                <p className="panbox-text">
                  Fill in a simple <br /> checklist
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="BookKeepingbg3">
                <span className="pan-count">3</span>
                <p className="panbox-text">
                  Upload Data <br /> on Google Drive
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="BookKeepingbg4">
                <span className="pan-count">4</span>
                <p className="panbox-text">
                  Execution by <br /> the team
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="BookKeepingbg5">
                <span className="pan-count">5</span>
                <p className="panbox-text">
                  Single Point <br /> of Contact
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

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
    </>
  );
}
export default PartnershipFirmtoLLP;
