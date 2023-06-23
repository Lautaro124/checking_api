'use client'
import AuthFormsTemplate from '~/components/templates/authForms'

const LoginPage = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('login')
  }

  return (
    <AuthFormsTemplate
      title="Login"
      submitText="Login"
      onSubmit={onSubmit}
      inputsData={[
        {
          id: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'email'
        },
        {
          id: 'password',
          label: 'Password',
          type: 'password',
          placeholder: 'password'
        }
      ]}
    />
  )
}

export default LoginPage
