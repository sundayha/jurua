/**
 * 创建人： 张博
 * 时间： 2017-07-07 下午5:01
 * 功能描述：布局路由设置
 */
import React from "react";
import {Route, Switch} from "react-router";
import AppLayout from "./appLayout/components/AppLayout";
import NoMatch from "bundle-loader?lazy&name=NoMatchALR!./stateCode/components/NoMatch";
import Home from "bundle-loader?lazy&name=Home!../routes/home/components/Home";
import Wallet from "bundle-loader?lazy&name=Wallet!../routes/wallet/components/Wallet";
import InOutMoney from "bundle-loader?lazy&name=InOutMoney!../routes/wallet/components/InOutMoney";
import InOutMoneySuccess from "bundle-loader?lazy&name=InOutMoneySuccess!../routes/wallet/components/InOutMoneySuccess";
import WalletTransferListView from "bundle-loader?lazy&name=WalletTransferListView!../routes/wallet/components/WalletTransferListView";
import CheckStoSaveOrUpdateForm from "bundle-loader?lazy&name=CheckStoSaveOrUpdateForm!../routes/sto/components/CheckStoSaveOrUpdateForm";
import CheckStoList from "bundle-loader?lazy&name=CheckStoList!../routes/sto/components/CheckStoList";
import ResetPassword from "bundle-loader?lazy&name=ResetPassword!../routes/sys/components/ResetPassword";
import Loan from "bundle-loader?lazy&name=Loan!./la/components/Loan";
/*肖亚男开始*/
import PurCreate from "bundle-loader?lazy&name=PurCreate!../routes/pur/components/PurCreate";
// /*贷款申请创建页面*/
import LoanCreate from "bundle-loader?lazy&name=LoanCreate!../routes/la/components/LoanCreate";
// /*借款申请银行审批页面*/
import LoanBankAudit from "bundle-loader?lazy&name=LoanBankAudit!../routes/la/components/laEdit/LoanBankAudit";
///*借款人确认页面*/
import LoanBorrowerConfirm from "bundle-loader?lazy&name=LoanBorrowerConfirm!./la/components/laEdit/LoanBorrowerConfirm";
// /*借款申请待放款页面*/
import LoanForLending from "bundle-loader?lazy&name=LoanForLending!../routes/la/components/laEdit/LoanForLending";
// /*借款申请取消借款页面*/
import LoanCancel from "bundle-loader?lazy&name=LoanCancel!../routes/la/components/laEdit/LoanCancel";
// /*借款申请已放款页面*/
import LoanBeenLending from "bundle-loader?lazy&name=LoanBeenLending!../routes/la/components/laEdit/LoanBeenLending";
// /*供应商审核页面*/
import PurVendorAudit from "bundle-loader?lazy&name=PurVendorAudit!../routes/pur/components/purEdit/PurVendorAudit";
// /*已完成页面*/
import PurComplete from "bundle-loader?lazy&name=PurComplete!../routes/pur/components/purEdit/PurComplete";
import PurEntrustedPayment from "bundle-loader?lazy&name=PurEntrustedPayment!../routes/pur/components/purEdit/PurEntrustedPayment";
/*采购申请门店确认页面*/
import PurStoreConfirm from "bundle-loader?lazy&name=PurStoreConfirm!../routes/pur/components/purEdit/PurStoreConfirm";
import PurCancel from "bundle-loader?lazy&name=PurCancel!../routes/pur/components/purEdit/PurCancel";
// /*借款申请偿还页面*/
import LrPayoff from "bundle-loader?lazy&name=LrPayoff!../routes/lr/components/lrEdit/LrPayoff";
import LrBeenPayoff from "bundle-loader?lazy&name=LrBeenPayoff!../routes/lr/components/lrEdit/LrBeenPayoff";
import PurDropShipping from "bundle-loader?lazy&name=PurDropShipping!../routes/pur/components/purEdit/PurDropShipping";
import RetrievePassword from "bundle-loader?lazy&name=RetrievePassword!../routes/login/components/RetrievePassword";
// /*肖亚男结束*/
// /* 王强开始*/
import SIMaintainBaseInfo from "bundle-loader?lazy&name=SIMaintainBaseInfo!./po/components/SIMaintainBaseInfo";
import SCMaintainBaseInfo from "bundle-loader?lazy&name=SCMaintainBaseInfo!./po/components/SCMaintainBaseInfo";
import BBMaintainBaseInfo from "bundle-loader?lazy&name=BBMaintainBaseInfo!./po/components/BBMaintainBaseInfo";
import BorrowerMaintainBaseInfo from "bundle-loader?lazy&name=BorrowerMaintainBaseInfo!./po/components/BorrowerMaintainBaseInfo";
import ReceivedPayment from "bundle-loader?lazy&name=ReceivedPayment!../routes/sto/components/ReceivedPayment";
import InitialStoreBalance from "bundle-loader?lazy&name=InitialStoreBalance!../routes/sto/components/InitialStoreBalance";
import EditStoreBalance from "bundle-loader?lazy&name=EditStoreBalance!../routes/sto/components/EditStoreBalance";
import StoreBalance from "bundle-loader?lazy&name=StoreBalance!../routes/sto/components/StoreBalance";
import SellOutSto from "bundle-loader?lazy&name=SellOutSto!../routes/sto/components/SellOutSto";
import SellOutStoList from "bundle-loader?lazy&name=SellOutStoList!../routes/sto/components/SellOutStoList";
import StockOutMonitorDetail from "bundle-loader?lazy&name=StockOutMonitorDetail!../routes/sto/components/StockOutMonitorDetail";
import StockOutMonitor from "bundle-loader?lazy&name=StockOutMonitor!../routes/sto/components/StockOutMonitor";
import CheckSellOutSto from "bundle-loader?lazy&name=CheckSellOutSto!../routes/sto/components/CheckSellOutSto";
import ManagementTable from "bundle-loader?lazy&name=CheckSellOutSto!../routes/sto/components/ManagementTable";
import RiskManagementDetail from "bundle-loader?lazy&name=CheckSellOutSto!../routes/sto/components/RiskManagementDetail";
// import PayMoney from "bundle-loader?lazy&name=PayMoney!../routes/sto/components/PayMoney";
import PayMoney from "../routes/sto/components/PayMoney";
import StoreAdjustment from "bundle-loader?lazy&name=StoreAdjustment!../routes/sto/components/StoreAdjustment";
import EditStoreAdjustment from "bundle-loader?lazy&name=EditStoreAdjustment!../routes/sto/components/EditStoreAdjustment";
import StoreAdjustmentDetail from "bundle-loader?lazy&name=StoreAdjustmentDetail!../routes/sto/components/StoreAdjustmentDetail";
import SellOut from "bundle-loader?lazy&name=SellOut!../routes/sto/components/SellOut";
import Adjustment from "bundle-loader?lazy&name=Adjustment!../routes/sto/components/Adjustment";
import Received from "bundle-loader?lazy&name=Received!../routes/sto/components/Received";
import AdjustmentDetail from "bundle-loader?lazy&name=AdjustmentDetail!../routes/sto/components/AdjustmentDetail";
// /* 王强结束*/
import CheckSto from "bundle-loader?lazy&name=CheckSto!./sto/components/CheckSto";
import LoanRepayment from "bundle-loader?lazy&name=LoanRepayment!../routes/lr/components/LoanRepayment";
import ViewSto from "bundle-loader?lazy&name=ViewSto!../routes/sto/components/ViewSto";
import HavePur from "bundle-loader?lazy&name=HavePur!../routes/pur/components/Pur";
import MyCenter from "bundle-loader?lazy&name=MyCenter!../routes/sys/components/MyCenter";
/*判断session失效，相关引用*/
import {createComponent} from "../components/router/RouterTrick";
import CreQueryListView from "bundle-loader?lazy&name=CreQueryListView!../routes/credit/components/CreQueryListView";
import CreInApproval from "bundle-loader?lazy&name=CreInApproval!../routes/credit/components/CreInApproval";

export default class AppLayoutRoutesPROD extends React.Component {

    render() {

        console.log("===========AppLayoutRoutes 组件渲染===========");

        // const logged = sessionStorage.getItem('logged'); //从本地缓存中取值
        return (
            <AppLayout>
                <Switch>
                    {/*张博开始*/}
                    {/*主页*/}
                    <Route path="/appLayout/home" component={createComponent(Home)}/>
                    {/*钱包*/}
                    <Route path="/appLayout/wallet" component={createComponent(Wallet)}/>
                    {/*自有资金转入转出*/}
                    <Route path="/appLayout/inOutMoney/:inOutType" component={createComponent(InOutMoney)}/>
                    {/*资金转入转出提示*/}
                    <Route path="/appLayout/inOutMoneySuccess/:inOutType"
                           component={createComponent(InOutMoneySuccess)}/>
                    {/*钱包交易明细*/}
                    <Route path="/appLayout/walletTransferListView/:fundType"
                           component={createComponent(WalletTransferListView)}/>
                    {/*库存盘点*/}
                    <Route path="/appLayout/CheckSto" component={createComponent(CheckSto)}/>
                    {/*修改或保存盘点的form表单*/}
                    <Route path="/appLayout/checkStoSaveOrUpdateForm"
                           component={createComponent(CheckStoSaveOrUpdateForm)}/>
                    {/*库存盘点列表*/}
                    <Route path="/appLayout/checkStoList" component={createComponent(CheckStoList)}/>
                    {/*库存查询*/}
                    <Route path="/appLayout/viewSto" component={createComponent(ViewSto)}/>
                    {/*重置密码*/}
                    <Route path="/appLayout/resetPassword/:passwordType" component={createComponent(ResetPassword)}/>
                    {/*个人中心*/}
                    <Route path="/appLayout/myCenter" component={createComponent(MyCenter)}/>
                    {/*授信查询*/}
                    <Route path="/appLayout/creQueryListView" component={createComponent(CreQueryListView)}/>
                    {/*授信申请*/}
                    <Route path="/appLayout/creInApproval/:status/:id/:handle"
                           component={createComponent(CreInApproval)}/>
                    {/*张博结束*/}
                    {/*/!*肖亚男开始*!/*/}
                    {/*借款申请列表页面*/}
                    <Route path="/appLayout/haveLoan" component={createComponent(Loan)}/>
                    {/*/!*采购申请列表页面*!/*/}
                    <Route path="/appLayout/havePur" component={createComponent(HavePur)}/>
                    {/*借款偿还列表页面*/}
                    <Route path="/appLayout/loanRepayment" component={createComponent(LoanRepayment)}/>
                    {/*/!*借款申请创建页面*!/*/}
                    <Route path="/appLayout/loanCreate" component={createComponent(LoanCreate)}/>
                    {/*/!*借款申请银行审批页面*!/*/}
                    <Route path="/appLayout/loanBankAudit/:id" component={createComponent(LoanBankAudit)}/>
                    {/*/!*借款人确认页面*!/*/}
                    <Route path="/appLayout/loanBorrowerConfirm/:id" component={createComponent(LoanBorrowerConfirm)}/>
                    {/*/!*借款申请待放款页面*!/*/}
                    <Route path="/appLayout/loanForLending/:id" component={createComponent(LoanForLending)}/>
                    {/*/!*借款申请取消借款页面*!/*/}
                    <Route path="/appLayout/loanCancel/:id" component={createComponent(LoanCancel)}/>
                    {/*/!*借款申请已放款页面*!/*/}
                    <Route path="/appLayout/loanBeenLending/:id" component={createComponent(LoanBeenLending)}/>

                    {/*/!*创建采购申请*!/*/}
                    <Route path="/appLayout/purCreate" component={createComponent(PurCreate)}/>

                    {/*/!*供应商审核页面*!/*/}
                    <Route path="/appLayout/purVendorAudit/:id" component={createComponent(PurVendorAudit)}/>
                    {/*/!*门店确认页面*!/*/}
                    <Route path="/appLayout/purStoreConfirm/:id" component={createComponent(PurStoreConfirm)}/>
                    <Route path="/appLayout/purEntrustedPayment/:id" component={createComponent(PurEntrustedPayment)}/>
                    {/*/!*供应商待发货*!/*/}
                    <Route path="/appLayout/purDropShipping/:id" component={createComponent(PurDropShipping)}/>
                    {/*/!*已完成页面*!/*/}
                    <Route path="/appLayout/purComplete/:id" component={createComponent(PurComplete)}/>
                    {/*/!*门店取消借款申请页面*!/*/}
                    <Route path="/appLayout/purCancel/:id" component={createComponent(PurCancel)}/>

                    {/*/!*借款申请偿还页面*!/*/}
                    <Route path="/appLayout/lrPayoff/:id" component={createComponent(LrPayoff)}/>
                    <Route path="/appLayout/lrBeenPayoff/:id" component={createComponent(LrBeenPayoff)}/>
                    {/*找回密码跳转页面*/}
                    <Route path="/appLayout/retrievePassword" component={createComponent(RetrievePassword)}/>
                    {/*/!*肖亚男结束*!/*/}
                    {/*/!*王强开始*!/*/}
                    <Route path="/appLayout/sIMaintainBaseInfo" component={createComponent(SIMaintainBaseInfo)}/>
                    <Route path="/appLayout/bBMaintainBaseInfo" component={createComponent(BBMaintainBaseInfo)}/>
                    <Route path="/appLayout/sCMaintainBaseInfo" component={createComponent(SCMaintainBaseInfo)}/>
                    <Route path="/appLayout/borrowerMaintainBaseInfo"
                           component={createComponent(BorrowerMaintainBaseInfo)}/>
                    <Route path="/appLayout/receivedPayment/" component={createComponent(ReceivedPayment)}/>
                    <Route path="/appLayout/initialStoreBalance/" component={createComponent(InitialStoreBalance)}/>
                    <Route path="/appLayout/editStoreBalance/" component={createComponent(EditStoreBalance)}/>
                    <Route path="/appLayout/sellOutStoList/" component={createComponent(SellOutStoList)}/>
                    <Route path="/appLayout/checkSellOutSto/" component={createComponent(CheckSellOutSto)}/>
                    <Route path="/appLayout/payMoney/:storeId" component={PayMoney}/>
                    <Route path="/appLayout/storeAdjustment/" component={createComponent(StoreAdjustment)}/>
                    <Route path="/appLayout/editStoreAdjustment/" component={createComponent(EditStoreAdjustment)}/>
                    <Route path="/appLayout/storeAdjustmentDetail/:storeId"
                           component={createComponent(StoreAdjustmentDetail)}/>
                    <Route path="/appLayout/stockOutMonitorDetail/:storeId"
                           component={createComponent(StockOutMonitorDetail)}/>
                    <Route path="/appLayout/stockOutMonitor/" component={createComponent(StockOutMonitor)}/>
                    <Route path="/appLayout/sellOut/" component={createComponent(SellOut)}/>
                    <Route path="/appLayout/storeBalance/" component={createComponent(StoreBalance)}/>
                    <Route path="/appLayout/adjustment/" component={createComponent(Adjustment)}/>
                    <Route path="/appLayout/received/" component={createComponent(Received)}/>
                    <Route path="/appLayout/adjustmentDetail/" component={createComponent(AdjustmentDetail)}/>
                    {/*内控*/}
                    <Route path="/appLayout/managementTable/" component={createComponent(ManagementTable)}/>
                    <Route path="/appLayout/riskManagementDetail/:borrowerId"
                           component={createComponent(RiskManagementDetail)}/>
                    {/*/!*王强结束*!/*/}
                    <Route path="/appLayout/sellOutSto" component={createComponent(SellOutSto)}/>
                    <Route component={createComponent(NoMatch)}/>
                </Switch>
            </AppLayout>
        );
    }
}