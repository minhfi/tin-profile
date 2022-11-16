import { IObject } from '../object.interface'
import { IModel } from './model'

export interface INotificationModel extends IModel {
  userId?: number
  fromUserId?: number
  refType?: string
  refId?: number
  action?: string
  title?: string
  body?: string
  imageUrl?: string
  data?: IObject
  receivedAt?: string
  seenAt?: string
}
