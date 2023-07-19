interface SubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
}

const Subtitle = ({ text }: SubtitleProps) => {
  return (
    <h2 className='text-xl font-bold text-black dark:text-white'>
      {text}
    </h2>
  )
}

export default Subtitle
