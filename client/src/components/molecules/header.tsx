import Title from '../atoms/title'

interface HeaderProps {
  title: string
  logo?: string
  children?: React.ReactNode
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <header className='flex justify-between bg-slate-600 p-2 py-4'>
      <Title text={title} />
      <nav>
        {children}
      </nav>
    </header>
  )
}

export default Header
