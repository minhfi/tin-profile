
import { FC, SVGProps } from 'react'
import { IconDashboard } from 'src/icons'
import { IFirebaseNotification } from 'src/services/notification.service'

interface MenuConfig {
  title: string
  route: string
  icon: FC<SVGProps<SVGSVGElement>>
  watchNoticeKey?: keyof IFirebaseNotification
}

export const menuConfig: MenuConfig[] = [
  {
    title: 'Dashboard',
    route: '/dashboard',
    icon: IconDashboard,
    watchNoticeKey: 'countLikes'
  }
]
