/**
 * 创建人： 张博
 * 时间： 2017-06-06 下午6:10
 * 功能描述：合并所有的reduce
 */
import {combineReducers} from 'redux-immutable';
// import appLayout from '../routes/appLayout/modules/appLayout';
import fishFriendsSellFish from '../routes/crowdshare/modules/fishFriendsSellFish';
import msgReducer from '../js/msgReducer';
import login from '../routes/user/modules/login';

export default combineReducers({
    // appLayout,
    fishFriendsSellFish,
    msgReducer,
    login
});