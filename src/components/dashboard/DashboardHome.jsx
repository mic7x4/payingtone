import React from "react";
import SideNav from "./sideNav/SideNav";
import "./DashboardHome.css";
import SideContent from "./sidecontent/SideContent";
import { Switch, Route } from "react-router-dom";
import ManageInsurance from "./ManageInsurance/ManageInsurance";
import Mytransaction from "./transaction/Mytransaction";
import BankReports from "./BankReport/BankReports";
import PersonalDetail from "./Personaldetail/PersonalDetail";
import InsuranceReport from "./insurancereport/InsuranceReport";
import ProductReport from "./productReport/ProductReport";
import Myproducts from "./myproducts/Myproducts";
import MyInsurances from "./myInsurance/MyInsurances";
import Messaging from "./messaging/Messaging";
import InsuranceClaim from "./insuranceClaim/InsuranceClaim";
import Cart from "./cart/Cart";
import CollectiveCart from "./cart/CollectiveCart";
import Notification from "./cart/Notification";
import ConfirmCart from "./cart/ConfirmCart";
import ProductClaim from "./productClaim/ProductClaim";
import ChatwithUs from "./productClaim/ChatwithUs";
import ServiceClaim from "./serviceClaim/ServiceClaim";

function DashboardHome() {
  return (
    <>
      <div className="admin__container">
        <div className="admin__containerbg"></div>
        <SideNav />
        <Switch>
          <Route exact path="/dashboard" component={SideContent} />
          <Route exact path="/dashboard/manage" component={ManageInsurance} />
          <Route
            exact
            path="/dashboard/transaction"
            component={Mytransaction}
          />
          <Route exact path="/dashboard/reports" component={BankReports} />
          <Route exact path="/dashboard/profile" component={PersonalDetail} />
          <Route
            exact
            path="/dashboard/insurance"
            component={InsuranceReport}
          />
          <Route
            exact
            path="/dashboard/productreport"
            component={ProductReport}
          />
          <Route exact path="/dashboard/myproducts" component={Myproducts} />
          <Route exact path="/dashboard/myinsurance" component={MyInsurances} />
          <Route exact path="/dashboard/messaging" component={Messaging} />
          <Route
            exact
            path="/dashboard/insuranceClaim"
            component={InsuranceClaim}
          />
          <Route
            exact
            path="/dashboard/productClaim"
            component={ProductClaim}
          />
          <Route
            exact
            path="/dashboard/serviceClaim"
            component={ServiceClaim}
          />
          <Route
            exact
            path="/dashboard/chatwithus"
            component={ChatwithUs}
          />
          <Route exact path="/dashboard/cart" component={Cart} />
          <Route
            exact
            path="/dashboard/collective"
            component={CollectiveCart}
          />
          <Route
            exact
            path="/dashboard/notification"
            component={Notification}
          />
          <Route exact path="/dashboard/user/confirm" component={ConfirmCart} />
        </Switch>
      </div>
    </>
  );
}

export default DashboardHome;
