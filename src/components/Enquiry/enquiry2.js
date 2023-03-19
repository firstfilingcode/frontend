import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, input, Container, Button, Col } from "reactstrap";
import { toast } from "react-toastify";
import firstfillingimg from "../common/Images/firstfillingimg.png";
import { getContacts } from "../common/services/getContacts";
import { ReactSession } from 'react-client-session';
import Modal from "react-bootstrap/Modal";
import secureLocalStorage from "react-secure-storage";

const Enquiry2 = () => {

  const [price, setPrice] = useState("");

  const [data, setData] = useState({
    page_name: window.location.pathname.split('/')[1],
    mobile: "",
    query: "",
    name: "",
    email: "",
  })

  window.addEventListener("itr_service", () => {
    setPrice(secureLocalStorage.getItem("itr_service_price").base_price);
  });

  const [ErrorEmail, setErrorEmail] = useState("");
  const [ErrorQuery, setErrorQuery] = useState("");
  const [ErrorName, setErrorName] = useState("");
  const [ErrorMobile, setErrorMobile] = useState("");
  const [errorColor, setErrorColor] = useState("white");
  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value })

    setErrorEmail("");
    setErrorName("");
    setErrorQuery("");
    setErrorMobile("");
    setErrorColor("white");

  }
  // console.log(data);


  const submitForm = (event) => {

    event.preventDefault()

    //console.log(data);
    function isValidSign(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    function isValidMobile(mobile) {
      return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
        mobile
      );
    }

    if (data.name === "") {
      // toast.error("Email Required");
      setErrorName("Name Field Can't Be Null");
      setErrorColor("red");

    } else if (data.email === "") {
      // toast.error("Email Required");
      setErrorEmail("Email Field Can't Be Null");
      setErrorColor("red");

    } else if (!isValidSign(data.email)) {
      setErrorEmail("Please type a valid email");
      setErrorColor("red");

    } else if (data.mobile === "") {
      setErrorMobile("Mobile Field Can't Be Null");
      setErrorColor("red");

    } else if (!isValidMobile(data.mobile)) {
      setErrorMobile("Please type a valid phone number");
      setErrorColor("red");

    }
    else if (data.query === "") {
      setErrorQuery("Query Field Can't Be Null");
      setErrorColor("red");

    }

    else {

      getContacts(data).then((resp) => {
        // console.log(resp)
        if (resp.success) {
          toast.success("Details Send Successfully");
          setData({
            page_name: window.location.pathname.split('/')[1],
            mobile: "",
            query: "",
            name: "",
            email: "",
          })
          setShow(true);
          setTimeout(function () {
            setShow(false);

          }, 2000);
        }

        else {
          toast.error(resp.message);
        }
        // console.log("success log");


      })
    }
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  return (
    <>
      <div
        className="enquiryContacts ItrChangeinput2"
        data-aos="fade-right"
        data-aos-delay="600"
      >
        <p className="incometaxquery2">File your Income Tax Return with</p>
        <p className="inrTEtx2">@ INR {price}/- only</p>

        <Form onSubmit={submitForm} className="itrquerypadding">
          <div class="input-group">
            <div class="input-group-prepend LoginICons3">
              <span class="input-group-text" id="">
                <i class="fa fa-user"></i>
              </span>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="NAME"
              onChange={(e) => handleChange(e, 'name')}
              value={data.name}
              className="form-control form_control2 mt-3"
            />
          </div>
          <span style={{ color: errorColor }}>
            {ErrorName}
          </span>

          <div class="input-group">
            <div class="input-group-prepend LoginICons3">
              <span class="input-group-text" id="">
                <i class="fa fa-envelope-o"></i>
              </span>
            </div>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleChange(e, 'email')}
              value={data.email}
              className="form-control form_control2 mt-3"
            />
          </div>
          <span style={{ color: errorColor }}>
            {ErrorEmail}
          </span>
          <div class="input-group">
            <div class="input-group-prepend LoginICons3">
              <span class="input-group-text" id="">
                <i class="fa fa-phone-square"></i>
              </span>
            </div>


            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Mobile Number"
              onChange={(e) => handleChange(e, 'mobile')}
              value={data.mobile}
              maxLength="10"
              className="form-control form_control2 mt-3"
            />
          </div>
          <span style={{ color: errorColor }}>
            {ErrorMobile}
          </span>
          <div class="input-group">
            <div class="input-group-prepend LoginICons3">
              <span class="input-group-text" id="">
                <i class="fa fa-file-text-o"></i>
              </span>
            </div>


            <input
              type="textarea"
              className="form-control form_control2 mt-3"
              placeholder="Query"
              id="query"
              name="query"
              rows="3"
              onChange={(e) => handleChange(e, 'query')}
              value={data.query}
            />
          </div>
          <span style={{ color: errorColor }}>
            {ErrorQuery}
          </span>
          <div className="text-left checkbox-login mt-3">
            <input
              type="checkbox"
              name="remamber"
              className="form-check-input"
            />
            <span className="modal_subtitle text-end px-2">
              Get Update on {""}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1AD03F" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg> Whatsapp

            </span>
          </div>
          <Button className="newEnquiryButton">
            <div class="loading" id="lodar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="buytext">Get Started</span>
          </Button>

        </Form>
      </div>

      <Modal
        show={show}
        id="success_tic"
        onHide={() => setShow(false)}
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
                <h3 className="mt-3">Your submission has submitted successfully</h3>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Enquiry2;
