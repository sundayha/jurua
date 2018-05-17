import {call, put, takeEvery} from "redux-saga/effects";
import {LOGIN_FETCH_LOGIN_USER_MONITOR} from './login';
import {postData} from '../../../js/requestUtil';
import {LOGIN_URL} from '../../../constants/url';
import {loginFetchLoginUser,loginOutReduxReset} from './../modules/login';
import {sysMsg} from '../../../js/msgReducer';
import {LOGGED_ON} from '../../../constants/sysConstants';
import {loginButtonLoading} from './login';
import {push} from 'react-router-redux';

function* login(actionParams) {
    const {userQueryObj} = actionParams;
    try {
        // 初始化的时候把状态清空，不然如果用户名，密码错了后状态不变组件不刷新，登陆按钮一直 loading
        yield put(loginOutReduxReset());
        yield put(loginButtonLoading());
        const result = yield call(postData, LOGIN_URL, userQueryObj);
        yield put(loginFetchLoginUser(result));
        sessionStorage.setItem('logged', LOGGED_ON);
        yield put(push('/appLayout/home'));
        yield put(loginButtonLoading(false));
    } catch (error) {
        yield put(loginButtonLoading());
        yield put(sysMsg(error));
    }
}


/**
 * login saga 监听器
 */
export function* watchLoginSagaMonitor() {
    yield takeEvery(LOGIN_FETCH_LOGIN_USER_MONITOR, login); //监听LOGIN_FETCH_LOGIN_USER_MONITOR action
}