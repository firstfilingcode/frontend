import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink, useLocation } from "react-router-dom";
import HeaderLeftLogo1 from "../common/Images/HeaderLeftLogo1.png";
import { myAxios } from "../common/services/Helper";
import invoiceEnd from "../common/Images/invoiceEnd.png";
import INVOICEtext from "../common/Images/INVOICEtext.png";
import rupee1 from "../common/Images/rupee1.jpeg";

import { pdfFromReact } from "generate-pdf-from-react-html";

const OrderDetails = () => {
  let location = useLocation();
  const [orderD, setOrderD] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  let formData = new FormData();
  const getOrderInfo = () => {
    formData.append("order_id", location.state.order_id);
    myAxios({
      method: "post",
      url: "https://accounts.rusoft.in/api/orderDetail",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //  alert(JSON.stringify(response.data.data));
        setOrderD(response.data.data);
      })
      .catch(function (response) {
        //handle error
        // console.log(response);
      });
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 1000,
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
    getOrderInfo();
  }, []);
  return (
    <>
      <Header />

      {/* <div className="container" id="divToPrint">
       <div className="row">
          <div className="col-md-11 order-list">
            <ul>
              <li >
                <NavLink to="/Order" >
                  <span>Your Orders</span>
                  <i className="fa fa-angle-right order-arrow-right"></i>
                  </NavLink>
               </li>
              <li>
                <span>{"View Invoice" }</span>
              </li>
            </ul>
          </div>
          <div className="col-md-1">
          <NavLink to="/Order">
          <button  style = {{marginTop:"-9px"}} className=" btn btn-dark">
                     Back
                    </button>
                            </NavLink>
           </div>
        </div>
        <div className="row ">
          <div className="col-md-12">         
            <div className="card mt-4 mb-4 shadow-lg">
              <div className="card-body ">
                <div className="row" >
                  <div className="col-md-4  mt-2">
                    <h6>
                      <b>
                        <u>Order Id</u>: {orderD.order_no}
                      </b>
                    </h6>
                    <h5 className="mt-4">
                      <b>
                        <u style={{}}>Plan Amount</u>
                      </b>
                    </h5>
                    <p className="mt-4">
                      <b>
                        <u className="text-muted">
                          Goods and Services Tax @18%
                        </u>
                      </b>
                    </p>
                  </div>
                  <div className="col-md-4"></div>
                  <div className="col-md-4 text-right">
                    <h5>
                      <b>
                          <button className="btn btn-primary" onClick={() =>pdfFromReact("#divToPrint", "My-file", "p", true, false)}>
                            Download Invoice</button>
                      </b>
                    </h5>
                    <h5 className="mt-4 ">
                      <b>
                        <u><img src={rupee1} alt="rupee" />{orderD.amount}</u>
                      </b>
                    </h5>
                    <h5 className="mt-4">
                      <b>
                        <u><img src={rupee1} alt="rupee" />{(orderD.total_amount - orderD.amount).toFixed(2)}</u>
                      </b>
                    </h5>
                  </div>
                  <hr />
                </div>

                <div className="row" style={{display : ""}}>
                  <div className="col-md-4">
                    <p>
                      
                      <b>
                        <u>Total</u>
                      </b>
                    </p>
                  </div>
                  <div className="col-md-4"></div>
                  <div className="col-md-4 text-right  ">
                    <h5>
                      <b>
                        <u><img src={rupee1} alt="rupee" />{orderD.total_amount}</u>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-12 text-muted">
                    <p>
                      <b>
                        <u>
                          By clicking on Proceed to Payment, you have accepted
                          our <a href="#">Terms & Conditions</a> and{" "}
                          <a href="#"> Refund Policy</a>
                        </u>
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div> */}
      <div className="container">
        <div className="col-md-12 text-right">
          <button
            className="btn btn-primary invoicebtn"
            onClick={() =>
              pdfFromReact("#divToPrint", "My-file", "p", true, false)
            }
          >
            Download Invoice
          </button>
        </div>
      </div>

      <div id="divToPrint" className="invoiceFLex">
        <section className="invoiceContainer">
          <section className="invoicefixWidth">
            <table className="invoiceTable">
              <thead>
                <tr>
                  <th colSpan={4} className="NormalInvoiceTax">
                    <img src={HeaderLeftLogo1} alt="logo" width={"135px"} />
                  </th>
                  <th colSpan={4}>
                    <img
                      src={INVOICEtext}
                      alt="INVOICEtext"
                      className="InvoiceText"
                    />
                  </th>
                  <th colSpan={4} className="NormalInvoiceTax">
                    Date: 02 June, 2023
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan={12}
                    className="NormalInvoiceTax
                            textalignCenter"
                    style={{ paddingTop: "15px" }}
                  >
                    No. 000001
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <div>
                      <b className="NormalInvoiceTax">Billed to:</b>
                      <br />
                      <span className="NormalInvoiceTax">Thynk Unlimited</span>
                      <br />
                      <span className="NormalInvoiceTax">
                        23 Anywhere St., Any City, ST 12345
                      </span>
                      <br />
                      <span className="NormalInvoiceTax">
                        www.reallygreatsite.com
                      </span>
                    </div>
                  </td>
                  <td colSpan={4} />
                  <td colSpan={4}>
                    <b className="NormalInvoiceTax">From: </b>
                    <br />
                    <span className="NormalInvoiceTax">
                      MAAVALAN CONSULTANCY PRIVATE LIMITED
                    </span>
                    <br />
                    <span className="NormalInvoiceTax">
                      B-302, Jaipur, JAIPUR, 302004,JANTA COLONYRajasthan
                    </span>
                    <br />
                    <span className="NormalInvoiceTax">
                      Email: shubham.jsco@gmail.com
                    </span>
                    <br />
                    <span className="NormalInvoiceTax">
                      Mobile: +91 9549815565
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="invoiceTable2">
              <thead>
                <tr>
                  <th className="NormalInvoiceTax leftBorderNone">
                    <b>Sr No.</b>
                  </th>
                  <th className="NormalInvoiceTax">
                    <b>Description</b>
                  </th>
                  <th className="NormalInvoiceTax">
                    <b>SAC CODE</b>
                  </th>
                  <th className="NormalInvoiceTax">
                    <b>Qty</b>
                  </th>
                  <th className="NormalInvoiceTax">
                    <b>Price</b>
                  </th>
                  <th className="NormalInvoiceTax">
                    <b>Disc.</b>
                  </th>
                  <th className="NormalInvoiceTax">
                    <b>Taxable value</b>
                  </th>
                  <th className="NormalInvoiceTax">
                    <b>Non Taxable value</b>
                  </th>
                  <th className="NormalInvoiceTax">
                    <b>CGST</b>
                  </th>
                  <th className="NormalInvoiceTax">
                    <b>SGST</b>
                  </th>
                  <th className="NormalInvoiceTax">
                    <b>IGST</b>
                  </th>
                  <th className="NormalInvoiceTax">
                    <b>Final Amount</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="NormalInvoiceTax leftBorderNone">1</td>
                  <td className="NormalInvoiceTax">ITR1</td>
                  <td className="NormalInvoiceTax">998231</td>
                  <td className="NormalInvoiceTax">1</td>
                  <td className="NormalInvoiceTax">500</td>
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax">$500</td>
                </tr>
                <tr>
                  <td className="NormalInvoiceTax leftBorderNone">2</td>
                  <td className="NormalInvoiceTax">ITR2</td>
                  <td className="NormalInvoiceTax">998231</td>
                  <td className="NormalInvoiceTax">2</td>
                  <td className="NormalInvoiceTax">700</td>
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax">$90</td>
                </tr>
                <tr>
                  <td className="NormalInvoiceTax leftBorderNone">3</td>
                  <td className="NormalInvoiceTax">ITR3</td>
                  <td className="NormalInvoiceTax">998231</td>
                  <td className="NormalInvoiceTax">3</td>
                  <td className="NormalInvoiceTax">1000</td>
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax">$165</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td colspan="2" className="NormalInvoiceTax">
                    Total amount
                  </td>
                  <td className="NormalInvoiceTax">$755</td>
                </tr>
              </tfoot>
            </table>

            <section className="mt-3">
              <div className="paymentText">
                <b>Payment Method : </b> Cash
              </div>
              <div className="paymentText">
                <b>Note:</b>Thank you for choosing us!
              </div>
            </section>
            <img src={invoiceEnd} alt="invoiceEnd" width={"100%"} />
          </section>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default OrderDetails;
