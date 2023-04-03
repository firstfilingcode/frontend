import React from "react";
import Enquiry from "../Enquiry/enquiry";
import { Helmet } from "react-helmet";
import ServiceName from "../Services/NameOfService";
import { NavLink } from "react-router-dom";
function IncomeTaxreturn() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>First Filling-Gst Registration</title>
        <link rel="icon" href="" />
        <meta name="description" content="Gst" data-react-helmet="true" />
      </Helmet>

      <section>
        {/* <video className="videoplaysdff" autoPlay loop muted>
          <source src={background_video} type="video/mp4" />
        </video> */}
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

         <NavLink to="/Contact">     <button class="buynow_2 btn btn-secondary">
                <span class="buytext">Schedule Free Consultation</span>
              </button></NavLink>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 topEnquiry mt-3">
              <Enquiry />
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>

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
    </>
  );
}
export default IncomeTaxreturn;
