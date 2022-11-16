import { passwordStrength } from 'check-password-strength'

export enum EPasswordRule {
  LENGTH = 0,
  CHARACTER = 1,
  CHARACTER_NUMBER = 2,
  SYMBOL = 3,
  NUMBER = 4,
  UPPERCASE = 5
}

export class PasswordUtil {
  static checkStrength(password: ArgumentTypes<typeof passwordStrength>[0]) {
    return passwordStrength(password)
  }

  static isPassedRule(result: ReturnType<typeof passwordStrength>, rule: EPasswordRule | 'all' = 'all'): boolean {
    if (rule === 'all') {
      return result.length >= 8 && result.contains.length === 4
    }

    switch (rule) {
      case EPasswordRule.LENGTH:
        return result.length >= 8
      case EPasswordRule.CHARACTER:
        return result.contains.includes('lowercase') && result.contains.includes('uppercase')
      case EPasswordRule.CHARACTER_NUMBER:
        return result.contains.includes('number') && (result.contains.includes('lowercase') || result.contains.includes('uppercase'))
      case EPasswordRule.SYMBOL:
        return result.contains.includes('symbol')
      case EPasswordRule.NUMBER:
        return result.contains.includes('number')
      case EPasswordRule.UPPERCASE:
        return result.contains.includes('uppercase')
      default:
        return false
    }
  }

  private _password: string
  private _result?: ReturnType<typeof passwordStrength>
  constructor(password: string) {
    this._password = password
  }

  checkStrength() {
    if (!this._result) {
      this._result = PasswordUtil.checkStrength(this._password)
    }
    return this._result
  }

  isPassedRule(rule: ArgumentTypes<typeof PasswordUtil.isPassedRule>[1]) {
    return PasswordUtil.isPassedRule(this.checkStrength(), rule)
  }

  isPassedRules(...rules: [ArgumentTypes<typeof PasswordUtil.isPassedRule>[1]]) {
    for (const rule of rules) {
      if (!PasswordUtil.isPassedRule(this.checkStrength(), rule)) {
        return false
      }
    }
    return true
  }
}
