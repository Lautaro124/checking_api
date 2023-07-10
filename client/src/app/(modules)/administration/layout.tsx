import Header from '~/components/molecules/header'

interface AdministrationLayoutProps {
  children: React.ReactNode
}

const AdministrationLayout = ({ children }: AdministrationLayoutProps) => {
  return (
    <body className="w-screen h-screen">
      <Header title="Admin">
        <nav className="flex flex-row">
          <a href="/">Home</a>
          <a href="/">Users</a>
        </nav>
      </Header>
      <main className="p-2">
        {children}
      </main>
    </body>
  )
}

export default AdministrationLayout
