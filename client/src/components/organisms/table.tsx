import { type DataTypeProp } from '~/interface/tableTypes'
import TableBody from '../molecules/tableBody'
import TableHead from '../molecules/tableHead'

interface Data {
  id: string
  value: string
}

interface TableProps {
  data: Data[]
}

const Table = ({ data }: TableProps) => {
  const formatColums = (data: Data[]) => {
    const getFormat = data.map((item) => (item.id))
    const noDuplicates = [...new Set(getFormat)]

    return noDuplicates
  }

  const formatBodyData = (data: Data[]): DataTypeProp[] => {
    const results: DataTypeProp[] = []

    data.forEach((item) => {
      const index = results.findIndex((result) => result.id === item.id)

      if (index === -1) {
        results.push({
          id: item.id,
          cells: [item.value],
          typeCell: 'text'
        })
      } else {
        results[index].cells.push(item.value)
      }
    })

    const indexCelssFormat = results.map((item, index, self) => {
      const getAllCells = self.map((item) => item.cells)
      const cellValues: string[] = []
      getAllCells.forEach((item) => {
        cellValues.push(item[index])
      })
      return {
        ...item,
        cells: cellValues
      }
    })

    return indexCelssFormat
  }

  return (
    <table className='w-full h-auto'>
      <TableHead columns={formatColums(data)} />
      <TableBody data={formatBodyData(data)} />
    </table>
  )
}

export default Table
