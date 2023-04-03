import "./App.css";
import React, { useEffect } from "react";
import "./Styles/Style.css"
import { Routes, Route } from "react-router-dom";
import Index from "./components/index";
import GstRegistration from "./components/common/GstRegistration";
import PrivacyPolicy from "./components/common/PrivacyPolicy";
import OrderDetails from "./components/common/OrderDetails";
import EcommerceBusinessTaxReturn from "./components/common/EcommerceBusinessTaxReturn";
import IncomeTaxreturn from "./components/common/IncomeTaxreturn";
import LongTermCapitalGans from "./components/common/LongTermCapitalGans";
import PanApplication from "./components/common/PanApplication";
import TrademarkRegistrationCompany from "./components/common/TrademarkRegistrationCompany";
import TrademarkRegistrationIndividual from "./components/common/TrademarkRegistrationIndividual";
import MsmeRegistration from "./components/common/MsmeRegistration";
import MsmeComplianceTradmarkRegistration from "./components/common/MsmeComplianceTradmarkRegistration";
import ImportExportCodeLicense from "./components/common/ImportExportCodeLicense";
import ProvidentFundRegistration from "./components/common/ProvidentFundRegistration";
import StartUpIndiaRegistration from "./components/common/StartUpIndiaRegistration";
import TanRegistration from "./components/common/TanRegistration";
import RocFilling from "./components/common/RocFilling";
import BusinessTaxReturnsCorporateEntities from "./components/common/BusinessTaxReturnsCorporateEntities";
import LiveNriTaxReturnFiling from "./components/common/LiveNriTaxReturnFiling";
import LivePresumptiveIncomeTaxFiling from "./components/common/LivePresumptiveIncomeTaxFiling";
import NgoRegistration from "./components/common/NgoRegistration";
import PartnershipFirmRegistration from "./components/common/PartnershipFirmRegistration";
import ProprietorshipFirmRegistration from "./components/common/ProprietorshipFirmRegistration";
import TaxFillingGainsCryptocurrencyBusinessPremium from "./components/common/TaxFillingGainsCryptocurrencyBusinessPremium";
import EsiRegistration from "./components/common/EsiRegistration";
import Fssai from "./components/common/Fssai";
import ShareCertificate from "./components/common/ShareCertificate";
import PvtLtdCompanyToPublicLtdCompany from "./components/common/PvtLtdCompanyToPublicLtdCompany";
import DirectorKyc from "./components/common/DirectorKyc";
import AppointmentOfAuditor from "./components/common/AppointmentOfAuditor";
import RemovalOfAutior from "./components/common/RemovalOfAutior";
import TdsReturnOtherThanSalary from "./components/common/TdsReturnOtherThanSalary";
import AskAnExpert from "./components/common/AskAnExpert";
import BusuinessItr from "./components/common/BusuinessItr";
import BookKeeping from "./components/common/BookKeeping";
import ResignationOfDirector from "./components/common/ResignationOfDirector";
import DigitalSignatureClass3 from "./components/common/DigitalSignatureClass3";
import CompanyNameRemoval from "./components/common/CompanyNameRemoval";
import AmendmentGoodsServicesGst from "./components/common/AmendmentGoodsServicesGst";
import ShopLicense from "./components/common/ShopLicense";
import TaxFilingSecuritiesTraders from "./components/common/TaxFilingSecuritiesTraders";
import FormDtp3 from "./components/common/FormDtp3";
import TdsReturnSaleOfProperty from "./components/common/TdsReturnSaleOfProperty";
import Form20A from "./components/common/Form20A";
import ResidentsForeignIncomeTaxReturns from "./components/common/ResidentsForeignIncomeTaxReturns";
import CapitalGainsTaxReliefSection89 from "./components/common/CapitalGainsTaxReliefSection89";
import Inc22A from "./components/common/Inc22A";
import TradmarkRenewalCompany from "./components/common/TradmarkRenewalCompany";
import RevisedIncomeTaxReturnFiling2 from "./components/common/RevisedIncomeTaxReturnFiling2";
import GoodsAndServiceGST from "./components/common/GoodsAndServiceGST";
import ChangeRegisteredOffice from "./components/common/ChangeRegisteredOffice";
import ChangesMemorandumAssociation from "./components/common/ChangesMemorandumAssociation";
import RevisedIncomeTaxReturnFiling from "./components/common/RevisedIncomeTaxReturnFiling";
import TradmarkObjectionManagement from "./components/common/TradmarkObjectionManagement";
import LiveIndividualTaxFiling from "./components/common/LiveIndividualTaxFiling";
import AppointADirector from "./components/common/AppointADirector";
import PanForNRI from "./components/common/PanForNRI";
import NRITaxReturn from "./components/common/NRITaxReturn";
import AdvanceTaxCalculation from "./components/common/AdvanceTaxCalculation";
import LiveFilingSalariedEmployee from "./components/common/LiveFilingSalariedEmployee";
import DigitalSignatureDgft from "./components/common/DigitalSignatureDgft";
import PartnershipFirmtoLLP from "./components/common/PartnershipFirmtoLLP";
import Section8NidhiCompliances from "./components/common/Section8NidhiCompliances";
import TdsReturnSalaryAndOtherPayment from "./components/common/TdsReturnSalaryAndOtherPayment";
import GST_E_Way_Bill from "./components/common/GST_E_Way_Bill";
import LetterUndertaking from "./components/common/LetterUndertaking";
import Cancellation_SurrenderGst from "./components/common/Cancellation_SurrenderGst";
import ProfessionalTax from "./components/common/ProfessionalTax";
import TrademarkRenewalIndividual from "./components/common/TrademarkRenewalIndividual";
import LtcgAdvisory from "./components/common/LtcgAdvisory";
import PrivateLimitedCompany from "./components/common/PrivateLimitedCompany";
import IndividualTaxFilingPlan from "./components/common/IndividualTaxFilingPlan";
import IncorporateSubsidiary from "./components/common/IncorporateSubsidiary";
import CryptocurrencyTaxationAdvisory from "./components/common/CryptocurrencyTaxationAdvisory";
import TaxFillingGainsCryptocurrencyIndividual from "./components/common/TaxFillingGainsCryptocurrencyIndividual";
import IncreaseAutorisedShareCapital from "./components/common/IncreaseAutorisedShareCapital";
import EsopRsu from "./components/common/EsopRsu";
import ResidentsForeignIncomeTax from "./components/common/ResidentsForeignIncomeTax";
import DigitalSignatureIndianClass3 from "./components/common/DigitalSignatureIndianClass3";
import LlpToPvtLtdCompanyInIndia from "./components/common/LlpToPvtLtdCompanyInIndia";
import IncorporateSubsidiaryForeign from "./components/common/IncorporateSubsidiaryForeign";
import TaxFilingSaleShares from "./components/common/TaxFilingSaleShares";
import LiveBusinessTaxReturns from "./components/common/LiveBusinessTaxReturns";
import TdsReturnSalaryPayment from "./components/common/TdsReturnSalaryPayment";
import TaxFilingTrandingForeignStocks from "./components/common/TaxFilingTrandingForeignStocks";
import DigitalSignatureNriClass3 from "./components/common/DigitalSignatureNriClass3";
import ChangeCompanyName from "./components/common/ChangeCompanyName";
import SalariedIndivual from "./components/common/SalariedIndivual";
import GSTR1 from "./components/common/GSTR1";
import GSTR3B from "./components/common/GSTR3B";
import GSTR9 from "./components/common/GSTR9";
import GSTR9C from "./components/common/GSTR9C";
import GSTR4 from "./components/common/GSTR4";
import TaxNoticeManagement from "./components/common/TaxNoticeManagement";
import PrivateToLLP from "./components/common/PrivateToLLP";
import PrivateToOPC from "./components/common/PrivateToOPC";
import PresumptiveIncomeTaxFiling from "./components/common/PresumptiveIncomeTaxFiling";
import LLP from "./components/common/LLP";
import OPC from "./components/common/OPC";
import TaxFillingCryptocurrencyTrading from "./components/common/TaxFillingCryptocurrencyTrading";
import Order from "./components/common/Order";
import IncomeTaxreturn_2 from "./components/common/IncomeTaxreturn_2";
import Blogdetails from "./components/common/Blogdetails";
import Blog from "./components/common/Blog";
import New from "./components/common/New";
import OrderSummary2 from "./components/common/OrderSummary2";

import AOS from "aos";
import "aos/dist/aos.css";
import UserInfo from "./components/common/UserInfo";
import Itr1 from "./components/common/Itr1";
import Itr2 from "./components/common/Itr2";
import Itr3 from "./components/common/Itr3";
import Itr4 from "./components/common/Itr4";
import Itr5 from "./components/common/Itr5";
import Contact from "./components/common/Contact";
import Refer from "./components/common/Refer";
import TermCondition from "./components/common/TermCondition";
import AboutUs from "./components/common/AboutUs";
import DisclaimerPolicy from "./components/common/DisclaimerPolicy";
import CancellationRefundPolicy from "./components/common/CancellationRefundPolicy";
import SecurityPolicy from "./components/common/SecurityPolicy";
import UnsubscribeNewsLetter from "./components/common/UnsubscribeNewsLetter";
import Support from "./components/common/Support";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import TaxationAdvisoryCryptocurrency from "./components/common/TaxationAdvisoryCryptocurrency";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });


  }, []);
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<Index />} />
        <Route path="/UnsubscribeNewsLetter/:token_no" element={<UnsubscribeNewsLetter />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/TaxationAdvisoryCryptocurrency" element={<TaxationAdvisoryCryptocurrency />} />
        <Route path="/GstRegistration" element={<GstRegistration />} />
        <Route path="/DisclaimerPolicy" element={<DisclaimerPolicy />} />
        <Route path="/CancellationRefundPolicy" element={<CancellationRefundPolicy />} />
        <Route path="/SecurityPolicy" element={<SecurityPolicy />} />
        <Route path="/OrderSummary2/:user_id" element={<OrderSummary2 />} />
        <Route path="/New" element={<New />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/TermCondition" element={<TermCondition />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blogdetails" element={<Blogdetails />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/IncomeTaxreturn_2" element={<IncomeTaxreturn_2 />} />
        <Route path="/Individual-Updated-Tax-Filing-Plan-having-Capital-gain-(ESOPS-and-RSU)-(ITR-U)" element={<LongTermCapitalGans />} />
        <Route path="/OrderDetails" element={<OrderDetails />} />
        <Route path="/PanApplication" element={<PanApplication />} />
        <Route path="/TrademarkRegistrationCompany" element={<TrademarkRegistrationCompany />} />
        <Route path="/TrademarkRegistrationIndividual" element={<TrademarkRegistrationIndividual />} />
        <Route path="/ImportExportCodeLicense" element={<ImportExportCodeLicense />} />
        <Route path="/ProvidentFundRegistration" element={<	ProvidentFundRegistration />} />
        <Route path="/MsmeComplianceTradmarkRegistration" element={<MsmeComplianceTradmarkRegistration />} />
        <Route path="/MsmeRegistration" element={<MsmeRegistration />} />
        <Route path="/StartUpIndiaRegistration" element={<StartUpIndiaRegistration />} />
        <Route path="/TanRegistration" element={<TanRegistration />} />
        <Route path="/RocFilling" element={<RocFilling />} />
        <Route path="/Business-Tax-Returns-for-Corporate-Entities" element={<BusinessTaxReturnsCorporateEntities />} />
        <Route path="/LiveNriTaxReturnFiling" element={<LiveNriTaxReturnFiling />} />
        <Route path="/LivePresumptiveIncomeTaxFiling" element={<LivePresumptiveIncomeTaxFiling />} />
        <Route path="/NgoRegistration" element={<NgoRegistration />} />
        <Route path="/ProprietorshipFirmRegistration" element={<ProprietorshipFirmRegistration />} />
        <Route path="/PartnershipFirmRegistration" element={<PartnershipFirmRegistration />} />
        <Route path="/TaxFillingGainsCryptocurrencyBusinessPremium" element={<TaxFillingGainsCryptocurrencyBusinessPremium />} />
        <Route path="/EsiRegistration" element={<EsiRegistration />} />
        <Route path="/Fssai" element={<Fssai />} />
        <Route path="/EcommerceBusinessTaxReturn" element={<EcommerceBusinessTaxReturn />} />
        <Route path="/ShareCertificate" element={<ShareCertificate />} />
        <Route path="/PvtLtdCompanyToPublicLtdCompany" element={<PvtLtdCompanyToPublicLtdCompany />} />
        <Route path="/DirectorKyc" element={<DirectorKyc />} />
        <Route path="/AppointmentOfAuditor" element={<AppointmentOfAuditor />} />
        <Route path="/RemovalOfAutior" element={<RemovalOfAutior />} />
        <Route path="/TdsReturnOtherThanSalary" element={<TdsReturnOtherThanSalary />} />
        <Route path="/AskAnExpert" element={<AskAnExpert />} />
        <Route path="/BusuinessItr" element={<BusuinessItr />} />
        <Route path="/BookKeeping" element={<BookKeeping />} />
        <Route path="/ResignationOfDirector" element={<ResignationOfDirector />} />
        <Route path="/DigitalSignatureClass3" element={<DigitalSignatureClass3 />} />
        <Route path="/CompanyNameRemoval" element={<CompanyNameRemoval />} />
        <Route path="/IncomeTaxreturn" element={<IncomeTaxreturn />} />
        <Route path="/AMENDMENT-OF-GOODS-AND-SERVICES-TAX-(GST)-REGISTRATION" element={<AmendmentGoodsServicesGst />} />
        <Route path="/ShopLicense" element={<ShopLicense />} />
        <Route path="/Tax-Filing-for-Securities-Traders" element={<TaxFilingSecuritiesTraders />} />
        <Route path="/FormDtp3" element={<FormDtp3 />} />
        <Route path="/Form20A" element={<Form20A />} />
        <Route path="/Residents-with-foreign-Income-Tax-Return-Filing" element={<ResidentsForeignIncomeTaxReturns />} />
        <Route path="/Individual-Tax-Filing-Plan-having-Capital-gain-(ESOPS-and-RSU)" element={<CapitalGainsTaxReliefSection89 />} />
        <Route path="/Inc22A" element={<Inc22A />} />
        <Route path="/TradmarkRenewalCompany" element={<TradmarkRenewalCompany />} />
        <Route path="/RevisedIncomeTaxReturnFiling2" element={<RevisedIncomeTaxReturnFiling2 />} />
        <Route path="/GOODS-AND-SERVICES-TAX-(GST)-REGISTRATION" element={<GoodsAndServiceGST />} />
        <Route path="/ChangeRegisteredOffice" element={<ChangeRegisteredOffice />} />
        <Route path="/ChangesMemorandumAssociation" element={<ChangesMemorandumAssociation />} />
        <Route path="/Presumptive-Freelancing-Income-Updated-ITR-Filing-(ITR-U)" element={<RevisedIncomeTaxReturnFiling />} />
        <Route path="/TradmarkObjectionManagement" element={<TradmarkObjectionManagement />} />
        <Route path="/LiveIndividualTaxFiling" element={<LiveIndividualTaxFiling />} />
        <Route path="/AppointADirector" element={<AppointADirector />} />
        <Route path="/PanForNRI" element={<PanForNRI />} />
        <Route path="/NRI-Individual-tax-Filing" element={<NRITaxReturn />} />
        <Route path="/Advance-Tax-Calculation" element={<AdvanceTaxCalculation />} />
        <Route path="/LiveFilingSalariedEmployee" element={<LiveFilingSalariedEmployee />} />
        <Route path="/DigitalSignatureDgft" element={<DigitalSignatureDgft />} />
        <Route path="/PartnershipFirmtoLLP" element={<PartnershipFirmtoLLP />} />
        <Route path="/Section8NidhiCompliances" element={<Section8NidhiCompliances />} />
        <Route path="/TdsReturnSalaryAndOtherPayment" element={<TdsReturnSalaryAndOtherPayment />} />
        <Route path="/GST-E-WAY-BILL-REGISTRATION-AND-ONE-E-WAY-BILL-GENERATION" element={<GST_E_Way_Bill />} />
        <Route path="/LETTER-OF-UNDERTAKING-(LUT-REGISTRATION)" element={<LetterUndertaking />} />
        <Route path="/CANCELLATION-OR-SURRENDER-OF-GST-REGISTRATION-(GSTR-10)" element={<Cancellation_SurrenderGst />} />
        <Route path="/ProfessionalTax" element={<ProfessionalTax />} />
        <Route path="/TrademarkRenewalIndividual" element={<TrademarkRenewalIndividual />} />
        <Route path="/Long-Term-Capital-Gains-(LTCG)-Filing-(sale-of-Immovable-Property)" element={<LtcgAdvisory />} />
        <Route path="/PRIVATE-LIMITED-COMPANY-(PLC)-ESTABLISHMENT" element={<PrivateLimitedCompany />} />
        <Route path="/Salaried-Individual-Return-for-More-than-50-lacs" element={<IndividualTaxFilingPlan />} />
        <Route path="/IncorporateSubsidiary" element={<IncorporateSubsidiary />} />
        <Route path="/CryptocurrencyTaxationAdvisory" element={<CryptocurrencyTaxationAdvisory />} />
        <Route path="/Individual-Tax-Filing-for-Gains-from-Cryptocurrency" element={<TaxFillingGainsCryptocurrencyIndividual />} />
        <Route path="/IncreaseAutorisedShareCapital" element={<IncreaseAutorisedShareCapital />} />
        <Route path="/EsopRsu" element={<EsopRsu />} />
        <Route path="/ResidentsForeignIncomeTax" element={<ResidentsForeignIncomeTax />} />
        <Route path="/Digital-Signature-for-Indian-Citizens-Class-3" element={<DigitalSignatureIndianClass3 />} />
        <Route path="/LlpToPvtLtdCompanyInIndia" element={<LlpToPvtLtdCompanyInIndia />} />
        <Route path="/IncorporateSubsidiaryForeign" element={<IncorporateSubsidiaryForeign />} />
        <Route path="/Tax-Return-Filing-for-Sale-of-Shares-Mutual-Funds" element={<TaxFilingSaleShares />} />
        <Route path="/LiveBusinessTaxReturns" element={<LiveBusinessTaxReturns />} />
        <Route path="/TDS-Return-on-Salary-Payment-(Form-24Q)" element={<TdsReturnSalaryPayment />} />
        <Route path="/Tax-Return-Filing-for-trading-in-Foreign-Stocks" element={<TaxFilingTrandingForeignStocks />} />
        <Route path="/DigitalSignatureNriClass3" element={<DigitalSignatureNriClass3 />} />
        <Route path="/ChangeCompanyName" element={<ChangeCompanyName />} />
        <Route path="/Salaried-Individual-Return-(less-than-50-lacs)" element={<SalariedIndivual />} />
        <Route path="/GST-Return-Filing-GSTR-1-3B" element={<GSTR1 />} />
        <Route path="/GSTR3B" element={<GSTR3B />} />
        <Route path="/GSTR9" element={<GSTR9 />} />
        <Route path="/GSTR9C" element={<GSTR9C />} />
        <Route path="/GSTR4" element={<GSTR4 />} />
        <Route path="/Tax-Notice-Management" element={<TaxNoticeManagement />} />
        <Route path="/PrivateToLLP" element={<PrivateToLLP />} />
        <Route path="/TdsReturnSaleOfProperty" element={<TdsReturnSaleOfProperty />} />
        <Route path="/PrivateToOPC" element={<PrivateToOPC />} />
        <Route path="/Presumptive-Freelancing-Income" element={<PresumptiveIncomeTaxFiling />} />
        <Route path="/LLP" element={<LLP />} />
        <Route path="/OPC" element={<OPC />} />
        <Route path="/Tax-Filing-For-Gains-From-Cryptocurrency-and-Trading" element={<TaxFillingCryptocurrencyTrading />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Itr1" element={<Itr1 />} />
        <Route path="/Itr2" element={<Itr2 />} />
        <Route path="/Itr3" element={<Itr3 />} />
        <Route path="/Itr4" element={<Itr4 />} />
        <Route path="/Itr5" element={<Itr5 />} />
        <Route path="/:referCode" element={<Refer />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
