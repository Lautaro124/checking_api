import React from 'react'

interface CellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
}

const Cell = ({ children, ...restOfProps }: CellProps) => {
  return (
    <td
      className='border border-gray-400 px-4 py-2'
      {...restOfProps}
    >
      {children}
    </td>
  )
}

export default Cell
