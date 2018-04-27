import React from 'react';
import Bundle from './Bundle';
import {LOGGED_ON} from "../../constants/sysConstants";
import {Redirect, Route} from "react-router-dom";
import {Spin} from 'antd';

// 暂时的一个展示
const Loading = function () {
    return <div className="ant-web-example"><Spin size="large" /></div>
};

/**
 * 创建人： 张博
 * 时间： 2017-11-30 下午5:48
 * 功能描述：按需动态加载载路由js
 */
export const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component /> : <Loading />
        }
    </Bundle>
);

/**
 * 创建人： 张博
 * 时间： 2017-11-30 下午4:56
 * @param Component 页面组件
 * @param logged 是否登录
 * @param rest IsLoginRoute 中的属性
 * 功能描述：用于判断是否处在登录状态，如果没有登录则重定向到登录页
 */
export const IsLoginRoute = ({component: Component, logged, ...rest}) => {
    return (
        <Route
            {...rest}
            render={
                (props) => logged === LOGGED_ON
                    ? <Component {...props} />
                    : <Redirect to="/" />
            }
        />
    )
};