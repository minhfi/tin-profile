import { AlertColor, SnackbarOrigin } from '@mui/material'
import { Subject } from 'rxjs'
import { EMessage } from 'src/enums'

export interface IMessage {
  id?: number | string
  open?: boolean
  severity: AlertColor
  position?: SnackbarOrigin
  autoHideDuration?: number
  onClick?: (message: IMessage) => any
  content: string
}

export const MessageService = new (
  class _MessageService {
    private id = 0

    readonly message$ = new Subject<IMessage>()

    push(message: string | IMessage) {
      const defaultMessage: IMessage = {
        id: ++this.id,
        open: true,
        severity: EMessage.SUCCESS,
        position: {
          vertical: 'top',
          horizontal: 'right'
        },
        autoHideDuration: 5000,
        content: message as string
      }

      if (typeof message === 'string') {
        return this.message$.next(defaultMessage)
      }

      this.message$.next({
        ...defaultMessage,
        ...message
      })
    }
  }
)()
