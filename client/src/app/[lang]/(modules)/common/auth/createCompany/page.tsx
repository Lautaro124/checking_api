'use client'
import InputWithLabel from '~/components/molecules/inputWithLabel'
import TextAreaWithLabel from '~/components/molecules/textAreaWithLabel'
import Form from '~/components/organisms/forms'
import service from '~/service/service'
import { useRouter } from 'next/navigation'
import { CREATE_USER } from '~/constants/routes'
import { type Company } from '~/interface/company'
import useForm from '~/hooks/useForm'
import { COMPANY } from '~/constants/coockiesNames'

const CreateCompanyPage = () => {
  const router = useRouter()
  const { errors, handleSubmit } = useForm({})

  const onSubmit = async (formData: FormData) => {
    try {
      const response = await service<Company>({
        path: 'company/',
        method: 'POST',
        body: formData
      })
      if (response !== null || response !== undefined) {
        localStorage.setItem(COMPANY, response.name)
        router.push(CREATE_USER)
      }
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
        onSubmit={handleSubmit((formData) => { void onSubmit(formData) })}
        title="Create your company"
        submitText="Create company"
      >
        <InputWithLabel
          id="comapy"
          label="Company name"
          placeholder='Write your company name here...'
          name="name"
          required
          autoFocus
          error={errors.name}
        />
        <TextAreaWithLabel
          label='Company description'
          placeholder='Write your company description here...'
          name="description"
          required
          error={errors.description}
        />
      </Form>
    </section>
  )
}

export default CreateCompanyPage
