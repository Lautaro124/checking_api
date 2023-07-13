
interface ListProps {
  children: React.ReactNode
  isOrdered?: boolean
  isCol?: boolean
}

const List = ({ children, isOrdered = false, isCol = false }: ListProps) => {
  const className = `flex gap-3 ${isCol ? 'flex-col' : 'flex-row'}`
  if (isOrdered) {
    return <ol className={className}>{children}</ol>
  }

  return <ul className={className}>{children}</ul>
}

export default List
