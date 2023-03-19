import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { news } from "../common/services/newsLetter";
import BarLoader from 'react-bar-loader';

const NewsLetter = () => {
  const [newsletter,setNewsletter]=useState("");
  const [newsletterText,setNewsletterText]=useState("Subscribe");
  const [data, setData] = useState({
    email: "",
  });
  const [errorNewsletter, setErrorNewsletter] = useState("");
  const [buttonShow, setButtonShow] = useState(false);
  const [bar, setBar] = useState("0");
  const [errorColor, setErrorColor] = useState("white");
  const [border, setBorder] = useState("");

  const handleChange = (event, property) => {
    //dynamic setting the values
    setData({ ...data, [property]: event.target.value });
    setErrorNewsletter("");
    setErrorColor("white");
    setBorder("");
  };

  const submitForm = (event) => {
    event.preventDefault();

    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    if (data.email === "") {
      // toast.error("Email Required");
      setErrorNewsletter("Email Field Can't Be Null");
      setErrorColor("red");
      setBorder("red");
    } else if (!isValidEmail(data.email)) {
      setErrorNewsletter("Entered Email Is Not Valid");
      setErrorColor("red");
      setBorder("red");
    } else {
      try {
        setButtonShow(true);
        setNewsletter("20px")
        setNewsletterText("")
        news(data).then((resp) => {
        
          if (resp.success) {
           
            setData({ email: "" });
            setShow(true);
            setTimeout(() => {
              setShow(false);
              setButtonShow(false);
              setNewsletter("0px")
              setNewsletterText("Subscribe")
             
            }, 3000);
          } else {
            toast.error(resp.message);
            setButtonShow(false);
            setNewsletter("0px")
            setNewsletterText("Subscribe")

          }
          // console.log("success log");
        });
      } catch (error) {
        setButtonShow(false);
        setBar("0");
      }
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <BarLoader color="#1D8BF1" className="barL" height={bar} style={{ width: 350 }} />
      <div className="input-group newleterinputgroup"
      >
        <input
          type="text"
          className="footer-input"
          placeholder="Your Email"
          id="mail"
          onChange={(e) => handleChange(e, "email")}
          value={data.email}
          name="email"
          disabled={buttonShow}
        />
        <div className="input-group-append newsletterappend">
          <button
            type="submit"
            onClick={submitForm}
            className="newsletterButtonbg btn text-white"
            disabled={buttonShow}
          >
            <div class="loading" id="newsletter" style={{height:newsletter}}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="newsletterText">
          {newsletterText}
            </span>
          </button>
        </div>
      </div>
      <span style={{ color: errorColor }}>{errorNewsletter}</span>


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
                <h3 className="mt-3">Email Subscribed Successfully</h3>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewsLetter;
