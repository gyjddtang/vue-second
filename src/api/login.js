import xAxios from '../units/xAxios'

function signIn (data) {
  return xAxios({
    url: '/wisdomradio/pc/manage/login/doLogin',
    method: 'POST',
    data: data
  })
}

export { signIn }

