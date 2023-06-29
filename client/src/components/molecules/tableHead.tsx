import { type ColumTypeProp } from '~/interface/tableTypes'
import HeaderCell from '../atoms/headerCell'

interface TableHeadProps {
  columns: ColumTypeProp
}

const TableHead = ({ columns }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <HeaderCell key={column.id}>{column.label}</HeaderCell>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
