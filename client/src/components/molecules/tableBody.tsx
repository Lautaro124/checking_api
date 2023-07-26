import React from 'react'
import Cell from '../atoms/cell'
import type { DataTypeProp } from '~/interface/tableTypes'
import Text from '../atoms/text'

interface TableBodyProps {
  data: DataTypeProp[]
}

const TableBody = ({ data }: TableBodyProps) => {
  return (
    <tbody>
      {data.map(({ id, cells }) => (
        <tr key={id}>
          {cells.map((cell, index) => (
            <Cell key={index}>
              <Text text={cell} />
            </Cell>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
