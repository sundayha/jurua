/**
 * 创建人： 张博
 * 时间： 2017-07-07 下午5:01
 * 功能描述：布局路由设置
 */
import React from "react";
import {Route, Switch} from "react-router";
import AppLayout from "./appLayout/components/AppLayout";
// import NoMatch from "bundle-loader?lazy&name=NoMatchALR!./stateCode/components/NoMatch";
// import Home from "bundle-loader?lazy&name=Home!../routes/home/components/Home";
/*判断session失效，相关引用*/
// import {createComponent} from "../components/router/RouterTrick";


export default class AppLayoutRoutesPROD extends React.Component {

    render() {

        console.log("===========AppLayoutRoutes 组件渲染===========");

        // const logged = sessionStorage.getItem('logged'); //从本地缓存中取值
        return (
            <AppLayout>
                <Switch>

                    {/*<Route component={createComponent(NoMatch)}/>*/}
                </Switch>
            </AppLayout>
        );
    }
}