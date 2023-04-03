import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HeaderLeftLogo1 from "../common/Images/HeaderLeftLogo1.png";
import phone2 from "../common/Images/phone2.png";
import emailBox from "../common/Images/emailBox.png";
import login from "../common/Images/login2.png";
import serviceSetting from "../common/Images/servicesetting.png";
import expertstar from "../common/Images/expertstar.png";
import toggelImg from "../common/Images/toggelImg.png";
import closebtn from "../common/Images/closebtn.png";
import book1 from "../common/Images/book1.png";
import team from "../common/Images/Data.png";
import closeIcon from "../common/Images/closeIcon.png";
import ProfilePIC from "../common/Images/profileImg2.png";
import Login from "../Login/login";
import SignUp from "../Sign-up/SignUp";
import Forgot from "../Forgot/Forgot";
import forgot from "../common/Images/forgot.png";
import { BASE_URL, myAxios, Timeout } from "./services/Helper";
import { getPageSearch } from "./services/newsLetter";
import { ReactSession } from "react-client-session";
import arrow from "../common/Images/arrowWhite.png";
import secureLocalStorage from "react-secure-storage";
import instagramNew from "../common/Images/instagramNew.png";
import watsappNew from "../common/Images/watsappNew.png";
import facebookNew from "../common/Images/facebookNew.png";
import youtubeNew from "../common/Images/youtubeNew.png";
import twitterNew from "../common/Images/twitterNew.png";
import inNew from "../common/Images/inNew.png";
import iicon from "../common/Images/document_upload.png";
import BlogIcon from "../common/Images/BlogIcon.png";
import contact from "../common/Images/contact.png";
import $ from "jquery";


ReactSession.setStoreType("sessionStorage");
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [askDropdown, setAskDropdown] = useState(false);
  const [name, setName] = useState(localStorage.getItem("displayName"));
  const [googleId, setgoogleId] = useState(localStorage.getItem("googleId"));
  const [showModal, setShowModal] = useState(false);
  const [myProfileDropdown, setMyProfileDropdown] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [expertDropdown, setExpertDropdown] = useState(false);
  const [servicesList, setSerivesList] = useState([]);
  const [subServicesList, setSubServicesList] = useState([]);
  const [tabid, setTabId] = useState("");
  const [dropdownId, setDropdownId] = useState(4);
  const [dropdownServiceList, setDropdownServiceList] = useState([]);
  const [subMenuActive, setSubMenuActive] = useState(true);
  const [pathName, setPathName] = useState(window.location.pathname);

  const [notice, setNotice] = useState([]);
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(false);
    localStorage.setItem("notice_count", 0);
  };
  useEffect(() => {
    const showNotice = () => {
      fetch(BASE_URL + "/getNotification")
        .then((res) => res.json())
        .then((json) => {
          setNotice(json.data[0].message);
          // alert(JSON.stringify(json))
        });
    };
    if (localStorage.getItem("notice_count") == 0) {
      setShow(false);
    } else {
      showNotice();
    }
  }, []);

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      getPageSearch({
        name:event.target.value
        }).then((resp) => {
          // console.log(resp);
          if (resp.status) {
            navigate("/"+resp.data.route); 
           
          }else
          {
            alert('No Related Page Found')
          }
        });
    }
  }


  window.addEventListener("storage", () => {
    setName(localStorage.getItem("displayName"));

    setgoogleId(localStorage.getItem("googleId"));

    document.getElementById("myNav").style.width = "0%";
    //window.dispatchEvent(new Event("LoginFirst"));
  });

  window.addEventListener("LoginFirst", () => {
    document.getElementById("myNav").style.width = "100%";
  });
  window.addEventListener("Logout", () => {
    setShowModal(true);
    setTimeout(function () {
      setShowModal(false);
    }, 2000);
  });

  let formData = new FormData();

  const handleShow = () =>
    (document.getElementById("myNav").style.width = "100%")(
      (document.getElementById("signUpPage").style.width = "0%")
    );

  const signClose = () =>
    (document.getElementById("signUpPage").style.width = "0%");

  const forgotCLose = () =>
    (document.getElementById("ForgetPage").style.width = "0%");

  const handleClose = () =>
    (document.getElementById("myNav").style.width = "0%");

  useEffect(() => {
    if (localStorage.getItem("googleId") !== null) {
      formData.append("name", name);
      formData.append("email", localStorage.getItem("email"));
      formData.append("auth_provider", "firebase");
      myAxios({
        method: "post",
        url: BASE_URL + "/googleLogin",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          localStorage.setItem("user_id", response.data.data.id);
          ReactSession.set("user_id", response.data.data.id);
          //  localStorage.setItem('mobile', response.data.mobile);
          //  localStorage.setItem('address', response.data.address);
          //  localStorage.setItem('aadhar_card', response.data.aadhar_card);
          //  localStorage.setItem('pan_card', response.data.pan_card);
          //  localStorage.setItem('doc_status', response.data.doc_status);

          // if(response.status)
          // {
          //   alert("login")
          // //  setData1(response.data.data);
          // }
        })
        .catch(function (response) {
          //handle error
          //alert("not login")
          //  console.log(response);
        });
    }
  }, [googleId]);

  const handleLogout = () => {
    const array = window.location.hostname;

    sessionStorage.clear();
    localStorage.clear();
    window.dispatchEvent(new Event("storage"));
    window.location.href = "https://firstfiling.in";
    //  window.removeEventListener("storage");
  };

  // const names = ["Blog", "Blogdetails"];

  let PageName = window.location.pathname.split("/")[1];
  const [setting, setSetting] = useState([]);
  const getSetting = async () => {
    await fetch(BASE_URL + "/getSetting", {
      signal: Timeout(3000).signal,
    })
      .then((res) => res.json())
      .then((json) => {
        // alert(JSON.stringify(json.data));
        setSetting(json.data);
      })
      .catch();
  };
  useEffect(() => {
    getSetting();
    window.scroll({
      top: 0,
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
    Services();

    // if (names.indexOf(PageName) > -1) {
    //   document.body.style = "background: #313645";
    // } else {
    //   document.body.style = "background: #FCFCFC;";
    // }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".headerBackground");
    const alertMessage = document.querySelector(".alertMessage");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");

    scrollTop >= 0.5
      ? (alertMessage.style.display = "none")
      : (alertMessage.style.display = "block");
  };

  async function Services() {
    await fetch(BASE_URL + "/getServicesName", {
      signal: Timeout(3000).signal,
    })
      .then((res) => res.json())
      .then((json) => {
        setSerivesList(json.services);
      })
      .catch();
  }

  useEffect(() => {
    if (tabid !== "") {
      setSubMenuActive(false);
      (async () => {
        fetch(BASE_URL + "/getServicesTypes/" + tabid)
          .then((res) => res.json())
          .then((json) => {
            setSubServicesList(json.services);
            setDropdownId("");
            //  alert(JSON.stringify(json.services[0].routes))
          });
      })();
    }
  }, [tabid]);
  const [dropValue, setDropValue] = useState("");
  useEffect(() => {
    if (screenSize.dynamicWidth < 600) {
      setDropValue(
        <div
          className="serviceListing"
          id=""
          style={{
            display: subMenuActive === true ? "none" : "",
          }}
        >
          {subServicesList.map((data, index) => (
            <>
              <hr className="titlehr" />
              <p className="titletab">{data.name}</p>
              <hr className="titlehr" />
              <ul className="listingheaderli">
                {data.routes.map((item) => (
                  <>
                    <li onClick={() => setToggle(false)}>
                      <NavLink to={"/" + item.route}> {item.name}</NavLink>
                    </li>
                  </>
                ))}
              </ul>
            </>
          ))}
        </div>
      );
    }
  }, [subServicesList]);
  useEffect(() => {
    if (screenSize.dynamicWidth < 600) {
      setDropValue(
        <div
          className="serviceListing  "
          style={{
            display: subMenuActive === false ? "none" : "",
          }}
        >
          {dropdownServiceList.map((data1, index) => (
            <>
              <hr className="titlehr" />
              <p className="titletab">{data1.name}</p>
              <hr className="titlehr" />
              <ul className="listingheaderli">
                {data1.routes.map((item1) => (
                  <>
                    <li onClick={() => setToggle(false)}>
                      <NavLink to={"/" + item1.route}>{item1.name}</NavLink>
                    </li>
                  </>
                ))}
              </ul>
            </>
          ))}
        </div>
      );
    }
  }, [dropdownServiceList]);
  useEffect(() => {
    if (dropdownId !== "") {
      (async () => {
        await fetch(BASE_URL + "/getServicesTypesDropdown/" + dropdownId)
          .then((res) => res.json())
          .then((json) => {
            setTabId("");
            setDropdownServiceList(json.data);
            // alert(JSON.stringify(dropdownServiceList))
          });
      })();
    }
  }, [dropdownId]);

  function TabChange(event) {
    // alert(event.target.getAttribute("data-label"))
    // alert(event.target.getAttribute("data-dropdown"))
    var classname1 = document.getElementsByClassName("dropdownList");

    if (classname1.length > 0) {
      for (var i = 0; i < classname1.length; i++) {
        classname1[i].style.display = "none";
      }
    }

    // setTab(event.target.getAttribute("data-label"));
    if (event.target.getAttribute("data-dropdown") !== null) {
      //alert(event.target.getAttribute("data-dropdown"))

      var classname = document.getElementsByClassName(
        event.target.getAttribute("data-dropdown")
      );
      var el = document.querySelectorAll(".sibling");
      [].forEach.call(el, function (el1) {
        el1.classList.remove("activeColor");
      });
      event.target.classList.add("activeColor");
      if (classname.length > 0) {
        for (var i = 0; i < classname.length; i++) {
          classname[i].style.display = "block";
        }
      }

      // document
      //   .getElementsByClassName(event.target.getAttribute("data-dropdown"))[0]
      //   .click();
    } else {
      setTabId(event.target.getAttribute("data-label"));

      var el = document.querySelectorAll(".sibling");
      [].forEach.call(el, function (el1) {
        el1.classList.remove("activeColor");
      });

      event.target.classList.add("activeColor");
      //  alert(event.target.getAttribute("data-label"));
    }
  }

  function TabChangeDropdown(event) {
    setSubMenuActive(true);
    setDropdownId(event.target.getAttribute("data-label"));

    var el = document.querySelectorAll(".siblingDropdown");
    [].forEach.call(el, function (el1) {
      el1.classList.remove("SmallActiveColor");
    });
    document
      .getElementById(event.target.getAttribute("data-id"))
      .classList.add("SmallActiveColor");
  }

  const navigate = useNavigate();
  function labelSend(event) {
    setMyProfileDropdown(false);
    let dataLabel = event.target.getAttribute("data-label");
    secureLocalStorage.setItem("dataLabel", dataLabel);
    navigate("/Order");
  }

  function OrderLabel(event) {
    let dataLabel = event.target.getAttribute("data-label");
    secureLocalStorage.setItem("dataLabel", dataLabel);
    window.location.reload();
  }

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();

    $("#myList .filterspan").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  return (
    <>
      {/* {notice.status === 0 ? "" : */}
      {/* <> */}
      {show ? (
        <section className="alertMessage">
          <div className="container">
            <div className="row p-2">
              <div className="col-md-10">
                <span className="partnershiptollp_p text-white">{notice}</span>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-1">
                <img
                  src={closeIcon}
                  onClick={handleClick}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {/* </>} */}
      <section className="headerBackground">
        <div className="container">
          <div className="row headerFlex">
            <div className="col-md-2 col-2">
              <NavLink to="/">
                <img src={HeaderLeftLogo1} alt="logo" className="logo" />
              </NavLink>
            </div>

            <div className="col-10 mobileViewHeader">
              <>
                <section className="text-end">
                  {toggle ? (
                    <img
                      src={closebtn}
                      alt="closebtn"
                      className="cursor-pointer"
                      onClick={() => setToggle(false)}
                    />
                  ) : (
                    <img
                      src={toggelImg}
                      alt="toggle"
                      className="cursor-pointer"
                      onClick={() => setToggle(!toggle)}
                    />
                  )}
                </section>
                {toggle && (
                  <section className="MobileHeaderSection">
                    <div className="row">
                      <div className="col-md-12 ">
                        <section
                          className="DropdownItem1"
                          onClick={() => setAskDropdown(!askDropdown)}
                        >
                          <div className="row">
                            <div className="col-10">
                              <i className="fa fa-hard-of-hearing"></i>
                              <span>Ask an Expert</span>
                            </div>
                            <div className="col-2">
                              {askDropdown ? (
                                <i className="fa fa-angle-down"></i>
                              ) : (
                                <i className="fa fa-angle-up"></i>
                              )}
                            </div>
                          </div>
                        </section>
                        {askDropdown && (
                          <>
                            <section className="dropdownitemsScroll">
                              <section className="dropdownitems">
                                <NavLink to="">
                                  <div className="row">
                                    <div className="col-2">
                                      <i className="fa fa-circle-o"></i>
                                    </div>
                                    <div className="col-10">
                                      <NavLink to="/TaxationAdvisoryCryptocurrency">
                                        <span>
                                          Taxation Advisory for Cryptocurrency
                                        </span>
                                      </NavLink>
                                    </div>
                                  </div>
                                </NavLink>
                              </section>
                              <section className="dropdownitems">
                                <NavLink to="">
                                  <div className="row">
                                    <div className="col-2">
                                      <i className="fa fa-circle-o"></i>
                                    </div>
                                    <div className="col-10">
                                      <span>
                                        Taxation Advisory for Individual
                                      </span>
                                    </div>
                                  </div>
                                </NavLink>
                              </section>
                              <section className="dropdownitems">
                                <NavLink to="">
                                  <div className="row">
                                    <div className="col-2">
                                      <i className="fa fa-circle-o"></i>
                                    </div>
                                    <div className="col-10">
                                      <span>Taxation Advisory for Startup</span>
                                    </div>
                                  </div>
                                </NavLink>
                              </section>
                              <section className="dropdownitems">
                                <NavLink to="">
                                  <div className="row">
                                    <div className="col-2">
                                      <i className="fa fa-circle-o"></i>
                                    </div>
                                    <div className="col-10">
                                      <span>
                                        Taxation Advisory for
                                        Corporate/Ecommerce
                                      </span>
                                    </div>
                                  </div>
                                </NavLink>
                              </section>
                              <section className="dropdownitems">
                                <NavLink to="">
                                  <div className="row">
                                    <div className="col-2">
                                      <i className="fa fa-circle-o"></i>
                                    </div>
                                    <div className="col-10">
                                      <span>E-Way Bill</span>
                                    </div>
                                  </div>
                                </NavLink>
                              </section>
                              <section className="dropdownitems">
                                <NavLink to="">
                                  <div className="row">
                                    <div className="col-2">
                                      <i className="fa fa-circle-o"></i>
                                    </div>
                                    <div className="col-10">
                                      <span>
                                        Taxation Advisory for GST Compliances
                                      </span>
                                    </div>
                                  </div>
                                </NavLink>
                              </section>
                              <section className="dropdownitems">
                                <NavLink to="">
                                  <div className="row">
                                    <div className="col-2">
                                      <i className="fa fa-circle-o"></i>
                                    </div>
                                    <div className="col-10">
                                      <span>
                                        Taxation Advisory for Capital Gains
                                        (Immovable/Movable Property
                                      </span>
                                    </div>
                                  </div>
                                </NavLink>
                              </section>
                            </section>
                          </>
                        )}
                      </div>
                      <div className="col-md-12 ">
                        <section className="DropdownItem1">
                          <NavLink to="">
                            <div className="row">
                              <div className="col-12">
                                <i className="fa fa-book"></i>
                                <span>Book Keeping</span>
                              </div>
                            </div>
                          </NavLink>
                        </section>
                      </div>
                      <div className="col-md-12 ">
                        <section
                          className="DropdownItem1"
                          onClick={() => setServiceDropdown(!serviceDropdown)}
                        >
                          <div className="row">
                            <div className="col-10">
                              <i className="fa fa-cogs"></i>
                              <span>Services</span>
                            </div>
                            <div className="col-2">
                              {serviceDropdown ? (
                                <i className="fa fa-angle-down"></i>
                              ) : (
                                <i className="fa fa-angle-up "></i>
                              )}
                            </div>
                          </div>
                        </section>

                        {serviceDropdown && (
                          <>
                            <section>
                              <ul className="serviceDropdownUl">
                                {servicesList.map((data, index) => (
                                  <>
                                    <div className="serviceDropdownLi">
                                      <li
                                        onClick={TabChange}
                                        data-label={data.id}
                                        data-dropdown={
                                          data.dropdown.map((data1, i) =>
                                            data1 !== null
                                              ? data.service_name
                                              : ""
                                          )[0]
                                        }
                                        onLoad={
                                          index === 0
                                            ? (e) =>
                                                e.target.closest("li").click()
                                            : ""
                                        }
                                        className="sibling"
                                      >
                                        {data.service_name}
                                      </li>
                                    </div>
                                    {data.dropdown.map((item, index) => (
                                      <>
                                        <ul className="serviceDropdownUl2 sibling">
                                          <div className="serviceDropdownLi2">
                                            <li
                                              id={"drop_" + item.id}
                                              data-label={item.id}
                                              data-id={"drop_" + item.id}
                                              onClick={TabChangeDropdown}
                                              className={
                                                index === 0
                                                  ? data.service_name +
                                                    " activeColor dropdownList siblingDropdown"
                                                  : data.service_name +
                                                    " dropdownList siblingDropdown"
                                              }
                                            >
                                              {item.name}
                                            </li>
                                          </div>
                                        </ul>
                                        <div
                                          style={{
                                            display:
                                              dropdownId === item.id + ""
                                                ? "block"
                                                : "none",
                                          }}
                                        >
                                          {dropValue}
                                        </div>
                                      </>
                                    ))}
                                    <div
                                      style={{
                                        display:
                                          tabid === data.id + ""
                                            ? "block"
                                            : "none",
                                      }}
                                    >
                                      {dropValue}
                                    </div>
                                  </>
                                ))}
                              </ul>
                            </section>

                            {/* 
                              <div
                                className="serviceListing"
                                id=""
                                style={{
                                  display:
                                    subMenuActive === false
                                      ? "none"
                                      : "",
                                }}
                              >
                                {dropdownServiceList.map(
                                  (data1, index) => (
                                    <>
                                      <hr className="titlehr" />
                                      <p className="titletab">
                                        {data1.name}
                                      </p>
                                      <hr className="titlehr" />
                                      <ul className="listingheaderli">
                                        {data1.routes.map(
                                          (item1) => (
                                            <>
                                              <li>
                                                <NavLink
                                                  to={
                                                    "/" +
                                                    item1.route
                                                  }
                                                >
                                                  {item1.name}
                                                </NavLink>
                                              </li>
                                            </>
                                          )
                                        )}
                                      </ul>
                                    </>
                                  )
                                )}
                              </div> */}
                          </>
                        )}
                      </div>
                      <div className="col-md-12 ">
                        {name ? (
                          <>
                            <section
                              className="DropdownItem1"
                              onClick={() =>
                                setProfileDropdown(!profileDropdown)
                              }
                            >
                              <div className="row">
                                <div className="col-10">
                                  <i className="fa fa-user-circle"></i>
                                  <span>{name}</span>
                                </div>
                                <div className="col-2">
                                  {profileDropdown ? (
                                    <i className="fa fa-angle-down"></i>
                                  ) : (
                                    <i className="fa fa-angle-up"></i>
                                  )}
                                </div>
                              </div>
                            </section>

                            {profileDropdown && (
                              <>
                                <section className="dropdownitemsScroll">
                                  <section
                                    className="dropdownitems"
                                    onClick={
                                      pathName === "/Order"
                                        ? OrderLabel
                                        : labelSend
                                    }
                                    data-label="myProfile"
                                  >
                                    <div className="row">
                                      <div className="col-2">
                                        <i className="fa fa-circle-o"></i>
                                      </div>
                                      <div className="col-10">
                                        <span>My Profile</span>
                                      </div>
                                    </div>
                                  </section>
                                  <section
                                    className="dropdownitems"
                                    onClick={
                                      pathName === "/Order"
                                        ? OrderLabel
                                        : labelSend
                                    }
                                    data-label="allOrders"
                                  >
                                    <div className="row">
                                      <div className="col-2">
                                        <i className="fa fa-circle-o"></i>
                                      </div>
                                      <div className="col-10">
                                        <span>My Orders</span>
                                      </div>
                                    </div>
                                  </section>
                                  <section
                                    className="dropdownitems"
                                    onClick={
                                      pathName === "/Order"
                                        ? OrderLabel
                                        : labelSend
                                    }
                                    data-label="wallet"
                                  >
                                    <div className="row">
                                      <div className="col-2">
                                        <i className="fa fa-circle-o"></i>
                                      </div>
                                      <div className="col-10">
                                        <span>My Wallet</span>
                                      </div>
                                    </div>
                                  </section>
                                  <section
                                    className="dropdownitems"
                                    onClick={
                                      pathName === "/Order"
                                        ? OrderLabel
                                        : labelSend
                                    }
                                    data-label="allOrders"
                                  >
                                    <div className="row">
                                      <div className="col-2">
                                        <i className="fa fa-circle-o"></i>
                                      </div>
                                      <div className="col-10">
                                        <span>Support</span>
                                      </div>
                                    </div>
                                  </section>
                                </section>
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            <section
                              className="DropdownItem1"
                              onClick={handleShow}
                            >
                              <div className="row">
                                <div className="col-12">
                                  <i className="fa fa-sign-in"></i>
                                  <span>Login</span>
                                </div>
                              </div>
                            </section>
                          </>
                        )}
                      </div>

                      <div className="col-md-12">
                        <section
                          className="DropdownItem1"
                          onClick={handleLogout}
                        >
                          <div className="row">
                            <div className="col-12">
                              <i className="fa fa-sign-in"></i>
                              <span>Log Out</span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </section>
                )}
              </>
            </div>

            <div className="col-md-10 paddingli normalViewHeader">
              <div className="list-header" id="headerChange">
                <ul>
                  <li
                    onMouseEnter={() => {
                      setExpertDropdown(!expertDropdown);
                      setMyProfileDropdown(false);
                    }}
                  >
                    <img src={expertstar} alt="expertstar" />

                    <NavLink to="">Ask an Expert</NavLink>
                    {expertDropdown ? (
                      <i className="fa fa-angle-down arrowAfter"></i>
                    ) : (
                      <i className="fa fa-angle-up arrowAfter"></i>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => {
                      setDropdown(false);
                      setExpertDropdown(false);
                    }}
                  >
                    <img src={book1} alt="book1" />

                    <NavLink to="/bookkeeping">Book Keeping</NavLink>
                  </li>
                  <li
                    onMouseEnter={() => {
                      setDropdown(!dropdown);
                      setMyProfileDropdown(false);
                    }}
                  >
                    <img src={serviceSetting} alt="" />

                    <NavLink to="">Services</NavLink>
                    {dropdown ? (
                      <i className="fa fa-angle-down arrowAfter"></i>
                    ) : (
                      <i className="fa fa-angle-up arrowAfter"></i>
                    )}
                  </li>
                  {name ? (
                    <>
                      <li
                        onMouseEnter={() => {
                          setDropdown(false);
                          setLoginDropdown(false);
                          setMyProfileDropdown(!myProfileDropdown);
                        }}
                        className="cursor-pointer"
                      >
                        <img src={ProfilePIC} alt="ProfilePIC" />
                        <span>{"Welcome, " + name}</span>
                        {myProfileDropdown ? (
                          <i className="fa fa-angle-down arrowAfter"></i>
                        ) : (
                          <i className="fa fa-angle-up arrowAfter"></i>
                        )}
                      </li>
                    </>
                  ) : (
                    <li className="cursor-pointer">
                      <img src={login} alt="login" />
                      <span onClick={handleShow}>Login</span>
                    </li>
                  )}
                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      setLoginDropdown(!loginDropdown);
                    }}
                    onMouseOver={() => {
                      setMyProfileDropdown(false);
                      setDropdown(false);
                    }}
                  >
                    {loginDropdown ? (
                      <img src={closebtn} alt="closebtn" />
                    ) : (
                      <img src={toggelImg} alt="toggle" />
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {myProfileDropdown && (
            <div
              className="col-md-12"
              onMouseLeave={() => setMyProfileDropdown(false)}
            >
              <section className="dropdownRelative">
                <div className="headerDropdown">
                  <ul>
                    <li
                      onClick={pathName === "/Order" ? OrderLabel : labelSend}
                      data-label="myProfile"
                    >
                      My Profile
                    </li>
                    <li
                      onClick={pathName === "/Order" ? OrderLabel : labelSend}
                      data-label="allOrders"
                    >
                      My Orders
                    </li>
                    <li
                      onClick={pathName === "/Order" ? OrderLabel : labelSend}
                      data-label="wallet"
                    >
                      My Wallet
                    </li>
                    <li>
                      <NavLink to="/Support">Support</NavLink>
                    </li>
                    <li onClick={handleLogout}>
                      <NavLink to="">Log Out</NavLink>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          )}

          {loginDropdown && (
            <div
              className="col-md-12"
              onMouseLeave={() => setLoginDropdown(false)}
            >
              <section className="dropdownRelative">
                <div className="loginDropdown">
                  <div className="row loginSUbDrop">
                    <div className="col-md-6 iconflex">
                      <a
                        href={"tel:+91-:" + setting.phone}
                        className="d-flex"
                        onClick={() => setLoginDropdown(false)}
                      >
                        <img src={phone2} alt="phone2" className="icon" />
                        <span>Call Us</span>
                      </a>
                    </div>
                    <div className="col-md-6 iconflex">
                      <a
                        href={"mailto:" + setting.email}
                        className="d-flex"
                        target="blank"
                        onClick={() => setLoginDropdown(false)}
                      >
                        <img src={emailBox} alt="emailBox" className="icon" />
                        <span>Email Us</span>
                      </a>
                    </div>
                  </div>
                  <div className="row socielIcons">
                    {setting.instagram_link === null ? (
                      ""
                    ) : (
                      <div
                        className="col-md-2"
                        onClick={() => setLoginDropdown(false)}
                      >
                        <a href={setting.instagram_link} target="blank">
                          <div className="iconbackgroundheader">
                            <img
                              src={instagramNew}
                              alt="instagramNew"
                              className="pt-2"
                            />
                          </div>
                        </a>
                      </div>
                    )}
                    {setting.facebook_link === null ? (
                      ""
                    ) : (
                      <div
                        className="col-md-2"
                        onClick={() => setLoginDropdown(false)}
                      >
                        <a href={setting.facebook_link} target="blank">
                          <div className="iconbackgroundheader">
                            <img src={facebookNew} alt="facebookNew" />
                          </div>
                        </a>
                      </div>
                    )}
                    {setting.twitter_link === null ? (
                      ""
                    ) : (
                      <div
                        className="col-md-2"
                        onClick={() => setLoginDropdown(false)}
                      >
                        <a href={setting.twitter_link} target="blank">
                          <div className="iconbackgroundheader">
                            <img src={twitterNew} alt="twitterNew" />
                          </div>
                        </a>
                      </div>
                    )}
                    {setting.linkedin_link === null ? (
                      ""
                    ) : (
                      <div
                        className="col-md-2"
                        onClick={() => setLoginDropdown(false)}
                      >
                        <a href={setting.linkedin_link} target="blank">
                          <div className="iconbackgroundheader">
                            <img src={inNew} alt="inNew" />
                          </div>
                        </a>
                      </div>
                    )}
                    {setting.youtube_link === null ? (
                      ""
                    ) : (
                      <div
                        className="col-md-2"
                        onClick={() => setLoginDropdown(false)}
                      >
                        <a href={setting.youtube_link} target="blank">
                          <div className="iconbackgroundheader">
                            <img src={youtubeNew} alt="youtubeNew" />
                          </div>
                        </a>
                      </div>
                    )}
                    {setting.watsapp_link === null ? (
                      ""
                    ) : (
                      <div
                        className="col-md-2"
                        onClick={() => setLoginDropdown(false)}
                      >
                        <a href={setting.watsapp_link} target="blank">
                          <div className="iconbackgroundheader">
                            <img src={watsappNew} alt="watsappNew" />
                          </div>
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="row seachInput">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        id="myInput"
                        name=""
                        placeholder="search"
                        onKeyDown={handleSearch}
                      />
                    </div>
                  </div>
                  <ul id="myList">
                    <li className="filterspan">
                      <NavLink
                        to="/AboutUs"
                        onClick={() => setLoginDropdown(false)}
                      >
                        <img src={iicon} alt="iicon" />
                        <span>About Us</span>
                      </NavLink>
                    </li>
                    <li className="filterspan">
                      <NavLink
                        to="/Blog"
                        onClick={() => setLoginDropdown(false)}
                      >
                        <img src={BlogIcon} alt="BlogIcon" />
                        <span>Blogs</span>
                      </NavLink>
                    </li>
                    <li className="filterspan">
                      <NavLink
                        to="/Contact"
                        onClick={() => setLoginDropdown(false)}
                      >
                        <img src={contact} alt="contact" />
                        <span>Contact Us</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          )}

          {expertDropdown && (
            <div
              className="col-md-12"
              onMouseLeave={() => setExpertDropdown(false)}
            >
              <section className="dropdownRelative">
                <div className="ExpertDropdown">
                  <ul>
                    <li onClick={() => setExpertDropdown(false)}>
                      <NavLink to="/TaxationAdvisoryCryptocurrency">
                        Taxation Advisory for Cryptocurrency
                      </NavLink>
                    </li>
                    <li onClick={() => setExpertDropdown(false)}>
                      <NavLink to="">Taxation Advisory for Individual</NavLink>
                    </li>
                    <li onClick={() => setExpertDropdown(false)}>
                      <NavLink to="">Taxation Advisory for Startup</NavLink>
                    </li>
                    <li onClick={() => setExpertDropdown(false)}>
                      <NavLink to="">
                        Taxation Advisory for Corporate/Ecommerce
                      </NavLink>
                    </li>
                    <li onClick={() => setExpertDropdown(false)}>
                      <NavLink to="">E-Way Bill</NavLink>
                    </li>
                    <li onClick={() => setExpertDropdown(false)}>
                      <NavLink to="">
                        Taxation Advisory for GST Compliances
                      </NavLink>
                    </li>
                    <li onClick={() => setExpertDropdown(false)}>
                      <NavLink to="">
                        Taxation Advisory for Capital Gains (Immovable/Movable
                        Property)
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          )}
          {dropdown && (
            <div className="positionrelative" id="ServiceDropdown">
              <section
                className="scrollTabSection positionabb"
                onMouseLeave={() => setDropdown(false)}
              >
                <div className="row g-0">
                  <div className="col-md-3">
                    <div className="div_card_header_tab">
                      <div className="div_header_tab_card_body">
                        <ul className="bigULHeader">
                          {servicesList.map((data, index) => (
                            <>
                              <li
                                onClick={TabChange}
                                data-label={data.id}
                                data-dropdown={
                                  data.dropdown.map((data1, i) =>
                                    data1 !== null ? data.service_name : ""
                                  )[0]
                                }
                                onLoad={
                                  index === 0
                                    ? (e) => e.target.closest("li").click()
                                    : ""
                                }
                                className="sibling"
                              >
                                {data.service_name}
                                <img
                                  onClick={TabChange}
                                  data-label={data.id}
                                  src={arrow}
                                  alt="arrowRight"
                                  className="arrowRightMenubar sibling"
                                />
                              </li>
                              {data.dropdown.map((item, index) => (
                                <>
                                  <ul className="smallULHeader">
                                    <li
                                      id={"drop_" + item.id}
                                      data-label={item.id}
                                      data-id={"drop_" + item.id}
                                      onClick={TabChangeDropdown}
                                      className={
                                        index === 0
                                          ? data.service_name +
                                            " SmallActiveColor dropdownList siblingDropdown"
                                          : data.service_name +
                                            " dropdownList siblingDropdown"
                                      }
                                    >
                                      <div className="flexheader">
                                        <span
                                          className={
                                            index === 0
                                              ? data.service_name +
                                                "dropdownList siblingDropdown"
                                              : data.service_name +
                                                " dropdownList siblingDropdown"
                                          }
                                          onClick={TabChangeDropdown}
                                          data-label={item.id}
                                          data-id={"drop_" + item.id}
                                        >
                                          {item.name}
                                        </span>
                                        <img
                                          onClick={TabChangeDropdown}
                                          className={
                                            index === 0
                                              ? data.service_name +
                                                "dropdownList arrowRightMenubar siblingDropdown"
                                              : data.service_name +
                                                " dropdownList siblingDropdown"
                                          }
                                          data-label={item.id}
                                          data-id={"drop_" + item.id}
                                          src={arrow}
                                          alt="arrowRight"
                                        />
                                      </div>
                                    </li>
                                  </ul>
                                </>
                              ))}
                            </>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-md-9 dropdowntab2"
                    style={{ display: subMenuActive === true ? "none" : "" }}
                  >
                    {subServicesList.map((data, index) => (
                      <>
                        <section className="tabpadding2">
                          <span className="titletab">{data.name}</span>
                          <hr className="titlehr" />

                          <div className="row">
                            {data.routes.map((item) => (
                              <>
                                <div
                                  className="col-md-4 paddingtoplink"
                                  onClick={() => setDropdown(false)}
                                >
                                  <NavLink
                                    to={"/" + item.route}
                                    className="bounce-out-on-hover"
                                  >
                                    {item.name}
                                  </NavLink>
                                </div>
                              </>
                            ))}
                          </div>
                        </section>
                      </>
                    ))}
                  </div>

                  <div
                    className="col-md-9 dropdowntab2"
                    style={{ display: subMenuActive === false ? "none" : "" }}
                  >
                    {dropdownServiceList.map((data1, index) => (
                      <>
                        <section className="tabpadding2">
                          <span className="titletab">{data1.name}</span>
                          <hr className="titlehr" />

                          <div className="row">
                            {data1.routes.map((item1) => (
                              <>
                                <div
                                  className="col-md-4 paddingtoplink"
                                  onClick={() => setDropdown(false)}
                                >
                                  <NavLink
                                    to={"/" + item1.route}
                                    className="bounce-out-on-hover"
                                  >
                                    {item1.name}
                                  </NavLink>
                                </div>
                              </>
                            ))}
                          </div>
                        </section>
                      </>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </section>

      <div id="myNav" className="overlay">
        <div className="overlay-content">
          <div className="container">
            <div className="row loginRelative">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-5">
                    <img
                      src={team}
                      alt="team"
                      width="auto"
                      className="loginimg"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="modal-login-box">
                      <div className="row">
                        <div className="col-md-12 text-end mb-2">
                          <span className="modal_heading cursor-pointer">
                            <img
                              onClick={handleClose}
                              src={closeIcon}
                              className="cursor-pointer"
                            />
                          </span>
                        </div>
                        <div className="col-md-12">
                          <span className="modal_heading">Welcome back..!</span>
                        </div>
                        <div className="col-md-12 mt-3 mb-3">
                          <span className="modal_subtitle">
                            Please enter your details to login.
                          </span>
                        </div>
                        <div className="col-md-12 mt-3 mb-3">
                          <Login />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="signUpPage" className="overlay">
        <div className="overlay-content">
          <div className="container">
            <div className="row loginRelative">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-5">
                    <img
                      src={team}
                      alt="team"
                      width="auto"
                      className="signUPImg"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="modal-sign-box">
                      <div className="row">
                        <div className="col-md-12 text-end mb-2">
                          <span className="modal_heading">
                            <img
                              onClick={signClose}
                              src={closeIcon}
                              className="cursor-pointer"
                            />
                          </span>
                        </div>
                        <div className="col-md-12">
                          <span className="modal_heading">
                            Welcome to First Filing..!
                          </span>
                        </div>
                        <div className="col-md-12 mt-3 mb-3">
                          <span className="modal_subtitle">
                            Please enter your details to register.
                          </span>
                        </div>
                        <SignUp />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="ForgetPage" className="overlay2">
        <div className="overlay-content">
          <div className="container">
            <div className="row loginRelative">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-5">
                    <img
                      src={forgot}
                      alt="team"
                      width="auto"
                      className="signUPImg"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="Forgot_Box">
                      <div className="row">
                        <div className="col-md-12 text-end mb-2">
                          <span className="modal_heading">
                            <img
                              onClick={forgotCLose}
                              src={closeIcon}
                              className="cursor-pointer"
                            />
                          </span>
                        </div>
                        <section className="paddingForgot">
                          <div className="col-md-12">
                            <span className="forgot_heading">
                              Forgot Password
                            </span>
                          </div>
                          <div className="col-md-12 mt-3 mb-3">
                            <span className="forgot_description">
                              Enter your email id and we’ll send you a link to
                              reset your password
                            </span>
                          </div>
                          <Forgot />
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal
        show={showModal}
        id="success_tic"
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
        backdrop="static"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body className="p-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="checkmark-circle">
                  <div className="background_check" />
                  <div className="checkmark draw" />
                </div>
              </div>

              <div className="col-md-12 text-center">
                <h3 className="mt-3">Logout Success </h3>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default Header;
