interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button = ({ children, ...restOfProps }: ButtonProps) => {
  return (
    <button
      className="bg-[#0085FF] hover:bg-blue-700 text-[#FFFFFF] font-bold py-2 px-4 rounded-lg"
      {...restOfProps}
    >
      {children}
    </button>
  )
}

export default Button
