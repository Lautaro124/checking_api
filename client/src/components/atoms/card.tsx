interface CardProps {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <div className='rounded-xl shadow-md p-3 w-auto h-auto lg:border border-opacity-20 lg:border-[#808080] lg:dark:border-[#9C9C9C]'>
      {children}
    </div>
  )
}

export default Card
