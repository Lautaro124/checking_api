import Label from '../atoms/label'
import Input from '../atoms/input'
import { type InputTypeProp } from '~/interface/inputType'

export interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  inputType?: InputTypeProp
}

const InpitWithLabel = ({ id, label, ...restOfProps }: InputWithLabelProps) => {
  return (
    <Label
      label={label}
      htmlFor={id}
    >
      <Input
        styleProp='line'
        id={id}
        {...restOfProps}
      />
    </Label>
  )
}

export default InpitWithLabel
