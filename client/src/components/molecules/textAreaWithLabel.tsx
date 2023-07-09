import { type InputTypeProp } from '~/interface/inputType'
import Label from '../atoms/label'
import TextArea from '../atoms/textarea'
import Text from '../atoms/text'

interface TextAreaWithLabelProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  typeStyle?: InputTypeProp
  error: string
}

const TextAreaWithLabel = ({ label, typeStyle, error, ...restOfProps }: TextAreaWithLabelProps) => (
  <>
    <Label label={label}>
      <TextArea
        typeStyle={typeStyle}
        {...restOfProps}
      />
    </Label>
    <Text text={error} />
  </>
)

export default TextAreaWithLabel
