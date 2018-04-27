/*session失效需要到登录页面*/
export const COMMON_OK = 2000000;// "成功";
export const SESSION_TIME_OUT_ERROR = 1000001;// "session失效,请重新登录"
export const NO_JURISDICTION = 1000002;// "系统没有对您开放该接口，请您联系管理员"
export const IP_EQUALS_ERROR = 1000003; //"访问的IP地址发生改变，不允许进行访问，请重新登录"
export const TOKEN_TIME_OUT = 1000004; //令牌超时，请重新登录
export const TOKEN_INVALID = 1000005; //令牌失效，请重新登录
export const MODEL_NO_EXITS_ERROR = 3000003; // "操作的信息不存在"),
export const LOGIN_PAYMENT_PASSWORD_ERROR = 4000003;// "您输入的支付密码不正确"),
export const LOGIN_USERNAME_PASSWORD_ERROR = 4000002; // 用户名或密码错误
export const VALID_MODEL_ERROR = 3000002; // 提交时参数校验失败
