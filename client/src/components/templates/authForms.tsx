import Button from '../atoms/button'
import Header from '../molecules/header'
import InpitWithLabel, { type InputWithLabelProps } from '../molecules/inputWithLabel'
import Form from '../organisms/forms'

interface AuthFormsTemplateProps {
  submitText: string
  title: string
  onSubmit: React.FormEventHandler<HTMLFormElement>
  inputsData: InputWithLabelProps[]
}

const AuthFormsTemplate = ({ inputsData, title, submitText, onSubmit }: AuthFormsTemplateProps) => {
  return (
    <body>
      <Header title="Auth Forms">
        <Button>
          Go Home
        </Button>
      </Header>
      <main>
        <Form onSubmit={onSubmit} title={title} submitText={submitText}>
          {inputsData.map((inputData, index) => (
            <InpitWithLabel
              key={index}
              {...inputData}
            />))}
        </Form>
      </main>
    </body>
  )
}

export default AuthFormsTemplate
