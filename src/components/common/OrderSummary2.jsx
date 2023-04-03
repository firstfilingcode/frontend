import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GetOrderSummary } from "../common/services/GetOrderSummary";
import { GetCoupon } from "../common/services/getCoupon";
import { OrderPurchased } from "../common/services/GetOrderSummary";
import { ReactSession } from "react-client-session";
import { UserGstin } from "../common/services/UserGstin";
import { PaymentStatus } from "../common/services/PaymentStatus";
import { useNavigate } from "react-router-dom";
import { signUp } from "../common/services/signUp";
import { useFormik } from "formik";
import secureLocalStorage from "react-secure-storage";
import { BASE_URL, myAxios, Timeout } from "./services/Helper";
ReactSession.setStoreType("localStorage");

const OrderSummary2 = () => {
  const OrdersignUp = (valData) => {
    const errors = {};

    if (!valData.first_name) {
      errors.first_name = "Please Enter First Name";
    }
    if (!valData.last_name) {
      errors.last_name = "Please Enter Last Name";
    }

    if (!valData.mobile) {
      errors.mobile = "Please Enter Mobile Number";
    } else if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(
        valData.mobile
      )
    ) {
      errors.mobile = "Invalid Mobile Number";
    }

    if (email === null) {
      if (!valData.email) {
        errors.email = "Please Enter Email ID";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valData.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!valData.password) {
        errors.password = "Please Enter Password";
      } else if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(valData.password)
      ) {
        errors.password =
          "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
      }
    }
    return errors;
  };

  const navigate = useNavigate();
  const [createOrder, setCreateOrder] = useState("");
  const [up_to_discount, setUp_to_discount] = useState(null);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [display, setDisplay] = useState("none");
  const [couponValue, setCouponValue] = useState("");
  const [gst, setGst] = useState(false);
  const [applyCoupon, setApplyCoupon] = useState(true);
  const [applyWallet, setApplyWallet] = useState(false);
  const [couponId, setCouponId] = useState("");
  const [coupon, setCoupon] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [setQty, setSetQty] = useState(1);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [userId, setUserId] = useState(ReactSession.get("user_id"));
  const [buttonActive, setButtonActive] = useState("grey");
  const [disable, setDisable] = useState(true);
  const [lodar, setLodar] = useState("");
  const [lodarText, setLodarText] = useState("block");
  const [respOrderId, setRespOrderId] = useState("");
  const [baseAmount, setBaseAmount] = useState(0);
  const [lodar2, setLodar2] = useState("");
  const [lodarText2, setLodarText2] = useState("block");
  const [userWalletDiscount, setUserWalletDiscount] = useState([]);

  const [razorPayActive, setRazorpayActive] = useState(true);

  const [userGST, setUserGST] = useState({
    gstin: "",
    pin_code: "",
    firm_name: "",
    firm_address: "",
  });
  const [serviceName, setServiceName] = useState("");
  const [text, setText] = useState(0);
  const [gstinSubmit, setGstinSUbmit] = useState(false);
  const location = useLocation();
  const [coupon_service_id, setCoupon_service_id] = useState("");
  let parts = location.pathname.split("/");
  const service_id = parts[2];
  const [item, setItem] = useState("");

  const [order, setOrder] = useState({
    service_id: "", //service_detail_id
    user_id: "",
    s_id: "", //service id
  });

  const [initialValues, setInitialValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const [Serror, setSerror] = useState("");
  const [walletAmount, setWalletAmount] = useState(0);
  const [passShow, setPassShow] = useState(true);

  const [data, setData] = useState({
    id: service_id,
  });

  window.addEventListener("storage", () => {
    setEmail(localStorage.getItem("email"));
    setUserId(ReactSession.get("user_id"));
  });

  async function GetSummary() {
    await GetOrderSummary(data, {
      signal: Timeout(100).signal,
    })
      .then((resp) => {
        if (resp.status) {
          setServiceName(resp.data.name);
          setItem(resp.data);
          setOrder({
            service_id: resp.data.id,
            user_id: userId,
          });
          setCoupon_service_id(resp.data.service_id);
        } else {
        }
      })
      .catch();
  }

  const [walletCheck, setWalletCheck] = useState("block");
  useEffect(() => {
    getWallet();
    GetSummary();
  }, []);
  useEffect(() => {
    if (walletAmount > 0) {
      if (quantity > setQty) {
        if (document.getElementById("walletTrue").checked) {
          handleWallet();
        }
      }
    }
  }, [quantity]);

  const handleWallet = () => {
    var percent = quantity * ((walletAmount * userWalletDiscount) / 100);
    var event_id = document.getElementById("walletTrue");
    setBaseAmount(percent);
    //alert(percent)
    if (email === null) {
      alert("Please Login First");
    } else {
      if (event_id.checked) {
        if (percent <= walletAmount) {
          // setRazorpayActive(false);
          setApplyWallet(true);
        } else {
          //setRazorpay(true);
          setApplyWallet(true);
          setBaseAmount(walletAmount);
          //event.target.checked=false;
        }
      } else {
        setBaseAmount(0);
        // setRazorpayActive(true);
      }
    }
  };
  const handleChange = (event) => {
    if (event.target.checked) {
      //console.log('✅ Checkbox is checked');
      setButtonActive(
        "linear-gradient(90deg, #4B74E6 0.85%, #C46CFB 64.31%, #EF6CFB 96.05%)"
      );
      setDisable(false);
    } else {
      //console.log('⛔️ Checkbox is NOT checked');
      setButtonActive("grey");
      setDisable(true);
    }
    // setIsSubscribed(current => !current);
  };

  const handleChangeGST = (event, property) => {
    setUserGST({ ...userGST, [property]: event.target.value });
  };

  const handleChangeCoupon = (event) => {
    setCouponValue(event.target.value);
    // console.log("coupon value : " + event.target.value);
    // console.log("prev url : " + route);
  };

  const gstdetail = (event) => {
    if (event.target.checked) {
      setGst(true);
    } else {
      setGst(false);
    }
  };
  const handleCoupon = async (event) => {
    setLodar2("20px");
    setLodarText2("none");
    GetCoupon({ coupon: couponValue }).then((resp) => {
      if (resp.status) {
        if (resp.coupon_code[0].service_id === coupon_service_id) {
          // alert("Coupon Matched")
          setApplyCoupon(false);
          setLodar2("0px");
          setLodarText2("block");
          setCouponDiscount(resp.coupon_code[0].discount_percent);

          if (
            parseInt(
              (item.price * resp.coupon_code[0].discount_percent) / 100
            ) > parseInt(resp.coupon_code[0].up_to_discount)
          ) {
            setUp_to_discount(resp.coupon_code[0].up_to_discount);
          }

          setCoupon(resp.coupon_code[0].coupon_code);
          setDisplay("block");
          setCouponId(resp.coupon_code[0].id);
        } else if (resp.coupon_code[0].service_id === null) {
          setApplyCoupon(false);
          setLodar2("0px");
          setLodarText2("block");
          setCoupon(resp.coupon_code[0].coupon_code);
          setCouponDiscount(resp.coupon_code[0].discount_percent);
          if (
            parseInt(
              (item.price * resp.coupon_code[0].discount_percent) / 100
            ) > parseInt(resp.coupon_code[0].up_to_discount)
          ) {
            setUp_to_discount(resp.coupon_code[0].up_to_discount);
          }

          setDisplay("block");
          setCouponId(resp.coupon_code[0].id);
        } else {
          setShow("No Coupon Found");
          setLodar2("0px");
          setLodarText2("block");
        }
        // console.log("coupon code value : "+ JSON.stringify(resp.coupon_code[0].page_name))
      } else {
        setShow("No Coupon Found");
        setLodar2("0px");
        setLodarText2("block");
      }
    });
  };

  const handleIncrement = () => {
    setQuantity(document.getElementById("quantity__input").value);
    setQuantity(quantity + 1);
    //alert(e.target.value);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(document.getElementById("quantity__input").value);
      setQuantity(quantity - 1);
    }
    setSetQty(0);
    //alert(e.target.value);
  };

  const handleResetCoupon = (event) => {
    setCouponValue("");
    setCoupon("");
    setCouponDiscount(0);
    setUp_to_discount(null);
    setApplyCoupon(true);
    setCouponId("");
    setDisplay("none");
  };

  async function OrPurchase() {
    await OrderPurchased({
      service_id: service_id,
      user_id: ReactSession.get("user_id"),
      transaction_no: "testing",
      payment_mode: "Razorpay",
      coupon_id: couponId,
      coupon_code: coupon,
      // coupon_discount: couponDiscount,
      coupon_discount: up_to_discount === null
        ? parseFloat((item.price * couponDiscount) / 100)
        : up_to_discount,
      ca_share: item.ca_share,
      up_to_discount: up_to_discount,
      plan_qty: quantity,
      referral_id: sessionStorage.getItem("referral_id"),
      walletAmount: walletAmount,
      applyWallet: applyWallet,
    }).then((resp) => {
      setRespOrderId(JSON.stringify(resp.order_ids));
      if (resp.status) {
        // alert("Order Purchased Successfully");
        //alert(JSON.stringify(resp.order_ids));
        localStorage.setItem("serviceTypeId", resp.serviceType);
        setLodar("0px");
        setLodarText("block");
        setDisable(false);

        if (razorPayActive === false) {
          setLodarText("none");
          setCreateOrder("...Creating Order... ");
          setDisable(true);
          PaymentStatus({
            id: resp.order_ids,
            transaction_no: "wallet",
            payment_mode: "Wallet",
            email: localStorage.getItem("email"),
            referral_id: sessionStorage.getItem("referral_id"),
            referral_id: ReactSession.get("referral_id"),
            service_id: service_id,
            user_id: ReactSession.get("user_id"),
            walletAmount: walletAmount,
            applyWallet: applyWallet,
          }).then((resp) => {
            // alert(JSON.stringify(resp))
            // ReactSession.remove("referral_id");
            // ReactSession.remove("referral_code");
            sessionStorage.removeItem("referral_id");
            sessionStorage.removeItem("referral_code");
            let orderLabel = "allOrders";
            secureLocalStorage.setItem("dataLabel", orderLabel);
            navigate("/order");
          });
        } else if (razorPayActive === true) {
          razorPay(resp.order_ids, parseInt(text));
          let orderLabel = "allOrders";
          secureLocalStorage.setItem("dataLabel", orderLabel);
        }
        //  alert(JSON.stringify(resp))
        // navigate("/UserInfo");
      } else {
        razorPay(text);
      }
      // console.log("success log");
    });

    if (gst) {
      await UserGstin({
        user_id: ReactSession.get("user_id"),
        gstin: userGST.gstin,
        pin_code: userGST.pin_code,
        firm_address: userGST.firm_address,
        firm_name: userGST.firm_name,
      }).then((resp) => {
        // console.log(resp);
        if (resp.success) {
          setUserGST({
            gstin: "",
            pin_code: "",
            firm_address: "",
            firm_name: "",
          });
          setGst(false);
        } else {
        }
        // console.log("success log");
      });
    }

    function razorPay(value, amt) {
      if (amt === "") {
        alert("Please enter amount");
      } else {
        setLodarText("none");
        setCreateOrder("...Creating Order... ");
        setDisable(true);
        var options = {
          key: "rzp_live_jbC4AEjxQR7e0n",
          key_secret: "f4FmWs2haU2V12myXvKFp3nJ",
          amount: 1 * 100,
          currency: "INR",
          name: "First Filing",
          description: "Live Transaction",
          handler: function (response) {
            // alert("payment done");
            // alert(value);
            PaymentStatus({
              id: value,
              transaction_no: response.razorpay_payment_id,
              payment_mode: "Razorpay",
              email: localStorage.getItem("email"),
              // referral_id: ReactSession.get("referral_id"),
              referral_id: sessionStorage.getItem("referral_id"),
              service_id: service_id,
              user_id: ReactSession.get("user_id"),
              walletAmount: walletAmount,
              applyWallet: applyWallet,
            }).then((resp) => {
              // alert(JSON.stringify(resp))
              sessionStorage.removeItem("referral_id");
              sessionStorage.removeItem("referral_code");
              // ReactSession.remove("referral_id");
              // ReactSession.remove("referral_code");
              navigate("/order");
            });
          },
          modal: {
            ondismiss: function () {
              sessionStorage.removeItem("referral_id");
              sessionStorage.removeItem("referral_code");
              navigate("/order");
            },
          },
          prefill: {
            name: localStorage.getItem("displayName"),
            email: email,
            contact: localStorage.getItem("mobile"),
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
  }

  const formik = useFormik({
    initialValues,
    validate: OrdersignUp,
    onSubmit: (values) => {
      setLodarText("none");
      setLodar("20px");
      setSerror("");
      if (email === null) {
        signUp(values).then((resp) => {
          if (resp.success) {
            // toast.success("SignUp Completed");
            localStorage.setItem("displayName", resp.data.first_name);
            localStorage.setItem("user_id", resp.data.id);
            ReactSession.set("user_id", resp.data.id);
            setUserId(resp.data.id);
            localStorage.setItem("email", resp.data.email);
            localStorage.setItem("photoURL", resp.data.photoURL);
            localStorage.setItem("mobile", resp.data.mobile);
            localStorage.setItem("address", resp.data.address);
            localStorage.setItem("aadhar_card", resp.data.aadhar_card);
            localStorage.setItem("pan_card", resp.data.pan_card);
            localStorage.setItem("doc_status", resp.data.doc_status);
            setEmail(localStorage.getItem("email"));
            setUserId(resp.data.id);
            //   setGstinSUbmit(true);
            window.dispatchEvent(new Event("storage"));
            OrPurchase();
          } else {
            setSerror(resp.message);
            setLodar("0px");
            setLodarText("block");
          }
        });
      } else {
        getWallet();
        OrPurchase();
      }
    },
  });

  const handlePass = (event) => {
    if (passShow) {
      setPassShow(false);
    } else {
      //console.log('⛔️ Checkbox is NOT checked');
      setPassShow(true);
    }
    // setIsSubscribed(current => !current);
  };

  const LoginFirst = () => {
    window.dispatchEvent(new Event("LoginFirst"));
  };

  let formData = new FormData();
  const getWallet = async () => {
    formData.append("user_id", ReactSession.get("user_id"));
    await myAxios({
      method: "post",
      url: BASE_URL + "/getWallet",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setWalletAmount(response.data.data[0].amount);
        setUserWalletDiscount(response.data.UserWallet[0].user_use_by);
        //  alert(JSON.stringify(response.data.UserWallet[0].user_use_by));
      })
      .catch(function (response) {
        // console.log("");
        //
      });
  };
  return (
    <>

      <div className="container p-0">
        <div className="col-md-12 text-center OrderSummery2 mt-2 ">
          <span>Order Summary</span>
          <p className="mt-4 mb-4">
            {item.name}
          </p>
        </div>
        <div className="row gx-0 gy-0 mb-5 borderItr">
          {/* <div className="col-md-12 order-list">
            <ul>
              <li>
                <span>Service</span>
                <i className="fa fa-angle-right order-arrow-right"></i>
              </li>
              <li>
                <span>Order Summary </span>
              </li>
            </ul>
          </div> */}

          <div className="col-md-12 checkout_head">
            <div className="row">
              <div className="col-md-6">
                <h3 className="checkout_headText">Product Order Form </h3>
              </div>
              <div className="col-md-6 text-right">
                {email === null ? (
                  ""
                ) : (
                  <h3 className="checkout_headText">
                    Wallet Balance :{" "}
                    <b>
                      {applyWallet === false
                        ? walletAmount
                        : (
                          parseFloat(walletAmount) - parseFloat(baseAmount)
                        ).toFixed(2) < 0
                          ? 0
                          : (
                            parseFloat(walletAmount) - parseFloat(baseAmount)
                          ).toFixed(2)}
                    </b>
                  </h3>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4 check_out_left_div">
            <div className="row order_wlogin_acc_1">
              {email !== null ? (
                <>
                  <div className="col-md-12 mt-4">
                    <h4 className="checkout_title_head text-center text-white">
                      {email}
                    </h4>
                  </div>

                  <div className="col-md-12 mt-4">
                    <p className="text-white">
                      Please enter your contact details : -
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-12 mt-3 text-center">
                    <i className="text-white fa fa-sign-in "></i>
                    {"    "}
                    <span class="text-white">Returning Customer?</span>
                    <span
                      style={{ color: "#B69BE5" }}
                      className="cursor-pointer"
                      onClick={LoginFirst}
                    >
                      {" "}
                      Click Here To Login
                    </span>
                  </div>
                  <div className="col-md-12 mt-4 ">
                    <h4 className="checkout_title_head text-center text-white mt-4">
                      Register Now...!
                    </h4>
                    <p className="text-white mt-4">
                      Please enter your contact details : -
                    </p>
                  </div>
                </>
              )}

              <div className="col-md-12 mt-2">
                <div class="input-group-prepend order_wlogin_ac iconITrFOrm">
                  <span class="input-group-text" id="">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  value={formik.values.first_name}
                  onChange={(e) => {
                    formik.handleChange(e);
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.first_name && formik.errors.first_name ? (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {formik.errors.first_name}
                  </span>
                ) : null}
              </div>
              <div className="col-md-12 mt-2">
                <div class="input-group-prepend order_wlogin_ac iconITrFOrm">
                  <span class="input-group-text" id="">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  value={formik.values.last_name}
                  onChange={(e) => {
                    formik.handleChange(e);
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.last_name && formik.errors.last_name ? (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {formik.errors.last_name}
                  </span>
                ) : null}
              </div>
              {email ? (
                ""
              ) : (
                <div className="col-md-12 mt-2">
                  <div class="input-group-prepend order_wlogin_ac iconITrFOrm">
                    <span class="input-group-text" id="">
                      <i class="fa fa-envelope-o"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                    value={formik.values.email}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.email}
                    </span>
                  ) : null}
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {Serror}
                  </span>
                </div>
              )}
              <div className="col-md-12 mt-2">
                <div class="input-group-prepend order_wlogin_ac iconITrFOrm">
                  <span class="input-group-text" id="">
                    <i class="fa fa-phone-square"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile"
                  maxLength={10}
                  value={formik.values.mobile}
                  onChange={(e) => {
                    formik.handleChange(e);
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {formik.errors.mobile}
                  </span>
                ) : null}
              </div>
              {email ? (
                ""
              ) : (
                <div className="col-md-12 mt-2">
                  <div class="input-group-prepend order_wlogin_ac iconITrFOrm">
                    <span class="input-group-text" id="">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                  <div className="input-group-prepend IterEyeButton">
                    <span className="input-group-text" id="">
                      <i
                        onClick={handlePass}
                        className={passShow ? "fa fa-eye-slash" : "fa fa-eye"}
                      ></i>
                    </span>
                  </div>
                  <input
                    type={passShow ? "password" : "text"}
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.password}
                    </span>
                  ) : null}
                </div>
              )}
            </div>

            <div className="row">
              <div className="col-md-12 formcheckFlex mt-3">
                <input
                  check
                  type="checkbox"
                  class="form-check-input form-check-input"
                  width={"20px"}
                  onChange={gstdetail}
                />

                <span class="gstindo text-end px-2">Do you have a GSTIN ?</span>
              </div>

              {gst ? (
                <>
                  <div className="col-md-12 mb-3 mt-3 order_wlogin_acc_1">
                    <div class="input-group-prepend order_wlogin_ac iconITrFOrm">
                      <span class="input-group-text" id="">
                        <i class="fa fa-user"></i>
                      </span>
                    </div>
                    <input
                      onChange={(e) => handleChangeGST(e, "gstin")}
                      type="text"
                      name="gstin"
                      id="gstin"
                      placeholder="Please enter your company / firm's GSTIN here"
                    />
                  </div>

                  <div className="col-md-12 mb-3 order_wlogin_acc_1">
                    <div class="input-group-prepend order_wlogin_ac iconITrFOrm">
                      <span class="input-group-text" id="">
                        <i class="fa fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      onChange={(e) => handleChangeGST(e, "firm_name")}
                      name="firm_name"
                      id="firm_name"
                      placeholder="Please enter your company / firm's name here"
                    />
                  </div>

                  <div className="col-md-12 mb-3 order_wlogin_acc_1">
                    <div class="input-group-prepend order_wlogin_ac iconITrFOrm">
                      <span class="input-group-text" id="">
                        <i class="fa fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      onChange={(e) => handleChangeGST(e, "firm_address")}
                      name="firm_address"
                      id="firm_address"
                      placeholder="Please enter your company / firm's address here"
                    />
                  </div>

                  <div className="col-md-12 mb-3 order_wlogin_acc_1">
                    <div class="input-group-prepend order_wlogin_ac iconITrFOrm">
                      <span class="input-group-text" id="">
                        <i class="fa fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      maxLength={6}
                      onChange={(e) => handleChangeGST(e, "pin_code")}
                      name="pin_code"
                      id="pin_code"
                      placeholder="Please enter your area pin code here"
                    />
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="col-md-8 ">
            <div className="">
              <div className="card-body p-5">
                <h4 className="checkout_title_head">Order Details</h4>

                <div className="row mt-3">
                  <div className="col-md-6 mt-3">
                    <span className="OrderSUmmeryPriceSPan">Plan Amount</span>
                  </div>
                  <div className="col-md-6 text-right mt-3">
                    <span className="OrderSUmmeryPriceSPan">
                      ₹ {item.price}
                    </span>
                  </div>
                  <div className="col-md-6 mt-3">
                    <span className="OrderSUmmeryPriceSPan">GST @18%</span>
                  </div>
                  <div className="col-md-6 text-right mt-3">
                    <span className="OrderSUmmeryPriceSPan">
                      ₹{" "}
                      {up_to_discount === null
                        ? (
                          ((parseFloat(item.price) -
                            parseFloat((item.price * couponDiscount) / 100)) *
                            18) /
                          100
                        ).toFixed(2)
                        : ((parseFloat(item.price) - up_to_discount) * 18) /
                        100}
                      { }
                    </span>
                  </div>
                  <div className="col-md-6 mt-3" style={{ display: display }}>
                    <span className="OrderSUmmeryPriceSPan">Coupon</span>
                  </div>
                  <div
                    className="col-md-6 text-right mt-3"
                    style={{ display: display }}
                  >
                    <span className="OrderSUmmeryPriceSPan">
                      {" "}
                      <del className="del">{couponDiscount}% Discount</del>{" "}
                      &nbsp;&nbsp; ₹
                      {up_to_discount === null
                        ? parseFloat((item.price * couponDiscount) / 100)
                        : up_to_discount}
                    </span>
                  </div>

                  <div className="col-md-12">
                    <hr />
                  </div>

                  <div className="col-md-12 mb-3 text-center">
                    {sessionStorage.getItem("referral_code") ? (
                      <span className="OrderSUmmeryPriceSPan">
                        Referral code{" "}
                        <b style={{ color: "#845DC9" }}>
                          {sessionStorage.getItem("referral_code")}
                        </b>{" "}
                        is applied
                      </span>
                    ) : (
                      ""
                    )}
                  </div>

                  {applyCoupon ? (
                    <div className="col-md-12">
                      <div className="col-md-12 couponcode">
                        <span className="OrderSUmmeryPriceSPan">
                          Have a coupon code?
                        </span>

                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Coupon Code"
                            onChange={handleChangeCoupon}
                          />
                          <div class="input-group-append">
                            <button
                              type="submit"
                              class="input-group-text cursor-pointer"
                              onClick={handleCoupon}
                            >
                              <h6>
                                <div
                                  class="loading"
                                  id="newsletter"
                                  style={{ height: lodar2 }}
                                >
                                  <small></small>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>
                                <small style={{ display: lodarText2 }}>
                                  Apply
                                </small>
                              </h6>
                            </button>
                          </div>
                        </div>
                        <span
                          style={{
                            color: "red",
                            fontSize: "12px",
                          }}
                        >
                          {show}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-12 text-center">
                      <div className="card ">
                        <div
                          className="card-body p-1"
                          style={{ padding: "5px" }}
                        >
                          <div className="col-md-12 text-center couponApplied">
                            <i
                              onClick={handleResetCoupon}
                              class="fa fa-times-circle iclsdd"
                            ></i>
                            Coupon Code &nbsp; - &nbsp; {coupon}{" "}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            <button className="btn btn-primary" aria-readonly>
                              Applied
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="col-md-12 info_input_padding planSpace">
                    <p
                      className="OrderSUmmeryPriceSPan"
                      style={{ display: "flex" }}
                    >
                      Total &nbsp;&nbsp;&nbsp;{" "}
                      <div class="quantity">
                        <a class="quantity__minus" onClick={handleDecrement}>
                          <span>
                            <i className="fa fa-minus"></i>
                          </span>
                        </a>
                        <input
                          name="quantity"
                          type="text"
                          id="quantity__input"
                          class="quantity__input"
                          value={quantity}
                          readOnly
                        />
                        <a class="quantity__plus" onClick={handleIncrement}>
                          <span>
                            <i className="fa fa-plus"></i>
                          </span>
                        </a>
                      </div>
                    </p>
                    <p className="OrderSUmmeryPriceSPan">
                      {walletAmount > 0 ? (
                        <>
                          <span className="text-danger ">
                            {" "}
                            Use Wallet Amount &nbsp;{" "}
                          </span>{" "}
                          <br />
                          <span
                            className="text-danger"
                            style={{ fontSize: "9px" }}
                          >
                            You Can Use Only {userWalletDiscount}% of Your Wallet Amount
                          </span>
                          <input
                            check
                            type="checkbox"
                            class="form-check-input form-check-input"
                            width={"20px"}
                            id="walletTrue"
                            onChange={(e) =>
                              handleWallet(
                                e,
                                up_to_discount === null
                                  ? quantity *
                                  (
                                    parseFloat(item.price) -
                                    parseFloat(
                                      (item.price * couponDiscount) / 100
                                    ) +
                                    ((parseFloat(item.price) -
                                      parseFloat(
                                        (item.price * couponDiscount) / 100
                                      )) *
                                      18) /
                                    100
                                  ).toFixed(2)
                                  : quantity *
                                  (parseFloat(item.price) -
                                    up_to_discount +
                                    ((parseFloat(item.price) -
                                      up_to_discount) *
                                      18) /
                                    100)
                              )
                            }
                            style={{ marginTop: "2px" }}
                          />
                          &nbsp;&nbsp;&nbsp;
                        </>
                      ) : (
                        ""
                      )}
                      ₹{" "}
                      {applyWallet === false
                        ? up_to_discount === null
                          ? quantity *
                          (
                            parseFloat(item.price) -
                            parseFloat((item.price * couponDiscount) / 100) +
                            ((parseFloat(item.price) -
                              parseFloat(
                                (item.price * couponDiscount) / 100
                              )) *
                              18) /
                            100
                          ).toFixed(2)
                          : quantity *
                          (parseFloat(item.price) -
                            up_to_discount +
                            ((parseFloat(item.price) - up_to_discount) * 18) /
                            100)
                        : up_to_discount === null
                          ? Math.abs(
                            baseAmount -
                            quantity *
                            (parseFloat(item.price) -
                              parseFloat(
                                (item.price * couponDiscount) / 100
                              ) +
                              ((parseFloat(item.price) -
                                parseFloat(
                                  (item.price * couponDiscount) / 100
                                )) *
                                18) /
                              100)
                          ).toFixed(2)
                          : Math.abs(
                            baseAmount -
                            quantity *
                            (parseFloat(item.price) -
                              up_to_discount +
                              ((parseFloat(item.price) - up_to_discount) *
                                18) /
                              100)
                          ).toFixed(2)}
                    </p>
                  </div>

                  <div className="col-md-6 mt-3">
                    <span className="OrderSUmmeryPriceSPan">
                      Service Providers GSTIN
                    </span>
                  </div>
                  <div className="col-md-6 text-right mt-3">
                    <span className="OrderSUmmeryPriceSPan">
                      08AAMCM9357K1ZN
                    </span>
                  </div>

                  <div className="col-md-12 info_input_padding">
                    <input
                      check
                      type="checkbox"
                      onChange={handleChange}
                      class="form-check-input form-check-input"
                    />
                    <span class="OrderSummeryPL text-end px-2">
                      I accept First Filing Terms of use, Privacy Policy and
                      Refund Policy
                    </span>
                  </div>

                  <div className="col-md-12 info_input_padding">
                    {item.price ? (
                      <button
                        className="info-button2"
                        style={{ background: buttonActive }}
                        disabled={disable}
                        // onClick={(e) => {
                        //   formik.handleSubmit(e)
                        // } }

                        onClick={() => {
                          formik.handleSubmit();
                          setText(
                            applyWallet === false
                              ? up_to_discount === null
                                ? quantity *
                                Math.round(
                                  parseFloat(item.price) -
                                  parseFloat(
                                    (item.price * couponDiscount) / 100
                                  ) +
                                  ((parseFloat(item.price) -
                                    parseFloat(
                                      (item.price * couponDiscount) / 100
                                    )) *
                                    18) /
                                  100
                                )
                                : quantity *
                                (parseFloat(item.price) -
                                  up_to_discount +
                                  ((parseFloat(item.price) - up_to_discount) *
                                    18) /
                                  100)
                              : up_to_discount === null
                                ? Math.abs(
                                  baseAmount -
                                  quantity *
                                  Math.round(
                                    parseFloat(item.price) -
                                    parseFloat(
                                      (item.price * couponDiscount) / 100
                                    ) +
                                    ((parseFloat(item.price) -
                                      parseFloat(
                                        (item.price * couponDiscount) /
                                        100
                                      )) *
                                      18) /
                                    100
                                  )
                                )
                                : Math.abs(
                                  baseAmount -
                                  quantity *
                                  (parseFloat(item.price) -
                                    up_to_discount +
                                    ((parseFloat(item.price) -
                                      up_to_discount) *
                                      18) /
                                    100)
                                )
                          );
                        }}
                      >
                        <div
                          class="loading"
                          id="newsletter"
                          style={{ height: lodar }}
                        >
                          <small>{createOrder}</small>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <small style={{ display: lodarText }}>Checkout</small>
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Modal
        show={show}
        id="success_tic"
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        backdrop="static"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <div className="container p-5">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="">
                  <i className="fa fa-close wrong-font"></i>
                </div>
              </div>

              <div className="col-md-12 text-center">
                <h3 className="mt-3">No Coupon Found</h3>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default OrderSummary2;
