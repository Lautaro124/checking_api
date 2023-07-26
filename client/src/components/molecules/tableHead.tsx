import HeaderCell from '../atoms/headerCell'
import Subtitle from '../atoms/subtitle'

interface TableHeadProps {
  columns: string[]
}

const TableHead = ({ columns }: TableHeadProps) => {
  return (
    <thead className=''>
      <tr className=''>
        {columns.map((column, index) => (
          <HeaderCell key={index}>
            <Subtitle text={column} />
          </HeaderCell>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
