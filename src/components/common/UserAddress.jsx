import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { userAddress } from "../common/services/userInfo";
import { BASE_URL, myAxios } from "../common/services/Helper";
import { useLocation } from "react-router-dom";

const UserAddress = (props) => {
  const [allowed_input, setAllowed_input] = useState([]);
  const validateAddress = (valData) => {
    const errors = {};

    if (allowed_input.indexOf("house_no") > -1) {
      if (!valData.house_no) {
        errors.house_no = "Please Enter House No";
      } else if (valData.house_no.length > 20) {
        errors.house_no = "House No cannot exceed 20 characters";
      }
    }

    if (allowed_input.indexOf("area") > -1) {
      if (!valData.area) {
        errors.area = "Please Enter Area";
      }
    }
    if (allowed_input.indexOf("pincode") > -1) {
      if (!valData.pincode) {
        errors.pincode = "Please Enter Pincode";
      }
    }
    if (allowed_input.indexOf("city") > -1) {
      if (!valData.city) {
        errors.city = "Please Enter City";
      }
    }
    if (allowed_input.indexOf("code") > -1) {
      if (!valData.code) {
        errors.code = "Please Enter Code";
      }
    }
    if (allowed_input.indexOf("mobile") > -1) {
      if (!valData.mobile) {
        errors.mobile = "Please Enter Mobile Number";
      } else if (
        !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(
          valData.mobile
        )
      ) {
        errors.mobile = "Invalid Mobile Number";
      }
    }
    if (allowed_input.indexOf("state") > -1) {
      if (!valData.state) {
        errors.state = "Please Enter State";
      }
    }
    if (allowed_input.indexOf("email") > -1) {
      if (!valData.email) {
        errors.email = "Please Enter Email ID";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valData.email)
      ) {
        errors.email = "Invalid email address";
      }
    }
    return errors;
  };

  const [viewUserInfo, setViewUserInfo] = useState("");
  const [response, setResponse] = useState(false);
  let location = useLocation();
  useEffect(() => {
    fetch(BASE_URL + "/getServiceType/" + location.state.service_type_id)
      .then((res) => res.json())
      .then((json) => {
        //alert(JSON.stringify(json.allowed_input[0]));
        setAllowed_input(json.allowed_input);
        setResponse(true);
        setViewUserInfo(location.state.view_user_info);
      });
  }, []);

  const [lodar, setLodar] = useState("");
  const [lodarText, setLodarText] = useState("block");

  const [addressStatus, setAddressStatus] = useState("none");

  const [initialValues, setInitialValues] = useState({
    user_id: props.state.user_id,
    order_id: props.state.order_id,
    house_no: "",
    area: "",
    pincode: "",
    city: "",
    state: "",
    code: "",
    mobile: "",
    email: "",
  });

  const [state, setState] = useState({
    user_id: props.state.user_id,
    order_id: props.state.order_id,
    house_no: true,
    area: true,
    pincode: true,
    city: true,
    state: true,
    code: true,
    mobile: true,
    email: true,
  });

  const formik = useFormik({
    initialValues,
    validate: validateAddress,
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      setLodar("20px");
      setLodarText("none");
      userAddress(data).then((resp) => {
        // console.log(resp);
        if (resp.status) {
          setLodar("0px");
          setLodarText("block");
          toast.success("Address submitted Successfully");
          var id = document
            .querySelector(".react-tabs__tab--selected")
            .getAttribute("data-id");
          var id1 = document.querySelector(".react-tabs__tab--selected").id;
          let text = id1;
          const myArray = text.split(":");
          let word = myArray[0];
          let word1 = myArray[1];
          let word2 = myArray[2];
          if (id == "tab2") {
            document.getElementById(word + ":" + word1 + ":" + "2").click();
            setAddressStatus("inline-flex");
          }
        } else {
          setLodar("0px");
          setLodarText("block");
          toast.error(resp.message);
        }
        // console.log("success log");
      });
    },
  });
  const [data, setData] = useState(initialValues);
  const [data1, setData1] = useState([]);
  const [count, setCount] = useState(0);
  const handleChange2 = (e, property) => {
    setData({ ...data, [property]: e.target.value });
    setState({ ...state, [property]: false });

    // console.log("data : " + JSON.stringify(data));
    if (count === 0) {
      formik.setFieldValue("house_no", data1.house_no);
      formik.setFieldValue("area", data1.area);
      formik.setFieldValue("city", data1.city);
      formik.setFieldValue("code", data1.code);
      formik.setFieldValue("mobile", data1.mobile);
      formik.setFieldValue("email", data1.email);
      formik.setFieldValue("state", data1.state);
      formik.setFieldValue("pincode", data1.pincode);
      setData(data1);
      setCount(count + 1);
    }
  };

  let formData = new FormData();
  const getUserAddress = () => {
    formData.append("user_id", props.state.user_id);
    formData.append("order_id", props.state.order_id);
    myAxios({
      method: "post",
      url: BASE_URL + "/getUserAddress",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        /// alert(JSON.stringify(response.data.data[0]));
        setData1(response.data.data[0]);
      })
      .catch(function (response) {
        //handle error
        // console.log(response);
      });
  };
  const [states, setStates] = useState([]);
  const [citys, setCitys] = useState([]);
  useEffect(() => {
    const getData = () => {
      fetch(BASE_URL + "/getStates")
        .then((res) => res.json())
        .then((json) => {
          setStates(json.states);
        });
    };
    const getCity = () => {
      fetch(BASE_URL + "/getCitys")
        .then((res) => res.json())
        .then((json) => {
          setCitys(json.citys);
        });
    };
    getData();
    getCity();
    getUserAddress();
  }, []);
  return (
    <form onSubmit={formik.handleSubmit}>
      <fieldset disabled={viewUserInfo === "1" ? true : false}>
        <div className="row">
          {allowed_input.indexOf("house_no") > -1 ? (
            <div className="col-md-4 info_input_padding inputLabel">
              <label>House No</label>
              <input
                type="text"
                name="house_no"
                id="house_no"
                className="form-control"
                placeholder="House No"
                value={state.house_no ? data1.house_no : formik.values.house_no}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleChange2(e, "house_no");
                }}
                onBlur={formik.handleBlur}
                onClick={(e) => {
                  handleChange2(e, "house_no");
                }}
              />
              {formik.touched.house_no && formik.errors.house_no ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.house_no}
                </span>
              ) : null}
            </div>
          ) : (
            ""
          )}
          {allowed_input.indexOf("area") > -1 ? (
            <div className="col-md-4 info_input_padding inputLabel">
              <label>Area</label>
              <input
                type="text"
                name="area"
                className="form-control"
                placeholder="Area"
                value={state.area ? data1.area : formik.values.area}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleChange2(e, "area");
                }}
                onBlur={formik.handleBlur}
                onClick={(e) => {
                  handleChange2(e, "area");
                }}
              />
              {formik.touched.area && formik.errors.area ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.area}
                </span>
              ) : null}
            </div>
          ) : (
            ""
          )}
          {allowed_input.indexOf("pincode") > -1 ? (
            <div className="col-md-4 info_input_padding inputLabel">
              <label>Pincode</label>
              <input
                type="text"
                name="pincode"
                className="form-control"
                placeholder="Pincode"
                value={state.pincode ? data1.pincode : formik.values.pincode}
                maxLength={6}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleChange2(e, "pincode");
                }}
                onBlur={formik.handleBlur}
                onClick={(e) => {
                  handleChange2(e, "pincode");
                }}
              />
              {formik.touched.pincode && formik.errors.pincode ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.pincode}
                </span>
              ) : null}
            </div>
          ) : (
            ""
          )}
          {allowed_input.indexOf("state") > -1 ? (
            <div className="col-md-4 info_input_padding inputLabel">
              <label>State</label>
              <select
                name="state"
                id="state"
                className="form-control"
                value={state.state ? data1.state : formik.values.state}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleChange2(e, "state");
                }}
                onBlur={formik.handleBlur}
                onClick={(e) => {
                  handleChange2(e, "state");
                }}
              >
                <option value="">Select</option>
                {states.map((state) => {
                  return (
                    <>
                      <option value={state.name}>{state.name}</option>
                    </>
                  );
                })}
              </select>
              {formik.touched.state && formik.errors.state ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.state}
                </span>
              ) : null}
            </div>
          ) : (
            ""
          )}
          {allowed_input.indexOf("city") > -1 ? (
            <div className="col-md-4 info_input_padding inputLabel">
              <label>City</label>
              <select
                name="city"
                id="city"
                className="form-control"
                value={state.city ? data1.city : formik.values.city}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleChange2(e, "city");
                }}
                onBlur={formik.handleBlur}
                onClick={(e) => {
                  handleChange2(e, "city");
                }}
              >
                <option value="">Select</option>
                {citys.map((city) => {
                  return (
                    <>
                      <option value={city.city_name}>{city.city_name}</option>
                    </>
                  );
                })}
              </select>
              {formik.touched.city && formik.errors.city ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.city}
                </span>
              ) : null}
            </div>
          ) : (
            ""
          )}
          {allowed_input.indexOf("email") > -1 ? (
            <div className="col-md-4 info_input_padding inputLabel">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={state.email ? data1.email : formik.values.email}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleChange2(e, "email");
                }}
                onBlur={formik.handleBlur}
                onClick={(e) => {
                  handleChange2(e, "email");
                }}
              />
              {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.email}
                </span>
              ) : null}
            </div>
          ) : (
            ""
          )}
          {allowed_input.indexOf("code") > -1 ? (
            <div className="col-md-4 info_input_padding inputLabel">
              <label>Code</label>
              <select
                name="code"
                id="code"
                className="form-control"
                value={state.code ? data1.code : formik.values.code}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleChange2(e, "code");
                }}
                onBlur={formik.handleBlur}
                onClick={(e) => {
                  handleChange2(e, "code");
                }}
              >
                <option value="">Select</option>
                <option value="IN +91">IN +91</option>
              </select>
              {formik.touched.code && formik.errors.code ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.code}
                </span>
              ) : null}
            </div>
          ) : (
            ""
          )}
          {allowed_input.indexOf("mobile") > -1 ? (
            <div className="col-md-4 info_input_padding inputLabel">
              <label>Mobile No</label>
              <input
                type="text"
                name="mobile"
                className="form-control"
                placeholder="Mobile Number"
                value={state.mobile ? data1.mobile : formik.values.mobile}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleChange2(e, "mobile");
                }}
                onBlur={formik.handleBlur}
                maxLength={10}
                onClick={(e) => {
                  handleChange2(e, "mobile");
                }}
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.mobile}
                </span>
              ) : null}
            </div>
          ) : (
            ""
          )}
          {response ? (
            <div className="col-md-12 info_input_padding">
              {viewUserInfo === "1" ? (
                ""
              ) : (
                <button
                  className="info-button"
                  onClick={(e) => {
                    handleChange2(e, "");
                  }}
                >
                  <div
                    class="loading"
                    id="newsletter"
                    style={{ height: lodar }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div style={{ display: lodarText }}>
                    <small>
                      Next &nbsp;&nbsp;
                      <i className="fa fa-angle-right"></i>
                    </small>
                  </div>
                </button>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </fieldset>
    </form>
  );
};

export default UserAddress;
