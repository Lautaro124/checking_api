import Header from '~/components/molecules/header'

interface CommonLayoutProps {
  children: React.ReactNode
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <main className="w-screen h-max">
      <Header title="Company name">
        <nav className="w-48 flex justify-between">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </Header>
      {children}
    </main>
  )
}

export default CommonLayout
