'use client'
import CheckButton from '~/components/molecules/checkButton'
import InputWithLabel from '~/components/molecules/inputWithLabel'
import Form from '~/components/organisms/forms'
import useForm from '~/hooks/useForm'
import service from '~/service/service'

const LoginPage = () => {
  const { handleSubmit } = useForm({})

  const onSubmit = async (formData: FormData) => {
    console.log(formData)
    try {
      const response = await service({
        path: 'auth/login',
        method: 'POST',
        body: formData
      })
      console.log(response)
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      console.log(error)
    }
  }

  return (
    <section className='p-3 mt-16'>
      <Form
        onSubmit={handleSubmit((formData) => { void onSubmit(formData) })}
        title="Login"
        submitText="Login"
      >
        <InputWithLabel
          label="Email"
          placeholder="Email"
          name="email"
          type="email"
          required
          autoFocus
        />
        <InputWithLabel
          label="Password"
          placeholder="Password"
          name="password"
          type="password"
          required
        />
        <CheckButton label="Remember me" name="remember" />
      </Form>
    </section>
  )
}

export default LoginPage
