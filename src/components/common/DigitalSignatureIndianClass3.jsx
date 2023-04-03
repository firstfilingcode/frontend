import React, { useState } from "react";
import ServiceType2 from "../Services/ServiceType2";
import digital3 from "../common/Images/digital3.png";
import digital2 from "../common/Images/digital2.png";
import ProcessBackArrow from "../common/Images/ProcessBackArrow.png";
import DigitalSign from "../common/Images/DigitalSign.png";
import DigitalSign2 from "../common/Images/DigitalSign2.png";
import checkcircle1 from "../common/Images/checkCircle.svg";
import ServiceName from "../Services/NameOfService";
import secureLocalStorage from "react-secure-storage";
import { NavLink } from "react-router-dom";
import Faq from "../FAQ/Faq";
import Enquiry2 from "../Enquiry/enquiry2";

function DigitalSignatureIndianClass3() {
  const [buyNow, setbuyNow] = useState("");
  window.addEventListener("itr_service", () => {
    setbuyNow(
      secureLocalStorage.getItem("itr_service_price").base_price_redirect
    );
  });
  return (
    <>
      <div className="container">
        <ServiceName />
        <div className="row">
          <div className="col-md-6">
            <span className=" itrPageHeading">
              Digital Signature - Class 3
            </span>
            <div className="fixwidthPremtive">
              <p className="itrPageDescription">
                Get Class 3 Digital Signature Certificate (DSC) along with e-token without any hassles for validating online transactions
              </p>
            </div>

            {buyNow !== "" ? (
              <NavLink to={"/OrderSummary2/" + buyNow}>
                <button className="fileNowBtn btn">Buy Now</button>
              </NavLink>
            ) : (
              ""
            )}
            <section className="BackgroundDigital">
            </section>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <Enquiry2 />
          </div>
        </div>
      </div>
      <section>
        <section className="sevicesBack10">
          <ServiceType2 />
        </section>
      </section>

      <div className="container mt-3">
        <div className="row eldFlexrow">
          <div className="col-md-6 itrnomatter">
            <p className="itrnomatterp">About this plan</p>

            <p className="partnershiptollp_p">
              Class III Digital Signature is high level encryption used for tenders, etc.
            </p>

            <p className="Boldpartnershiptollp_p">Services Included:</p>

            <div class="partnershiptollpli">
              <ul>
                <li>Digital Signature Certificate (1 No.)</li>
                <li>Request for Class 3 DSC having 2 years validity</li>
                <li>Purchase of DSC USB E-token</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 itrnomatter">

            <img
              src={digital2}
              alt="digital2"
              width={"100%"}
            />

          </div>

          <div className="col-md-12 mt-3">
            <p className="titleOfFirstFilling">
              Documents Required
            </p>
            <div className="row itrflex">
              <div className="col-md-3">
                <div class="partnershiptollpli">
                  <ul>
                    <li>PAN card  </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div class="partnershiptollpli">
                  <ul>
                    <li>Address proof</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div class="partnershiptollpli">
                  <ul>
                    <li>Passport Size Photo</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row paddingtopBottom">

          <div className="col-md-5">
            <section className="text-center">
              <img
                src={digital3}
                alt="digital3"
                width={"100%"}
                className="mobileImg"
              />
            </section>
          </div>

          <div className="col-md-7">
            <p className="itrnomatterp">
              Who Should Buy
            </p>

            <div class="partnershiptollpli">
              <ul>
                <li>"Obtaining a Digital Signature is mandatory in following cases:</li>
                <li>Company filings with MCA21( Ministry of Corporate Affairs)</li>
                <li>Company filings with MCA21( Ministry of Corporate Affairs)</li>
                <li>Company filings with MCA21( Ministry of Corporate Affairs)</li>
                <li>Company filings with MCA21( Ministry of Corporate Affairs)</li>
                <li>Company filings with MCA21( Ministry of Corporate Affairs)</li>
                <li>Company filings with MCA21( Ministry of Corporate Affairs)</li>
                <li>Company filings with MCA21( Ministry of Corporate Affairs)</li>
                <li>Company filings with MCA21( Ministry of Corporate Affairs)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <p className="titleOfFirstFilling">
            Procedure for Conversion of a Partnership Firm into LLP
          </p>

          <p className="partnershiptollp_p text-center">This plan is equipped with end-to-end online fulfillment via our expert. No hassle, 100% Digital.</p>

          <p className="Boldpartnershiptollp_p text-center">7 Days Estimate</p>
        </div>

        <div className="row panRow">
          <div className="col-md-1" />
          <div className="col-md-2">
            <div className="pan-back">
              <div className="digitalBack">
                <span className="pan-count">1</span>
                <p className="panbox-text">
                  Obtain Digital <br /> Signature
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="digitalBack2">
                <span className="pan-count">2</span>
                <p className="panbox-text">
                  Reserve Your <br /> Company Name
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="digitalBack3">
                <span className="pan-count">3</span>
                <p className="panbox-text">
                  Submission of <br /> MOA & AOA
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="digitalBack4">
                <span className="pan-count">4</span>
                <p className="panbox-text">
                  Get Incorporation <br /> Certificate
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="pan-back">
              <div className="digitalBack5">
                <span className="pan-count">5</span>
                <p className="panbox-text">
                  Open Company <br /> Bank Account
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>



        <div className="row">
          <div className="col-md-12 mt-3">
            <p className="titleOfFirstFilling">
              What is a digital signature?
            </p>

            <p className="partnershiptollp_p">
              A digital signature is a mathematical technique used to validate the authenticity and integrity of a digital document, message or software. It's the digital equivalent of a handwritten signature or stamped seal, but it offers far more inherent security. A digital signature is intended to solve the problem of tampering and impersonation in digital communications.
            </p>
            <p className="partnershiptollp_p">
              Digital signatures can provide evidence of origin, identity and status of electronic documents, transactions or digital messages. Signers can also use them to acknowledge informed consent. In many countries, including the U.S., digital signatures are considered legally binding in the same way as traditional handwritten document signatures.
            </p>

          </div>

          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              The role of digital signatures
            </p>

            <p className="partnershiptollp_p">
              In many regions, including parts of North America, the European Union, and APAC, digital signatures are considered legally binding and hold the same value as traditional document signatures.
            </p>
            <p className="partnershiptollp_p">
              In addition to digital document signing, they are also used for financial transactions, email service providers, and software distribution, areas where the authenticity and integrity of digital communications are crucial.
            </p>
            <p className="partnershiptollp_p">
              Industry-standard technology called public key infrastructure ensures a digital signature's data authenticity and integrity.
            </p>

          </div>
        </div>

        <div className="row backgroundrowPresumtive mb-3">
          <p className="titleOfFirstFilling">
            How do digital signatures work?
          </p>

          <div className="col-md-6">
            <p className="partnershiptollp_p">Digital signatures are based on public key cryptography,
              also known as asymmetric cryptography. Using a public key algorithm --
              such as Rivest-Shamir-Adleman, or RSA -- two keys are generated, creating
              a mathematically linked pair of keys: one private and one public.
            </p>
            <p className="partnershiptollp_p">
              Digital signatures work through public
              key cryptography's two mutually authenticating cryptographic keys. For
              encryption and decryption, the person who creates the digital signature uses a
              private key to encrypt signature-related data. The only way to decrypt that data is
              with the signer's public key.
            </p>
            <p className="partnershiptollp_p">
              If the recipient can't open the document with the signer's public key,
              that indicates there's a problem with the document or the signature.
              This is how digital signatures are authenticated.
            </p>
          </div>
          <div className="col-md-6">
            <p className="partnershiptollp_p">
              Digital certificates, also called public key certificates,
              are used to verify that the public key belongs to the issuer.
              Digital certificates contain the public key, information about its owner,
              expiration dates and the digital signature of the certificate's issuer. Digital
              certificates are issued by trusted third-party certificate authorities (CAs),
              such as DocuSign or GlobalSign, for example. The party sending the document
              and the person signing it must agree to use a given CA.
            </p>
            <p className="partnershiptollp_p">
              Digital signature technology requires all parties trust that the person
              who creates the signature image has kept the private key secret.
              If someone else has access to the private signing key, that party could create
              fraudulent digital signatures in the name of the private key holder.
            </p>
          </div>

          <div className="col-md-12">
            <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              width="100%"
              height={"583.88px"}
            ></iframe>
          </div>
        </div>

        <div className="row">
          <p className="titleOfFirstFilling">What are the benefits of digital signatures?</p>

          <div className="col-md-6">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Security:</p>
            </div>

            <p className="fearItrp">
              Simply put, if a freelancer rents a property for work, the rent
              amounts are tax-deductible. So, if you rent a desk, co-working
              space, or office space, you can deduct said amount from your
              income. If you work from your rented home, you can claim a part of
              the rent amount as deductions.
            </p>


            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Cost savings:</p>
            </div>

            <p className="fearItrp">
              Organizations can go paperless and save money previously spent on the physical
              resources, time, personnel and office space used to manage and transport documents.
            </p>


            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Time savings:</p>
            </div>

            <p className="fearItrp">
              Digital signatures simplify the time-consuming processes of physical document
              signing, storage and exchange, enabling businesses to quickly access and sign documents.
            </p>

            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Time savings:</p>
            </div>

            <p className="fearItrp">
              Digital signatures simplify the time-consuming processes of physical document
              signing, storage and exchange, enabling businesses to quickly access and sign documents.
            </p>
          </div>

          <div className="col-md-6">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Security:</p>
            </div>

            <p className="fearItrp">
              Simply put, if a freelancer rents a property for work, the rent
              amounts are tax-deductible. So, if you rent a desk, co-working
              space, or office space, you can deduct said amount from your
              income. If you work from your rented home, you can claim a part of
              the rent amount as deductions.
            </p>


            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Cost savings:</p>
            </div>

            <p className="fearItrp">
              Organizations can go paperless and save money previously spent on the physical
              resources, time, personnel and office space used to manage and transport documents.
            </p>

            <section className="backgroundpan">
              <div className="itrliNEw">
                <img src={checkcircle1} alt="checkcircle1" />
                <p>Time savings:</p>
              </div>

              <p className="fearItrp">
                Digital signatures simplify the time-consuming processes of physical document
                signing, storage and exchange, enabling businesses to quickly access and sign documents.
              </p>
            </section>

          </div>

          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              How do you create a digital signature?
            </p>
            <p className="partnershiptollp_p">
              To create a digital signature, signing software -- such as an email program -- is used to provide a one-way hash of the electronic data to be signed.
            </p>
            <p className="partnershiptollp_p">
              A hash is a fixed-length string of letters and numbers generated by an algorithm.
              The digital signature creator's private key is used to encrypt the hash.
              The encrypted hash -- along with other information, such as the hashing algorithm --
              is the digital signature.
            </p>
            <p className="partnershiptollp_p">
              The reason for encrypting the hash instead of the entire message or document is because
              a hash function can convert an arbitrary input into a fixed-length value,
              which is usually much shorter. This saves time, as hashing is much faster than signing.
            </p>
            <p className="partnershiptollp_p">
              The value of a hash is unique to the hashed data. Any change in the data --
              even a modification to a single character -- results in a different value.
              This attribute enables others to use the signer's public key to decrypt the hash to
              validate the integrity of the data.
            </p>
            <p className="partnershiptollp_p">
              If the decrypted hash matches a second computed hash of the same data,
              it proves that the data hasn't changed since it was signed. But, if the two
              hashes don't match, the data has either been tampered with in some way and is
              compromised or the signature was created with a private key that doesn't
              correspond to the public key presented by the signer. This signals an
              issue with authentication.
            </p>
          </div>
        </div>


        <div className="col-md-12 text-center">
          <p className="titleOfFirstFilling">
            The Digital Signature Process
          </p>
        </div>
        <div className="row g-0 flexArrow">
          <div className="col-md-2">
            <section className="ProcessBack">
              <p className="ProcessBackText">Signed Document / Data</p>
            </section>
          </div>
          <div className="col-md-2">
            <p className="arrowText_p">HASH Algorithm</p>
            <section className="paddingProcess">
              <img src={ProcessBackArrow} alt="ProcessBack" width={"100%"} />
            </section>
          </div>
          <div className="col-md-2">
            <section className="RectangleBack">
              <p className="ProcessBackText">HASH</p>
            </section>
          </div>
          <div className="col-md-3">
            <p className="arrowText_p">Private Key Encryption</p>
            <section className="paddingProcess">
              <img src={ProcessBackArrow} alt="ProcessBack" width={"100%"} />
            </section>
          </div>
          <div className="col-md-2">
            <section className="ProcessBack">
              <p className="ProcessBackText">Digitally Signed Document</p>
            </section>
          </div>
        </div>


        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">Classes and types of digital signatures</p>

            <p className="partnershiptollp_p text-center">There are three different classes of digital signature certificates (DSCs) as follows:</p>
          </div>

          <div className="col-md-6">
            <section className="text-center">
              <img src={DigitalSign} alt="DigitalSign" className="mobileImg" />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>

          </div>

          <div className="col-md-6">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Class-1:</p>
            </div>

            <p className="fearItrp">
              This type of DSC can't be used for legal business documents, as they're
              validated based only on an email ID and username. Class 1 signatures provide
              a basic level of security and are used in environments with a low risk of
              data compromise.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Class-2:</p>
            </div>

            <p className="fearItrp">
              This type of DSC can't be used for legal business documents, as they're
              validated based only on an email ID and username. Class 1 signatures provide
              a basic level of security and are used in environments with a low risk of
              data compromise.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Class-3:</p>
            </div>

            <p className="fearItrp">
              This type of DSC can't be used for legal business documents, as they're
              validated based only on an email ID and username. Class 1 signatures provide
              a basic level of security and are used in environments with a low risk of
              data compromise.
            </p>
          </div>

          <div className="col-md-12">
            <p className="titleOfFirstFilling">Uses for digital signatures</p>
            <p className="partnershiptollp_p text-center">
              Digital signature tools and services are commonly
              used in contract-heavy industries,
              including the following:</p>
          </div>

          <div className="col-md-6">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Government:</p>
            </div>

            <p className="fearItrp">
              The U.S. Government Publishing Office publishes electronic
              versions of budgets, public and private laws, and congressional
              bills with digital signatures. Governments worldwide use digital
              signatures for processing tax returns, verifying business-to-government
              transactions, ratifying laws and managing contracts. Most government entities
              must adhere to strict laws, regulations and standards when using digital signatures.
              Many governments and corporations also use smart cards to identify their citizens and
              employees. These are physical cards with an embedded chip that contains a digital
              signature that provides the cardholder access to an institution's systems or physical
              buildings.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Manufacturing:</p>
            </div>

            <p className="fearItrp">
              The U.S. Government Publishing Office publishes electronic
              versions of budgets, public and private laws, and congressional
              bills with digital signatures. Governments worldwide use digital
              signatures for processing tax returns, verifying business-to-government
              transactions, ratifying laws and managing contracts.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Cryptocurrencies:</p>
            </div>

            <p className="fearItrp">
              The U.S. Government Publishing Office publishes electronic
              versions of budgets, public and private laws, and congressional
              bills with digital signatures.
            </p>
          </div>
          <div className="col-md-6">
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Government:</p>
            </div>

            <p className="fearItrp">
              The U.S. Government Publishing Office publishes electronic
              versions of budgets, public and private laws, and congressional
              bills with digital signatures. Governments worldwide use digital
              signatures for processing tax returns, verifying business-to-government
              transactions, ratifying laws and managing contracts. Most government entities
              must adhere to strict laws, regulations and standards when using digital signatures.
              Many governments and corporations also use smart cards to identify their citizens and
              employees. These are physical cards with an embedded chip that contains a digital
              signature that provides the cardholder access to an institution's systems or physical
              buildings.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Manufacturing:</p>
            </div>

            <p className="fearItrp">
              The U.S. Government Publishing Office publishes electronic
              versions of budgets, public and private laws, and congressional
              bills with digital signatures. Governments worldwide use digital
              signatures for processing tax returns, verifying business-to-government
              transactions, ratifying laws and managing contracts.
            </p>
            <div className="itrliNEw">
              <img src={checkcircle1} alt="checkcircle1" />
              <p>Cryptocurrencies:</p>
            </div>

            <p className="fearItrp">
              The U.S. Government Publishing Office publishes electronic
              versions of budgets, public and private laws, and congressional
              bills with digital signatures.
            </p>
          </div>

          <div className="col-md-12">
            <p className="titleOfFirstFilling">Why use PKI or PGP with digital signatures?</p>
          </div>

          <div className="col-md-5">
            <p className="partnershiptollp_p">
              Digital signatures use the PKI standard and the Pretty Good Privacy (PGP)
              encryption program, as both reduce potential security issues that come with
              transmitting public keys. They validate that the sender's public key belongs
              to that individual and verify the sender's identity.
            </p>
            <p className="partnershiptollp_p">
              PKI is a framework for services that generate, distribute, control and account for
              public key certificates. PGP is a variation of the PKI standard that uses symmetric key
              and public key cryptography, but it differs in how it binds public keys to user identities
              . PKI uses CAs to validate and bind a user identity with a digital certificate, whereas
              PGP uses a web of trust. Users of PGP choose whom they trust and which identities get vetted
              . PKI users defer to trusted CAs.
            </p>
            <p className="partnershiptollp_p">
              The effectiveness of a digital signature's security is dependent on the strength
              of the private key security. Without PKI or PGP, it's impossible to prove someone's
              identity or revoke a compromised key, and it's easier
              for malicious actors to impersonate people.
            </p>
          </div>

          <div className="col-md-6">
            <section className="text-center">
              <img src={DigitalSign2} alt="DigitalSign2" className="mobileImg" />
              <button className="btn itrFIleButton">
                Schedule Free Consultation
              </button>
            </section>

          </div>

        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="titleOfFirstFilling">
              Key difference between a digital signature and an electronic signature
            </p>
          </div>
          <section className="responsiveTable">
            <table class="table table-bordered BusinessTable">
              <thead>
                <tr className="theadRow">
                  <th>digital signature</th>
                  <th>electronic signature</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tbodyRow1">
                  <td>
                    Uses an algorithm and cryptographic process to validate a
                    sequence of data to verify the origin of a signature and authenticity
                    of a document.
                  </td>
                  <td>Uses electronic sounds, symbols or processes attached to or associated
                    with a contract or record to verify the origin of a signature.  </td>
                </tr>
                <tr className="tbodyRow2">
                  <td>
                    Must be issued by a certificate authority.
                  </td>
                  <td>Can be any electronically applied signature. </td>
                </tr>
                <tr className="tbodyRow1">
                  <td>
                    Must be issued by a certificate authority.
                  </td>
                  <td>Can be any electronically applied signature. </td>
                </tr>
                <tr className="tbodyRow2">
                  <td>
                    Must be issued by a certificate authority.
                  </td>
                  <td>Can be any electronically applied signature. </td>
                </tr>
              </tbody>
            </table>
          </section>

          <div className="col-md-12 slash_1 what_income_1 mb-4">
            <span>Due Dates for Income Tax Return Filing</span>
          </div>
        </div>
      </div>

      <div id="calendar"></div>
      <div className="container">
        <div className="row backgroundPicItr">
          <div className="col-md-12 mb-3 what_income_1 slash_1">
            <span>Why First Filing?</span>
          </div>

          <div className="col-md-12">
            <p className="partnershiptollp_p">
              First Filing is an AI - driven technology platform which provides
              legal & financial services through its team of professionals.
            </p>

            <div class="gstlist_10 gstlist_31 incomelispace">
              <ul>
                <li>Best Financial Consulting Firm</li>
                <li>
                  First Filing - the best professional service firm out there.
                  We offer a range of government registration and taxation
                  services. People all around Asia think we're pretty amazing.
                </li>
                <li>99.9% Client Satisfaction</li>

                <li>
                  We work hard to make sure our clients are happy. Our team is
                  always trying to improve the service we offer. We're here to
                  help you and make sure you're satisfied.
                </li>
                <li>Excellent Advisory Services</li>
                <li>
                  We have some of the most expert professionals working with us.
                  That means we offer the best consultancy services in the
                  industry.
                </li>
              </ul>
            </div>
            <p className="Boldpartnershiptollp_p text-center">Why Choose First Filling?</p>
            <p className="partnershiptollp_p">
              At First Filing, we use technology to make your life easier. We're
              always available to respond to your calls and emails quickly.
              Plus, we have tons of automation and customer empowerment tools
              that make it super easy to get in touch with us.
            </p>
            <p className="partnershiptollp_p">
              We offer corporate services that take the stress out of
              registering your establishment. Our team will educate you and
              suggest the best approach for your project after doing thorough
              research and inspection.
            </p>
            <p className="partnershiptollp_p">
              And if you need global certification and approval, we've got you
              covered. We have an extensive network around the world that can
              get you what you need without any hassle.
            </p>
          </div>
        </div>
      </div>

      <Faq />
    </>
  );
}
export default DigitalSignatureIndianClass3;
