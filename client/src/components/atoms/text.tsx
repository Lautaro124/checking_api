interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string
  isError?: boolean
}

const Text = ({ text, isError = false }: TextProps) => {
  if (isError) {
    return <p className='text-base text-[#EB5757] dark:text-[#EB5757]'>
      {text}
    </p>
  }

  return <p className='text-base text-[#707578] dark:text-[#E8E8EB]'>
    {text}
  </p>
}

export default Text
