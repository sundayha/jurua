/**
 * 创建人： 张博
 * 时间： 2017-06-06 下午6:12
 * 功能描述：所有路由的集合
 */
import React from 'react';
import {Route, Switch} from 'react-router';
// import Login from 'bundle-loader?lazy&name=Login!./login/components/Login';
// import GoLogin from './login/components/GoLogin';
// import AppLayoutRoutes from './AppLayoutRoutes';
// import NoMatch from "bundle-loader?lazy&name=NoMatch!./stateCode/components/NoMatch";
// import {createComponent} from '../components/router/RouterTrick';
import Test from '../routes/test/Test';
import Test1 from '../routes/test/Test1';

export default class AppRoutes extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Test} />
                    <Route exact path="/test1" component={Test1} />
                    {/*<Route exact path="/Login" component={createComponent(Login)} />
                     <Route path="/appLayout" component={AppLayoutRoutes} />
                     <Route component={createComponent(NoMatch)}/>*/}
                </Switch>
            </div>
        );
    }
}