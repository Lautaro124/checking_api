import { textColor } from '~/constants/colors'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
}
const Title = ({ text }: TitleProps) => {
  return <h1 className={`text-2xl font-bold text-start ${textColor}`}>
    {text}
  </h1>
}

export default Title
