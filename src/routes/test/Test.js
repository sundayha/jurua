/**
 * 创建人： 张博
 * 时间： 2018-04-24 下午2:09
 * 功能描述：测试页面
 */
import React from 'react';
import {Button} from 'antd';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
@connect()
class Test extends React.Component {

    render() {
    
        console.log("===========组件渲染===========");
        
        return(
            <div>
                <Button  type="danger" onClick={() => {this.props.dispatch(push('/test1'))}}>
                    点我跳页
                </Button>
            </div>
        );
    }
}

export default Test;