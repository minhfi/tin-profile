import { FC, ReactNode, useEffect, useState } from 'react'
import { takeUntil } from 'rxjs'
import { useUnsubscribe } from 'src/hooks/useUnsubscribe'
import { IFirebaseNotification, NotificationService } from 'src/services/notification.service'
import { Badge, ISize } from '../badge'

export const NoticeBadge: FC<{
  watchKey: keyof IFirebaseNotification
  children?: ReactNode
  type?: keyof ISize
}> = (props) => {
  const unsubscribe$ = useUnsubscribe()
  const [count, setCount] = useState(0)

  useEffect(() => {
    NotificationService.firebaseNotification$
      .pipe(takeUntil(unsubscribe$))
      .subscribe((data) => setCount(data[props.watchKey] ?? 0))
  }, [props.watchKey])

  return (
    <Badge {...props} content={count}>
      {props.children}
    </Badge>
  )
}
