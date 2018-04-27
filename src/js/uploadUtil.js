import {compressImage} from "./globalJs";
import {uploadFile} from "./requestUtil";
import {message} from 'antd';


/**
 * 创建人： 肖亚楠
 * 时间： 2017-11-29 22:17
 * 功能描述：替代upload插件的默认上传压缩文件的方法
 */
export const customRequestUploadCompressFile = (info, attachmentType) => {
    /*压缩文件并上传*/
    compressImage(info.file,
        /*压缩图片成功调用的方法*/
        (compressFile) => {
            info.file = compressFile;
            customRequestUpload(info, attachmentType);
        },
        /*图片压缩失败调用的方法*/
        /*压缩图片失败上传正常图片，然后后台会做压缩处理*/
        (error) => {
            customRequestUpload(info, attachmentType);
        });

}


/**
 * 创建人： 肖亚楠
 * 时间： 2017-11-29 22:32
 * 功能描述：替代upload插件的上传文件的方法
 */
export const customRequestUpload = (info, attachmentType) => {
    uploadFile(info.file, attachmentType).then((res) => {
        info.onSuccess(res, info.file);
    }).catch(e => {
        /*弹出的信息*/
        info.onError("文件上传错误", e, info.file);
    });
}


/**
 * 创建人： 肖亚楠
 * 时间： 2017-07-07 17:46
 * 功能描述：上传文件,改变状态时调用
 */
export const uploadFileTool = (info) => {
    /*当前文件进行到的状态*/
    const status = info.file.status;
    /*当前操作的文件*/
    let file = info.file;
    let fileList = info.fileList;
    if (status === 'done') {
        if (file.response.statusCode === 2000000) {
            /*文件上传成功*/
            message.success(`${info.file.name}文件上传成功。`);
            /*设置上传完文件的访问url*/
            fileList.forEach((f) => {
                if (file.uid === f.uid) {
                    f.url = file.response.data.url;
                    f.thumbUrl = file.response.data.url;
                }
            });
        } else {
            /*后台因为文件类型异常，需要弹出具体的提示message*/
            message.error(file.response.message);
            /*过滤上传失败的文件*/
            fileList = fileList.filter((f) => {
                if (file.uid === f.uid) {
                    return false;
                }
                return true;
            });

        }
    } else if (status === 'error') {
        /*上传文件是失败，系统错误*/
        if (file.response && file.response.message) {
            message.error(file.response.message);
        } else {
            message.error(`${info.file.name}文件上传失败。`);
        }
        /*过滤上传失败的文件*/
        fileList = fileList.filter((f) => {
            if (file.uid === f.uid) {
                return false;
            }
            return true;
        });
    }
    /*if (fileList.length === 0) {
        fileList = null;
    }*/
    return fileList;
};



