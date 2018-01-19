/**
 * Created by tengteng on 17/12/27.
 */

import axios from '../services/axios';

/**
 * 统一处理所有接口请求
 * 参数对象将会替换axios中默认参数中的键值对，其中可包含：
 * method
 * timeout
 * data
 * headers
 * dataType
 */
const server = {
  getUserInfo(data) {
    return axios('func_user_quaryAll', {
      method: 'get',
      data: data
    });
  },
  getListData(data) {
    return axios('list_query', {
      method: 'get',
      data: data
    });
  },
  getUserlogin(data) {
    return axios('func_user_login', {
      method: 'post',
      data: data,
      // 这边可以复写 headers
      headers: {'Content-Type': 'application/json;charset=UTF-8;'}
    });
  }
};

// getUserInfo(data) {
//   return axios('list_query', {
//     method: 'get',
//     data: data
//   });
// }
// };
export default server;
