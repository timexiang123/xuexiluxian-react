import { notification } from 'antd'
import dayjs from 'dayjs'
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
export function formateDateTime(time) {
  return dayjs(time).format('YYYY-MM-DD hh:mm:ss')
}
