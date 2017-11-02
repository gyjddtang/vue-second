/**
 * Created by Mili on 2017/11/2.
 */

import xAxios from '../units/xAxios'

function getList (data) {
  return xAxios({
    url: '/wisdomradio/pc/manage/banner/initList',
    method: 'POST',
    data: data
  })
}

export { getList }
