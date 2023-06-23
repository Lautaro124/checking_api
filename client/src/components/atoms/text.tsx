interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string
}

const Text = ({ text }: TextProps) => {
  return <p>{text}</p>
}

export default Text
