import { textColor } from '~/constants/colors'

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string
}

const Text = ({ text }: TextProps) => {
  return <p className={`text-base ${textColor}`}>
    {text}
  </p>
}

export default Text
