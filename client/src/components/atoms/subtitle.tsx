import { textColor } from '~/constants/colors'

interface SubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
}

const Subtitle = ({ text }: SubtitleProps) => {
  return (
    <h2 className={`text-xl font-bold ${textColor}`}>
      {text}
    </h2>
  )
}

export default Subtitle
