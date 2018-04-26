/**
 * 文件作用，放置全局的公共方法
 */
import Immutable from "immutable";
import {ROLE_TYPE_ADMIN} from "./../constants/sysConstants";
import moment from 'moment';

/**
 * 创建人： 张博
 * 时间： 17/6/7 下午12:28
 * 参数：value 减数
 * 功能描述： 当前浏览器的宽度与一个值相减得到另一个宽度值
 */
export function getWidthByValue(value) {

    return document.querySelector("body").clientWidth - value;
}

/**
 * 创建人： 张博
 * 时间： 2017-07-10 下午6:36
 * 功能描述：immutable 比较值是否改变
 */
export const deepCompare = (instance, nextState) => {

    return !Immutable.is(instance, nextState);
};
/**
 * 创建人： 肖亚楠
 * 时间： 2017-07-06 10:47
 * 功能描述：格式化数据(格式化数字千分位)
 */
export const formatNumberString = (value) => {
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * 创建人： 张博
 * 时间： 2017-11-29 上午10:35
 * 功能描述：把字符串转回数字
 */
export const formatStringToNumber = (value) => {
    return value.replace(/\$\s?|(,*)/g, '')
};
/**
 * 创建人： 肖亚楠
 * 时间： 2017-07-07 16:45
 * 功能描述：强制保留位小数,然后转成千分位
 */
export const toDecimal = (x, n = 2) => {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return false;
    }
    var f = Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + n) {
        s += '0';
    }
    return s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * 创建人： 肖亚楠
 * 时间： 2017-07-17 13:56
 * 功能描述：格式化小数保留几位小数
 */
export const formatDecimal = (x, n = 2) => {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return false;
    }
    var f = Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    return f;
}
/**
 * 创建人：肖亚楠
 * 时间： 2017-11-13 11:21:45
 * 功能描述： 查看当前登录用户是否拥有角色集合中的角色
 */
export const isHasRole = (roles = null, role = null) => {
    let result = false;
    if (roles && role) {
        for (let baseRole of roles) {
            if (baseRole.roleId === role) {
                result = true;
                break;
            }
        }
    }
    return result;
};

export const floatObj = function () {

    /*
     * 判断obj是否为一个整数
     */
    function isInteger(obj) {
        return Math.floor(obj) === obj
    }

    /*
     * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
     * @param floatNum {number} 小数
     * @return {object}
     *   {times:100, num: 314}
     */
    function toInteger(floatNum) {
        var ret = {times: 1, num: 0}
        var isNegative = floatNum < 0
        if (isInteger(floatNum)) {
            ret.num = floatNum
            return ret
        }
        var strfi = floatNum + ''
        var dotPos = strfi.indexOf('.')
        var len = strfi.substr(dotPos + 1).length
        var times = Math.pow(10, len)
        var intNum = parseInt(Math.abs(floatNum) * times + 0.5, 10)
        ret.times = times
        if (isNegative) {
            intNum = -intNum
        }
        ret.num = intNum
        return ret
    }

    /*
     * 核心方法，实现加减乘除运算，确保不丢失精度
     * 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
     *
     * @param a {number} 运算数1
     * @param b {number} 运算数2
     * @param digits {number} 精度，保留的小数点数，比如 2, 即保留为两位小数
     * @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）
     *
     */
    function operation(a, b, op) {
        var o1 = toInteger(a)
        var o2 = toInteger(b)
        var n1 = o1.num
        var n2 = o2.num
        var t1 = o1.times
        var t2 = o2.times
        var max = t1 > t2 ? t1 : t2
        var result = null
        switch (op) {
            case 'add':
                if (t1 === t2) { // 两个小数位数相同
                    result = n1 + n2
                } else if (t1 > t2) { // o1 小数位 大于 o2
                    result = n1 + n2 * (t1 / t2)
                } else { // o1 小数位 小于 o2
                    result = n1 * (t2 / t1) + n2
                }
                return result / max
            case 'subtract':
                if (t1 === t2) {
                    result = n1 - n2
                } else if (t1 > t2) {
                    result = n1 - n2 * (t1 / t2)
                } else {
                    result = n1 * (t2 / t1) - n2
                }
                return result / max
            case 'multiply':
                result = (n1 * n2) / (t1 * t2)
                return result
            case 'divide':
                result = (n1 / n2) * (t2 / t1)
                return result
        }
    }

    // 加减乘除的四个接口
    function add(a, b) {
        return operation(a, b, 'add')
    }

    function subtract(a, b) {
        return operation(a, b, 'subtract')
    }

    function multiply(a, b) {
        return operation(a, b, 'multiply')
    }

    function divide(a, b) {
        return operation(a, b, 'divide')
    }


    // exports
    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    }
}();


/**
 *作者: 肖亚楠
 *邮箱: xiaoyn@lianliantech.cn
 *日期: 2017/11/29  17:21
 *功能描述: 压缩图片
 */
export const compressImage = (file, success, error) => {
    try {
        /*如果不是图片*/
        if (!/image\/\w+/.test(file.type)) {
            return success(file);
        }
        /*图片小于1M不压缩*/
        if (file.size < Math.pow(1024, 2)) {
            return success(file);
        }
        /*获取文件名*/
        const name = file.name;
        /*读取文件的工具类*/
        const reader = new FileReader();
        /*读取文件*/
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const src = e.target.result;
            const img = new Image();

            img.src = src;
            img.onload = (e) => {
                const w = img.width;
                const h = img.height;
                /*默认图片质量为0.92*/
                const quality = 0.5;

                /*生成canvas*/
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                /*创建属性节点*/
                const anw = document.createAttribute("width");
                anw.nodeValue = w;
                const anh = document.createAttribute("height");
                anh.nodeValue = h;
                canvas.setAttributeNode(anw);
                canvas.setAttributeNode(anh);

                /*铺底色 PNG转JPEG时透明区域会变黑色*/
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, 0, w, h);

                ctx.drawImage(img, 0, 0, w, h);
                /*quality值越小，所绘制出的图像越模糊*/
                /*图片格式jpeg或webp可以选0-1质量区间*/
                const base64 = canvas.toDataURL('image/jpeg', quality);

                /*返回base64转blob的值*/
                console.log(`原图${(src.length / 1024).toFixed(2)}kb`, `新图${(base64.length / 1024).toFixed(2)}kb`);
                /*去掉url的头，并转换为byte*/
                const bytes = window.atob(base64.split(',')[1]);
                /*处理异常,将ascii码小于0的转换为大于0*/
                const ab = new ArrayBuffer(bytes.length);
                const ia = new Uint8Array(ab);
                for (let i = 0; i < bytes.length; i++) {
                    ia[i] = bytes.charCodeAt(i);
                }
                file = new Blob([ab], {type: 'image/jpeg'});
                file.name = name;
                /*调用返回成功的函数*/
                success(file);
            }
            img.onerror = (e) => {
                /*失败调用的方法*/
                error(e);
            }
        }
        reader.onerror = (e) => {
            /*失败调用的方法*/
            error(e);
        }
    } catch (e) {
        error(e);
    }
}


/**
 *作者: 肖亚楠
 *邮箱: xiaoyn@lianliantech.cn
 *日期: 2017/11/29  18:02
 *功能描述: 判断是否是图片
 */

String.prototype.isPicture = function () {
    //判断是否是图片 - strFilter必须是小写列举
    const imgPattern = /\.(JPEG|jpeg|JPG|jpg|GIF|gif|BMP|bmp|PNG|png|PIC|pic)$/;
    return imgPattern.test(this);
}

/**
 * 创建人： 张博
 * 时间： 2017-12-10 下午9:35
 * @param propId 属性id的值
 * 功能描述：滚动到锚点位置
 */
export function scrollToAnchor(propId) {
    document.getElementById(propId).scrollIntoView();
}

/**
 * 创建人： 张博
 * 时间： 2018-03-27 下午5:20
 * 功能描述：得到本周的moment类型的数组
 */
export const getCurrentWeek = () => {
    return [moment().startOf('isoWeek'), moment().endOf('isoWeek')];
};

/**
 * 创建人： 张博
 * 时间： 2018-03-27 下午5:20
 * 功能描述：得到本月的moment类型的数组
 */
export const getCurrentMonth = () => {
    return [moment().startOf('month'), moment().endOf('month')];
};

/**
 * 创建人： 张博
 * 时间： 2018-03-27 下午5:24
 * 功能描述：根据日期得到当前是星期几，并且把'星期'替换成'周'
 */
export const getFormatDateWeek = (date) => {
    return moment(date).format('dddd').replace('星期', '周');
};

/**
 *作者: 肖亚楠
 *邮箱: xiaoyn@lianliantech.cn
 *日期: 2018/4/12  9:59
 *功能描述: 隐藏手机号中间四位
 */
export const concealPhoneNumber = (phone) => {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
};