/**
 * 创建人： 张博
 * 时间： 2018-04-24 下午4:44
 * 功能描述：首页
 */
import React from 'react';

class Home extends React.Component {

    render() {
    
        console.log("===========首页-组件渲染===========");
        
        return(
            <div className="home-div">
                <span>首页</span><br/>
            </div>
        );
    }
}

export default Home;