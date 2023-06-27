import Label from '../atoms/label'
import Input from '../atoms/input'
import { type InputTypeProp } from '~/interface/inputType'

export interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  inputType?: InputTypeProp
}

const InpitWithLabel = ({ inputType, label, ...restOfProps }: InputWithLabelProps) => {
  return (
    <Label
      label={label}
    >
      <Input
        styleProp={inputType}
        {...restOfProps}
      />
    </Label>
  )
}

export default InpitWithLabel
