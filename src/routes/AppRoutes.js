/**
 * 创建人： 张博
 * 时间： 2017-06-06 下午6:12
 * 功能描述：所有路由的集合
 */
import React from 'react';
import {Route, Switch} from 'react-router';
// import Login from 'bundle-loader?lazy&name=Login!./login/components/Login';
// import GoLogin from './login/components/GoLogin';
import AppLayoutRoutes from './AppLayoutRoutes';
import NoMatch from "bundle-loader?lazy&name=NoMatch!./stateCode/components/NoMatch";
import {createComponent} from '../components/router/RouterTrick';
import { Provider } from 'react-redux';
import store from './../store/createStore';
import {history} from './../store/createStore';
import {persistStore} from 'redux-persist-immutable';
import {ConnectedRouter} from 'react-router-redux'
import './../../src/css/style.less';
import {hot} from 'react-hot-loader';

class AppRoutes extends React.Component {

    constructor() {
        super();
        this.state = { rehydrated: false }
    }

    componentWillMount(){
        persistStore(store, {}, () => {
            this.setState({ rehydrated: true });
        })
    }

    render() {
        if(!this.state.rehydrated){
            return <div>加载数据ing......................</div>;
        }
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Switch>
                            {/*<Route exact path="/" component={Test} />
                            <Route exact path="/test1" component={Test1} />
                            <Route exact path="/Login" component={createComponent(Login)} />*/}
                             <Route path="/appLayout" component={AppLayoutRoutes} />
                             <Route component={createComponent(NoMatch)}/>
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default hot(module)(AppRoutes)