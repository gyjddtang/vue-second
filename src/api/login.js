import xAxios from '../units/xAxios'

function signIn (data) {
  return xAxios({
    url: '/mockapi/wisdomradio/pc/manage/login/doLogin',
    method: 'POST',
    data: data
  })
}

export { signIn }

