import axios from 'axios';
import { Notification } from 'element-ui';
import router from '../router/index';

//axios默认配置
axios.defaults.timeout = 20000;
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

function xAxios(options) {
  let opts = {...options};
  opts.method = opts.method || 'GET';
  opts.data = opts.method == 'GET' || opts.method == 'DELETE' ? null : ( opts['Content-Type'] ? JSON.stringify(opts.data) : opts.data );
  opts.headers = {}
  opts.headers['Content-Type'] = opts.method == 'GET' || opts.method == 'DELETE' ? null : ( opts['Content-Type'] || 'application/x-www-form-urlencoded' );
  let sessionId = sessionStorage.getItem('sessionId')
  if (sessionId) {
    if (!opts.url.match(/upload/g)) {
      opts.headers['sid'] = sessionId
    } else {
      let token = sessionStorage.getItem('token')
      opts.url = `${opts.url}?token=${sessionId}`
    }
  }

  return new Promise((resolve, reject) => {
    axios(opts)
      .then(respone => {
        if(respone.data.succeed) {
          resolve(respone.data);
        } else {
          Notification.error({
            title: '提示',
            message: respone.data.msg
          });

          if(respone.data.code == 401) {
            setTimeout(() => {
              sessionStorage.clear();
              router.replace({name: 'Login'});
            }, 1500);
          }
          reject(respone.data);
        }
      })
      .catch(function (error) {
        console.log(error.response);
        reject(error.response);
        Notification.error({
          title: '错误',
          message: '服务器异常'
        });
      });
  });
}

export default xAxios;
