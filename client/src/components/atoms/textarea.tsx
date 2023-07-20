interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

const TextArea = ({ ...restOfProps }: TextAreaProps) => {
  return <textarea
    className='py-2 px-4 rounded-md border border-[rgba(0, 0, 0, 0.05)] dark:border-[rgba(255, 255, 255, 0.85)] selection:bg-blue-900 bg-transparent focus:border-[#0185FE] focus:outline-none'
    {...restOfProps}
  />
}

export default TextArea
