interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  label: string
}

const Label = ({ children, label, ...restOfProps }: LabelProps) => {
  return (
    <label
      className='text-sm font-bold flex flex-col  text-[#707578] dark:text-[#E8E8EB]'
      {...restOfProps}
    >
      {label}
      {children}
    </label>
  )
}

export default Label
