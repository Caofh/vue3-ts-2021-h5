import { Ref } from 'vue'

/* 首页列表数据结构 */
export interface listType {
  create_time: number
  email: string
  role: string
  status: string
  uid: number
  update_time: string
}

export interface homeMethodType {
  repositories: Ref<string[]>
  setUepositor: Function
}
