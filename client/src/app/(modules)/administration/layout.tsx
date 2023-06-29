
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
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default AdministrationLayout
