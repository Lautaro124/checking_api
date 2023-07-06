
interface ListProps {
  children: React.ReactNode
  isOrdered?: boolean
}

const List = ({ children, isOrdered = false }: ListProps) => {
  if (isOrdered) {
    return <ol>{children}</ol>
  }

  return <ul className="flex gap-3">
    {children}
  </ul>
}

export default List
