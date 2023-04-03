import React, { useState, useEffect } from "react";
import wallet from "../common/Images/wallet.png";
import Faq from "../FAQ/Faq";
import { myAxios, BASE_URL } from "../common/services/Helper";
import { ReactSession } from 'react-client-session';
import moment from 'moment';
const Wallet = () => {
    let formData = new FormData();
    const [walletAmount, setWalletAmount] = useState(0);

    const [walletDetails, setWalletDetails] = useState([]);
    useEffect(() => {
        formData.append("user_id", ReactSession.get('user_id'));
        myAxios({
            method: "post",
            url: BASE_URL + "/getWallet",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                setWalletAmount(response.data.data[0].amount);
                setWalletDetails(response.data.data2)

                // alert(JSON.stringify(response.data.data2));
            })
            .catch(function (response) {

            });
    }, []);
    return (
        <>
            <div className="container">
                <div className="row paddingbottomwallet">
                    <div className="col-md-6">
                        <div className="card walletCard">
                            <div className="card-body">
                                <p>Current Credit Tokens</p>
                                <div className="displayflex">
                                    <span className="first_circle">
                                        <span className="second_circle">
                                            ₹
                                        </span>
                                    </span>
                                    <span className="paymentCount">
                                        {walletAmount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img src={wallet} alt="wallet" className="walletpng" />
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12 paddingtopBottom3">
                        <p className="ReferralSpan">Transition History</p>

                        <section className="mobileTabelResponsive">
                            <table className="table table-bordered walletTable">
                                <thead>
                                    <tr>
                                        <th>Sr no.</th>
                                        <th>Item</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {walletDetails.map((item, index) => {

                                        return (

                                            <tr>
                                                <td className="leftBorderNone">{index + 1}</td>
                                                <td>{ item.transaction_no === "FirstLogin" ? "Registration Bonus" :  item.refer_by === "..." ? "Service Purchased" : item.th_heading + " " + item.refer_by} </td>
                                                <td><b>₹ {item.amount}</b></td>
                                                <td>{item.status === "1" ? "Credited" : "Debited"}</td>
                                                <td>{moment(item.created_at).format('hh:mm')}   </td>
                                                <td className="rightBorderNone"> {moment(item.created_at).format('DD-MMM-Y')}</td>

                                            </tr>
                                        )
                                    })}

                                    {walletDetails.length > 0 ? "" : <tr>
                                        <td colSpan={12} className="text-center rightBorderNone leftBorderNone">No Data Found</td>

                                    </tr>}
                                </tbody>
                            </table>
                        </section>
                    </div>

                    <div className="col-md-12 paddingtopBottom3 text-center">
                        <button className="reedeemtoken btn">Redeem your  Tokens</button>
                    </div>

                    <div className="col-md-12 paddingtopBottom3">
                        <p className="ReferralSpan">Firstfiling Money Wallet</p>
                        <p className="Referralp">Under Goods And Services Tax (GST), businesses whose turnover exceeds the threshold limitof Rs.40 lakh or Rs.20 lakh or Rs.10 lakh as the case may be, must register as a normal taxable person. It is called GST registration. For certain businesses, registration under GST is mandatory.
                        </p> <br />
                        <p className="Referralp"> GST registration usually takes between 2-6 working days. Team Clear can help you obtain GST registration faster in 3 easy steps.</p>
                    </div>

                    <div className="col-md-12 paddingtopBottom3">
                        <p className="creditTokentext">Credit Token</p>

                        <button className="btn walletbtn2">1 Credit Token = ₹ 1</button>
                    </div>

                    <div className="col-md-12 paddingtopBottom3">
                        <p className="walletpp">Under Goods And Services Tax (GST), businesses whose turnover exceeds the threshold limitof Rs.40 lakh or Rs.20 lakh or Rs.10 lakh as the
                            case may be, must register as a normal taxable person. It is called GST registration.</p>

                        <p className="walletpp"> For certain businesses, registration under GST is mandatory. If the organization carries on business without registering under GST, it is an offence under GST and heavy penalties will apply.</p>

                        <p className="walletpp"> GST registration usually takes between 2-6 working days. Team Clear can help you obtain GST registration faster in 3 easy steps.</p>
                    </div>
                </div>
            </div>

            <Faq />
        </>
    )
}

export default Wallet