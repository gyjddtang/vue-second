/**
 * Created by Mili on 2017/10/11.
 */

// 唯一key值
function getKey () {
  let res = ''
  for (let i = 0; i < 32; i++) {
    res = res + Math.floor(Math.random() * 16).toString(16)
  }
  return res
}

// id key
function rowKey (row) {
  return row.id
}

/**
 * 获取元素所有级联样式
 * @param ele: 元素
 * @param attr: 所需要获取的样式
 * @returns 单位为 px 的数值
 */
function getStyle (ele, attr) {
  let allStyle
  let htmlFont
  if (document.documentElement.currentStyle) {   // IE
    allStyle = ele.currentStyle
    htmlFont = document.documentElement.currentStyle.fontSize
  } else {
    allStyle = document.defaultView.getComputedStyle(ele, null)
    htmlFont = document.defaultView.getComputedStyle(document.documentElement, null).fontSize
  }
  let attribute = allStyle[attr]   // 获取到元素样式的单位 IE: rem; 其它: px
  if (attribute) {
    // rem要进行单位换算，px直接省略，返回纯数值
    return attribute.match('rem') ? Math.round(parseFloat(attribute) * parseFloat(htmlFont)) : parseFloat(attribute)
  } else {
    return allStyle   // 查无此样式，return allStyle
  }
}

/**
 * 判断参数是否是其中之一
 * @param value：要验证的参数
 * @param validList：参数的集合，数组
 * @returns {boolean}
 */
function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

// 十六进制随机颜色
function randomColor () {
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16)
  }
  return color
}

// sessionStorage
function getStorage (item) {
  return sessionStorage.getItem(item)
}

function setStorage (item, value) {
  sessionStorage.setItem(item, value)
}

function clearStorage () {
  sessionStorage.clear()
}

/**
 * 数据格式处理
 */
function moneyFormat (money) {
  return money ? `¥${(Number(money) / 100).toFixed(2)}` : '¥0.00'
}

function nullFormat (val, format = 0) {
  return val ? `${val}` : format
}

function secondsFormat (s) {
  s = Math.abs(parseInt(s))
  let m = 0
  let h = 0
  if (s >= 3600) {
    h = parseInt(s / 3600)
    m = parseInt(s % 3600 / 60)
    s = s % 3600 % 60
  } else {
    m = parseInt(s / 60)
    s = s % 60
  }
  s = s < 10 ? `0${s}` : s
  m = m < 10 ? `0${m}` : m
  h = h < 10 ? `0${h}` : h
  return h === '00' ? `${m}:${s}` : `${h}:${m}:${s}`
}

/**
 * dateFormat
 * @param stamp： 时间戳
 * @param isYear： ‘year’: 只返回年月日
 * @returns {*}
 */
function dateFormat (stamp, isYear) {
  if (!stamp) return
  let date = new Date(stamp)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate()
  d = d < 10 ? '0' + d : d

  let h = date.getHours()
  h = h < 10 ? '0' + h : h
  let mi = date.getMinutes()
  mi = mi < 10 ? '0' + mi : mi
  let s = date.getSeconds()
  s = s < 10 ? '0' + s : s

  if (isYear === 'year') {
    return y + m + d
  } else {
    return y + '/' + m + '/' + d + '  ' + h + ':' + mi + ':' + s
  }
}

// 常见特殊符号转义字符
function strEscape (str) {
  str = str.replace(/&ldquo;/g, '“')
  str = str.replace(/&rdquo;/g, '”')
  str = str.replace(/&lsquo;/g, '‘')
  str = str.replace(/&rsquo;/g, '’')
  str = str.replace(/&quot;/g, '"')
  str = str.replace(/&#039;/g, "'")
  str = str.replace(/&lt;/g, '<')
  str = str.replace(/&gt;/g, '>')
  str = str.replace(/&hellip;&hellip;/g, '……')
  str = str.replace(/&mdash;&mdash;/g, '——')
  str = str.replace(/&amp;/g, '&')
  return str
}

export {
  strEscape,
  getKey,
  dateFormat,
  secondsFormat,
  getStyle,
  moneyFormat,
  oneOf,
  randomColor,
  getStorage,
  setStorage,
  clearStorage,
  nullFormat,
  rowKey
}
