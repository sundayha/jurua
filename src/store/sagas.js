import {fork} from "redux-saga/effects";
import {watchSagaMonitor} from "./../js/sagaUtil";
import {watchFishFriendsSellFishSagaMonitor} from './../routes/crowdshare/modules/fishFriendsSellFishSaga';
import {watchLoginSagaMonitor} from './../routes/user/modules/loginSaga';
/**
 * 创建人： 张博
 * 时间： 2017-06-19 下午2:47
 * 功能描述：合并saga
 */
export default function* rootSaga() {
    yield [
        fork(watchSagaMonitor),
        fork(watchFishFriendsSellFishSagaMonitor),
        fork(watchLoginSagaMonitor),
    ];
}