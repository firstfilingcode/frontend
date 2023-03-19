import React, { useState, useEffect } from 'react';
import $ from "jquery";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { BASE_URL } from "../common/services/Helper";

const Faq = () => {

  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();

    $("#myList .span").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  var lastClick = "";
  const handleClick = (e) => {

    var className = document.querySelectorAll('.ItemHeading')
    className.forEach(myFunction);
    function myFunction(item, index) {
      className[index].classList.remove("accordionGradient")
    }
     if (lastClick === e.target.getAttribute('data-id')) {
      lastClick = "";
    }
    else {
      lastClick = e.target.getAttribute('data-id');
      document.getElementById(e.target.getAttribute('data-id')).classList.add("accordionGradient")
    }

  }


  const [faq, setFaq] = useState([])
  const [pageName, setPageName] = useState(window.location.pathname.split('/')[1])

  if (pageName == "") {
    setPageName("Home")
  }

  localStorage.setItem('currentURL', pageName);
  // console.log("page Name is : " + pageName);

  useEffect(() => {
    const getFaq = () => {
      fetch(BASE_URL + '/getFaq/' + pageName)
        .then(res => res.json())
        .then(json => {
          setFaq(json.data)
        });
    }
    getFaq();

  }, [])

  if (faq.length !== 0) {
    return (
      <>

        <div className="container">
          <div
            className="col-md-12 mt-3 gstman-text  text-center"
            data-aos="fade-top"
            data-aos-delay="500"
          >
            <h3>
              <div className="slash_1 web-color">
                <span className='faqSpan'>FAQ..! Need Help</span>
              </div>
            </h3>
          </div>
          <div
            className="row padding-bottom-acodian"
            data-aos="fade-top"
            data-aos-delay="500"
          >
            <div className="col-md-12" data-aos="fade-bottom" data-aos-delay="500">
              <div className="form-group gst-input">
                <input
                  id="myInput"
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  name="search"
                />
              </div>
            </div>
            <div className="col-md-12 myList">
              <Accordion allowZeroExpanded>
                {
                  faq.map((item, index) => {
                    return <>
                      <AccordionItem className="acodian-gape" id="myList" data-key={index} onClick={handleClick}>
                        <AccordionItemHeading
                          className="ItemHeading span"
                          id={`0` + index + `0` + (index + 1)}
                        >
                          <AccordionItemButton>
                            <span className="circle1">₹</span>
                            <span className="accodianSpan span" data-id={`0` + index + `0` + (index + 1)}>
                              {item.question}
                            </span>
                            <div className="accodian-plus">
                              <span className="plus">
                                <i className="fa fa-plus"></i>
                              </span>
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel onClick={(e)=>e.stopPropagation()}>
                          <p className="accodian_answere" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </>
                  })
                }
              </Accordion>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Faq;
