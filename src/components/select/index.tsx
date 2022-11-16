import { FC, useEffect, useState } from 'react'
import { Box, ClickAwayListener, Typography } from '@mui/material'
import { ReactComponent as ArrowDownIcon } from 'src/icons/i-arrow-down.svg'
import { IObject } from 'src/interfaces'

import { STOptionIem, STOption, STLabel } from './styled'

export interface ISelectProps {
  width?: number
  value?: IObject
  placeholder?: string
  options?: IObject[]
  onChange?: (option: IObject) => void
}

export const Select: FC<ISelectProps> = ({ placeholder, options, onChange, width, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [option, setOption] = useState<IObject | null>(null)

  const handleIsOpenDropdown = () => setIsOpen(!isOpen)

  const handleSelect = (option: IObject) => {
    setOption(option)
    onChange && onChange(option)
  }

  useEffect(() => {
    if (props.value) {
      setOption(props.value)
    }
  }, [props.value])

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <Box position="relative">
        <STLabel width={width} onClick={handleIsOpenDropdown}>
          <Typography variant="body2-bold">
            {option?.label}
          </Typography>
          <ArrowDownIcon/>
        </STLabel>

        {isOpen && (
          <STOption>
            {options?.map(item => (
              <STOptionIem key={item.value} isActive={(item.value === option?.value)} onClick={() => handleSelect(item)}>
                <Typography variant={item.value === option?.value ? 'body2-bold' : 'body2-regular'}>
                  {item.label}
                </Typography>
              </STOptionIem>
            ))}
          </STOption>
        )}
      </Box>
    </ClickAwayListener>

  )
}

Select.defaultProps = {
  width: 240,
  options: [],
  placeholder: 'Select a option'
}
