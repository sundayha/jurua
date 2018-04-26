/**
 * 创建人： 张博
 * 时间： 2018-02-25 下午5:02
 * 功能描述： fishFriendsSellFish.js
 */
// ------------------------------------
// Constants
// ------------------------------------
export const C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE = 'C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE';
export const C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE_LOADING = 'C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE_LOADING';
// ------------------------------------
// Actions
// ------------------------------------
export const cSFindFishFriendsSellFishTable = (result) => {
    return {
        type: C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE,
        result,
    }
};

export const cSFindFishFriendsSellFishTableLoading = (result = true) => {
    return {
        type: C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE_LOADING,
        result,
    }
};

// ------------------------------------
// Reducer
// ------------------------------------
import {Map} from 'immutable';
const initialState = Map({
    fishFriendsSellFishTableC: Map({
        loading: false,
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
});
export default function (state = initialState, action) {

    switch (action.type) {
        case C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE:
            state = state.setIn(['fishFriendsSellFishTableC', 'dataSource'], action.result.data.list);
            state = state.mergeIn(['fishFriendsSellFishTableC', 'pagination'], action.result.data.page);
            state = state.setIn(['fishFriendsSellFishTableC', 'loading'], false);
            break;
        // case C_S_FIND_FISH_FRIENDS_SELL_FISH_TABLE_LOADING:
        //     state = state.setIn(['fishFriendsSellFishTableC', 'loading'], false);
    }

    return state;
}