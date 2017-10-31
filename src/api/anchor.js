/**
 * Created by Mili on 2017/10/30.
 */

import xAxios from '../units/xAxios'

function getList (data) {
  return xAxios({
    url: '/wisdomradio/pc/manage/tpuser/list',
    method: 'POST',
    data
  })
}

export { getList }
