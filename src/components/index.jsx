import React, { Component } from "react";
import Header from "../components/common/Header";
import Footer from "./common/Footer";
import FirstFillingSlider from "../components/common/Images/FirstFillingSlider.png";
import arrow from "../components/common/Images/arrow.png";
import support from "../components/common/Images/support.png";
import privacy from "../components/common/Images/privacy.png";
import ux from "../components/common/Images/ux.png";
import shield from "../components/common/Images/shield.png";
import running from "../components/common/Images/running.png";
import puzzle from "../components/common/Images/puzzle.png";
import target from "../components/common/Images/target.png";
import review from "../components/common/Images/review.png";
import location from "../components/common/Images/location.png";
import noMoney from "../components/common/Images/noMoney.png";
import team from "../components/common/Images/team42.png";
import laptop from "../components/common/Images/laptop.png";
import clientprofile from "../components/common/Images/profile.png";
import quote from "../components/common/Images/quieot.png";
import upload from "../components/common/Images/upload.png";
import rupey from "../components/common/Images/rupey.png";
import file from "../components/common/Images/file.png";
import doc from "../components/common/Images/doc.png";
import { BASE_URL } from "./common/services/Helper";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Counter from "../components/counter/counter";
import { NavLink } from "react-router-dom";
import ContactFirst from "../components/Contact/ContactFirst";
import ServiceType2 from "./Services/ServiceType2";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutItem: [],
      ourClint: [],
      topBlog: [],
      isLoaded: false,
    };
  }

  async componentDidMount() {
    await fetch(BASE_URL + "/getAbout")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          aboutItem: json.data,
        });
      });

    await fetch(BASE_URL + "/getOurClints")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          ourClint: json.data,
        });
      });

    await fetch(BASE_URL + "/getBlog/3")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          topBlog: json.data,
        });
      });
  }

  render() {
    const options = {
      loop: true,
      responsiveClass: true,
      nav: true,
      dots: false,
      autoplay: true,
      navText: ["Prev", "Next"],
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        600: {
          items: 1,
        },
        700: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    };
    const clientSlide = {
      margin: 0,
      loop: true,
      responsiveClass: true,
      nav: true,
      dots: false,
      autoplay: true,
      navText: ["Prev", "Next"],
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        600: {
          items: 2,
        },
        700: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    };

    const about = this.state.aboutItem;
    const clint = this.state.ourClint;
    const blog = this.state.topBlog;
    return (
      <>
        <Header />
        <div className="container">
          <div className="row paddingtopBottom">
            <div className="col-md-6 col-6">
              <img
                src={FirstFillingSlider}
                className="sliderimg"
                alt="slider Image"
              />
            </div>
            <div className="col-md-6 moneyDiv col-6">
              <div className="row">
                <div className="col-md-12">
                  <p className="ml-4 softline">
                    India's largest tax and financial services software platform
                  </p>

                  <div className="money-is-essential-but-time-is">
                    <p className="the-primary-purpose">
                      <span className="money ">MONEY</span>
                      <span> is essential</span>
                    </p>

                    <p className="the-text-on">
                      <span>but </span>
                      <span className="time ">TIME</span>
                      <span className="is-precious"> is precious</span>
                    </p>
                  </div>
                  <div className="btn_group">
                    <button className="big-btn-outline">
                      <span>Get Started</span>
                    </button>
                    <button className="btnleft big-main-btn">
                      <span>Request a Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="about-bg-img">
          <div className="container">
            <div className="about_section">
              <div className="card-body about-card-body">
                <p className="about_p">
                  <div class="slash_0">
                    <span className="index1span">
                      {" "}
                      Welcome To First Filling{" "}
                    </span>
                  </div>
                </p>
                <h5 className="aboutH4">
                  We Are Calculating The Best Opportunities For You
                </h5>
                <div
                  dangerouslySetInnerHTML={{ __html: about.short_description }}
                  className="CssTHisPage about_span"
                ></div>
              </div>
            </div>

            <Counter />
          </div>
        </section>

        <div className="container">
          <div className="col-md-12 paddingtopBottom text-center">
            <div class="slash_1 web-color">
              <span> Why First Filling is the BEST ? </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex">
                <div className="arrowMargin">
                  <img src={arrow} alt="arrowRight" className="arrowRight" />
                </div>
                <div>
                  <span className="best-text">
                    100% Free Online Self Service ITR Filing
                  </span>
                </div>
              </div>
              <div className="d-flex">
                <div className="arrowMargin">
                  <img src={arrow} alt="arrowRight" className="arrowRight" />
                </div>
                <div>
                  <span className="best-text">
                    Authorised ERI, Integrated with Indian IT Department to
                    pre-fill, eFile your ITR
                  </span>
                </div>
              </div>
              <div className="d-flex">
                <div className="arrowMargin">
                  <img src={arrow} alt="arrowRight" className="arrowRight" />
                </div>
                <div>
                  <span className="best-text">
                    Affordable Assisted Tax Expert Services
                  </span>
                </div>
              </div>
              <div className="d-flex">
                <div className="arrowMargin">
                  <img src={arrow} alt="arrowRight" className="arrowRight" />
                </div>
                <div>
                  <span className="best-text">Accurate Tax Calculations</span>
                </div>
              </div>
              <div className="d-flex">
                <div className="arrowMargin">
                  <img src={arrow} alt="arrowRight" className="arrowRight" />
                </div>
                <div>
                  <span className="best-text">
                    Creative Audit - Reduces Potential IT Notices
                  </span>
                </div>
              </div>
              <div className="d-flex">
                <div className="arrowMargin">
                  <img src={arrow} alt="arrowRight" className="arrowRight" />
                </div>
                <div>
                  <span className="best-text">
                    Comprehensive Analytical PDF Report with every Filing
                  </span>
                </div>
              </div>
              <div className="d-flex">
                <div className="arrowMargin">
                  <img src={arrow} alt="arrowRight" className="arrowRight" />
                </div>
                <div>
                  <span className="best-text">
                    Best Experience - IT Platform works on any PC, Smart Mobile
                  </span>
                </div>
              </div>
              <div className="d-flex">
                <div className="arrowMargin">
                  <img src={arrow} alt="arrowRight" className="arrowRight" />
                </div>
                <div>
                  <span className="best-text">
                    Comprehensive end-end service provider in Taxation covering
                    IT, GST through Software Expert Services
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/* <div className="card">
                <iframe
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  width="100%"
                  height={300}
                ></iframe>
              </div> */}
            </div>
            <div className="col-md-12 text-center paddingtopBottom heading">
              <span className="text-head1">
                10 ways we make tax compliance hassle-free and enjoyable for
                you!
              </span>
            </div>
            <div className="col-md-6  mt-3">
              <div className="card card-tax1">
                <div className="card-body card-tax">
                  <div className="row">
                    <div className="col-md-2 col-2 text-right">
                      <img src={support} alt="support" />
                    </div>
                    <div className="col-md-10 col-10 card-tax-text">
                      <p className="card-tax_p">
                        Always there for your support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card card-tax1">
                <div className="card-body card-tax">
                  <div className="row">
                    <div className="col-md-2 col-2 text-right">
                      <img src={privacy} alt="Privicy" />
                    </div>
                    <div className="col-md-10 col-10 card-tax-text">
                      <p className="card-tax_p">
                        Data Privacy &amp; Confidentiality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card card-tax1">
                <div className="card-body card-tax">
                  <div className="row">
                    <div className="col-md-2 col-2 text-right">
                      <img src={ux} alt="ux" />
                    </div>
                    <div className="col-md-10 col-10 card-tax-text">
                      <p className="card-tax_p">Awesome UX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card card-tax1">
                <div className="card-body card-tax">
                  <div className="row">
                    <div className="col-md-2 col-2 text-right">
                      <img src={shield} alt="Shield" />
                    </div>
                    <div className="col-md-10 col-10 card-tax-text">
                      <p className="card-tax_p">Your data is always secure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card card-tax1">
                <div className="card-body card-tax">
                  <div className="row">
                    <div className="col-md-2 col-2 text-right">
                      <img src={running} alt="running" />
                    </div>
                    <div className="col-md-10 col-10 card-tax-text">
                      <p className="card-tax_p">It's Fast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card card-tax1">
                <div className="card-body card-tax">
                  <div className="row">
                    <div className="col-md-2 col-2 text-right">
                      <img src={puzzle} alt="puzzle" />
                    </div>
                    <div className="col-md-10 col-10 card-tax-text">
                      <p className="card-tax_p">Complete solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card card-tax1">
                <div className="card-body card-tax">
                  <div className="row">
                    <div className="col-md-2 col-2 text-right">
                      <img src={target} alt="target" />
                    </div>
                    <div className="col-md-10 col-10 card-tax-text">
                      <p className="card-tax_p">Leaves nothing on chance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card card-tax1">
                <div className="card-body card-tax">
                  <div className="row">
                    <div className="col-md-2 col-2 text-right">
                      <img src={review} alt="review" />
                    </div>
                    <div className="col-md-10 col-10 card-tax-text">
                      <p className="card-tax_p">No mis-selling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card card-tax1">
                <div className="card-body card-tax">
                  <div className="row">
                    <div className="col-md-2 col-2 text-right">
                      <img src={location} alt="location" />
                    </div>
                    <div className="col-md-10 col-10 card-tax-text">
                      <p className="card-tax_p">
                        All you may need in one place
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card card-tax1">
                <div className="card-body card-tax">
                  <div className="row">
                    <div className="col-md-2 col-2 text-right">
                      <img src={noMoney} alt="no money" />
                    </div>
                    <div className="col-md-10 col-10 card-tax-text">
                      <p className="card-tax_p">No hidden fees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row team-top-padding">
            <div className="col-md-8">
              <img src={team} alt="team" width="100%" />
            </div>
            <div className="col-md-4">
              <p className="team-heading">
                <div class="slash_1 web-color">
                  <span>Our Team</span>
                </div>
              </p>
              <p className="team-text">
                Our dedicated team comprises of competent people with extensive
                knowledge and experience. Our professionalism and expertise
                helps us to service our clients to their satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row g-0">
            <div className="col-md-4 itr-e-filling-bg1">
              <section className="itr-e-filling-section">
                <span className="itr-e-filling-heading">
                  <span className="service_slash">Our Services</span>
                </span>

                <section className="itr-e-filling-description">
                  <p>
                    The primary purpose of an about us page is to inform the
                    reader about the company and its operations.
                  </p>

                  <p>
                    This is a straightforward goal that nearly all businesses
                    have to fulfill in some fashion or another.
                  </p>

                  <p>
                    However, there are other reasons why about us pages are
                    common fixtures on business websites.
                  </p>

                  <p>
                    However, there are other reasons why about us pages are
                    common fixtures on business websites.
                  </p>
                </section>
              </section>
            </div>

            <div className="col-md-8 itr-e-filling-bg2">
              <OwlCarousel className="owl-theme" {...options}>
                <div className="item item_padding">
                  <section className="itr-e-filling-section2">
                    <section className="itr-e-filling-padding">
                      <section className="laptop">
                        <img src={laptop} alt="laptop" className="laptop" />
                      </section>
                      <section className="heading-filling">
                        <span>ITR e-filing</span>
                      </section>
                      <section className="descripion-filling">
                        <p>
                          The primary purpose of an about us page is to inform
                          the reader about the company and its operations.
                        </p>
                        <p>
                          This is a straightforward goal that nearly all
                          businesses have to fulfill in some fashion or another.
                        </p>
                        <p>
                          The primary purpose of an about us page is to inform
                          the reader about the company and its operations.
                        </p>
                        <p>
                          This is a straightforward goal that nearly all
                          businesses have to fulfill in some fashion or another.
                        </p>

                        <section className="link-filling text-right">
                          <a href="#">Read More.....</a>
                        </section>
                      </section>
                    </section>
                  </section>
                </div>
              </OwlCarousel>
            </div>
          </div>

          <div className="row clientsCenter">
            <h3 className="text-center texthead paddingtopBottom">
              <div class="slash_1 web-color">
                <span> 5 Easy Steps to e-file your Income Tax Return </span>
              </div>
            </h3>
            <div className="col-md-1"></div>
            <div className="col-md-2 income-tax-hover">
              <div className="card income-tax-card card income-tax-card-bg-img">
                <div className="card-body income-tax-card-body">
                  <span className="income-tax-card-text">Easy Sign in/up</span>
                  <p className="income-tax-card-text2">
                    Details auto extracted from IT dept for ITR filing
                  </p>
                </div>
              </div>
              <div className="income-tax-blue-box">
                <span className="income-tax-blue-div">
                  <img src={upload} alt="upload" className="income-tax-img" />
                </span>
              </div>
            </div>
            <div className="col-md-2 income-tax-hover">
              <div className="card income-tax-card">
                <div className="card-body income-tax-card-body">
                  <span className="income-tax-card-text">Quick pick</span>
                  <p className="income-tax-card-text2">
                    Details auto extracted from IT dept for ITR filing
                  </p>
                </div>
              </div>
              <div className="income-tax-blue-box">
                <span className="income-tax-blue-div">
                  <img src={rupey} alt="rupey" className="income-tax-img" />
                </span>
              </div>
            </div>
            <div className="col-md-2 income-tax-hover">
              <div className="card income-tax-card">
                <div className="card-body income-tax-card-body">
                  <span className="income-tax-card-text">Quick pick</span>
                  <p className="income-tax-card-text2">
                    Details auto extracted from IT dept for ITR filing
                  </p>
                </div>
              </div>
              <div className="income-tax-blue-box">
                <span className="income-tax-blue-div">
                  <img src={doc} alt="doc" className="income-tax-img" />
                </span>
              </div>
            </div>
            <div className="col-md-2 income-tax-hover">
              <div className="card income-tax-card">
                <div className="card-body income-tax-card-body">
                  <span className="income-tax-card-text">
                    Compare Computations
                  </span>
                  <p className="income-tax-card-text2">
                    Details auto extracted from IT dept for ITR filing
                  </p>
                </div>
              </div>
              <div className="income-tax-blue-box">
                <span className="income-tax-blue-div">
                  <img src={doc} alt="doc" className="income-tax-img" />
                </span>
              </div>
            </div>
            <div className="col-md-2 income-tax-hover">
              <div className="card income-tax-card">
                <div className="card-body income-tax-card-body">
                  <span className="income-tax-card-text">File ITR</span>
                  <p className="income-tax-card-text2">
                    Details auto extracted from IT dept for ITR filing
                  </p>
                </div>
              </div>
              <div className="income-tax-blue-box">
                <span className="income-tax-blue-div">
                  <img src={file} alt="file" className="income-tax-img" />
                </span>
              </div>
            </div>
            <div className="col-md-1"></div>

            <div className="col-md-12 text-center">
              <button className="income-tax-button">Free File Now</button>
            </div>
          </div>
        </div>

        <ServiceType2 />

        <div className="container clientsCenter">
          <div className="our_client_box">
            <div className="col-md-12 paddingtopBottom">
              <div class="slash_1 web-color">
                <span>Meet Our Clients</span>
              </div>
            </div>
            <div className="row g-0">
              {clint.map((item, index) => (
                <div className="col-md-2 col-6">
                  <div className="our_client_child_box">
                    <img
                      src={item.photo}
                      alt="clientsLogo"
                      className="our_client_child_item"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <h3 className="text-center texthead paddingtopBottom3">
            <div class="slash_1 web-color">
              <span>What our Clients Say</span>
            </div>
          </h3>
          <div className="row Clientsrow">
            <OwlCarousel className="owl-theme" {...clientSlide}>
              <div className="item item_padding">
                <div className="col-md-12 cardcolumn">
                  <div className="imgtext">
                    <img src={clientprofile} alt="profile" />
                  </div>
                  <div className="card cardClient">
                    <div className="card-body cardClientbody">
                      <p className="text-white detailpro">
                        <span className="firsttext">I</span> would like to thank
                        your company personnel at the customer services division
                        for their excellent support. My Relationship Manager,
                        Esther Monicka, took care of all my queries in a jiffy.
                      </p>

                      <span className="name">Mark Jackson</span>
                      <section className="displayflexquieot">
                        <img src={quote} className="quoteimg" alt="quote" />
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item item_padding ">
                <div className="col-md-12 cardcolumn">
                  <div className="imgtext">
                    <img src={clientprofile} alt="profile" />
                  </div>
                  <div className="card cardClient">
                    <div className="card-body cardClientbody">
                      <p className="text-white detailpro">
                        <span className="firsttext">I</span> would like to thank
                        your company personnel at the customer services division
                        for their excellent support. My Relationship Manager,
                        Esther Monicka, took care of all my queries in a jiffy.
                      </p>

                      <span className="name">Mark Jackson</span>
                      <section className="displayflexquieot">
                        <img src={quote} className="quoteimg" alt="quote" />
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item item_padding">
                <div className="col-md-12 cardcolumn">
                  <div className="imgtext">
                    <img src={clientprofile} alt="profile" />
                  </div>
                  <div className="card cardClient">
                    <div className="card-body cardClientbody">
                      <p className="text-white detailpro">
                        <span className="firsttext">I</span> would like to thank
                        your company personnel at the customer services division
                        for their excellent support. My Relationship Manager,
                        Esther Monicka, took care of all my queries in a jiffy.
                      </p>

                      <span className="name">Mark Jackson</span>
                      <section className="displayflexquieot">
                        <img src={quote} className="quoteimg" alt="quote" />
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>

        <section className="backgroundblog">
          <div className="container blog-post">
            <h3 className="text-center heading-card paddingtopBottom">
              <div class="slash_1 web-color">
                <span>Latest Blog Posts</span>
              </div>
            </h3>
            <div className="row">
              {blog.map((data, index) => (
                <div className="col-md-4 service-card">
                  <div className="card fcard blog_cards">
                    <div className="card-top blog-img1">
                      <section className="text-right">
                        <span className="blog-carddate">{data.created_at}</span>
                      </section>
                      <img src={data.photo} alt="card-img" />
                    </div>
                    <div className="card-body blog-cardbody">
                      <div className="card-tital blog-cardhead blog_blackcard_text">
                        <h5>{data.name}</h5>
                        <span>By Admin / {data.author}</span>
                        <p
                          dangerouslySetInnerHTML={{ __html: data.ck_editor }}
                        ></p>

                        <div className="row">
                          <div className="col-md-8 col-7 blog_blackright_text">
                            <span>
                              <i class="fa fa-thumbs-up"></i> {data.likes}
                            </span>
                            <span>
                              <i class="fa fa-share-alt"></i> {data.share}
                            </span>
                          </div>
                          <div className="col-md-4 col-5 blog_blackbutton_1">
                            <NavLink
                              to={{ pathname: "/Blogdetails" }}
                              state={{
                                id: data.id,
                              }}
                            >
                              <button className="btn">Read More..</button>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-12 blog-lastbt">
                <button className="btn">
                  <NavLink to="/Blog">Check Out Our Blogs</NavLink>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="container bg-dark contact-first-filling">
          <div class="slash_0 text-center text-white headtext">
            <span>Get In Touch</span>
          </div>
          <div className="row controw">
            <ContactFirst />
            <div className="col-md-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.515311324409!2d75.76921781482443!3d26.95057606494753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db376d6d4382b%3A0xc7a9a2ebb6dcbf1e!2sRukmani%20Software!5e0!3m2!1sen!2sin!4v1671770705700!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default Index;
