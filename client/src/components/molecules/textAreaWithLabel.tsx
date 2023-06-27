import { type InputTypeProp } from '~/interface/inputType'
import Label from '../atoms/label'
import TextArea from '../atoms/textarea'

interface TextAreaWithLabelProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  typeStyle?: InputTypeProp
}

const TextAreaWithLabel = ({ label, typeStyle, ...props }: TextAreaWithLabelProps) => (
  <Label label={label}>
    <TextArea
      typeStyle={typeStyle}
      {...props}
    />
  </Label>
)

export default TextAreaWithLabel
