/**
 * 创建人： 张博
 * 时间： 2017-07-07 下午5:01
 * 功能描述：布局路由设置
 */
import React from 'react';
import {Route, Switch} from 'react-router';
import AppLayout from './appLayout/components/AppLayout';
import NoMatch from './stateCode/components/NoMatch';
import Home from './home/components/Home';
import FishFriendsSellFish from './crowdshare/components/FishFriendsSellFish';
import AddFishFriendsSellFishForm from './crowdshare/components/AddFishFriendsSellFishForm';
import FishLib from './fishinfo/components/FishLib';
import UserManager from './sys/components/UserManager';

export default class AppLayoutRoutesDEV extends React.Component {

    render() {

        console.log("===========AppLayoutRoutes 组件渲染===========");

        return (
            <AppLayout>
                <Switch>
                    {/*主页*/}
                    <Route path="/appLayout/home" component={Home} />
                    <Route path="/appLayout/fishFriendsSellFish" component={FishFriendsSellFish} />
                    <Route path="/appLayout/AddFishFriendsSellFishForm/:type" component={AddFishFriendsSellFishForm} />
                    <Route path="/appLayout/fishLib" component={FishLib} />
                    <Route path="/appLayout/userManager" component={UserManager} />

                    <Route component={NoMatch}/>
                </Switch>
            </AppLayout>
        );
    }
}