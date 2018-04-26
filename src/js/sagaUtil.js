import {call, put, takeEvery} from "redux-saga/effects";
import * as RU from "./requestUtil";
import {sysMsg} from "./msgReducer";
export const SAGA_CREATE = 'SAGA_CREATE'; //监听saga post请求
export const SAGA_POST = 'SAGA_POST'; //监听saga post请求
export const SAGA_PUT = 'SAGA_PUT'; //监听saga put请求
export const SAGA_GET = 'RETURN_PAGE_DATA'; //监听saga get请求
export const SAGA_DELETE = 'SAGA_DELETE'; //监听saga delete请求
export const SAGA_DELETES = 'SAGA_DELETES'; //监听saga delete请求
export const SAGA_UPLOAD = 'SAGA_UPLOAD'; //监听上传文件的请求
/**
 * 创建人： 张博
 * 异步创建监听
 * @param url
 * @param params
 * @param actionFn
 * @returns {{type: string, url: *, params: {}, actionFn: *}}
 */
export const sagaCreate = (url, params = {}, actionFn) => {
    return {
        type: SAGA_CREATE,
        url,
        params,
        actionFn
    }
};
/**
 * 创建人： 张博
 * saga post监听请求
 * @param url 请求地址
 * @param params 参数
 * @param actionFn 对应组件的action函数
 * @returns {{type: string, url: *, params: {}, actionFn: *}}
 */
export const sagaPost = (url, params = {}, actionFn) => {
    return {
        type: SAGA_POST,
        url,
        params,
        actionFn
    }
};

/**
 * 创建人： 张博
 * saga put监听请求
 * @param url 请求地址
 * @param params 参数
 * @param actionFn 对应组件的action函数
 * @returns {{type: string, url: *, params: {}, actionFn: *}}
 */
export const sagaPut = (url, params = {}, actionFn) => {
    return {
        type: SAGA_PUT,
        url,
        params,
        actionFn
    }
};
/**
 * 创建人： 张博
 * saga get监听请求
 * @param url url 请求地址
 * @param actionFn  对应组件的action函数
 * @returns {{type: string, url: *, actionFn: *}}
 */
export const sagaGet = (url, actionFn) => {
    return {
        type: SAGA_GET,
        url,
        actionFn
    }
};
/**
 * 创建人： 张博
 * saga delete监听请求
 * @param url url 请求地址
 * @param actionFn  对应组件的action函数
 * @returns {{type: string, url: *, actionFn: *}}
 */
export const sagaDelete = (url, actionFn) => {
    return {
        type: SAGA_DELETE,
        url,
        actionFn
    }
};
/**
 * 创建人： 张博
 * saga delete监听请求
 * @param url url 请求地址
 * @param actionFn  对应组件的action函数
 * @returns {{type: string, url: *, actionFn: *}}
 */
export const sagaDeletes = (url, params, actionFn) => {
    return {
        type: SAGA_DELETES,
        url,
        params,
        actionFn
    }
};
/**
 * 文件上传监听
 * @param file 上传的文件
 * @param uploadFileType 上传的文件
 * @param actionFn 处理返回结果的action
 * @returns {{type: string, url: *, file: *, uploadFileType: *, actionFn: *}}
 */
export const sagaUpload = (file, uploadFileType, actionFn) => {
    return {
        type: SAGA_UPLOAD,
        file,
        uploadFileType,
        actionFn
    }
};
/**
 * 创建人： 肖亚楠
 * 时间： 2017-07-02 22:47
 * 功能描述： 创建任务返回5000000时调用
 */
function* createMonitor(action) {
    try {
        const {url, params, actionFn} = action;
        const resultData = yield call(RU.postData, url, params);
        /*创建成功后dispatch到msgReducer*/
        yield put(sysMsg(resultData));
        /*更新结果*/
        yield put(actionFn(resultData));
    } catch (error) {
        console.log(error);
        yield put(sysMsg(error));
    }
}
/**
 * 创建人： 张博
 * saga post 获取异步请求结果
 * @param action
 */
function* postMonitor(action) {
    try {
        const {url, params, actionFn} = action;
        const resultData = yield call(RU.postData, url, params);
        yield put(actionFn(resultData));
    } catch (error) {
        console.log(error);
        yield put(sysMsg(error));
    }
}
/**
 * 创建人： 张博
 * saga put 获取异步请求结果
 * @param action
 */
function* putMonitor(action) {
    try {
        const {url, params, actionFn} = action;
        const resultData = yield call(RU.putData, url, params);
        /*编辑成功后dispatch到msgReducer*/
        yield put(sysMsg(resultData));
        /*更新结果*/
        yield put(actionFn(resultData));
    } catch (error) {
        console.log(error);
        yield put(sysMsg(error));
    }
}
/**
 * 创建人： 张博
 * saga get 获取异步请求结果
 * @param action
 */
function* getMonitor(action) {
    try {
        const {url, actionFn} = action;
        const resultData = yield call(RU.getData, url);
        yield put(actionFn(resultData));
    } catch (error) {
        console.log(error);
        yield put(sysMsg(error));
    }
}

/**
 * 创建人： 张博
 * saga delete 获取异步请求结果
 * @param action
 */
function* deleteMonitor(action) {
    try {
        const {url, actionFn} = action;
        const resultData = yield call(RU.deleteData, url);
        /*删除成功后dispatch到msgReducer*/
        yield put(sysMsg(resultData));
        /*更新结果*/
        yield put(actionFn(resultData));
    } catch (error) {
        console.log(error);
        yield put(sysMsg(error));
    }
}

/**
 * 创建人： 张博
 * saga put 获取异步请求结果
 * @param action
 */
function* deletesMonitor(action) {
    try {
        const {url, params, actionFn} = action;
        const resultData = yield call(RU.deleteDatas, url, params);
        /*删除成功后dispatch到msgReducer*/
        yield put(sysMsg(resultData));
        /*更新结果*/
        yield put(actionFn(resultData));
    } catch (error) {
        console.log(error);
        yield put(sysMsg(error));
    }
}
/**
 * 文件上传监听
 * @param action
 */
function* uploadMonitor(action) {
    try {
        const {file, uploadFileType, actionFn} = action;
        const resultData = yield call(RU.uploadFile, file, uploadFileType);
        yield put(actionFn(resultData));

    } catch (error) {
        console.log(error);
        yield put(sysMsg(error));
    }
}

/**
 * 创建人： 张博
 * saga util 监听器
 */
export function* watchSagaMonitor() {
    yield takeEvery(SAGA_POST, postMonitor);
    yield takeEvery(SAGA_PUT, putMonitor);
    yield takeEvery(SAGA_GET, getMonitor);
    yield takeEvery(SAGA_DELETE, deleteMonitor);
    yield takeEvery(SAGA_DELETES, deletesMonitor);
    yield takeEvery(SAGA_CREATE, createMonitor);
    yield takeEvery(SAGA_UPLOAD, uploadMonitor);
}
