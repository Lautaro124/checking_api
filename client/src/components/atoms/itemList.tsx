
interface ItemListProps {
  children: React.ReactNode
}

const ItemList = ({ children }: ItemListProps) => {
  return <li>{children}</li>
}

export default ItemList
