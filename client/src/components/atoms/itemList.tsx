import { textColor } from '~/constants/colors'

interface ItemListProps {
  children: React.ReactNode
}

const ItemList = ({ children }: ItemListProps) => {
  return <li className={`${textColor} text-lg font-semibold`}>
    {children}
  </li>
}

export default ItemList
