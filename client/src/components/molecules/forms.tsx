import Button from '../atoms/button'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
  submitText: string
}

const Form = ({ children, submitText, ...restOfProps }: FormProps) => {
  return (
    <form
      className="flex flex-col space-y-4"
      {...restOfProps}
    >
      {children}
      <Button type="submit">
        {submitText}
      </Button>
    </form>
  )
}

export default Form
