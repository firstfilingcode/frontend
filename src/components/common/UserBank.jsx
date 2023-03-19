import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { userBank } from "../common/services/userInfo";
import { useNavigate } from "react-router-dom";
import { BASE_URL, myAxios } from "../common/services/Helper";
import { useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
const UserBank = (props) => {
  const [allowed_input, setAllowed_input] = useState([]);

  const validateBank = (valData) => {
    const errors = {};
    if (allowed_input.indexOf("ifsc") > -1) {
      if (!valData.ifsc) {
        errors.ifsc = "Please Enter IFSC";
      }
    }
    if (allowed_input.indexOf("bank_name") > -1) {
      if (!valData.bank_name) {
        errors.bank_name = "Please Enter Bank Name";
      }
    }
    if (allowed_input.indexOf("bank_account_no") > -1) {
      if (!valData.bank_account_no) {
        errors.bank_account_no = "Please Enter Bank Account No";
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

  const [initialValues, setInitialValues] = useState({
    user_id: props.state.user_id,
    order_id: props.state.order_id,
    ifsc: "",
    bank_name: "",
    bank_account_no: "",
  });

  const [state, setState] = useState({
    user_id: props.state.user_id,
    order_id: props.state.order_id,
    ifsc: true,
    bank_name: true,
    bank_account_no: true,
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validate: validateBank,
    onSubmit: (values) => {
      fetch("https://ifsc.razorpay.com/" + data.ifsc)
        .then((res) => res.json())
        .then((json) => {
          if (json === "Not Found") {
            setIfscError("Invalid Ifsc Code");
          } else {
            setIfscError("");
            setLodar("20px");
            setLodarText("none");
            userBank(data).then((resp) => {
              // console.log(resp);
              if (resp.status) {
                toast.success("Bank Details submitted Successfully");
                setLodar("0px");
                setLodarText("block");
                navigate("/Order");
              } else {
                toast.error(resp.message);
                setLodar("0px");
                setLodarText("block");
              }
              // console.log("success log");
            });
          }
        });
    },
  });

  const [data, setData] = useState(initialValues);
  const [data1, setData1] = useState([]);
  const [count, setCount] = useState(0);
  const [ifscError, setIfscError] = useState("");
  const handleChange2 = (e, property) => {
    setData({ ...data, [property]: e.target.value });
    setState({ ...state, [property]: false });
    setIfscError("");
    // console.log("data : " + JSON.stringify(data));
    if (count === 0) {
      formik.setFieldValue("ifsc", data1.ifsc);
      formik.setFieldValue("bank_name", data1.bank_name);
      formik.setFieldValue("bank_account_no", data1.bank_account_no);
      setData(data1);
      setCount(count + 1);
    }
  };

  let formData = new FormData();
  const getUserBank = () => {
    formData.append("user_id", props.state.user_id);
    formData.append("order_id", props.state.order_id);
    myAxios({
      method: "post",
      url: BASE_URL + "/getUserBank",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        // alert(JSON.stringify(response.data.data));
        setData1(response.data.data[0]);
      })
      .catch(function (response) {
        //handle error
        // console.log(response);
      });
  };

  useEffect(() => {
    getUserBank();
  }, []);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <fieldset disabled={viewUserInfo === "1" ? true : false}>
          <div className="row">
            {allowed_input.indexOf("ifsc") > -1 ? (
              <div className="col-md-4 info_input_padding inputLabel">
                <label>Ifsc</label>
                <input
                  type="text"
                  name="ifsc"
                  className="form-control"
                  placeholder="eg: UTIB58938O"
                  value={state.ifsc ? data1.ifsc : formik.values.ifsc}
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleChange2(e, "ifsc");
                  }}
                  onBlur={formik.handleBlur}
                  onClick={(e) => {
                    handleChange2(e, "ifsc");
                  }}
                />
                {formik.touched.ifsc && formik.errors.ifsc ? (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {formik.errors.ifsc}
                  </span>
                ) : null}

                <span style={{ color: "red", fontSize: "12px" }}>
                  {ifscError}
                </span>
              </div>
            ) : (
              ""
            )}
            {allowed_input.indexOf("bank_name") > -1 ? (
              <div className="col-md-4 info_input_padding inputLabel">
                <label>Bank Name</label>
                <input
                  type="text"
                  name="bank_name"
                  id="bank_name"
                  className="form-control"
                  placeholder="eg: SBI"
                  value={
                    state.bank_name ? data1.bank_name : formik.values.bank_name
                  }
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleChange2(e, "bank_name");
                  }}
                  onBlur={formik.handleBlur}
                  onClick={(e) => {
                    handleChange2(e, "bank_name");
                  }}
                />
                {formik.touched.bank_name && formik.errors.bank_name ? (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {formik.errors.bank_name}
                  </span>
                ) : null}
              </div>
            ) : (
              ""
            )}
            {allowed_input.indexOf("bank_account_no") > -1 ? (
              <div className="col-md-4 info_input_padding inputLabel">
                <label>Bank Account No</label>
                <input
                  type="text"
                  name="bank_account_no"
                  className="form-control"
                  placeholder="eg: 8534343434343323232323232"
                  value={
                    state.bank_account_no
                      ? data1.bank_account_no
                      : formik.values.bank_account_no
                  }
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleChange2(e, "bank_account_no");
                  }}
                  onBlur={formik.handleBlur}
                  onClick={(e) => {
                    handleChange2(e, "bank_account_no");
                  }}
                />
                {formik.touched.bank_account_no &&
                formik.errors.bank_account_no ? (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {formik.errors.bank_account_no}
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
                        Save &nbsp;&nbsp;
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
    </>
  );
};

export default UserBank;
