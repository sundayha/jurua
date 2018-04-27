/*BseUrl*/
export const BASE_URL = 'http://localhost:8081'; //前端url
export const API_BASE_URL ="http://localhost:7000"; //后端api url
/*文件上传url地址*/
export const FILE_UPLOAD_URL = API_BASE_URL+ '/file/upload';

export const FIND_FISH_FRIENDS_SELL_FISH_TABLE = '/CrowdShareServiceController/findFishFriendsSellFishTable'; // 渔友出鱼列表
export const FIND_USERS = '/UserController/findUsers'; // 得到所有用户下拉框用
export const FIND_FISH_LIBS = '/fishInfo/FishLibController/findFishLibs'; // 得到所有鱼种下拉框用
export const INSERT_FISH_BUBBLE = '/CrowdShareServiceController/insertFishBubble'; // 添加渔友出鱼数据
export const EXPORT_FISH_FRIENDS_SELL_FISH_EXCEL = API_BASE_URL + '/CrowdShareServiceController/exportFishFriendsSellFishExcel'; // 导出excel
export const UPDATE_FISH_FRIENDS_SELL_FISH = '/CrowdShareServiceController/updateFishFriendsSellFish'; // 修改渔友出鱼数据