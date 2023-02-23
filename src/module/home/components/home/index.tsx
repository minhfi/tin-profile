import { FC, useState } from 'react'
import JobPosition from 'src/images/job-position.png'
import NameSite from 'src/images/name-site.png'
import Avatar from 'src/images/avatar.png'
import Logo from 'src/images/logo.png'

import { STHeader, STContainer } from './styled'
import { Company } from '../company'
import { About } from '../about'
import { Work } from '../work'
import { Profile } from '../profile'
import { WorkFlow } from '../work-flow'
import { Sidebar } from '../sidebar'
import { Contact } from '../contact'

export const Home: FC = () => {
  const [section, setSection] = useState<number>(0)

  const handleRedirect = (url?: string) => {
    if (url) {
      return window.open(url)
    }

    return window.open('https://www.behance.net/dangtinnguyen1208')
  }

  const handleScroll = () => {
    const element = document.getElementById('home')
    const scrollTop = element?.scrollTop || 0

    switch (true) {
      case scrollTop < 300:
        return setSection(0)
      case scrollTop > 300 && scrollTop < 1500:
        return setSection(1)
      case scrollTop > 1500 && scrollTop < 3700:
        return setSection(2)
      case scrollTop > 3700 && scrollTop < 4800:
        return setSection(3)
      case scrollTop > 4800 && scrollTop < 6200:
        return setSection(4)
      case scrollTop > 6200 && scrollTop < 8200:
        return setSection(5)
      case scrollTop > 8200:
        return setSection(6)

      default:
        return setSection(0)
    }
  }

  const handleScrollTop = (top: number) => {
    const element = document.getElementById('home')

    return element?.scrollTo({
      top,
      behavior: 'smooth'
    })
  }

  return (
    <STContainer id="home" onScroll={handleScroll}>
      <Sidebar section={section} handleScrollTop={handleScrollTop}/>
      <STHeader>
        <img src={Logo} alt="logo"/>
        <img src={NameSite} alt="name site"/>
        <img src={JobPosition} alt="job position"/>
        <img src={Avatar} alt="avatar"/>
      </STHeader>

      <About handleScrollTop={handleScrollTop}/>
      <Work handleRedirect={handleRedirect}/>
      <Company/>
      <Profile handleScrollTop={handleScrollTop}/>
      <WorkFlow/>
      <Contact handleRedirect={handleRedirect}/>
    </STContainer>
  )
}
