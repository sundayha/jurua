/**
 * 创建人： 张博
 * 时间： 2017-06-06 下午6:18
 * 功能描述：入口文件
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/createStore';
import {history} from './store/createStore';
import AppRoutes from './routes/AppRoutes';
import {persistStore} from 'redux-persist-immutable';
import {ConnectedRouter} from 'react-router-redux'

class App extends React.Component {

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
                    <AppRoutes />
                </ConnectedRouter>
            </Provider>
        );
    }
}

ReactDom.render(
    <App />
    , document.getElementById('app'));
