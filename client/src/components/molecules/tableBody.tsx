import React from 'react'
import Cell from '../atoms/cell'
import type { ColumTypeProp, DataTypeProp } from '~/interface/tableTypes'

interface TableBodyProps {
  data: DataTypeProp
  columns: ColumTypeProp
}

const TableBody = ({ data, columns }: TableBodyProps) => {
  return (
    <tbody>
      {data.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => (
            <Cell key={column.id}>{row[column.id]}</Cell>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
