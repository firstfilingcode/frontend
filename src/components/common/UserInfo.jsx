import React, { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { userInfo } from "../common/services/userInfo";
import UserAddress from "../common/UserAddress";
import UserBank from "../common/UserBank";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { myAxios } from "../common/services/Helper";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../common/services/Helper";
import { NavLink } from "react-router-dom";

const UserInfo = () => {
  const [allowed_input, setAllowed_input] = useState([]);

  const validateInfo = (valData) => {
    const errors = {};
    if (allowed_input.indexOf("cin") > -1) {
      if (!valData.cin) {
        errors.cin = "Please Enter Cin";
      }
    }
    if (allowed_input.indexOf("company_name") > -1) {
      if (!valData.company_name) {
        errors.company_name = "Please Enter Company Name";
      }
    }
    if (allowed_input.indexOf("incorporation_date") > -1) {
      if (!valData.incorporation_date) {
        errors.incorporation_date = "Please Enter Incorporation Date";
      }
    }
    if (allowed_input.indexOf("first_name") > -1) {
      if (!valData.first_name) {
        errors.first_name = "Please Enter First Name";
      }
    }
    if (allowed_input.indexOf("last_name") > -1) {
      if (!valData.last_name) {
        errors.last_name = "Please Enter Last Name";
      }
    }
    if (allowed_input.indexOf("fathers_name") > -1) {
      if (!valData.fathers_name) {
        errors.fathers_name = "Please Enter Fathers Name";
      }
    }
    if (allowed_input.indexOf("gender") > -1) {
      if (!valData.gender) {
        errors.gender = "Please Enter Gender";
      }
    }
    if (allowed_input.indexOf("dob") > -1) {
      if (!valData.dob) {
        errors.dob = "Please Enter Dob";
      }
    }

    if (allowed_input.indexOf("aadhar_no") > -1) {
      if (!valData.aadhar_no) {
        errors.aadhar_no = "Please Enter Aadhar Number";
      } else if (
        !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{6,6}$/i.test(
          valData.aadhar_no
        )
      ) {
        errors.aadhar_no = "Invalid Aadhar Number";
      } else {
        if (aadharNoResult === true) {
        } else {
          errors.aadhar_no = "Please Enter Valid Aadhar Number";
        }
      }
    }
    if (allowed_input.indexOf("pan_no") > -1) {
      if (!valData.pan_no) {
        errors.pan_no = "Please Enter Pan Number";
      } else if (valData.pan_no.length < 10) {
        // alert(valData.pan_no.length);
        errors.pan_no = "Invalid Pan Number";
      } else {
        if (panNoResult === true) {

        } else {
          errors.pan_no = "Please Enter Valid Pan Number";
        }
      }

    }
    return errors;
  };

  const [response, setResponse] = useState(false);
  const [viewUserInfo, setViewUserInfo] = useState("");

  let location = useLocation();
  // alert(location.state.view_user_info)
  useEffect(() => {
    fetch(BASE_URL + "/getServiceType/" + location.state.service_type_id)
      .then((res) => res.json())
      .then((json) => {
        //alert(JSON.stringify(json.allowed_input[0]));
        setAllowed_input(json.allowed_input);
        setViewUserInfo(location.state.view_user_info);
        setResponse(true);
      });
  }, []);

  const [lodar, setLodar] = useState("");
  const [lodarText, setLodarText] = useState("block");

  const [personalStatus, setPersonalStatus] = useState("none");

  const [initialValues, setInitialValues] = useState({
    user_id: location.state.user_id,
    order_id: location.state.order_id,
    cin: "",
    company_name: "",
    incorporation_date: "",
    first_name: "",
    last_name: "",
    fathers_name: "",
    gender: "",
    dob: "",
    pan_no: "",
    aadhar_no: "",
  });
  const [data, setData] = useState(initialValues);
  const [state, setState] = useState({
    user_id: location.state.user_id,
    order_id: location.state.order_id,
    cin: true,
    company_name: true,
    incorporation_date: true,
    first_name: true,
    last_name: true,
    fathers_name: true,
    gender: true,
    dob: true,
    pan_no: true,
    aadhar_no: true,
  });

  const [panNoResult, setPanNoResult] = useState(false);
  const [aadharNoResult, setAadharNoResult] = useState(false);

  const checkPancard = (event) => {
    if (event.target.value.length === 10) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3NzkyMDYzNiwianRpIjoiODAzYjEzMTAtM2IzMC00YTg1LWE0Y2YtMDNhYTIzMjUwNWM1IiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2Lm1hYXZhbGFuY29uc3VsdGFuY3lAc3VyZXBhc3MuaW8iLCJuYmYiOjE2Nzc5MjA2MzYsImV4cCI6MTk5MzI4MDYzNiwidXNlcl9jbGFpbXMiOnsic2NvcGVzIjpbInVzZXIiXX19.cbNvI0QnMDHW-xEouN87-BAheo8yWEnzP5w29IJjoN8");

      var raw = JSON.stringify({
        "id_number": event.target.value
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://KYC-API.surepass.io/api/v1/pan/pan", requestOptions)
        .then(response => response.json())
        .then((json) => {
          // alert(JSON.stringify(json.data.remarks))
          if (json.success === true) {
            setPanNoResult(true);
          } else {
            setPanNoResult(false);
          }
        })
        .catch(error => console.log('error', error));
    }
  };

  const formik = useFormik({
    initialValues,
    validate: validateInfo,
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      setLodarText("none");
      setLodar("20px");
      //  alert(JSON.stringify(data[0]))
      userInfo(data).then((resp) => {
        //console.log(resp);
        if (resp.status) {
          toast.success("Personal Information submitted Successfully");
          setLodarText("block");
          setLodar("0px");
          var id = document
            .querySelector(".react-tabs__tab--selected")
            .getAttribute("data-id");
          var id1 = document.querySelector(".react-tabs__tab--selected").id;
          let text = id1;
          const myArray = text.split(":");
          let word = myArray[0];
          let word1 = myArray[1];
          let word2 = myArray[2];

          if (id == "tab1") {
            document.getElementById(word + ":" + word1 + ":" + "1").click();
            setPersonalStatus("inline-flex");
          }
        } else {
          toast.error(resp.message);
          setLodarText("block");
          setLodar("0px");
        }
        //console.log("success log");
      });
    },
  });

  const [data1, setData1] = useState([]);
  const [count, setCount] = useState(0);
  const handleChange2 = (e, property) => {
    setData({ ...data, [property]: e.target.value });
    setState({ ...state, [property]: false });

    //console.log("data : " + JSON.stringify(data));
    if (count === 0) {
      formik.setFieldValue("cin", data1.cin);
      formik.setFieldValue("company_name", data1.company_name);
      formik.setFieldValue("incorporation_date", data1.incorporation_date);
      formik.setFieldValue("first_name", data1.first_name);
      formik.setFieldValue("last_name", data1.last_name);
      formik.setFieldValue("fathers_name", data1.fathers_name);
      formik.setFieldValue("gender", data1.gender);
      formik.setFieldValue("dob", data1.dob);
      formik.setFieldValue("pan_no", data1.pan_no);
      formik.setFieldValue("aadhar_no", data1.aadhar_no);
      setData(data1);
      setCount(count + 1);
    }
  };

  let formData = new FormData();
  const handleAdhar = (e) => {
    if (e.target.value.length == 12) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3NzkyMDYzNiwianRpIjoiODAzYjEzMTAtM2IzMC00YTg1LWE0Y2YtMDNhYTIzMjUwNWM1IiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2Lm1hYXZhbGFuY29uc3VsdGFuY3lAc3VyZXBhc3MuaW8iLCJuYmYiOjE2Nzc5MjA2MzYsImV4cCI6MTk5MzI4MDYzNiwidXNlcl9jbGFpbXMiOnsic2NvcGVzIjpbInVzZXIiXX19.cbNvI0QnMDHW-xEouN87-BAheo8yWEnzP5w29IJjoN8");

      var raw = JSON.stringify({
        "id_number": e.target.value
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://KYC-API.surepass.io/api/v1/aadhaar-validation/aadhaar-validation", requestOptions)
        .then((response) => response.json())
        .then((json) => {
          if (json.data.remarks === "success") {
            setAadharNoResult(true);
          } else {
            setAadharNoResult(false);
          }
        })
    }
  };


  const getUserInfo = () => {
    formData.append("user_id", location.state.user_id);
    formData.append("order_id", location.state.order_id);
    myAxios({
      method: "post",
      url: BASE_URL + "/getUserInfo",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //  alert(JSON.stringify(response.data.data));
        setData1(response.data.data[0]);
      })
      .catch(function (response) {
        //handle error
        //console.log(response);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-11 order-list">
            <ul>
              <li>
                <NavLink to="/Order">
                  <span>My Order </span>
                </NavLink>

                <i className="fa fa-angle-right order-arrow-right"></i>
              </li>
              <li>
                <span>User Information</span>
              </li>
            </ul>
          </div>
          <div className="col-md-1">
            <NavLink to="/Order">
              <button style={{ marginTop: "-9px" }} className=" btn btn-dark">
                Back
              </button>
            </NavLink>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 info_tabs">
            <Tabs>
              <TabList className="info-display">
                <Tab className="info-bg-first w-100" data-id="tab1">
                  <section className="tab-bg">
                    <span className="circle-info">1</span>
                    <span className="text_info">Personal Information</span>
                  </section>
                </Tab>
                <Tab className="info-bg-second margin_tab w-100" data-id="tab2">
                  <section className="tab-bg">
                    <span className="circle-info">2</span>
                    <span className="text_info">Address</span>
                  </section>
                </Tab>
                <Tab className="info-bg-third margin_tab w-100" data-id="tab3">
                  <section className="tab-bg">
                    <span className="circle-info">3</span>
                    <span className="text_info">Bank Details</span>
                  </section>
                </Tab>
              </TabList>

              <TabPanel>
                <div className="card userInfo_card">
                  <div className="card-body contactinput">
                    <div className="col-md-12">
                      <span className="UserInfo_Heading_title">
                        Details should be as per government identification (
                        like PAN, Aadhar)
                      </span>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <fieldset disabled={viewUserInfo === 1 ? true : false}>
                        <div className="row">
                          {allowed_input.indexOf("cin") > -1 ? (
                            <div className="col-md-4 info_input_padding inputLabel">
                              <label>Cin</label>
                              <input
                                type="text"
                                name="cin"
                                id="cin"
                                className="form-control"
                                placeholder="CIN"
                                value={
                                  state.cin ? data1.cin : formik.values.cin
                                }
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange2(e, "cin");
                                }}
                                onBlur={formik.handleBlur}
                                onClick={(e) => {
                                  handleChange2(e, "cin");
                                }}
                              />
                              {formik.touched.cin && formik.errors.cin ? (
                                <span
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {formik.errors.cin}
                                </span>
                              ) : null}
                            </div>
                          ) : (
                            ""
                          )}
                          {allowed_input.indexOf("company_name") > -1 ? (
                            <div className="col-md-4 info_input_padding inputLabel">
                              <label>Company Name</label>
                              <input
                                type="text"
                                name="company_name"
                                id="company_name"
                                className="form-control"
                                placeholder="Company Name"
                                value={
                                  state.company_name
                                    ? data1.company_name
                                    : formik.values.company_name
                                }
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange2(e, "company_name");
                                }}
                                onBlur={formik.handleBlur}
                                onClick={(e) => {
                                  handleChange2(e, "company_name");
                                }}
                              />
                              {formik.touched.company_name &&
                                formik.errors.company_name ? (
                                <span
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {formik.errors.company_name}
                                </span>
                              ) : null}
                            </div>
                          ) : (
                            ""
                          )}
                          {allowed_input.indexOf("incorporation_date") > -1 ? (
                            <div className="col-md-4 info_input_padding inputLabel">
                              <label>Incorporation Date</label>
                              <input
                                type="date"
                                name="incorporation_date"
                                id="incorporation_date"
                                className="form-control"
                                value={
                                  state.incorporation_date
                                    ? data1.incorporation_date
                                    : formik.values.incorporation_date
                                }
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange2(e, "incorporation_date");
                                }}
                                onBlur={formik.handleBlur}
                                onClick={(e) => {
                                  handleChange2(e, "incorporation_date");
                                }}
                              />
                              {formik.touched.incorporation_date &&
                                formik.errors.incorporation_date ? (
                                <span
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {formik.errors.incorporation_date}
                                </span>
                              ) : null}
                            </div>
                          ) : (
                            ""
                          )}
                          {allowed_input.indexOf("first_name") > -1 ? (
                            <div className="col-md-4 info_input_padding inputLabel">
                              <label>First Name</label>
                              <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                className="form-control"
                                placeholder="First Name"
                                value={
                                  state.first_name
                                    ? data1.first_name
                                    : formik.values.first_name
                                }
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange2(e, "first_name");
                                }}
                                onBlur={formik.handleBlur}
                                onClick={(e) => {
                                  handleChange2(e, "first_name");
                                }}
                              />
                              {formik.touched.first_name &&
                                formik.errors.first_name ? (
                                <span
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {formik.errors.first_name}
                                </span>
                              ) : null}
                            </div>
                          ) : (
                            ""
                          )}
                          {allowed_input.indexOf("last_name") > -1 ? (
                            <div className="col-md-4 info_input_padding inputLabel">
                              <label>Last Name</label>
                              <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                className="form-control"
                                placeholder="Last Name"
                                value={
                                  state.last_name
                                    ? data1.last_name
                                    : formik.values.last_name
                                }
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange2(e, "last_name");
                                }}
                                onBlur={formik.handleBlur}
                                onClick={(e) => {
                                  handleChange2(e, "last_name");
                                }}
                              />
                              {formik.touched.last_name &&
                                formik.errors.last_name ? (
                                <span
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {formik.errors.last_name}
                                </span>
                              ) : null}
                            </div>
                          ) : (
                            ""
                          )}
                          {allowed_input.indexOf("fathers_name") > -1 ? (
                            <div className="col-md-4 info_input_padding inputLabel">
                              <label>Father's Name</label>
                              <input
                                type="text"
                                name="fathers_name"
                                id="fathers_name"
                                className="form-control"
                                placeholder="Father's Name"
                                value={
                                  state.fathers_name
                                    ? data1.fathers_name
                                    : formik.values.fathers_name
                                }
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange2(e, "fathers_name");
                                }}
                                onBlur={formik.handleBlur}
                                onClick={(e) => {
                                  handleChange2(e, "fathers_name");
                                }}
                              />
                              {formik.touched.fathers_name &&
                                formik.errors.fathers_name ? (
                                <span
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {formik.errors.fathers_name}
                                </span>
                              ) : null}
                            </div>
                          ) : (
                            ""
                          )}
                          {allowed_input.indexOf("gender") > -1 ? (
                            <div className="col-md-4 info_input_padding inputLabel">
                              <label>Gender</label>
                              <select
                                name="gender"
                                id="gender"
                                className="form-control"
                                value={
                                  state.gender
                                    ? data1.gender
                                    : formik.values.gender
                                }
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange2(e, "gender");
                                }}
                                onBlur={formik.handleBlur}
                                onClick={(e) => {
                                  handleChange2(e, "gender");
                                }}
                              >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                              </select>
                              {formik.touched.gender && formik.errors.gender ? (
                                <span
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {formik.errors.gender}
                                </span>
                              ) : null}
                            </div>
                          ) : (
                            ""
                          )}
                          {allowed_input.indexOf("dob") > -1 ? (
                            <div className="col-md-4 info_input_padding inputLabel">
                              <label>Dob</label>
                              <input
                                type="date"
                                id="dob"
                                name="dob"
                                className="form-control"
                                value={
                                  state.dob ? data1.dob : formik.values.dob
                                }
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange2(e, "dob");
                                }}
                                onBlur={formik.handleBlur}
                                onClick={(e) => {
                                  handleChange2(e, "dob");
                                }}
                              />
                              {formik.touched.dob && formik.errors.dob ? (
                                <span
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {formik.errors.dob}
                                </span>
                              ) : null}
                            </div>
                          ) : (
                            ""
                          )}
                          {allowed_input.indexOf("pan_no") > -1 ? (
                            <div className="col-md-4 info_input_padding inputLabel">
                              <label>Pan No</label>
                              <input
                                type="text"
                                name="pan_no"
                                id="pan_no"
                                className="form-control"
                                placeholder="Pan Number"
                                maxLength={"10"}
                                value={
                                  state.pan_no
                                    ? data1.pan_no
                                    : formik.values.pan_no
                                }
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange2(e, "pan_no");
                                  checkPancard(e, "pan_no");
                                }}
                                onBlur={formik.handleBlur}
                                onClick={(e) => {
                                  handleChange2(e, "pan_no");
                                  checkPancard(e, "pan_no");
                                }}
                              />
                              {formik.touched.pan_no && formik.errors.pan_no ? (
                                <span
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {formik.errors.pan_no}
                                </span>
                              ) : null}
                            </div>
                          ) : (
                            ""
                          )}
                          {allowed_input.indexOf("aadhar_no") > -1 ? (
                            <div className="col-md-4 info_input_padding inputLabel">
                              <label>Aadhar No</label>
                              <input
                                type="text"
                                id="aadhar_no"
                                name="aadhar_no"
                                maxLength={"12"}
                                className="form-control"
                                placeholder="Aadhar Number"
                                value={
                                  state.aadhar_no
                                    ? data1.aadhar_no
                                    : formik.values.aadhar_no
                                }
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange2(e, "aadhar_no");
                                  handleAdhar(e, "aadhar_no");
                                }}
                                onBlur={formik.handleBlur}
                                onClick={(e) => {
                                  handleChange2(e, "aadhar_no");
                                  handleAdhar(e, "aadhar_no");
                                }}
                              />
                              {formik.touched.aadhar_no &&
                                formik.errors.aadhar_no ? (
                                <span
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {formik.errors.aadhar_no}
                                </span>
                              ) : null}
                            </div>
                          ) : (
                            ""
                          )}
                          {response ? (
                            <div className="col-md-12 info_input_padding">
                              {viewUserInfo === 1 ? (
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
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="card userInfo_card">
                  <div className="card-body contactinput">
                   
                    <UserAddress
                      state={{
                        order_id: location.state.order_id,
                        user_id: location.state.user_id,
                      }}
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="card userInfo_card">
                  <div className="card-body contactinput">
                   
                    <UserBank
                      state={{
                        order_id: location.state.order_id,
                        user_id: location.state.user_id,
                      }}
                    />
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
