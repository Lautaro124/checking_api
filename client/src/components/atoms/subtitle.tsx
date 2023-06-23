
interface SubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
}

const Subtitle = ({ text }: SubtitleProps) => {
  return (
    <h2
      className="text-3xl font-bold text-gray-800"
    >
      {text}
    </h2>
  )
}

export default Subtitle
