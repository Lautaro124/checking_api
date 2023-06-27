import { type InputTypeProp } from '~/interface/inputType'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  typeStyle?: InputTypeProp
}

const TextArea = ({ typeStyle, ...restOfProps }: TextAreaProps) => {
  const className = typeStyle === 'line'
    ? 'border-b-2 border-blue-500 border-opacity-50 focus:border-blue-500 focus:ring-0 focus:border-opacity-100 focus:outline-none'
    : 'border-2 border-blue-500 border-opacity-50 focus:border-blue-500 focus:ring-0 focus:border-opacity-100 focus:outline-none'

  return <textarea
    className={className}
    {...restOfProps}
  />
}

export default TextArea
