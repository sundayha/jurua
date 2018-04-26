/**
 * 创建人： 张博
 * 时间： 2018-04-24 下午5:23
 * 功能描述：渔友出鱼
 */
import React from 'react';
import FishFriendsSellFishTable from './FishFriendsSellFishTable';

class FishFriendsSellFish extends React.Component {

    render() {
    
        console.log("===========组件渲染===========");
        
        return(
            <div className="fishFriendsSellFish-div">
                <FishFriendsSellFishTable />
            </div>
        );
    }
}

export default FishFriendsSellFish;