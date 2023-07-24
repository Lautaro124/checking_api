enum InputsNames {
  username = 'username',
  email = 'email',
  password = 'password'
}

export const formInputs = [
  {
    id: InputsNames.username,
    label: 'User name',
    placeholder: 'Write your name here...',
    name: InputsNames.username,
    reqired: true
  },
  {
    id: InputsNames.email,
    label: 'Email',
    placeholder: 'Write your email here...',
    name: InputsNames.email,
    reqired: true
  },
  {
    id: InputsNames.password,
    label: 'Pasword',
    placeholder: 'Create your password',
    name: InputsNames.password,
    type: InputsNames.password,
    reqired: true
  }
]

export const validationPassword = (value: string) => {
  const message: string[] = []
  if (value.length < 8) {
    message.push('Password must be at least 8 characters long')
  }
  if (!/[0-9]/.test(value)) {
    message.push('Password must contain at least one number')
  }
  if (!/[A-Z]/.test(value)) {
    message.push('Password must contain at least one uppercase letter')
  }
  return message.length !== 0 ? message.join(', \n').replace(/, ([^,]*)$/, ' and $1') : ''
}
