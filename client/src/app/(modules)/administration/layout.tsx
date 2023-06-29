import Header from '~/components/molecules/header'

interface AdministrationLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: 'Administration',
  description: 'Administration module for the application'
}

const AdministrationLayout = ({ children }: AdministrationLayoutProps) => {
  return (
    <html>
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
    </html>
  )
}

export default AdministrationLayout
