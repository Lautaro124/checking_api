'use client'

import AuthFormsTemplate from '~/components/templates/authForms'

const CreateCompanyPage = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(event.currentTarget.company.value)
    console.log('create company')
  }

  return (
    <AuthFormsTemplate
      title="Create comapny"
      submitText="Create your company"
      onSubmit={onSubmit}
      inputsData={[
        {
          id: 'company',
          label: 'Company name',
          type: 'text',
          placeholder: 'Write your company name here'
        }
      ]}
    />
  )
}

export default CreateCompanyPage
