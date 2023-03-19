import React, { useState } from "react";
import Enquiry2 from "../Enquiry/enquiry2";
import ServiceType2 from "../Services/ServiceType2";
import Footer from "./Footer";
import Header from "./Header";
import DocReq13 from "../common/Images/DocReq13.png";
import incometax_men2 from "../common/Images/LLPOver.png";
import checkcircle1 from "../common/Images/checkCircle.svg";
import partnershiptollp from "../common/Images/partnershiptollp.png";
import ServiceName from "../Services/NameOfService";
import secureLocalStorage from "react-secure-storage";
import { NavLink } from "react-router-dom";
import Faq from "../FAQ/Faq";

function PartnershipFirmtoLLP() {
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
            <span className=" itrPageHeading">Partnership Firm to LLP</span>
            <p className="itrPageDescription">
              Under a Limited Liability Partnership (LLP), two or more partners
              form a special partnership and have limited liabilities. For
              conversion of partnership firm into LLP, you need to get a Digital
              Signature Certificate, a DPIN and file the LLP forms 2, 3 and 17.
            </p>

            <section className="backgroundLLP">
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
        <section className="sevicesBack17">
          <ServiceType2 />
        </section>
      </section>

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6 itrnomatter">
            <p className="itrnomatterp">What is Partnership Firm</p>

            <p className="partnershiptollp_p">
              The law relating to partnership firm in India is prescribed in the
              Indian Partnership Act of 1932. This Act lays down the rights and
              duties of the partners between themselves and other legal
              relations between partners and third persons, which are incidental
              to the formation of a partnership.
            </p>

            <p className="partnershiptollp_p">
              A partnership consists of three essential elements.
            </p>

            <div class="partnershiptollpli">
              <ul>
                <li>
                  A partnership must be a result of an agreement between two or
                  more individuals.
                </li>
                <li>
                  The agreement must be built to share the profits obtained from
                  the business.
                </li>
                <li>
                  The business must be run by all or any of them representing
                  the rest.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 itrnomatter">
            <p className="itrnomatterp">
              What is Limited Liability Partnership ( LLP )
            </p>

            <p className="partnershiptollp_p">
              A Limited Liability Partnership (LLP) is one in which some or all
              of the partners are limited in their liability. As a result, it
              can display aspects of partnerships and businesses. Each partner
              in an LLP is not responsible or liable for the misbehavior or
              carelessness of another partner.
            </p>

            <p className="partnershiptollp_p">
              A Limited Liability Partnership (LLP) can be a far more effective
              business vehicle than a traditional partnership. Personal
              liabilities harm partnerships, while LLPs eliminate the Indian
              Partnership Act, 1932’s burdensome requirements. There are also
              tax advantages, no audit obligations below a particular capital
              threshold, no cap on the number of partners, and no capital
              contribution requirements. In this blog, there will be a detailed
              explanation on LLP over Partnership Firm, process to convert
              Partnership Firm into LLP, Documents needed for conversion, and
              other related information.
            </p>
          </div>

          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Key Differences Between a Partnership and an LLP
            </p>
            <table class="table table-bordered itrTable" width={"100%"}>
              <thead>
                <tr className="theadRow">
                  <th className="th20persent">Basis</th>
                  <th className="th40persent">Partnership</th>
                  <th className="th40persent">LLP</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tbodyRow1">
                  <td className="td20persent">Separate Legal Entity</td>
                  <td className="td40persent">No</td>
                  <td className="td40persent">Yes</td>
                </tr>
                <tr className="tbodyRow2">
                  <td className="td20persent">Liability</td>
                  <td className="td40persent">
                    Unlimited. Personal assets of the partners are also liable
                  </td>
                  <td className="td40persent">
                    Limited to the extent of their capital contribution
                  </td>
                </tr>
                <tr className="tbodyRow1">
                  <td className="td20persent">Books of Accounts</td>
                  <td className="td40persent">Not mandatory</td>
                  <td className="td40persent">
                    Should be prepared according to the provisions of the LLP
                    Act
                  </td>
                </tr>
                <tr className="tbodyRow2">
                  <td className="td20persent">Number of Members</td>
                  <td className="td40persent">
                    Maximum 20. In the case of a banking business, the maximum
                    number is 10
                  </td>
                  <td className="td40persent">
                    No limit on the maximum number of partners
                  </td>
                </tr>
                <tr className="tbodyRow1">
                  <td className="td20persent">
                    Digital Signature Certificate (DSC)
                  </td>
                  <td className="td40persent">No such requirement</td>
                  <td className="td40persent">
                    All designated partners of the LLP should have a Digital
                    Signature which is a prerequisite for e-filing
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-1"></div>
          <div className="col-md-4">
            <section className="marginOfImage">
              <div className="incometax_img_6">
                <img
                  src={incometax_men2}
                  width="100%"
                  height={"400px"}
                  alt="incometax_men2"
                />
              </div>
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>
          </div>

          <div className="col-md-7 itrnomatter">
            <p className="itrnomatterp">Why LLP Over a Partnership Firm</p>

            <p className="partnershiptollp_p">
              Apart from the key differences, there are a few features that make
              the LLP a more desirable option over a standard partnership firm:
            </p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Freedom of Management/Flexibility:</p>
            </div>

            <p className="fearItrp">
              The partners are given a reasonable level of flexibility in
              conducting the operations and running the day to day affairs of
              the LLP. The LLP Agreement is not mostly influenced by the Limited
              Liability Partnership Act, 2008, which means to say that the Act
              is comparatively flexible on how the agreement can be drawn up.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Perpetual Succession:</p>
            </div>

            <p className="fearItrp">
              Unlike in the traditional partnership, the death of the partner
              does not affect the existence of the LLP. The separate legal
              entity feature of the LLP allows it to carry on business.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Investment Attraction:</p>
            </div>

            <p className="fearItrp">
              Foreign investors and venture capital funds look at LLPs as an
              investment opportunity as it has a corporate structure and is more
              organised as opposed to traditional partnerships.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Multidisciplinary LLPs:</p>
            </div>

            <p className="fearItrp">
              Professionals of various disciplines can work together in an LLP,
              which is an exclusive feature and an advantage in itself.
            </p>
          </div>

          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Conditions For Converting a Partnership Firm to LLP
            </p>
          </div>
          <div className="col-md-7">
            <div class="partnershiptollpli">
              <ul>
                <li>
                  The conversion of a partnership firm to LLP shall be done as
                  per Section 55 of the Limited Liability Partnership Act 2008
                  read with Schedule II of the Act.
                </li>
                <li>
                  All the partners of the firm shall be the partners of the LLP,
                  which means there shall be no new partners or the existing
                  partners cannot cease to be partners while making the
                  application
                </li>
                <li>
                  It is mandatory for all Partners to hold a valid Digital
                  Signature Certificate (DSC) and at least two partners must
                  have a DPIN before making such an application.
                </li>
                <li>
                  The partnership firm to be converted must be registered under
                  the Partnership Act, 1932.
                </li>
                <li>All the partners’ consent must be obtained.</li>
                <li>
                  The LLP must have the same partners as that of the partnership
                  firm. Any partner that wishes to be removed from the LLP may
                  be removed after the conversion is complete.
                </li>
                <li>
                  Director Identification Number (DIN)/Designated Partner
                  Identification Number (DPIN) must be obtained for all
                  Designated Partners.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-5 text-center llpMainImg">
            <img src={partnershiptollp} alt="partnershiptollp" />
            <button className="btn itrFIleButton">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="container ItrPaddingTopMain">
        <div
          className="col-md-12 slash_1 what_income_1 mb-4"
          data-aos="fade-bottom"
          data-aos-delay="500"
        >
          <span className="mb-3">
            Procedure for Conversion of a Partnership Firm into LLP
          </span>

          <p className="partnershiptollp_p text-center">
            Here is the process to register LLP in India. Vakilsearch provides a
            seamless and hassle-free process and one can check here to know the
            quick and detailed process to register an LLP.
          </p>
        </div>

        <div className="row llpflex">
          <div className="col-md-2">
            <div className="card llpCard llpbgCard1">
              <div className="card-body">
                <section className="llpflex">
                  <div className="llpcircle">1</div>
                </section>
                <p>Obtain Digital Signature Certificate (DSC)</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card llpCard llpbgCard2">
              <div className="card-body">
                <section className="llpflex">
                  <div className="llpcircle">2</div>
                </section>
                <p>Apply for Director Identification Number (DIN)</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card llpCard llpbgCard3">
              <div className="card-body">
                <section className="llpflex">
                  <div className="llpcircle">3</div>
                </section>
                <p>Name Approval</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card llpCard llpbgCard4">
              <div className="card-body">
                <section className="llpflex">
                  <div className="llpcircle">4</div>
                </section>
                <p>Incorporation of LLP</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card llpCard llpbgCard5">
              <div className="card-body">
                <section className="llpflex">
                  <div className="llpcircle">5</div>
                </section>
                <p>File Limited Liability Partnership (LLP) Agreement</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row paddingtopBottom">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Documents Required For LLP Registration
            </p>

            <p className="partnershiptollp_p text-center pt-3">
              When one plan to convert partnership to LLP, there are a few
              documents one must carry, here is the list:
            </p>
          </div>

          <div className="col-md-5">
            <p className="smalltitleofllp">To Be Submitted By Partners:</p>

            <div class="partnershiptollpli">
              <ul>
                <li>
                  Scanned copy of PAN Card or passport (Foreign Nationals &
                  NRIs)
                </li>
                <li>
                  Scanned copy of Aadhar Card/ Voter's ID/Passport/Driver's
                  License
                </li>
                <li>
                  Scanned copy of latest bank statement/telephone/mobile bill or
                  electricity/gas bill
                </li>
                <li>
                  Scanned passport-sized photograph Specimen signature (blank
                  document with signature [partners only])
                </li>
              </ul>
            </div>

            <section className="margintollp">
              <spna>
                <b>Note : </b>
              </spna>
              <span className="llpNote">
                Any one of the partners must self-attest the first three
                documents. In the case of foreign nationals and NRIs, all the
                documents must be notarized (if currently in India or a
                non-Commonwealth country) or apostilled (if in a Commonwealth
                country).
              </span>
            </section>
          </div>

          <div className="col-md-1"></div>
          <div className="col-md-6">
            <p className="smalltitleofllp">For Registered Office:</p>

            <div class="partnershiptollpli">
              <ul>
                <li>
                  Scanned copy of the latest bank statement/telephone/mobile
                  bill, or electricity or gas Bill
                </li>
                <li>
                  Scanned copy of the notarised rental agreement in English
                </li>
                <li>
                  Scanned copy of sale deed/property deed in English (in case of
                  owned property)
                </li>
              </ul>
            </div>

            <div className="text-center">
              <img src={DocReq13} alt="DocReq13" />
            </div>
          </div>
        </div>

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
      <Footer />
    </>
  );
}
export default PartnershipFirmtoLLP;
