import { get } from 'config/http'

// 设备列表
export const getMyCcoList = (p) => get(`/mcu/getMyCcoList`, p)
