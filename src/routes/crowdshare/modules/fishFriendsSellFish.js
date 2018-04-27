/**
 * 创建人： 张博
 * 时间： 2018-02-25 下午5:02
 * 功能描述： fishFriendsSellFish.js
 */
// ------------------------------------
// Constants
// ------------------------------------
export const C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE = 'C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE'; // 渔友出鱼列表
export const C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE_LOADING = 'C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE_LOADING'; // 列表加载菊花
export const C_S_FIND_USERS = 'C_S_FIND_USERS'; // 用户下拉
export const C_S_FIND_FISH_LIBS = 'C_S_FIND_FISH_LIBS'; // 鱼种下拉
export const C_S_INSERT_FISH_BUBBLE = 'C_S_INSERT_FISH_BUBBLE'; // 添加渔友出鱼数据
export const C_S_UPDATE_FISH_FRIENDS_SELL_FISH_SET_DATA = 'C_S_UPDATE_FISH_FRIENDS_SELL_FISH_SET_DATA'; // 编辑渔友出鱼设置回显数据
export const C_S_UPDATE_FISH_FRIENDS_SELL_FISH = 'C_S_UPDATE_FISH_FRIENDS_SELL_FISH'; // 修改渔友出鱼数据
export const C_S_DELETE_FISH_FRIENDS_SELL_FISH = 'C_S_DELETE_FISH_FRIENDS_SELL_FISH'; // 删除渔友出鱼数据
// ------------------------------------
// Actions
// ------------------------------------
/**
 * 渔友出鱼列表
 * @param result
 * @return {{type: string, result: *}}
 */
export const cSFindFishFriendsSellFishTable = (result) => {
    return {
        type: C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE,
        result,
    }
};

/**
 * 列表加载菊花
 * @param result
 * @return {{type: string, result: boolean}}
 */
export const cSFindFishFriendsSellFishTableLoading = (result = true) => {
    return {
        type: C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE_LOADING,
        result,
    }
};

/**
 * 用户下拉
 * @param result
 * @return {{type: string, result: *}}
 */
export const cSFindUsers = (result) => {
    return {
        type: C_S_FIND_USERS,
        result,
    }
};

/**
 * 鱼种下拉
 * @param result
 * @return {{type: string, result: *}}
 */
export const cSFindFishLibs = (result) => {
    return {
        type: C_S_FIND_FISH_LIBS,
        result,
    }
};

/**
 * 添加渔友出鱼数据
 * @param params
 * @return {{type: string, params: *}}
 */
export const cSInsertFishBubble = (params) => {
    return {
        type: C_S_INSERT_FISH_BUBBLE,
        params,
    }
};

/**
 * 编辑渔友出鱼设置回显数据
 * @param result
 * @return {{type: string, result: *}}
 */
export const cSUpdateFishFriendsSellFishSetData = (result) => {
    return {
        type: C_S_UPDATE_FISH_FRIENDS_SELL_FISH_SET_DATA,
        result,
    }
};

/**
 * 修改渔友出鱼数据
 * @param params
 * @return {{type: string, result: *}}
 */
export const cSUpdateFishFriendsSellFish = (params) => {
    return {
        type: C_S_UPDATE_FISH_FRIENDS_SELL_FISH,
        params,
    }
};

/**
 * 删除渔友出鱼数据
 * @param params
 * @return {{type: string, params: *}}
 */
export const cSDeleteFishFriendsSellFish = (params) => {
    return {
        type: C_S_DELETE_FISH_FRIENDS_SELL_FISH,
        params,
    }
};

// ------------------------------------
// Reducer
// ------------------------------------
import {Map} from 'immutable';
const initialState = Map({
    fishFriendsSellFishTableC: Map({
        loading: true,
        dataSource: null,
        pagination: Map({
            showSizeChanger: true,
            showQuickJumper: true,
            current: 0,
            pageSize: 0,
            total: 0,
            pageSizeOptions: ['10', '20', '30', '40'],
        }),
    }),
    addFishFriendsSellFishFormC: Map({
        users: [],
        fishLib: [],
        updateFishFriendsSellFishSetData: null,
    })
});
export default function (state = initialState, action) {

    switch (action.type) {
        case C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE:
            state = state.setIn(['fishFriendsSellFishTableC', 'dataSource'], action.result.data.list);
            state = state.mergeIn(['fishFriendsSellFishTableC', 'pagination'], action.result.data.page);
            state = state.setIn(['fishFriendsSellFishTableC', 'loading'], false);
            break;
        case C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE_LOADING:
            state = state.setIn(['fishFriendsSellFishTableC', 'loading'], action.result);
            break;
        case C_S_FIND_USERS:
            state = state.setIn(['addFishFriendsSellFishFormC', 'users'], action.result.data);
            break;
        case C_S_FIND_FISH_LIBS:
            state = state.setIn(['addFishFriendsSellFishFormC', 'fishLib'], action.result.data);
            break;
        case C_S_UPDATE_FISH_FRIENDS_SELL_FISH_SET_DATA:
            state = state.setIn(['addFishFriendsSellFishFormC', 'updateFishFriendsSellFishSetData'], action.result);
            break;
    }

    return state;
}