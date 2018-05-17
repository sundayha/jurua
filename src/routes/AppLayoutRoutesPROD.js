/**
 * 创建人： 张博
 * 时间： 2017-07-07 下午5:01
 * 功能描述：布局路由设置
 */
import React from "react";
import {Route, Switch} from "react-router";
import NoMatch from "bundle-loader?lazy&name=NoMatchALR!./stateCode/components/NoMatch";
import AppLayout from './appLayout/components/AppLayout';
import Home from 'bundle-loader?lazy&name=Home!./home/components/Home';
import FishFriendsSellFish from 'bundle-loader?lazy&name=FishFriendsSellFish!./crowdshare/components/FishFriendsSellFish';
import AddFishFriendsSellFishForm from 'bundle-loader?lazy&name=AddFishFriendsSellFishForm!./crowdshare/components/AddFishFriendsSellFishForm';
import FishLib from 'bundle-loader?lazy&name=FishLib!./fishinfo/components/FishLib';
import UserManager from 'bundle-loader?lazy&name=UserManager!./sys/components/UserManager';
import {createComponent} from "../components/router/RouterTrick";

export default class AppLayoutRoutesPROD extends React.Component {

    render() {

        console.log("===========AppLayoutRoutes 组件渲染===========");

        return (
            <AppLayout>
                <Switch>
                    {/*主页*/}
                    <Route path="/appLayout/home" component={createComponent(Home)} />
                    <Route path="/appLayout/fishFriendsSellFish" component={createComponent(FishFriendsSellFish)} />
                    <Route path="/appLayout/AddFishFriendsSellFishForm/:type" component={createComponent(AddFishFriendsSellFishForm)} />
                    <Route path="/appLayout/fishLib" component={createComponent(FishLib)} />
                    <Route path="/appLayout/userManager" component={createComponent(UserManager)} />
                    <Route component={createComponent(NoMatch)}/>
                </Switch>
            </AppLayout>
        );
    }
}