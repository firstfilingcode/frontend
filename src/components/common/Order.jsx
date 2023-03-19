import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import arrow from "../common/Images/arrowWhite.png";
import eyes from "../common/Images/eyes.png";
import { Input, Label } from "reactstrap";
import { myAxios } from "../common/services/Helper";
import { NavLink } from "react-router-dom";
import Profile from "../Profile/Profile";
import Document from "../Document/Document";
import { PaymentStatus } from "../common/services/PaymentStatus";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import rupees from "../common/Images/rupees.png";
import right_first from "../common/Images/right_first.png";
import document_stutas from "../common/Images/document_stutas.png";
import Expert_acc from "../common/Images/Expert_acc.png";
import order_timing from "../common/Images/order_timing.png";
import orderfulfillment from "../common/Images/order-fulfillment.png";
import order_process from "../common/Images/order-process.png";
import delete_document from "../common/Images/delete_document.png";
import noData from "../common/Images/nodata.png";
import { BASE_URL } from "../common/services/Helper";
import { saveAs } from "file-saver";
import ReferFriend from "../Refer Friend/ReferFriend";
import Wallet from "../Wallet/Wallet";
import { ReactSession } from "react-client-session";
import moment from "moment";
import { useLocation } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

function Order() {
  const [ca_assigned, setCa_assigned] = useState("");
  const [rm_assigned, setRm_assigned] = useState("");
  const [rm_assigned_name, setRm_assigned_name] = useState("");
  const [ca_assigned_name, setCa_assigned_name] = useState("");
  const [serviceCover, setServiceCover] = useState("");
  const [myDocs, setMyDocs] = useState([]);
  const [webLodar, setWebLodar] = useState("none");
  const navigate = useNavigate();

  const downloadFile = (e) => {
    let formDataId = new FormData();
    formDataId.append("id", e);
    myAxios({
      method: "post",
      url: BASE_URL + "/downloadOrderDocuments",
      data: formDataId,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        saveAs(response.data.file_url);
      })
      .catch(function (response) {
        //handle error
        // console.log(response);
      });
  };

  const [lodar, setLodar] = useState("");
  const [searchText, setSearchText] = useState("Search");

  window.addEventListener("storage", () => {
    if (localStorage.getItem("displayName") == null) {
      window.dispatchEvent(new Event("LoginFirst"));
    }
  });
  window.addEventListener("expert_assigned", () => {
    setCa_assigned(localStorage.getItem("ca_assigned"));
    setRm_assigned(localStorage.getItem("rm_assigned"));
    setRm_assigned_name(localStorage.getItem("rm_assigned_name"));
    setCa_assigned_name(localStorage.getItem("ca_assigned_name"));
    setServiceCover(localStorage.getItem("service_cover"));
  });

  useEffect(() => {
    if (localStorage.getItem("displayName") == null) {
      window.dispatchEvent(new Event("LoginFirst"));
    }
  });

  const [tab, setTab] = useState("");

  function TabChange(event) {
    //   alert(event.target.id);
    setTab(event.target.getAttribute("data-label"));
  }

  const [data, setData] = useState({
    searchForOrder: "",
    payment_status: "",
    date: "",
  });
  const [allowed_input, setAllowed_input] = useState(null);
  const [OrderId, setOrderId] = useState("");
  const [plan, setPlan] = useState("");
  const [serviceTypeId, setServiceTypeId] = useState(null);
  const [userId, setUserId] = useState("");
  const [order_no, setOrder_no] = useState("");
  const MyDocUpload = (e, prefix, serId, plan, id, u_id, or_no) => {
    setServiceTypeId(serId);
    setUserId(u_id);
    setPlan(plan);
    setOrderId(id);
    setOrder_no(prefix + or_no);
  };

  useEffect(() => {
    (async () => {
      if (serviceTypeId !== null) {
        setWebLodar("block");
        await fetch(BASE_URL + "/getServiceType/" + serviceTypeId)
          .then((res) => res.json())
          .then((json) => {
            //alert(JSON.stringify(json.allowed_input[0]));

            setAllowed_input(json.allowed_input);
          });
      }
    })();
  }, [serviceTypeId]);
  const [value123, SetValue123] = useState("");
  let formData2 = new FormData();
  useEffect(() => {
    if (allowed_input !== null) {
      formData2.append("order_id", OrderId);
      formData2.append("user_id", userId);
      formData2.append("service_type_id", serviceTypeId);
      myAxios({
        method: "post",
        url: BASE_URL + "/docTypeMatch",
        data: formData2,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(function (response) {
        SetValue123(
          response.data.required_fields.map((s, index) => (
            <div className="col-md-4 p-3">{index + 1 + "  .  " + s}</div>
          ))
        );
        setServiceTypeId(null);
        setAllowed_input(null);
        if (response.data.count === 0) {
          document.getElementById("myDocUpload").click();
          setWebLodar("none");
          setTab("DocUpload");
        } else {
          // setShowModal2(true);
          // setTimeout(() => {
          //   setShowModal2(false);
          //   document.getElementById(order_no).click();
          // }, 3000);
          document.getElementById(order_no).click();
          setWebLodar("none");

          // alert(JSON.stringify(response.data.required_fields))
        }

        // alert(JSON.stringify(response.data.data.first_name));
      });
    }
  }, [allowed_input]);

  const handleSearch = (event, property) => {
    setData({ ...data, [property]: event.target.value });
    // console.log(data);
  };

  let formData = new FormData();
  const filter = () => {
    setLodar("20px");
    setSearchText("");
    formData.append("id", ReactSession.get("user_id"));
    formData.append("date", data.date);
    formData.append("payment_status", data.payment_status);
    formData.append("searchForOrder", data.searchForOrder);
    myAxios({
      method: "post",
      url: BASE_URL + "/orderFilter",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setOrderD(response.data.data);
        setSearchText("Search");
        setLodar("");
        setData({
          searchForOrder: "",
          payment_status: "",
          date: "",
        });
      })
      .catch(function (response) {
        // console.log(response);
      });
  };

  const [orderD, setOrderD] = useState([]);
  const [pending, setPending] = useState(0);
  const [past, setPast] = useState(0);
  const [cancel, setCancel] = useState(0);
  const [ongoing, setOngoing] = useState(0);
  const [allOrder, setAllOrder] = useState(0);

  const [isLoaded, setIsLoaded] = useState(false);

  const getData = async () => {
    await fetch(BASE_URL + "/getOrderList/" + ReactSession.get("user_id"))
      .then((res) => res.json())
      .then((json) => {
        setOrderD(json.data);
        //  alert(JSON.stringify(json.data));
        setIsLoaded(true);

        // alert(JSON.stringify(json.data))
      });
  };
  const location = useLocation();
  useEffect(() => {
    let dataLabel = secureLocalStorage.getItem("dataLabel");
    setTab(dataLabel);
  }, []);
  useEffect(() => {
    const countPending = orderD.filter((data) => data.payment_status === "0");
    const countPast = orderD.filter((data) => data.status === "13");
    const countCancel = orderD.filter((data) => data.payment_status === "2");
    const countOngoing = orderD.filter((data) => data.payment_status === "1");
    const countAllOrder = orderD.filter((data) => data.payment_status === "1");
    setPending(countPending.length);
    setPast(countPast.length);
    setCancel(countCancel.length);
    setOngoing(countOngoing.length);
    setAllOrder(countAllOrder.length);
  }, [orderD]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
    getData();

    if (tab === "myDoc") {
      fetch(BASE_URL + "/getMyDocuments/" + ReactSession.get("user_id"))
        .then((res) => res.json())
        .then((json) => {
          setMyDocs(json.data);
          // alert(JSON.stringify(json.data))
        });
    }
  }, [tab]);

  function MyDocOpen() {
    setTab("myDoc");
  }
  function handleOnGoing() {
    getData();
  }
  // const [amount, setAmount] = useState(1);
  const arr_order = [];
  function razorPay(amount, order_id, serId, refId) {
    arr_order.push(order_id);
    if (amount === "") {
      alert("Please enter amount");
    } else {
      var options = {
        key: "rzp_test_J5gb7QDhbjgDVX",
        key_secret: "QRIjmwdqxnccRUbo9kkUqETQ",
        amount: amount * 100,
        currency: "INR",
        name: "Rukmani Software",
        description: "Live Transaction",
        handler: function (response) {
          // alert("payment done");
          // alert(value);
          PaymentStatus({
            service_id: serId,
            referral_id: refId,
            user_id: ReactSession.get("user_id"),
            id: arr_order,
            transaction_no: response.razorpay_payment_id,
            payment_mode: "Razorpay",
            email: localStorage.getItem("email"),
          }).then((resp) => {
            //navigate("/order");
            getData();
          });
        },
        prefill: {
          name: "prashant sharma",
          email: "pspc18@gmail.com",
          contact: "8079094990",
        },
        notes: {
          address: "Razorpay corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const userInfo = (e, order_no) => {
    e.stopPropagation();
    document.getElementById(order_no).click();
  };

  const trackModal = (e) => {
    e.stopPropagation();
    const value = e.target.getAttribute("data-id");
    setShowModal(true);
    fetch(BASE_URL + "/trackOrder/" + value + "/" + ReactSession.get("user_id"))
      .then((res) => res.json())
      .then((json) => {
        setTrackOrder(json);
        // alert(JSON.stringify(trackOrder));
        // setData(json.data);
        // setDocumentCount(json.documentsCount)
        // setExpertAssiged(json.expert_assigned)
      });
  };

  const [trackOrder, setTrackOrder] = useState("");

  function deleteOrder(value) {
    fetch(
      BASE_URL + "/deleteOrder/" + value + "/" + ReactSession.get("user_id")
    )
      .then((res) => res.json())
      .then((json) => {
        getData();

        // setData(json.data);
        // setDocumentCount(json.documentsCount)
        // setExpertAssiged(json.expert_assigned)
      });
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12 order-list">
            <ul>
              <li
                onClick={() => setTab("allOrders")}
                style={{ cursor: "pointer" }}
              >
                <span>Your Orders</span>
                <i className="fa fa-angle-right order-arrow-right"></i>
              </li>
              <li>
                <span>{tab}</span>
              </li>
            </ul>
          </div>
        </div>
        {tab === "allOrders" ? (
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="row order-input paddingtopBottom"
          >
            <div className="col-md-3">
              <Label htmlFor="search_for_order">Search For Order</Label>
              <Input
                type="text"
                className="form-control"
                name="searchForOrder"
                id="searchForOrder"
                placeholder="Search"
                onChange={(e) => handleSearch(e, "searchForOrder")}
              />
            </div>
            <div className="col-md-3">
              <Label htmlFor="payment_status">Payment Status</Label>
              <select
                className="form-control"
                name="payment_status"
                id="payment_status"
                onChange={(e) => handleSearch(e, "payment_status")}
              >
                <option value="1">
                  <span>Payment Done</span>
                </option>
                <option value="0">
                  <span>Payment Pending</span>
                </option>
                <option value="2">
                  <span>Payment Cancelled</span>
                </option>
              </select>
            </div>

            <div className="col-md-3">
              <Label htmlFor="time">Time</Label>
              <select
                className="form-control"
                name="date"
                id="date"
                onChange={(e) => handleSearch(e, "time")}
              >
                <option value="1">Last 1 Month</option>
                <option value="2">Last 2 Month</option>
                <option value="3">Last 3 Year</option>
              </select>
            </div>

            <div className="col-md-3">
              <Label htmlFor="time" className="hideMobileInput">
                &nbsp;
              </Label>
              <br />
              <button className="btn btn-primary w-100" onClick={filter}>
                <div
                  className="loading"
                  id="newsletter"
                  style={{ height: lodar }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>{searchText}</span>
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="row g-0">
          <div className="col-md-3">
            <div className="div_card_order">
              <div className="order_card_body">
                <ul className="bigUl">
                  <li
                    data-label="myProfile"
                    onClick={TabChange}
                    className={tab === "myProfile" ? "activeColor" : ""}
                  >
                    <span
                      data-label="myProfile"
                      onClick={TabChange}
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      My Profile
                    </span>
                    <img
                      src={arrow}
                      alt="arrowRight"
                      className="arrowRightMenubar"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    />
                  </li>
                  {/* <li
                    data-label="myTaxReturn"
                    onClick={TabChange}
                    className={tab === "myTaxReturn" ? "activeColor" : ""}
                  >
                    <span
                      data-label="myTaxReturn"
                      onClick={TabChange}
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      My Tax Returns
                    </span>
                    <img
                      src={arrow}
                      alt="arrowRight"
                      className="arrowRightMenubar"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    />
                  </li> */}
                  <li
                    onClick={TabChange}
                    id="myOrder"
                    data-label="allOrders"
                    className={tab === "allOrders" ? "activeColor" : ""}
                  >
                    <span
                      data-aos="fade-right"
                      data-aos-delay="200"
                      data-label="allOrders"
                      onClick={TabChange}
                    >
                      My Orders
                    </span>
                    <img
                      data-label="allOrders"
                      onClick={TabChange}
                      src={arrow}
                      alt="arrowRight"
                      className="arrowRightMenubar"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    />
                  </li>

                  <ul className="smallUl">
                    <li
                      data-label="ongoing"
                      onClick={(e) => {
                        TabChange(e);
                        handleOnGoing(e);
                      }}
                      className={tab === "ongoing" ? "activeColor" : ""}
                    >
                      <span
                        data-label="ongoing"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        onClick={(e) => {
                          TabChange(e);
                          handleOnGoing(e);
                        }}
                      >
                        Ongoing Orders
                      </span>
                      <img
                        src={arrow}
                        alt="arrowRight"
                        className="arrowRightMenubar"
                        data-aos="fade-right"
                        data-aos-delay="200"
                      />
                    </li>
                    <li
                      data-label="pendingOrder"
                      onClick={TabChange}
                      className={tab === "pendingOrder" ? "activeColor" : ""}
                    >
                      <span
                        data-label="pendingOrder"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        onClick={TabChange}
                      >
                        Pending Orders
                      </span>
                      <img
                        src={arrow}
                        alt="arrowRight"
                        className="arrowRightMenubar"
                        data-aos="fade-right"
                        data-aos-delay="200"
                      />
                    </li>
                    <li
                      data-label="pastOrder"
                      onClick={TabChange}
                      className={tab === "pastOrder" ? "activeColor" : ""}
                    >
                      <span
                        data-label="pastOrder"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        onClick={TabChange}
                      >
                        Past Orders
                      </span>
                      <img
                        src={arrow}
                        alt="arrowRight"
                        className="arrowRightMenubar"
                        data-aos="fade-right"
                        data-aos-delay="200"
                      />
                    </li>
                    <li
                      data-label="cancelOrder"
                      onClick={TabChange}
                      className={tab === "cancelOrder" ? "activeColor" : ""}
                    >
                      <span
                        data-label="cancelOrder"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        onClick={TabChange}
                      >
                        Cancelled Orders
                      </span>
                      <img
                        src={arrow}
                        alt="arrowRight"
                        className="arrowRightMenubar"
                        data-aos="fade-right"
                        data-aos-delay="200"
                      />
                    </li>
                  </ul>

                  <li
                    data-label="myDoc"
                    onClick={TabChange}
                    className={tab === "myDoc" ? "activeColor" : ""}
                  >
                    <span
                      data-label="myDoc"
                      data-aos="fade-right"
                      data-aos-delay="200"
                      onClick={TabChange}
                    >
                      My Documents
                    </span>
                    <img
                      src={arrow}
                      alt="arrowRight"
                      className="arrowRightMenubar"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    />
                  </li>
                  {/* <li
                    data-label="support"
                    onClick={TabChange}
                    className={tab === "support" ? "activeColor" : ""}
                  >
                    <span
                      data-label="support"
                      data-aos="fade-right"
                      data-aos-delay="200"
                      onClick={TabChange}
                    >
                      Support
                    </span>
                    <img
                      src={arrow}
                      alt="arrowRight"
                      className="arrowRightMenubar"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    />
                  </li> */}
                  <li
                    data-label="wallet"
                    onClick={TabChange}
                    className={tab === "wallet" ? "activeColor" : ""}
                  >
                    <span
                      data-label="wallet"
                      data-aos="fade-right"
                      data-aos-delay="200"
                      onClick={TabChange}
                    >
                      My Wallet
                    </span>
                    <img
                      src={arrow}
                      alt="arrowRight"
                      className="arrowRightMenubar"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    />
                  </li>
                  <li
                    data-label="refer"
                    onClick={TabChange}
                    className={tab === "refer" ? "activeColor" : ""}
                  >
                    <span
                      data-label="refer"
                      data-aos="fade-right"
                      data-aos-delay="200"
                      onClick={TabChange}
                    >
                      Refer Friend
                    </span>
                    <img
                      src={arrow}
                      alt="arrowRight"
                      className="arrowRightMenubar"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    />
                  </li>
                  <li
                    data-label="DocUpload"
                    onClick={TabChange}
                    className={tab === "DocUpload" ? "activeColor" : ""}
                    style={{ display: "none" }}
                  >
                    <span
                      data-label="DocUpload"
                      data-aos="fade-right"
                      data-aos-delay="200"
                      onClick={TabChange}
                    >
                      Support
                    </span>
                    <img
                      src={arrow}
                      alt="arrowRight"
                      className="arrowRightMenubar"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    />
                  </li>
                </ul>
                {tab === "DocUpload" ? (
                  <>
                    {rm_assigned === null ? (
                      ""
                    ) : (
                      <>
                        <section className="contactNo">
                          <h3 style={{ textTransform: "capitalize" }}>
                            <abbr
                              title={
                                ca_assigned_name === "undefined"
                                  ? "CA not assigned"
                                  : ca_assigned_name
                              }
                            >
                              {ca_assigned_name === "undefined"
                                ? ""
                                : ca_assigned_name.charAt(0) +
                                " " +
                                ca_assigned_name.split(" ")[1]}{" "}
                              <sup>CA</sup>
                            </abbr>
                          </h3>
                          <span>
                            {ca_assigned === "undefined"
                              ? "Not Assigned"
                              : ca_assigned}
                          </span>
                          <h3 style={{ textTransform: "capitalize" }}>
                            <abbr
                              title={
                                rm_assigned_name === "undefined"
                                  ? "RM not assigned"
                                  : rm_assigned_name
                              }
                            >
                              {rm_assigned_name === "undefined"
                                ? ""
                                : rm_assigned_name.charAt(0) +
                                " " +
                                rm_assigned_name.split(" ")[1]}{" "}
                              <sup>RM</sup>
                            </abbr>
                          </h3>
                          <span>
                            {rm_assigned === "undefined"
                              ? "Not Assigned"
                              : rm_assigned}
                          </span>
                        </section>

                        <section className="text-white mt-5">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-12">
                                {" "}
                                <h3 style={{ textTransform: "capitalize" }}>
                                  Plan Details :-
                                </h3>
                              </div>
                              <div className="col md-12">
                                <span
                                  style={{ lineHeight: "25px" }}
                                  dangerouslySetInnerHTML={{
                                    __html: serviceCover,
                                  }}
                                ></span>
                              </div>
                            </div>
                          </div>
                        </section>
                      </>
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          {isLoaded === false ? (
            <div className="col-md-9">
              <div className="col-md-12 cardsLoad111">
                <div className="card order-card loading111">
                  <div className="card-body">
                    <div className="row order-1st-row">
                      <div className="col-md-8 col-6">
                        <span className="order-number ">
                          <span>Order : XXXXXXXXXXXXXXX</span>
                        </span>
                      </div>
                      <div className="col-md-4 col-6 textend">
                        <abbr title="Chat With Expert">
                          <button className="download-button cursor-pointer">
                            <i className="fa fa-wechat"></i>
                          </button>
                        </abbr>
                        <abbr title="View Invoice">
                          <button className="eye-button cursor-pointer">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgBbVJBTsJQEP1/fj9b8QbcwLohslJOoO6MAdQTWNZK+AQ4ACegJMS4xBPIxiC6wBvIEbokaTvjn5YPqWEWzfTNTOe9N5XiQAxvP3yhwEeCSAiMOtPa/FCfLAy1vh6JyNi0bAtrxkiISp7LeRynPfNaWxeGzc2i4mk1tq0X3IiED26bube1dF+LY6y7DwA/tIZ3LnIeK6zzYL+xvBo0l6TRu0uUvuZBZuFpWPGybHjY+u4ymPEgOTdhbc2aAeAkgwiNSjZWP062bMs5S0t70FiuLHk/1yBDkYoRKVoVnEFqS6CIBIwdlKjSMZDAtgOsWf7TS/XHmbWNKNE0IyHP933YM+FplBnWbyyMlNDdltqJoplKZAAER0LHo3gDkdX666Q9T6v1ndscg+ZnYF+7+ZlkiJROADESXunSbgoYt8xGnelZUDiVCz4Lb5RMcecDn47e7MrZ/5/lDzubpatJC+DSAAAAAElFTkSuQmCC"
                              alt=""
                            />
                          </button>
                        </abbr>
                      </div>
                    </div>
                    <div className="row order-2nd-row">
                      <div className="col-md-6 col-6">
                        <span className="order-name">XXXXXXX</span>
                      </div>
                      <div className="col-md-6 col-6 textend">
                        <span className="order-time">Purchased on XX-XXX</span>
                      </div>
                      <div className="col-md-6 col-6">
                        <button className="OrderTrack" data-id="55">
                          Track Your Order
                        </button>
                      </div>
                      <div className="col-md-6 textend col-6">
                        <button className="order-button-status">
                          <span>XXXX</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card order-card loading111">
                  <div className="card-body">
                    <div className="row order-1st-row">
                      <div className="col-md-8 col-6">
                        <span className="order-number ">
                          <span>Order : XXXXXXXXXXXXXXX</span>
                        </span>
                      </div>
                      <div className="col-md-4 col-6 textend">
                        <abbr title="Chat With Expert">
                          <button className="download-button cursor-pointer">
                            <i className="fa fa-wechat"></i>
                          </button>
                        </abbr>
                        <abbr title="View Invoice">
                          <button className="eye-button cursor-pointer">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgBbVJBTsJQEP1/fj9b8QbcwLohslJOoO6MAdQTWNZK+AQ4ACegJMS4xBPIxiC6wBvIEbokaTvjn5YPqWEWzfTNTOe9N5XiQAxvP3yhwEeCSAiMOtPa/FCfLAy1vh6JyNi0bAtrxkiISp7LeRynPfNaWxeGzc2i4mk1tq0X3IiED26bube1dF+LY6y7DwA/tIZ3LnIeK6zzYL+xvBo0l6TRu0uUvuZBZuFpWPGybHjY+u4ymPEgOTdhbc2aAeAkgwiNSjZWP062bMs5S0t70FiuLHk/1yBDkYoRKVoVnEFqS6CIBIwdlKjSMZDAtgOsWf7TS/XHmbWNKNE0IyHP933YM+FplBnWbyyMlNDdltqJoplKZAAER0LHo3gDkdX666Q9T6v1ndscg+ZnYF+7+ZlkiJROADESXunSbgoYt8xGnelZUDiVCz4Lb5RMcecDn47e7MrZ/5/lDzubpatJC+DSAAAAAElFTkSuQmCC"
                              alt=""
                            />
                          </button>
                        </abbr>
                      </div>
                    </div>
                    <div className="row order-2nd-row">
                      <div className="col-md-6 col-6">
                        <span className="order-name">XXXXXXX</span>
                      </div>
                      <div className="col-md-6 col-6 textend">
                        <span className="order-time">Purchased on XX-XXX</span>
                      </div>
                      <div className="col-md-6 col-6">
                        <button className="OrderTrack" data-id="55">
                          Track Your Order
                        </button>
                      </div>
                      <div className="col-md-6 textend col-6">
                        <button className="order-button-status">
                          <span>XXXX</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-md-9">
              <div className="main_div_tab">
                {tab === "myProfile" ? (
                  <section data-aos="flip-down" className="paddingLeftDoc">
                    <Profile />
                  </section>
                ) : (
                  ""
                )}
                {tab === "myTaxReturn" ? (
                  <section data-aos="flip-down" className="paddingLeftDoc">
                    <div className="card">
                      <div className="card-body">My Tax Return</div>
                    </div>
                  </section>
                ) : (
                  ""
                )}

                {tab === "allOrders" ? (
                  <section className="paddingLeftDoc">
                    {orderD.map((data, index) => (
                      <div id="myDocUpload" className="card order-card">
                        <div
                          className="card-body"
                          onClick={
                            data.status === "13"
                              ? ""
                              : data.payment_status === "0"
                                ? ""
                                : (e) =>
                                  MyDocUpload(
                                    e,
                                    "allOrder_",
                                    data.service_type_id,
                                    data.name,
                                    data.id,
                                    data.user_id,
                                    data.order_no
                                  )
                          }
                          // data-id={data.id}
                          data-doc_status={data.id}
                        // data-user_id={data.user_id}
                        // data-plan={data.name}
                        // data-service_type_id={data.service_type_id}
                        // data-order_no={data.order_no}
                        >
                          <div className="row order-1st-row">
                            <div className="col-md-8 col-6">
                              <span className="order-number">
                                Order {data.order_no}
                                {data.payment_status === "0" ? (
                                  ""
                                ) : (
                                  <>
                                    {data.doc_status == 0 ? (
                                      <NavLink
                                        id={"allOrder_" + data.order_no}
                                        to={{ pathname: "/userinfo" }}
                                        state={{
                                          order_id: data.id,
                                          user_id: data.user_id,
                                          service_type_id: data.service_type_id,
                                          view_user_info: data.view_user_info,
                                        }}
                                      ></NavLink>
                                    ) : (
                                      ""
                                    )}
                                  </>
                                )}
                              </span>
                            </div>
                            <div className="col-md-4 col-6 textend">
                              {data.view_user_info == 1 ? (
                                <abbr title="View User Information">
                                  <button
                                    className="download-button cursor-pointer"
                                    onClick={(e) =>
                                      userInfo(e, "allOrder_" + data.order_no)
                                    }
                                  >
                                    <i
                                      className="fa fa-file-text-o"
                                      aria-hidden="true"
                                    ></i>
                                  </button>
                                </abbr>
                              ) : (
                                ""
                              )}

                              {data.payment_status === "0" ? (
                                <abbr title="Delete Order">
                                  <button
                                    className="eye-button cursor-pointer"
                                    onClick={(e) => deleteOrder(data.id)}
                                  >
                                    <img src={delete_document} alt="" />
                                  </button>
                                </abbr>
                              ) : (
                                <>
                                  <abbr title="Chat With Expert">
                                    <button
                                      className="download-button cursor-pointer"
                                      onClick={MyDocOpen}
                                    >
                                      <i className="fa fa-wechat"></i>
                                    </button>
                                  </abbr>

                                  <abbr title="View Invoice">
                                    <NavLink
                                      to={{ pathname: "/OrderDetails" }}
                                      state={{
                                        order_id: data.id,
                                      }}
                                    >
                                      <button className="eye-button cursor-pointer">
                                        <img src={eyes} alt="" />
                                      </button>
                                    </NavLink>
                                  </abbr>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="row order-2nd-row">
                            <div className="col-md-6 col-6">
                              <span className="order-name">{data.name}</span>
                            </div>
                            <div className="col-md-6 col-6 textend">
                              <span className="order-time">
                                Purchased on {data.created_at}
                              </span>
                            </div>
                            <div className="col-md-6 col-6">
                              {data.payment_status === "0" ? (
                                ""
                              ) : (
                                <button
                                  className="OrderTrack"
                                  onClick={trackModal}
                                  data-id={data.id}
                                >
                                  Track Your Order
                                </button>
                              )}
                            </div>

                            <div className="col-md-6 textend col-6">
                              <button
                                className={
                                  data.status === "13"
                                    ? "cancel-color"
                                    : data.payment_status === "1"
                                      ? "order-button-status"
                                      : data.payment_status === "0"
                                        ? "pending-color"
                                        : data.payment_status === "2"
                                          ? "cancel-color"
                                          : ""
                                }
                              >
                                <abbr
                                  title={
                                    data.payment_status === "1"
                                      ? "Paid Rs. " + data.total_amount
                                      : data.payment_status === "0"
                                        ? "Just pay only Rs. " + data.total_amount
                                        : ""
                                  }
                                >
                                  <span
                                    onClick={
                                      data.payment_status === "0"
                                        ? (e) =>
                                          razorPay(
                                            data.total_amount,
                                            data.id,
                                            data.service_detail_id,
                                            data.referral_id
                                          )
                                        : ""
                                    }
                                  >
                                    {data.status === "13" ? (
                                      "Order Fulfilled"
                                    ) : (
                                      <>
                                        {data.payment_status === "1"
                                          ? "Payment Done"
                                          : ""}
                                        {data.payment_status === "0"
                                          ? "Payment Pending"
                                          : ""}
                                        {data.payment_status === "2"
                                          ? "Payment Cencelled"
                                          : ""}
                                      </>
                                    )}
                                  </span>
                                </abbr>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {allOrder === 0 ? (
                      <div className="card p-4 text-center pending_orders">
                        <img src={noData} />
                      </div>
                    ) : (
                      ""
                    )}
                  </section>
                ) : (
                  ""
                )}

                {tab === "ongoing" ? (
                  <section className="paddingLeftDoc">
                    {orderD.map((data, index) =>
                      data.status === "13" ? (
                        ""
                      ) : data.payment_status === "1" ? (
                        <div
                          id="myDocUpload"
                          className="card order-card"
                          data-aos="fade-left"
                          data-aos-delay={index * 200}
                        >
                          <div
                            className="card-body"
                            onClick={
                              data.payment_status === "0"
                                ? ""
                                : (e) =>
                                  MyDocUpload(
                                    e,
                                    "ongoing_",
                                    data.service_type_id,
                                    data.name,
                                    data.id,
                                    data.user_id,
                                    data.order_no
                                  )
                            }
                            // data-id={data.id}
                            data-doc_status={data.id}
                          // data-user_id={data.user_id}
                          // data-plan={data.name}
                          // data-service_type_id={data.service_type_id}
                          >
                            <div className="row order-1st-row">
                              <div className="col-md-8 col-6">
                                <span className="order-number">
                                  Order {data.order_no}
                                  <NavLink
                                    id={"ongoing_" + data.order_no}
                                    to={{ pathname: "/userinfo" }}
                                    state={{
                                      order_id: data.id,
                                      user_id: data.user_id,
                                      service_type_id: data.service_type_id,
                                    }}
                                  ></NavLink>
                                </span>
                              </div>
                              <div className="col-md-4 col-6 textend">
                                {data.view_user_info == 1 ? (
                                  <abbr title="View User Information">
                                    <button
                                      className="download-button cursor-pointer"
                                      onClick={(e) =>
                                        userInfo(e, "ongoing_" + data.order_no)
                                      }
                                    >
                                      <i
                                        className="fa fa-file-text-o"
                                        aria-hidden="true"
                                      ></i>
                                    </button>
                                  </abbr>
                                ) : (
                                  ""
                                )}
                                <abbr title="Chat With Expert">
                                  <button className="download-button cursor-pointer">
                                    <i className="fa fa-wechat"></i>
                                  </button>
                                </abbr>
                                {data.payment_status === "0" ? (
                                  <button
                                    className="eye-button cursor-pointer"
                                    onClick={(e) => deleteOrder(data.id)}
                                  >
                                    <img src={delete_document} alt="" />
                                  </button>
                                ) : (
                                  <abbr title="View Invoice">
                                    <NavLink
                                      to={{ pathname: "/OrderDetails" }}
                                      state={{
                                        order_id: data.id,
                                      }}
                                    >
                                      <button className="eye-button cursor-pointer">
                                        <img src={eyes} alt="" />
                                      </button>
                                    </NavLink>
                                  </abbr>
                                )}
                              </div>
                            </div>

                            <div className="row order-2nd-row">
                              <div className="col-md-6 col-6">
                                <span className="order-name">{data.name}</span>
                              </div>
                              <div className="col-md-6 col-6 textend">
                                <span className="order-time">
                                  Purchased on {data.created_at}
                                </span>
                              </div>
                              <div className="col-md-6 col-6">
                                {data.payment_status === "0" ? (
                                  ""
                                ) : (
                                  <button
                                    className="OrderTrack"
                                    onClick={trackModal}
                                    data-id={data.id}
                                  >
                                    Track Your Order
                                  </button>
                                )}
                              </div>

                              <div className="col-md-6 col-6 textend">
                                <button
                                  className={
                                    data.payment_status === "1"
                                      ? "order-button-status"
                                      : data.payment_status === "0"
                                        ? "pending-color"
                                        : data.payment_status === "2"
                                          ? "cancel-color"
                                          : ""
                                  }
                                >
                                  <span
                                    onClick={
                                      data.payment_status === "0"
                                        ? (e) =>
                                          razorPay(
                                            data.total_amount,
                                            data.id,
                                            data.service_detail_id,
                                            data.referral_id
                                          )
                                        : ""
                                    }
                                  >
                                    {data.payment_status === "1"
                                      ? "Payment Done"
                                      : ""}
                                    {data.payment_status === "0"
                                      ? "Payment Pending"
                                      : ""}
                                    {data.payment_status === "2"
                                      ? "Payment Cencelled"
                                      : ""}
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        "" // <div className="card p-4 text-center">No Service Purchased... </div>
                      )
                    )}
                    {ongoing === 0 ? (
                      <div className="card p-4 text-center pending_orders">
                        <img src={noData} />
                      </div>
                    ) : (
                      ""
                    )}
                  </section>
                ) : (
                  ""
                )}
                {tab === "pendingOrder" ? (
                  <section data-aos="flip-down" className="paddingLeftDoc">
                    {orderD.map((data) =>
                      data.payment_status === "0" ? (
                        <div id="myDoc" className="card order-card pending_01">
                          <div
                            className="card-body"
                          // onClick={(e) => MyDocUpload(data.id)}
                          >
                            <div className="row order-1st-row">
                              <div className="col-md-8 col-6">
                                <span className="order-number">
                                  Order {data.order_no}
                                </span>
                              </div>
                              <div className="col-md-4 col-6 textend">
                                {/* <button className="download-button cursor-pointer">
                                <i className="fa fa-wechat"></i>
                              </button> */}

                                {data.payment_status === "0" ? (
                                  <abbr title="Delete Order">
                                    <button
                                      className="eye-button cursor-pointer"
                                      onClick={(e) => deleteOrder(data.id)}
                                    >
                                      <img src={delete_document} alt="" />
                                    </button>
                                  </abbr>
                                ) : (
                                  <NavLink
                                    to={{ pathname: "/OrderDetails" }}
                                    state={{
                                      order_id: data.id,
                                    }}
                                  >
                                    <button className="eye-button cursor-pointer">
                                      <img src={eyes} alt="" />
                                    </button>
                                  </NavLink>
                                )}
                              </div>
                            </div>

                            <div className="row order-2nd-row">
                              <div className="col-md-6 col-6">
                                <span className="order-name">{data.name}</span>
                              </div>
                              <div className="col-md-6 col-6 textend">
                                <span className="order-time">
                                  Purchased on {data.created_at}
                                </span>
                              </div>
                              <div className="col-md-6 col-6">
                                {data.payment_status === "0" ? (
                                  ""
                                ) : (
                                  <button
                                    className="OrderTrack"
                                    onClick={trackModal}
                                    data-id={data.id}
                                  >
                                    Track Your Order
                                  </button>
                                )}
                              </div>

                              <div className="col-md-6 col-6 textend">
                                <button
                                  className={
                                    data.payment_status === "1"
                                      ? "order-button-status"
                                      : data.payment_status === "0"
                                        ? "pending-color"
                                        : data.payment_status === "2"
                                          ? "cancel-color"
                                          : ""
                                  }
                                >
                                  <abbr
                                    title={
                                      data.payment_status === "0"
                                        ? "Just pay only Rs. " +
                                        data.total_amount
                                        : ""
                                    }
                                  >
                                    <span
                                      onClick={
                                        data.payment_status === "0"
                                          ? (e) =>
                                            razorPay(
                                              data.total_amount,
                                              data.id,
                                              data.service_detail_id,
                                              data.referral_id
                                            )
                                          : ""
                                      }
                                    >
                                      {data.payment_status === "0"
                                        ? "Payment Pending"
                                        : ""}
                                    </span>
                                  </abbr>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                    {pending === 0 ? (
                      <div className="card p-4 text-center pending_orders">
                        <img src={noData} />{" "}
                      </div>
                    ) : (
                      ""
                    )}
                  </section>
                ) : (
                  ""
                )}
                {tab === "pastOrder" ? (
                  <section data-aos="flip-down" className="paddingLeftDoc">
                    {orderD.map((data) =>
                      data.status === "13" ? (
                        <div id="myDoc" className="card order-card">
                          <div
                            className="card-body"
                            // onClick={
                            //   data.payment_status === "0"
                            //     ? ""
                            //     : (e) =>
                            //         MyDocUpload(
                            //           e,
                            //           "pastOrder_",
                            //           data.service_type_id,
                            //           data.name,
                            //           data.id,
                            //           data.user_id,
                            //           data.order_no
                            //         )
                            // }
                            // data-id={data.id}
                            data-doc_status={data.id}
                          // data-user_id={data.user_id}
                          // data-plan={data.name}
                          // data-service_type_id={data.service_type_id}
                          >
                            <div className="row order-1st-row">
                              <div className="col-md-8 col-6">
                                <span className="order-number">
                                  Order {data.order_no}
                                </span>
                              </div>
                              <div className="col-md-4 col-6 textend">
                                <button className="download-button cursor-pointer">
                                  <i className="fa fa-wechat"></i>
                                </button>
                                <NavLink
                                  to={{ pathname: "/OrderDetails" }}
                                  state={{
                                    order_id: data.id,
                                  }}
                                >
                                  <button className="eye-button cursor-pointer">
                                    <img src={eyes} alt="" />
                                  </button>
                                </NavLink>
                                <NavLink
                                  id={"pastOrder_" + data.order_no}
                                  to={{ pathname: "/OrderDetails" }}
                                  state={{
                                    order_id: data.id,
                                  }}
                                ></NavLink>
                              </div>
                            </div>

                            <div className="row order-2nd-row">
                              <div className="col-md-6 col-6">
                                <span className="order-name">{data.name}</span>
                              </div>
                              <div className="col-md-6 textend">
                                <span className="order-time">
                                  Purchased on {data.created_at}
                                </span>
                              </div>
                              <div className="col-md-6 col-6">
                                {data.payment_status === "0" ? (
                                  ""
                                ) : (
                                  <button
                                    className="OrderTrack"
                                    onClick={trackModal}
                                    data-id={data.id}
                                  >
                                    Track Your Order
                                  </button>
                                )}
                              </div>

                              <div className="col-md-6 col-6 textend">
                                <button className="pending-color bg-info">
                                  <span>
                                    {data.status === "13"
                                      ? "Order Fullfilled"
                                      : ""}
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        "" // <div className="card p-4 text-center">No Past Orders... </div>
                      )
                    )}
                    {past === 0 ? (
                      <div className="card p-4 text-center ">
                        <img src={noData} />
                      </div>
                    ) : (
                      ""
                    )}
                  </section>
                ) : (
                  ""
                )}

                {tab === "cancelOrder" ? (
                  <section data-aos="flip-down" className="paddingLeftDoc">
                    {orderD.map((data) =>
                      data.payment_status === "2" ? (
                        <div className="card order-card">
                          <div className="card-body">
                            <div className="row order-1st-row">
                              <div className="col-md-8 col-6">
                                <span className="order-number">
                                  Order {data.order_no}
                                </span>
                              </div>
                              <div className="col-md-4 col-6 extend">
                                <button className="download-button cursor-pointer">
                                  {/* <svg
                               xmlns="http://www.w3.org/2000/svg"
                               width="16"
                               height="16"
                               fill="currentColor"
                               className="bi bi-download"
                               viewBox="0 0 16 16"
                             >
                               <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                               <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                             </svg> */}
                                  {<i className="fa fa-download"></i>}
                                </button>
                                <button className="eye-button cursor-pointer">
                                  {/* <svg
                               xmlns="http://www.w3.org/2000/svg"
                               width="16"
                               height="16"
                               fill="currentColor"
                               className="bi bi-eye"
                               viewBox="0 0 16 16"
                             >
                               <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                               <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                             </svg> */}
                                  <img src={eyes} alt="" />
                                </button>
                              </div>
                            </div>

                            <div className="row order-2nd-row">
                              <div className="col-md-6 col-6">
                                <span className="order-name">{data.name}</span>
                              </div>
                              <div className="col-md-6 col-6 textend">
                                <span className="order-time">
                                  Purchased on {data.created_at}
                                </span>
                                <br />
                                <button
                                  className={
                                    data.payment_status === "1"
                                      ? "order-button-status"
                                      : data.payment_status === "0"
                                        ? "pending-color"
                                        : data.payment_status === "2"
                                          ? "cancel-color"
                                          : ""
                                  }
                                >
                                  <span>
                                    {data.payment_status === "1"
                                      ? "Payment Done"
                                      : ""}
                                    {data.payment_status === "0"
                                      ? "Payment Pending"
                                      : ""}
                                    {data.payment_status === "2"
                                      ? "Payment Cencelled"
                                      : ""}
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        "" // <div className="card p-4 text-center">No Cancel Orders... </div>
                      )
                    )}
                    {cancel === 0 ? (
                      <div className="card p-4 text-center ">
                        <img src={noData} />
                      </div>
                    ) : (
                      ""
                    )}
                  </section>
                ) : (
                  ""
                )}

                {tab === "myDoc" ? (
                  <section data-aos="flip-down" className="paddingLeftDoc">
                    {myDocs === null ? (
                      <img src={noData} alt="noData" />
                    ) : (
                      <div className="container">
                        {myDocs.map((data, index) => (
                          <div className="row order_document_row">
                            <div className="col-md-12 order_document_12">
                              <h5>{data.service_name}</h5>
                            </div>

                            {data.doc_name.map((item, index) => (
                              <div className="col-md-6 mb-3">
                                <div className="document_upload">
                                  <h6>
                                    <i className="fa fa-file-text"></i>{" "}
                                    <span>
                                      {item.doc.substring(0, 18)}
                                      {item.doc.length > 18 ? "....." : ""}
                                    </span>{" "}
                                    <sup>*</sup>
                                  </h6>
                                  {item.files === null ? (
                                    ""
                                  ) : (
                                    <div className="upload_document_30">
                                      <span>
                                        <i
                                          className="fa fa-download"
                                          onClick={() => downloadFile(item.id)}
                                        ></i>
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ) : (
                  ""
                )}
                {tab === "support" ? (
                  <section data-aos="flip-down" className="paddingLeftDoc">
                    Support
                  </section>
                ) : (
                  ""
                )}
                {tab === "wallet" ? (
                  <section data-aos="flip-down" className="paddingLeftDoc">
                    <Wallet />
                  </section>
                ) : (
                  ""
                )}
                {tab === "refer" ? (
                  <section data-aos="flip-down" className="paddingLeftDoc">
                    <ReferFriend />
                  </section>
                ) : (
                  ""
                )}
                {tab === "DocUpload" ? (
                  <section data-aos="flip-down" className="paddingLeftDoc1">
                    <Document
                      state={{
                        order_id: OrderId,
                        plan: plan,
                      }}
                    />
                  </section>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div id="calendar"></div> */}

      <Footer />

      {/* <Modal
        show={showModal2}
        id="success_tic"
        onHide={() => setShowModal2(false)}
        dialogClassName="modal-90w"
        backdrop="static"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body className="p-0">
          <div className="modal-content">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-md-12 m-h-20 bg-img rounded-left"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1525097596740-cb2a70e07e3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")',
                  }}
                />
                <div className="col-md-12 text-left py-5 px-sm-5">
                  <h2 className="h2Text">
                    Please Fill These Required Information First : -{" "}
                  </h2>
                  <div className="container">
                    <div className="row">{value123}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        keyboard={false}
        className="modal modal-xl"
      >
        <Modal.Header
          closeButton
          className="firstfiling_header firstFiling_modal"
        >
          <div className="col-md-7">
            <h5 className="modal-title">Track your Order</h5>
          </div>
        </Modal.Header>
        <Modal.Body className="firstFiling_modal">
          <div className="row firstFiling_body">
            <div className="col-md-12 text-center">
              <p>Taxcloud Subscription Plan</p>
            </div>
            <div className="col-md-4 ">
              <span>Order Id : {trackOrder.order_no}</span>
            </div>
            <div className="col-md-4">
              <span>
                Order Status:{" "}
                {trackOrder.work_done === false
                  ? trackOrder.caAssign === false
                    ? trackOrder.documentsCount === false
                      ? "Payment Done"
                      : "Documents Uploaded"
                    : "Expert Assigned"
                  : "Work Done"}{" "}
              </span>
            </div>
            <div className="col-md-4">
              <span>
                Expected Delivery:{" "}
                {moment(trackOrder.expected_date)
                  .add("days", 5)
                  .format("DD-MM-Y")}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-3 paymenet_stuatus_1">
              <div className="paymenet_stuatus">
                <img src={rupees} width="100%" alt="" />
              </div>
            </div>
            <div className="col-md-6 mt-3 paymenet_stuatus_2">
              <div className="payment_text">
                <img src={right_first} width="100%" alt="" />
                <span>Payment Status</span>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 paymenet_stuatus_1">
              <div
                className={
                  trackOrder.documentsCount === false
                    ? "borderColorPending"
                    : "paymenet_stuatus"
                }
              >
                <img src={document_stutas} width="100%" alt="" />
              </div>
            </div>
            <div className="col-md-6 paymenet_stuatus_2">
              <div className="payment_text">
                {trackOrder.documentsCount === false ? (
                  <img src={order_timing} width="100%" alt="" />
                ) : (
                  <img src={right_first} width="100%" alt="" />
                )}
                <span>Document Status</span>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 paymenet_stuatus_1">
              <div
                className={
                  trackOrder.caAssign === false
                    ? "borderColorPending"
                    : "paymenet_stuatus"
                }
              >
                <img src={Expert_acc} width="100%" alt="" />
              </div>
            </div>
            <div className="col-md-6 paymenet_stuatus_2">
              <div className="payment_text">
                {trackOrder.caAssign === false ? (
                  <img src={order_timing} width="100%" alt="" />
                ) : (
                  <img src={right_first} width="100%" alt="" />
                )}
                <span>Expert Assigned</span>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 paymenet_stuatus_1">
              <div
                className={
                  trackOrder.work_done === false
                    ? "borderColorPending"
                    : "paymenet_stuatus"
                }
              >
                <img src={order_process} width="100%" alt="" />
              </div>
            </div>
            <div className="col-md-6 paymenet_stuatus_2">
              <div className="payment_text">
                {trackOrder.caAssign === false ? (
                  <img src={order_timing} width="100%" alt="" />
                ) : (
                  <img src={right_first} width="100%" alt="" />
                )}
                <span>Order in Process</span>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 paymenet_stuatus_1">
              <div
                className={
                  trackOrder.work_done === false
                    ? "WorkDone"
                    : "paymenet_stuatus"
                }
              >
                <img src={orderfulfillment} width="100%" alt="" />
              </div>
            </div>
            <div className="col-md-6 paymenet_stuatus_2">
              <div className="payment_text">
                {trackOrder.work_done === false ? (
                  <img src={order_timing} width="100%" alt="" />
                ) : (
                  <img src={right_first} width="100%" alt="" />
                )}
                <span>Order Fulfilled</span>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </Modal.Body>
      </Modal>
      <section style={{ display: webLodar }}>
        <section className="Lodarbackground">
          <div className="LodarWeb"></div>
        </section>
      </section>
    </>
  );
}

export default Order;
