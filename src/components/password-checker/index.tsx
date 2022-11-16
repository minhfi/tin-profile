import { FC, HTMLProps, useMemo } from 'react'
import { EPasswordRule, PasswordUtil } from 'src/utils/password.util'
import { STPasswordCheckItem, STPasswordCheckList } from './styled'

export const PasswordChecker: FC<{ password: string } & HTMLProps<HTMLUListElement>> = props => {
  const { password } = props
  const passwordUtil = useMemo(
    () => new PasswordUtil(password),
    [password]
  )

  return (
    <STPasswordCheckList>
      <STPasswordCheckItem
        isActive={passwordUtil.isPassedRule(EPasswordRule.NUMBER)}
        isFailed={!!password?.length && !passwordUtil.isPassedRule(EPasswordRule.NUMBER)}
      >
        One number
      </STPasswordCheckItem>
      <STPasswordCheckItem
        isActive={passwordUtil.isPassedRule(EPasswordRule.UPPERCASE)}
        isFailed={!!password?.length && !passwordUtil.isPassedRule(EPasswordRule.UPPERCASE)}
      >
        One uppercase letter
      </STPasswordCheckItem>
      <STPasswordCheckItem
        isActive={passwordUtil.isPassedRule(EPasswordRule.LENGTH)}
        isFailed={!!password?.length && !passwordUtil.isPassedRule(EPasswordRule.LENGTH)}
      >
        8 characters minimum
      </STPasswordCheckItem>
    </STPasswordCheckList>
  )
}
