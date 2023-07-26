
interface HeaderCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
}

const HeaderCell = ({ children, ...restOfProps }: HeaderCellProps) => (
  <th
    className='p-2 bg-slate-500'
    {...restOfProps}
  >
    {children}
  </th>
)

export default HeaderCell
