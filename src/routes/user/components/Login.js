/**
 * 创建人： 张博
 * 时间： 2018-05-08 上午11:35
 * 功能描述：登陆页面
 */
import React from 'react';
import {Form, Icon, Button, Input, Alert} from 'antd';
const FormItem = Form.Item;
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {loginFetchLoginUserMonitor, loginButtonLoading} from '../modules/login';
import {initSystemMsg} from '../../../js/msgReducer';
import {COMMON_OK, LOGIN_ERROR} from '../../../constants/statusCode';

@connect(
    (state) => {
        return {
            msgReducer: state.getIn(['appReducers', 'msgReducer']),
            login: state.getIn(['appReducers', 'login']),
        }
    }
)
class Login extends React.Component {

    componentWillMount() {
        this.props.dispatch(initSystemMsg());
    }

    componentWillReceiveProps(np) {
        const {dispatch} = this.props;
        if (np.msgReducer.get("statusCode") === COMMON_OK) {
            dispatch(push('/appLayout/home'));
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {dispatch, form} = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                const {phoneNum, password} = values;
                const params = {
                    phoneNum: phoneNum,
                    userPassword: password
                };
                dispatch(loginFetchLoginUserMonitor(params));
            }
        });
    };


    render() {
        const {form, msgReducer, login} = this.props;
        const {getFieldDecorator} = form;
        const LoginAlert = () => {
            this.props.dispatch(loginButtonLoading(false));
            return (
                <Alert
                    className="alert"
                    message="错误"
                    description="用户名或密码错误"
                    type="error"
                    showIcon
                />
            )
        };
        return (
            <div className="login-div">
                <div className="form-div">
                    <div className="title-div">
                        <img className="title-img" src={require('../assets/logo.png')} />
                        <span>南美亚马逊短鲷精灵</span><br/>
                        <span className="title-info-span">中国最活跃、最具影响力的南美热带鱼渔友聚集群</span>
                    </div>
                    {
                        msgReducer.get("statusCode") === LOGIN_ERROR
                            ?
                            <LoginAlert />
                            : null
                    }
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('phoneNum', {
                                rules: [{ required: true, message: '请输入手机号！' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码！' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button" loading={login.get('loginButtonLoading')}>
                                登入
                            </Button>
                            <a href="">注册！</a>
                        </FormItem>
                    </Form>
                </div>
                <img style={{height: '300px'}} src={require('../assets/qq_group.jpg')} />
                <div style={{textAlign: 'center', position: 'absolute', bottom: '15px', left:'0',width:'100%'}}>
                    南美亚马逊短鲷精灵 © 2018 QQ群号：638534625 @群主橙子制作
                </div>
            </div>
        );
    }
}

const WrappedLoginForm = Form.create()(Login);
export default WrappedLoginForm;