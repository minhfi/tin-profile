import { IObject } from '../object.interface'
import { IModel } from './model'

export interface IFileUploadModel extends IModel {
  userId?: number
  url?: string
  category?: string
  description?: string
  metadata?: IObject
}
