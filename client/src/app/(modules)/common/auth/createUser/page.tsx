'use client'

import InputWithLabel from '~/components/molecules/inputWithLabel'
import TextAreaWithLabel from '~/components/molecules/textAreaWithLabel'
import Form from '~/components/organisms/forms'

const CreateUser= () => {
  return (
    <section className='p-3 mt-16 '>
      <Form title="Create your User" submitText="Create User">
        <InputWithLabel
          id="Usr"
          label="Name"
          placeholder='Write your name here...'
          name="UserName"
        />
         <InputWithLabel
          id="email"
          label="email"
          placeholder='Write your email here...'
          name="email"
        />
        <TextAreaWithLabel
          label='Password'
          placeholder='Create you password'
          name="password"
        />
      </Form>
    </section>
  )
}

export default CreateUser