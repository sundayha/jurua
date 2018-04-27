/**
 * 创建人： 张博
 * 时间： 2017-06-06 下午6:18
 * 功能描述：入口文件
 */
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import AppRoutes from './routes/AppRoutes';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

ReactDom.render(<LocaleProvider locale={zhCN}><AppRoutes /></LocaleProvider>, document.getElementById('app'));