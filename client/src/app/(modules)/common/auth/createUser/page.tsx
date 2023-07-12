'use client'
import type { ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'

import InputWithLabel from '~/components/molecules/inputWithLabel'
import Form from '~/components/organisms/forms'
import useForm from '~/hooks/useForm'
import service from '~/service/service'
import { formInputs, validationPassword } from './utils'
import { COMPANY } from '~/constants/coockiesNames'
import { ADMINISTRATION } from '~/constants/routes'
import type { User } from '~/interface/user'

const CreateUser = () => {
  const router = useRouter()
  const { errors, validate, handleSubmit } = useForm({
    password: validationPassword
  })

  const onSubmit = async (formData: FormData) => {
    try {
      const companyName = localStorage.getItem(COMPANY)
      formData.append('company_name', companyName ?? '')
      formData.append('type_user_id', '1')

      const response = await service<User>({
        path: 'auth/',
        method: 'POST',
        body: formData
      })
      if (response instanceof Error) {
        throw new Error(response.message)
      }
      if (response.uuid !== undefined) {
        router.push(ADMINISTRATION)
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error('An unknown error occurred')
    }
  }

  return (
    <section className='p-3 mt-16 w-screen items-center justify-items-center'>
      <Form className='w-[250px]'
        onSubmit={handleSubmit((formData) => { void onSubmit(formData) })}
        title='Register'
        submitText='Create your user'
      >
        {formInputs.map(input => (
          <InputWithLabel
            key={input.id}
            label={input.label}
            placeholder={input.placeholder}
            name={input.name}
            type={input.type}
            required={input.reqired}
            error={errors[input.name]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => { validate(e.target.name, e.target.value) }}
          />
        ))}
      </Form>
    </section>
  )
}

export default CreateUser
