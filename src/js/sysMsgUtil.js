/**
 * 创建人： 张博
 * 时间： 2017-07-01 下午5:39
 * 功能描述：系统全局消息提示包括（删除成功、新增成功、更新成功、异常（前三种失败）、自定义）
 */
import {message} from "antd";
import {initSystemMsg} from "./msgReducer";

/**
 * 创建人： 张博
 * 时间： 2017-07-01 下午6:49
 * 功能描述：展示全局错误消息
 */
const sysErrorMsg = (msg, dispatch) => {
    message.error(msg.get('message'), 3);
    dispatch(initSystemMsg());
};

/**
 * 创建人： 张博
 * 时间： 2017-07-01 下午7:13
 * 功能描述：展示全局成功消息
 */
const sysSuccessMsg = (msg, dispatch) => {
    message.success(msg.get('message'), 3);
    dispatch(initSystemMsg());
};

/**
 * 创建人： 张博
 * 时间： 2017-07-03 上午10:34
 * 功能描述：展示全局警告信息
 */
const sysInfoMsg = (msg, dispatch) => {
    message.info(msg.get('message'), 3);
    dispatch(initSystemMsg());
};

/**
 * 创建人： 张博
 * 时间： 2017-07-01 下午5:42
 * @param msg 后端传递过来的消息对象
 * @param dispatch 用于重置消息reducer的dispatch方法
 * 功能描述：根据状态码调用不同的消息。
 */
export const messages = (msg, dispatch) => {

    switch (String(msg.get('statusCode')).at(0)) {
        //session失效指定code
        case '1':
            return sysInfoMsg(msg, dispatch);
        //通用成功code
        case '2':
            return sysSuccessMsg(msg, dispatch);
        //系统以及service异常
        case '3':
            return sysErrorMsg(msg, dispatch);
        //务异常,例如功能绑定角色不能进行删除的错误提醒
        case '4':
            return sysErrorMsg(msg, dispatch);
        //预留系统需要提示info的code码
        case '5':
            return sysInfoMsg(msg, dispatch);
        //开头的是系统的一些需要弹出成功message的code
        case '6':
            return sysSuccessMsg(msg, dispatch);
    }
};