import Input from '../atoms/input'
import Text from '../atoms/text'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const CheckButton = ({ label, ...restOfProps }: Props) => {
  return (
    <div className='flex items-center'>
      <Input
        type='checkbox'
        className='mr-1'
        {...restOfProps}
      />
      <Text text={label} />
    </div>
  )
}

export default CheckButton
