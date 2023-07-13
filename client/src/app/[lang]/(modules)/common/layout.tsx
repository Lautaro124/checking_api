interface CommonLayoutProps {
  children: React.ReactNode
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <main className="w-screen h-max">
      {children}
    </main>
  )
}

export default CommonLayout
