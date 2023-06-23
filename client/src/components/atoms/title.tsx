interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
}

const Title = ({ text }: TitleProps) => {
  return <h1>{text}</h1>
}

export default Title
