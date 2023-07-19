interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
}
const Title = ({ text }: TitleProps) => {
  return <h1 className='text-2xl font-bold text-start text-black dark:text-white'>
    {text}
  </h1>
}

export default Title
