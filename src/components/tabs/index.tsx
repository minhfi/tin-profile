import { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { SxProps } from '@mui/material'
import { ITab } from 'src/interfaces'

import { STContainer, STTab, STTabs } from './styled'

interface TabsProps {
  tab?: number
  tabs: ITab[]
  setTab?: (value: number) => void
  sx?: SxProps
}

export const Tabs: FC<TabsProps> = (props) => {
  const history = useHistory()
  const path = history.location?.pathname
  const index = props.tabs.findIndex((tab) => tab.path === path)
  const tabIndex = index >= 0 ? index : 0
  const [tab, setTab] = useState(tabIndex || 0)

  const handleChange = (event: React.SyntheticEvent, value: number) => {
    const path = props.tabs[value]?.path
    setTab(value)
    props.setTab && props.setTab(value)

    if (path) {
      setTimeout(() => {
        history.replace(path)
      }, 400)
    }
  }

  useEffect(() => {
    if (props.tab) {
      setTab(props.tab)
    }
  }, [props.tab])

  return (
    <STContainer>
      <STTabs
        value={tab}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        text={props.tabs[tab].title}
        sx={props.sx}
      >
        {props.tabs.map((tab, index) => <STTab key={index} label={tab.title}/>)}
      </STTabs>
    </STContainer>
  )
}
