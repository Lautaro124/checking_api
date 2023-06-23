interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  label: string
}

const Label = ({ children, label, ...restOfProps }: LabelProps) => {
  return (
    <label
      className="block text-gray-700 text-sm font-bold mb-2 flex flex-col"
      {...restOfProps}
    >
      {label}
      {children}
    </label>
  )
}

export default Label
