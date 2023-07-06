'use client'
import { type FormEvent } from 'react'
import InputWithLabel from '~/components/molecules/inputWithLabel'
import TextAreaWithLabel from '~/components/molecules/textAreaWithLabel'
import Form from '~/components/organisms/forms'

const CreateCompanyPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { companyName, companyDescription } = event.currentTarget

    console.log({
      companyName: companyName.value,
      companyDescription: companyDescription.value
    })
  }

  return (
    <section className='p-3 mt-16 '>
      <Form
        onSubmit={onSubmit}
        title="Create your company"
        submitText="Create company"
      >
        <InputWithLabel
          id="comapy"
          label="Company name"
          placeholder='Write your company name here...'
          name="companyName"
        />
        <TextAreaWithLabel
          label='Company description'
          placeholder='Write your company description here...'
          name="companyDescription"
        />
      </Form>
    </section>
  )
}

export default CreateCompanyPage
