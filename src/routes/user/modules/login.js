/**
 * 创建人： 张博
 * 时间： 2017-05-05 上午11:05
 * 功能描述： login.js
 */
// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_FETCH_LOGIN_USER = 'LOGIN_FETCH_LOGIN_USER'; // 用户登陆
export const LOGIN_FETCH_LOGIN_USER_MONITOR = 'LOGIN_FETCH_LOGIN_USER_MONITOR'; // 用户登陆监视器
export const RESET = 'RESET'; //redux-reset 需要的type
export const LOGIN_BUTTON_LOADING = 'LOGIN_BUTTON_LOADING'; // 登陆按钮是否显示loading
// export const GET_STATE = 'GET_STATE';
// ------------------------------------
// Actions
// ------------------------------------
/**
 * 创建人： 张博
 * 时间： 2017-07-05 上午11:10
 * @param resultData 后台返回的登陆用户对象
 * 功能描述：拉取验证后用户登陆的数据
 */
export const loginFetchLoginUser = (resultData) => {
    return {
        type: LOGIN_FETCH_LOGIN_USER,
        resultData,
    }
};

/**
 * 创建人： 张博
 * 时间： 2017-07-05 下午4:54
 * @param userQueryObj 登陆用到的查询对象
 * 功能描述：用于登陆请求拉取登陆数据的saga监听器
 */
export const loginFetchLoginUserMonitor = (userQueryObj) => {
    return {
        type: LOGIN_FETCH_LOGIN_USER_MONITOR,
        userQueryObj,
    }
};

/**
 * 登出后重置redux状态
 * @returns {{type: string}}
 */
export const loginOutReduxReset = () => {
    return {
        type: RESET,
    }
};

/**
 * 登陆按钮是否显示loading
 * @param result
 * @return {{type: string, result: boolean}}
 */
export const loginButtonLoading = (result = true) => {
    return {
        type: LOGIN_BUTTON_LOADING,
        result,
    }
};

// export const getState = () => {
//     return {
//         type: GET_STATE,
//     }
// };

// ------------------------------------
// Reducer
// ------------------------------------
import {Map} from 'immutable';
const initialState = Map({
    loginData: Map({
        loginButtonLoading: false,
    }), //登陆信息
    // isOk: false, //是否成功登陆默认为false
});
export default function (state = initialState, action) {

    switch (action.type) {
        case LOGIN_FETCH_LOGIN_USER:
            state = state.set('loginData', Map(action.resultData.data));
            break;
        case LOGIN_BUTTON_LOADING:
            state = state.set('loginButtonLoading', action.result);
            break;
    }

    return state;
}