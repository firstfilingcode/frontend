import React from "react";
import Enquiry from "../Enquiry/enquiry";
import gere from "../common/Images/gere.png";
import checkcircle from "../common/Images/checkCircleWhite.png";
import { NavLink } from "react-router-dom";
import benefits from "../common/Images/benefits.png";

const New = () => {
  return (
    <>
      <div className="container">
        <div className="col-md-12 order-list" id="sevicetype2">
          <ul>
            <li>
              <span>Services</span>
              <i className="fa fa-angle-right order-arrow-right"></i>
            </li>
            <li>
              <span>Registration</span>
              <i className="fa fa-angle-right order-arrow-right"></i>
            </li>
            <li>
              <span>Private Limited Company Registration</span>
            </li>
          </ul>
        </div>

        <div className="row IterNewPageBottom">
          <div className="col-md-10">
            <span className="slash_right hadingofitr">
              Private Limited (Pvt Ltd) Company Registration Online
            </span>

            <p className="Descriptionofitr">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem.
            </p>

            <div className="row">
              <div className="col-md-6">
                <span className="simpleSpanText">
                  Registering a Company is quick, easy, and can be done online
                  with FirstFiling in 3 simple steps:
                </span>

                <section>
                  <div className="card itrNewPageCard">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2 itrflex2">
                          <div className="golCircle">1</div>
                        </div>
                        <div className="col-md-10">
                          <spna className="circleSpan">
                            We help you register your directors with the
                            Ministry of Corporate Affairs (MCA).
                          </spna>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card itrNewPageCard2">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2 itrflex2">
                          <div className="golCircle">2</div>
                        </div>
                        <div className="col-md-10">
                          <spna className="circleSpan">
                            We help you pick the right company name.
                          </spna>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card itrNewPageCard3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2 itrflex2">
                          <div className="golCircle">3</div>
                        </div>
                        <div className="col-md-10">
                          <spna className="circleSpan">
                            We draft and file the documents required for your
                            company registration (MoA and AoA).
                          </spna>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-md-6">
                <Enquiry />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <img src={gere} alt="gere" width={"100%"} />
          </div>
        </div>
      </div>

      <section className="bgimgr3">
        <div className="container">
          <div className="row">
            <div class="col-md-12 slash_1 what_income_1 mt-5 ">
              <span>
                Select the complete tax filing package that suits your
                requirements
              </span>
            </div>
          </div>

          <div className="row service-padding1">
            <div className="col-md-4">
              <div className="card_head_itr">
                <span className="price_tag">Rs .12000</span>
              </div>
              <div className="card service-card card_itr">
                <div className="card-body card_body_itr">
                  <div className="text-center">
                    <span className="plansNameItr">Premier Plan</span>
                  </div>
                  <div className="itrlisection">
                    <ul>
                      <li>
                        <img src={checkcircle} alt="checkcircle" />
                        <span>
                          Pricing - Higher pricing, with premium features
                        </span>
                      </li>
                      <li>
                        <img src={checkcircle} alt="checkcircle" />
                        <span>
                          Filing Time - Filing completed within a few hours
                        </span>
                      </li>
                      <li>
                        <img src={checkcircle} alt="checkcircle" />
                        <span>
                          Expert Assistance - Unlimited assistance from a
                          dedicated tax professional
                        </span>
                      </li>
                      <li>
                        <img src={checkcircle} alt="checkcircle" />
                        <span>
                          Tax Audit Support - Included, with representation by
                          tax experts
                        </span>
                      </li>
                      <li>
                        <img src={checkcircle} alt="checkcircle" />
                        <span>
                          Tax Audit Support - Included, with representation by
                          tax experts
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <center>
                <NavLink to="">
                  <button className="buybtn mt-3">
                    <span className="buytext1">Buy</span>
                  </button>
                </NavLink>
              </center>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="col-md-12 what_income_1 slash_1 paddingtopBottom">
          <span>An Overview</span>
          <p className="itrSalarierP">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
          <p className="itrSalarierP">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
        </div>

        <div className="row">
          <div className="col-md-5 IncometaxItr_img mt-5">
            <div>
              <img src={benefits} alt="benefits" />
            </div>
          </div>
          <div className="col-md-1"></div>

          <div className="col-md-6 incometaxreture_4 IncometaxItr_img mt-5 ">
            <span className="slash_right">
              Benefits of Pvt Ltd Company Registration
            </span>
            <p>
              Registering a company offers many benefits. A registered company
              increases the authenticity of your business. It helps your
              business
            </p>

            <div class="gstlist_10 ">
              <ul>
                <li>
                  Shield from personal liability and protects from other risks
                  and losses
                </li>
                <li>Attract more customers</li>
                <li>
                  Procure bank credits and good investment from reliable
                  investors with ease
                </li>
                <li>
                  Offers liability protection to protect your company’s assets
                </li>
                <li>Greater capital contribution and greater stability</li>
                <li>Increases the potential to grow big and expand</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
