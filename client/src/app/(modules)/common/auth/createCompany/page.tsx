'use client'
import { type FormEvent } from 'react'
import InputWithLabel from '~/components/molecules/inputWithLabel'
import TextAreaWithLabel from '~/components/molecules/textAreaWithLabel'
import Form from '~/components/organisms/forms'
import service from '~/service/service'

const CreateCompanyPage = () => {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      const company = new FormData(event.currentTarget)
      const response = await service({
        path: '/api/v1/company/',
        method: 'POST',
        body: company
      })
      console.log(response)
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error('An unknown error occurred')
    }
  }

  return (
    <section className='p-3 mt-16 '>
      <Form
        onSubmit={(event) => { void onSubmit(event) }}
        title="Create your company"
        submitText="Create company"
      >
        <InputWithLabel
          id="comapy"
          label="Company name"
          placeholder='Write your company name here...'
          name="name"
        />
        <TextAreaWithLabel
          label='Company description'
          placeholder='Write your company description here...'
          name="description"
        />
      </Form>
    </section>
  )
}

export default CreateCompanyPage
