/**
 * 创建人： 张博
 * 时间： 2017-06-06 下午6:11
 * 功能描述：创建redux的store，存放所有使用redux管理的状态
 */
import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux-immutable';
import {autoRehydrate} from 'redux-persist-immutable'; // redux 状态本地化
import createSagaMiddleware from 'redux-saga';
import promise from 'redux-promise-middleware';
import reducers from './reducers';
import rootSaga  from './sagas';
import reduxReset from 'redux-reset';
import createBrowserHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux';

// 创建一个浏览器历史记录
export const history = createBrowserHistory();
// saga中间件
const sagaMiddleware = createSagaMiddleware();
// 添加一个拦截和分发action的导航中间件
const historyMiddleware = routerMiddleware(history);

// 实现redux异步
const middleware = applyMiddleware( promise(), sagaMiddleware, historyMiddleware); //createActionBuffer(REHYDRATE),
let store;
if (process.env.NODE_ENV === 'production') {
    store = createStore(
        // reducer的集合
        combineReducers({
            // reducer的集合
            appReducers: reducers,
            // 把router放进redux中
            router: routerReducer
        }),
        compose(middleware, reduxReset(), autoRehydrate()),
    );
} else {
    store = createStore(
        // reducer的集合
        combineReducers({
            // reducer的集合
            appReducers: reducers,
            // 把router放进redux中
            router: routerReducer
        }),
        compose(middleware, reduxReset(), autoRehydrate(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), //redux dev tools 工具用于在chrome上调试redux
    );
}

sagaMiddleware.run(rootSaga);

export default store;