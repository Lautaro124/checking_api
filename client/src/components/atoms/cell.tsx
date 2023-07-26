import React from 'react'

interface CellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
}

const Cell = ({ children, ...restOfProps }: CellProps) => {
  return (
    <td
      className=''
      {...restOfProps}
    >
      {children}
    </td>
  )
}

export default Cell
