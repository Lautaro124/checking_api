import Title from '../atoms/title'

interface HeaderProps {
  title: string
  logo?: string
  children?: React.ReactNode
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <header className='flex'>
      <Title text={title} />
      {children}
    </header>
  )
}

export default Header
