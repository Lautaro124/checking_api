'use client'

import InputWithLabel from '~/components/molecules/inputWithLabel'
import TextAreaWithLabel from '~/components/molecules/textAreaWithLabel'
import Form from '~/components/organisms/forms'

const CreateCompanyPage = () => {
  return (
    <section className='p-3 mt-16 '>
      <Form title="Create your company" submitText="Create company">
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
