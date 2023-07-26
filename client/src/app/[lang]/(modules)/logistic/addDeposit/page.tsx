'use client'

import InputWithLabel from '~/components/molecules/inputWithLabel'
import Form from '~/components/organisms/forms'
import { useRouter } from 'next/navigation'

const AddStoragePage = () => {
  const router = useRouter()

  const navigate = () => {
    router.push('/logistic/dashboard')
  }

  return (
    <section className='pt-4 px-4'>
      <Form title="Add deposit" submitText="Add" onSubmit={(event) => {
        event.preventDefault()
        navigate()
      }}>
        <InputWithLabel
          label="Name"
          name="name"
          required
        />
        <InputWithLabel
          label="Address"
          name="address"
          required
        />
        <InputWithLabel
          label="City"
          name="city"
          required
        />
        <InputWithLabel
          label="Country"
          name="country"
          required
        />
        <InputWithLabel
          label="Postal code"
          name="postalCode"
          required
        />
        <InputWithLabel
          label="Contact name"
          name="contactName"
          required
        />
        <InputWithLabel
          label="Contact phone"
          name="contactPhone"
          required
        />
        <InputWithLabel
          label="Contact email"
          name="contactEmail"
          type='email'
          required
        />
      </Form>
    </section>
  )
}

export default AddStoragePage
