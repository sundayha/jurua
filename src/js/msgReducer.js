/**
 * 创建人： 肖亚楠
 * 时间： 2017-06-25 21:33
 * 功能描述：
 */
export const INIT_SYSTEM_MSG = 'INIT_SYSTEM_MSG'; //初始化值
export const SYS_MSG = 'SYS_MSG'; //系统提示消息

export const initSystemMsg = () => {
    return {
        type: INIT_SYSTEM_MSG
    }
};

export const sysMsg = (msg) => {
    return {
        type: SYS_MSG,
        payload: msg,
    }
};
import {Map} from 'immutable';
/*初始化state*/
export const initialState = Map({
    statusCode: null,
    message: null
});
/**
 * 创建人：肖亚楠
 * 时间： 2017-06-29 09:56:23
 * 功能描述： state处理
 */
export default function (state = initialState, action) {
    switch (action.type) {
        /**
         * 创建人：肖亚楠
         * 时间： 2017-06-29 14:16:25
         * 功能描述： 初始化系统异常处理的值
         */
        case INIT_SYSTEM_MSG:
            /*合并state信息*/
            state = state.set('statusCode', null);
            state = state.set('message', null);
            break;
        /**
         * 创建人： 张博
         * 时间： 2017-07-01 下午5:36
         * 功能描述：系统消息包括（删除成功、新增成功、更新成功、异常（前三种失败）、自定义）
         */
        case SYS_MSG:
            state = state.set('statusCode', action.payload.statusCode);
            state = state.set('message', action.payload.message);
            break;
    }

    return state;
}