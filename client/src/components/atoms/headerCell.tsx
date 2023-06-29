
interface HeaderCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
}

const HeaderCell = ({ children, ...restOfProps }: HeaderCellProps) => (
  <th
    className='border border-gray-400 px-4 py-2'
    {...restOfProps}
  >
    {children}
  </th>
)

export default HeaderCell
