
import { object, ref, string } from 'yup'

const Pattern: Record<string, RegExp> = {
  // mustHaveLetterAndNumber: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d].+$/,
  // mustHaveLowercaseAndUppercase: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d].+$/,
  // mustHaveSpecialCharacter: /^(?=.*?[#?!@$%^&*-]).+$/,
  mustHaveNumber: /^(?=.*\d).+$/,
  mustHaveUppercase: /^(?=.*[A-Z]).+$/
}

export const signinSchema = object().shape({
  email: string()
    .matches(
      // eslint-disable-next-line
      /^(?!.+@(gmail|google|yahoo|outlook|hotmail|msn)\..+)(.+@.+\..+)$/,
      'Invalid email or password. Your email must be  a valid domain.'
    )
    .required('This field is required.'),
  password: string()
    .required('Please enter your password.')
    .min(8, 'Password must be at least 8 characters.')
    .test(
      'at-least-one-uppercase',
      'Password must be at least 1 uppercase.',
      (password) => password ? Pattern.mustHaveUppercase.test(password) : false)
    .test(
      'at-least-one-number',
      'Password must be at least 1 number',
      (password) => password ? Pattern.mustHaveNumber.test(password) : false)
})

export const signupSchema = object().shape({
  email: string()
    .matches(
      // eslint-disable-next-line
      /^(?!.+@(gmail|google|yahoo|outlook|hotmail|msn)\..+)(.+@.+\..+)$/,
      'Invalid email or password. Your email must be  a valid domain.'
    )
    .required('This field is required.')
})

export const resetPasswordSchema = object().shape({
  newPassword: string()
    .required('Please enter your password.')
    .min(8, 'Password must be at least 8 characters.')
    .test(
      'at-least-one-uppercase',
      'Password must be at least 1 uppercase.',
      (password) => password ? Pattern.mustHaveUppercase.test(password) : false)
    .test(
      'at-least-one-number',
      'Password must be at least 1 number',
      (password) => password ? Pattern.mustHaveNumber.test(password) : false),
  confirmPassword: string()
    .required('Please retype your password.')
    .when('newPassword', (val, schema) => {
      return val
        ? string()
          .required('Please retype your password.')
          .oneOf([ref('newPassword'), ''], 'The Password you provided doesn’t match. Wanna try that again?')
        : schema
    })
})
