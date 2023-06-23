import Button from '../atoms/button'
import Subtitle from '../atoms/subtitle'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string
  children: React.ReactNode
  submitText: string
}

const Form = ({ children, submitText, title, ...restOfProps }: FormProps) => {
  return (
    <form
      className="flex flex-col space-y-4"
      {...restOfProps}
    >
      <Subtitle text={title} />
      {children}
      <Button type="submit">
        {submitText}
      </Button>
    </form>
  )
}

export default Form
