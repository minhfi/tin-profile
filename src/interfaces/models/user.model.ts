import { IFileUploadModel } from './file-upload.model'
import { IModel } from './model'

export interface IUserModel extends IModel {
  email?: string
  username?: string
  password?: string
  userPhoneNo?: string
  firstName?: string
  lastName?: string
  fullName?: string
  bio?: string
  pfp?: IFileUploadModel
  pfv?: IFileUploadModel
  lookupId?: string
}
