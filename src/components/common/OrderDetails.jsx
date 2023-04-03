import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import HeaderLeftLogo1 from "../common/Images/HeaderLeftLogo1.png";
import { BASE_URL, myAxios } from "../common/services/Helper";
import invoiceEnd from "../common/Images/invoiceEnd.png";
import INVOICEtext from "../common/Images/INVOICEtext.png";
import moment from "moment";

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
      url: BASE_URL + "/orderDetail",
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

  const [setting, setSetting] = useState([]);
  const getSetting = async () => {
    await fetch(BASE_URL + "/getSetting")
      .then((res) => res.json())
      .then((json) => {
        // alert(JSON.stringify(json.data));
        setSetting(json.data);
      })
      .catch();
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
    getOrderInfo();
    getSetting();
  }, []);
  return (
    <>

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
              pdfFromReact("#divToPrint", "Invoice", "p", true, false)
            }
          >
            Download Invoice
          </button>
        </div>
      </div>

      <div id="divToPrint" className="invoiceFLex mb-3">
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
                    <b>Date:</b> {moment(orderD.created_at).format("DD-MM-Y")}
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
                    <b> No.</b> {orderD.order_no}
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <div>
                      <b className="NormalInvoiceTax">Billed to:</b>
                      <br />
                      <span className="NormalInvoiceTax">{orderD.address}</span>
                     
                    </div>
                  </td>
                  <td colSpan={4} />
                  <td colSpan={4}>
                    <span className="NormalInvoiceTax"><b>From: </b></span>
                    <span className="NormalInvoiceTax">
                      {setting.address}
                    </span>
                    <br />
                    <span className="NormalInvoiceTax">
                      <b>Email:</b> {setting.email}
                    </span>
                    <br />
                    <span className="NormalInvoiceTax">
                      <b>Mobile:</b> +91 {setting.phone}
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
                  <td className="NormalInvoiceTax">{orderD.service_name}</td>
                  <td className="NormalInvoiceTax"></td>
                  <td className="NormalInvoiceTax">1</td>
                  <td className="NormalInvoiceTax">{orderD.amount}</td>
                  <td className="NormalInvoiceTax">{orderD.coupon_discount}</td>
                  <td className="NormalInvoiceTax" >{orderD.amount}</td>
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax" >9%</td>
                  <td className="NormalInvoiceTax" >9%</td>
                  <td className="NormalInvoiceTax" />
                  <td className="NormalInvoiceTax">{orderD.total_amount}</td>
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
                  <td className="NormalInvoiceTax"> {orderD.total_amount}</td>
                </tr>
              </tfoot>
            </table>

            <section className="mt-3">
              <div className="paymentText">
                <b>Payment Method : </b> {orderD.payment_mode}
              </div>
              <div className="paymentText">
                <b>Note:</b>Thank you for choosing us!
              </div>
            </section>
            <img src={invoiceEnd} alt="invoiceEnd" width={"100%"} />
          </section>
        </section>
      </div>
    </>
  );
};

export default OrderDetails;
