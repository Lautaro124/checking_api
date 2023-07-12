import { type InputTypeProp } from '~/interface/inputType'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  styleProp?: InputTypeProp
}

const Input = ({ styleProp, ...restOfProps }: InputProps) => {
  const className = styleProp === 'line'
  ? 'rounded w-full'
  : 'rounded w-full'

  return <input className={className} {...restOfProps} />
}

export default Input
