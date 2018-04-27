import axios from "axios";
import {API_BASE_URL, FILE_UPLOAD_URL} from "./../constants/url";
import {
    COMMON_OK,
    IP_EQUALS_ERROR,
    NO_JURISDICTION,
    SESSION_TIME_OUT_ERROR,
    TOKEN_INVALID,
    TOKEN_TIME_OUT
} from "../constants/statusCode";
import {message} from "antd";
import {BASE_URL} from "../constants/url";

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.withCredentials = true;
//baseUrl
axios.defaults.baseURL = API_BASE_URL;

//code状态码200判断
/*返回结果*/
axios.interceptors.response.use((res) => {
    /*1000001session异常，需要重定向到登录页面*/
    /*1000002用戶沒有API權限，需要重定向到登录页面*/

    /*更新header中的token信息*/
    if (res.headers.authorization) {
        sessionStorage.setItem('authorization', res.headers.authorization);
    }
    if ((res.data.statusCode > COMMON_OK && res.data.statusCode < 6000000) || (res.data.statusCode > 1000000 && res.data.statusCode < COMMON_OK )) {
        /*失败的请求*/
        if (res.data.statusCode === SESSION_TIME_OUT_ERROR || res.data.statusCode === IP_EQUALS_ERROR || res.data.statusCode === TOKEN_TIME_OUT || res.data.statusCode === TOKEN_INVALID) {
            message.info(res.data.message);
            // 把已登录标记为未登录, 用于IsLoginRoute 组件判断
            //sessionStorage.setItem('logged', LOGGED_OUT);
            /*跳转登录页*/
            window.location.href = BASE_URL;
        } else if (res.data.statusCode === NO_JURISDICTION) {
            message.info(res.data.message);
            /*跳转到首页页面*/
            window.location.href = BASE_URL;
        }
        return Promise.reject(res.data);
    }
    return res.data;
}, err => {
    return Promise.reject({statusCode: "1000000", message: "网络异常，请您联系系统管理员!"})
});

/*request设置请求头的token*/
axios.interceptors.request.use(
    config => {
        if (sessionStorage.getItem('authorization')) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = sessionStorage.getItem('authorization');
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });
/**
 * GET 请求，获取数据，采用 spring pathValue 的方式
 * @param url 资源地址
 * @returns {AxiosPromise} Promise 对象
 */
export const getData = (url) => {
    return (
        axios({
            method: 'get',
            url,
        })
    )
};

/**
 * DELETE 请求，采用 spring pathValue 的方式
 * @param url 资源地址
 * @returns {AxiosPromise}
 */
export const deleteData = (url) => {
    try {
        return (
            axios({
                method: 'delete',
                url,
            })
        )
    } catch (error) {
        console.log(error)
    }

};

/**
 * DELETE 请求，删除多个，post 请求
 * @param url 资源地址
 * @param data 参数
 * @returns {AxiosPromise}
 */
export const deleteDatas = (url, data) => {
    return (
        axios({
            method: 'post',
            url,
            data,
        })
    )
};

/**
 * POST 请求
 * @param url 资源地址
 * @param data 参数
 * @returns {AxiosPromise}
 */
export const postData = (url, data) => {
    return (
        axios({
            method: 'post',
            url,
            data,
        })
    )
};

/**
 * UPDATE 请求
 * @param url 资源地址
 * @param data 参数
 * @returns {AxiosPromise}
 */
export const putData = (url, data) => {
    return (
        axios({
            method: 'put',
            url,
            data,
        })
    )
};

/**
 * 上传文件请求方法
 * @param file
 * @param attachmentType
 * @returns {AxiosPromise}
 */
export const uploadFile = (file, uploadFileType) => {
    //创建form对象
    let data = new FormData();
    //通过append向form对象添加数据
    data.append('file', file, file.name);
    //data.append('file', file);
    //添加form表单中其他数据
    data.append('chunk', '0');
    /*上传的文件类型，用于后台判断上传的是什么文件*/
    data.append('uploadFileType', uploadFileType);
    //添加请求头
    let config = {
        headers: {'Content-Type': 'multipart/form-data'}
    };
    return (
        axios({
            method: 'post',
            url: FILE_UPLOAD_URL,
            data,
            config
        })
    )
};



