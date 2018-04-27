/**
 * 创建人： 张博
 * 时间： 2018-04-26 下午5:01
 * 功能描述：渔友出鱼saga
 */
import {call, put, takeEvery} from "redux-saga/effects";
import {postData, putData} from "../../../js/requestUtil";
import {sysMsg} from '../../../js/msgReducer';
import {push} from 'react-router-redux';
import {INSERT_FISH_BUBBLE, UPDATE_FISH_FRIENDS_SELL_FISH, FIND_FISH_FRIENDS_SELL_FISH_TABLE} from '../../../constants/url';
import {C_S_INSERT_FISH_BUBBLE, C_S_UPDATE_FISH_FRIENDS_SELL_FISH, C_S_DELETE_FISH_FRIENDS_SELL_FISH, cSFindFishFriendsSellFishTable, cSFindFishFriendsSellFishTableLoading} from '../modules/fishFriendsSellFish';

function* insertFishFriendsSellFish(paramObj) {
    try {
        // 从 action 中得到参数
        const {params} = paramObj;
        const resultData = yield call(postData, INSERT_FISH_BUBBLE, params); // 插入渔友出鱼数据
        yield put(sysMsg(resultData)); // 创建后反馈消息
        yield put(push('/appLayout/fishFriendsSellFish')); // 添加完数据后跳转渔友出鱼列表页面
    } catch (error) {
        yield put(sysMsg(error)); // 设置消息全局提示
    }
}

function* updateFishFriendsSellFish(paramObj) {
    try {
        // 从 action 中得到参数
        const {params} = paramObj;
        const resultData = yield call(putData, UPDATE_FISH_FRIENDS_SELL_FISH, params); // 修改渔友出鱼数据
        yield put(sysMsg(resultData)); // 创建后反馈消息
        yield put(push('/appLayout/fishFriendsSellFish')); // 添加完数据后跳转渔友出鱼列表页面
    } catch (error) {
        yield put(sysMsg(error)); // 设置消息全局提示
    }
}

function* deleteFishFriendsSellFish(paramObj) {
    try {
        // 从 action 中得到参数
        const {params} = paramObj;
        params.isShowBubble = false;
        const resultData = yield call(putData, UPDATE_FISH_FRIENDS_SELL_FISH, params); // 修改渔友出鱼数据
        yield put(sysMsg(resultData)); // 创建后反馈消息
        yield put(cSFindFishFriendsSellFishTableLoading());
        const resultTableData = yield call(postData, FIND_FISH_FRIENDS_SELL_FISH_TABLE, params); // 查询渔友出鱼数据
        yield put(cSFindFishFriendsSellFishTable(resultTableData));
    } catch (error) {
        yield put(sysMsg(error)); // 设置消息全局提示
    }
}

/**
 * saga 监听器
 */
export function* watchFishFriendsSellFishSagaMonitor() {
    yield takeEvery(C_S_INSERT_FISH_BUBBLE, insertFishFriendsSellFish); //监听 C_S_INSERT_FISH_BUBBLE action
    yield takeEvery(C_S_UPDATE_FISH_FRIENDS_SELL_FISH, updateFishFriendsSellFish); //监听 C_S_UPDATE_FISH_FRIENDS_SELL_FISH action
    yield takeEvery(C_S_DELETE_FISH_FRIENDS_SELL_FISH, deleteFishFriendsSellFish); //监听 C_S_DELETE_FISH_FRIENDS_SELL_FISH action
}