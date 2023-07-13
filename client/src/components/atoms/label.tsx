import { textColor } from '~/constants/colors'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  label: string
}

const Label = ({ children, label, ...restOfProps }: LabelProps) => {
  return (
    <label
      className={`text-sm font-bold mb-2 flex flex-col ${textColor}`}
      {...restOfProps}
    >
      {label}
      {children}
    </label>
  )
}

export default Label
