/**
 * 创建人： 张博
 * 时间： 2018-04-24 下午2:09
 * 功能描述：测试页面1
 */
import React from 'react';
import {Button} from 'antd';
import {goBack} from 'react-router-redux';
import {connect} from 'react-redux';

@connect()
class Test1 extends React.Component {

    render() {
    
        console.log("===========组件渲染===========");
        
        return(
            <div>
                <Button  type="danger" onClick={() => {this.props.dispatch(goBack())}}>
                    已经跳过来了，点击跳回去
                </Button>
            </div>
        );
    }
}

export default Test1;