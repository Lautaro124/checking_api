import Input from '~/components/atoms/input'
import Title from '~/components/atoms/title'
import TableBody from '~/components/molecules/tableBody'
import TableHead from '~/components/molecules/tableHead'
import type { ColumTypeProp, DataTypeProp } from '~/interface/tableTypes'

const AdministrationPage = () => {
  const columns: ColumTypeProp = [
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email' },
    { id: 'role', label: 'Role' },
    { id: 'status', label: 'Status' },
    { id: 'action', label: 'Action' }
  ]

  const data: DataTypeProp = [
    {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      role: 'Admin',
      status: 'Active',
      action: (<Input type='checkbox' />)
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'johndoe@gmail.com',
      role: 'Admin',
      status: 'Active',
      action: (<Input type='checkbox' />)
    },
    {
      id: '3',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      role: 'Admin',
      status: 'Active',
      action: (<Input type='checkbox' />)
    }
  ]

  return (
    <section>
      <Title text="Administration" />
      <table>
        <TableHead columns={columns} />
        <TableBody data={data} columns={columns} />
      </table>
    </section>
  )
}

export default AdministrationPage
