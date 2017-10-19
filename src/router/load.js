/**
 * Created by Mili on 2017/10/18.
 */

function _import (file) {
  return () => import('@/views/' + file + '.vue')   // 路由懒加载
}

function _require (file) {
  return require('@/assets/menuIcon/' + file)
}

export { _import, _require }
