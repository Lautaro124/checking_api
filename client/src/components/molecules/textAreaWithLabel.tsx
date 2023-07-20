import Label from '../atoms/label'
import TextArea from '../atoms/textarea'
import Text from '../atoms/text'

interface TextAreaWithLabelProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error: string
}

const TextAreaWithLabel = ({ label, error, ...restOfProps }: TextAreaWithLabelProps) => (
  <>
    <Label label={label}>
      <TextArea
        {...restOfProps}
      />
    </Label>
    {error.length !== 0 ? <Text text={error} /> : null}
  </>
)

export default TextAreaWithLabel
