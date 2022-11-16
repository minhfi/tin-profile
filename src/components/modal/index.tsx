import { FC } from 'react'
import { Box } from '@mui/material'
import { getLayoutIsLoading, getModal } from 'src/store/selectors'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux'
import { resetModal } from 'src/store/actions'
import { IconClose } from 'src/icons'

import { STClose, STModal } from './styled'

export const Modal: FC = () => {
  const dispatch = useAppDispatch()
  const modal = useAppSelector(getModal)
  const loading = useAppSelector(getLayoutIsLoading)

  const handleClose = () => {
    if (loading) return
    return dispatch(resetModal())
  }

  return (
    <STModal onClose={handleClose} open={!!modal.open}>
      <Box position="relative" m={2}>
        <STClose isOpen={!!modal.open} onClick={handleClose}>
          <IconClose/>
        </STClose>
        {modal.content}
      </Box>
    </STModal>
  )
}
