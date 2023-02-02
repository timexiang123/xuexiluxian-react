import { notification, Modal } from 'antd'
import dayjs from 'dayjs'
var duration = require('dayjs/plugin/duration')
dayjs.extend(duration)
export function errorNotifiy(description, placement = 'topRight') {
  notification.error({
    duration: 2,
    message: '错误消息提示',
    description,
    placement
  })
}
export function successNotifiy(description, placement = 'topRight') {
  notification.success({
    duration: 2,
    message: '成功消息提示',
    description,
    placement
  })
}
export function confirmDialog(title, content, okCb, cancelCb) {
  Modal.confirm({
    centered: true,
    closable: true,
    title,
    content,
    onCancel: cancelCb,
    onOk: okCb
  })
}
export function formateDateTime(time) {
  return dayjs(time).format('YYYY-MM-DD hh:mm:ss')
}
export function covertTimeToDays(time) {
  return Math.floor(dayjs.duration(time).asDays())
}
