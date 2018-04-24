/**
 * 创建人： 张博
 * 时间： 2017-07-07 下午5:01
 * 功能描述：布局路由设置
 */
import React from "react";
import {Route, Switch} from "react-router";
import AppLayout from "./appLayout/components/AppLayout";
import NoMatch from "./stateCode/components/NoMatch";
import Home from "../routes/home/components/Home";
import Wallet from "../routes/wallet/components/Wallet";
import InOutMoney from "../routes/wallet/components/InOutMoney";
import InOutMoneySuccess from "../routes/wallet/components/InOutMoneySuccess";
import WalletTransferListView from "../routes/wallet/components/WalletTransferListView";
import CheckStoSaveOrUpdateForm from "../routes/sto/components/CheckStoSaveOrUpdateForm";
import CheckStoList from "../routes/sto/components/CheckStoList";
import ResetPassword from "../routes/sys/components/ResetPassword";
import Loan from "./la/components/Loan";
/*肖亚男开始*/
import PurCreate from "../routes/pur/components/PurCreate";
// /*贷款申请创建页面*/
import LoanCreate from "../routes/la/components/LoanCreate";
// /*借款申请银行审批页面*/
import LoanBankAudit from "../routes/la/components/laEdit/LoanBankAudit";
///*借款人确认页面*/
import LoanBorrowerConfirm from "./la/components/laEdit/LoanBorrowerConfirm";
// /*借款申请待放款页面*/
import LoanForLending from "../routes/la/components/laEdit/LoanForLending";
// /*借款申请取消借款页面*/
import LoanCancel from "../routes/la/components/laEdit/LoanCancel";
// /*借款申请已放款页面*/
import LoanBeenLending from "../routes/la/components/laEdit/LoanBeenLending";
// /*供应商审核页面*/
import PurVendorAudit from "../routes/pur/components/purEdit/PurVendorAudit";
import PurEntrustedPayment from "../routes/pur/components/purEdit/PurEntrustedPayment";
// /*已完成页面*/
import PurComplete from "../routes/pur/components/purEdit/PurComplete";
/*采购申请门店确认页面*/
import PurStoreConfirm from "../routes/pur/components/purEdit/PurStoreConfirm";
import PurCancel from "../routes/pur/components/purEdit/PurCancel";
// /*借款申请偿还页面*/
import LrPayoff from "../routes/lr/components/lrEdit/LrPayoff";
import LrBeenPayoff from "../routes/lr/components/lrEdit/LrBeenPayoff";
import PurDropShipping from "../routes/pur/components/purEdit/PurDropShipping";
/*找回密码页面*/
import RetrievePassword from "../routes/login/components/RetrievePassword";
// /*肖亚男结束*/
// /* 王强开始*/
import SIMaintainBaseInfo from "./po/components/SIMaintainBaseInfo";
import SCMaintainBaseInfo from "./po/components/SCMaintainBaseInfo";
import BBMaintainBaseInfo from "./po/components/BBMaintainBaseInfo";
import BorrowerMaintainBaseInfo from "./po/components/BorrowerMaintainBaseInfo";
import ReceivedPayment from "../routes/sto/components/ReceivedPayment";
import InitialStoreBalance from "../routes/sto/components/InitialStoreBalance";
import EditStoreBalance from "../routes/sto/components/EditStoreBalance";
import StoreBalance from "../routes/sto/components/StoreBalance";
import SellOutSto from "../routes/sto/components/SellOutSto";
import SellOutStoList from "../routes/sto/components/SellOutStoList";
import StockOutMonitorDetail from "../routes/sto/components/StockOutMonitorDetail";
import StockOutMonitor from "../routes/sto/components/StockOutMonitor";
import CheckSellOutSto from "../routes/sto/components/CheckSellOutSto";
import PayMoney from "../routes/sto/components/PayMoney";
import StoreAdjustment from "../routes/sto/components/StoreAdjustment";
import EditStoreAdjustment from "../routes/sto/components/EditStoreAdjustment";
import StoreAdjustmentDetail from "../routes/sto/components/StoreAdjustmentDetail";
import SellOut from "../routes/sto/components/SellOut";
import Adjustment from "../routes/sto/components/Adjustment";
import ManagementTable from "../routes/sto/components/ManagementTable";
import RiskManagementDetail from "../routes/sto/components/RiskManagementDetail";
import Received from "../routes/sto/components/Received";
import AdjustmentDetail from "../routes/sto/components/AdjustmentDetail";
// /* 王强结束*/
import CheckSto from "./sto/components/CheckSto";
import LoanRepayment from "../routes/lr/components/LoanRepayment";
import ViewSto from "../routes/sto/components/ViewSto";
import HavePur from "../routes/pur/components/Pur";
/*判断session失效，相关引用*/
import MyCenter from "../routes/sys/components/MyCenter";
import CreQueryListView from "./credit/components/CreQueryListView";
import CreInApproval from "../routes/credit/components/CreInApproval";

export default class AppLayoutRoutesDEV extends React.Component {

    render() {

        console.log("===========AppLayoutRoutes 组件渲染===========");

        // const logged = sessionStorage.getItem('logged'); //从本地缓存中取值

        return (
            <AppLayout>
                <Switch>
                    {/*张博开始*/}
                    {/*主页*/}
                    <Route path="/appLayout/home" component={Home}/>
                    {/*钱包*/}
                    <Route path="/appLayout/wallet" component={Wallet}/>
                    {/*自有资金转入转出*/}
                    <Route path="/appLayout/inOutMoney/:inOutType" component={InOutMoney}/>
                    {/*资金转入转出提示*/}
                    <Route path="/appLayout/inOutMoneySuccess/:inOutType" component={InOutMoneySuccess}/>
                    {/*钱包交易明细*/}
                    <Route path="/appLayout/walletTransferListView/:fundType" component={WalletTransferListView}/>
                    {/*库存盘点*/}
                    <Route path="/appLayout/CheckSto" component={CheckSto}/>
                    {/*修改或保存盘点的form表单*/}
                    <Route path="/appLayout/checkStoSaveOrUpdateForm" component={CheckStoSaveOrUpdateForm}/>
                    {/*库存盘点列表*/}
                    <Route path="/appLayout/checkStoList" component={CheckStoList}/>
                    {/*库存查询*/}
                    <Route path="/appLayout/viewSto" component={ViewSto}/>
                    {/*重置密码*/}
                    <Route path="/appLayout/resetPassword/:passwordType" component={ResetPassword}/>
                    {/*个人中心*/}
                    <Route path="/appLayout/myCenter" component={MyCenter}/>
                    {/*授信查询*/}
                    <Route path="/appLayout/creQueryListView" component={CreQueryListView}/>
                    {/*授信申请*/}
                    <Route path="/appLayout/creInApproval/:status/:id/:handle" component={CreInApproval}/>
                    {/*张博结束*/}
                    {/*/!*肖亚男开始*!/*/}
                    {/*借款申请列表页面*/}
                    <Route path="/appLayout/haveLoan" component={Loan}/>
                    {/*/!*采购申请列表页面*!/*/}
                    <Route path="/appLayout/havePur" component={HavePur}/>
                    {/*借款偿还列表页面*/}
                    <Route path="/appLayout/loanRepayment" component={LoanRepayment}/>
                    {/*/!*借款申请创建页面*!/*/}
                    <Route path="/appLayout/loanCreate" component={LoanCreate}/>
                    {/*/!*借款申请银行审批页面*!/*/}
                    <Route path="/appLayout/loanBankAudit/:id" component={LoanBankAudit}/>
                    {/*/!*借款人确认页面*!/*/}
                    <Route path="/appLayout/loanBorrowerConfirm/:id" component={LoanBorrowerConfirm}/>
                    {/*/!*借款申请待放款页面*!/*/}
                    <Route path="/appLayout/loanForLending/:id" component={LoanForLending}/>
                    {/*/!*借款申请取消借款页面*!/*/}
                    <Route path="/appLayout/loanCancel/:id" component={LoanCancel}/>
                    {/*/!*借款申请已放款页面*!/*/}
                    <Route path="/appLayout/loanBeenLending/:id" component={LoanBeenLending}/>

                    {/*/!*创建采购申请*!/*/}
                    <Route path="/appLayout/purCreate" component={PurCreate}/>

                    {/*/!*供应商审核页面*!/*/}
                    <Route path="/appLayout/purVendorAudit/:id" component={PurVendorAudit}/>
                    {/*/!*门店确认页面*!/*/}
                    <Route path="/appLayout/purStoreConfirm/:id" component={PurStoreConfirm}/>
                    <Route path="/appLayout/purEntrustedPayment/:id" component={PurEntrustedPayment}/>
                    {/*/!*供应商待发货*!/*/}
                    <Route path="/appLayout/purDropShipping/:id" component={PurDropShipping}/>
                    {/*/!*已完成页面*!/*/}
                    <Route path="/appLayout/purComplete/:id" component={PurComplete}/>
                    {/*/!*门店取消借款申请页面*!/*/}
                    <Route path="/appLayout/purCancel/:id" component={PurCancel}/>

                    {/*/!*借款申请偿还页面*!/*/}
                    <Route path="/appLayout/lrPayoff/:id" component={LrPayoff}/>
                    <Route path="/appLayout/lrBeenPayoff/:id" component={LrBeenPayoff}/>
                    {/*找回密码跳转页面*/}
                    <Route path="/appLayout/retrievePassword" component={RetrievePassword}/>
                    {/*/!*肖亚男结束*!/*/}
                    {/*/!*王强开始*!/*/}
                    <Route path="/appLayout/sIMaintainBaseInfo" component={SIMaintainBaseInfo}/>
                    <Route path="/appLayout/bBMaintainBaseInfo" component={BBMaintainBaseInfo}/>
                    <Route path="/appLayout/sCMaintainBaseInfo" component={SCMaintainBaseInfo}/>
                    <Route path="/appLayout/borrowerMaintainBaseInfo" component={BorrowerMaintainBaseInfo}/>
                    <Route path="/appLayout/receivedPayment/" component={ReceivedPayment}/>
                    <Route path="/appLayout/initialStoreBalance/" component={InitialStoreBalance}/>
                    <Route path="/appLayout/editStoreBalance/" component={EditStoreBalance}/>
                    <Route path="/appLayout/sellOutStoList/" component={SellOutStoList}/>
                    <Route path="/appLayout/checkSellOutSto/" component={CheckSellOutSto}/>
                    <Route path="/appLayout/payMoney/:storeId" component={PayMoney}/>
                    <Route path="/appLayout/storeAdjustment/" component={StoreAdjustment}/>
                    <Route path="/appLayout/editStoreAdjustment/" component={EditStoreAdjustment}/>
                    <Route path="/appLayout/storeAdjustmentDetail/:storeId" component={StoreAdjustmentDetail}/>
                    <Route path="/appLayout/stockOutMonitorDetail/:storeId" component={StockOutMonitorDetail}/>
                    <Route path="/appLayout/stockOutMonitor/" component={StockOutMonitor}/>
                    <Route path="/appLayout/sellOut/" component={SellOut}/>
                    <Route path="/appLayout/storeBalance/" component={StoreBalance}/>
                    <Route path="/appLayout/adjustment/" component={Adjustment}/>
                    <Route path="/appLayout/managementTable/" component={ManagementTable}/>
                    <Route path="/appLayout/riskManagementDetail/:borrowerId" component={RiskManagementDetail}/>
                    <Route path="/appLayout/received/" component={Received}/>
                    <Route path="/appLayout/adjustmentDetail/" component={AdjustmentDetail}/>
                    {/*/!*王强结束*!/*/}
                    <Route path="/appLayout/sellOutSto" component={SellOutSto}/>
                    <Route component={NoMatch}/>
                </Switch>
            </AppLayout>
        );
    }
}