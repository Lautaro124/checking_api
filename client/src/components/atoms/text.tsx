interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string
}

const Text = ({ text }: TextProps) => {
  return <p className='text-base text-[#707578] dark:text-[#E8E8EB]'>
    {text}
  </p>
}

export default Text
