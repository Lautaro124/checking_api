import Label from '../atoms/label'
import Input from '../atoms/input'
import type { InputWithLabelProps } from '~/interface/inputType'
import Text from '../atoms/text'

const InpitWithLabel = ({ inputType, label, error, ...restOfProps }: InputWithLabelProps) => {
  return (
    <>
      <Label label={label}>
        <Input {...restOfProps} />
      </Label>
      <Text text={error ?? ''} />
    </>
  )
}

export default InpitWithLabel
