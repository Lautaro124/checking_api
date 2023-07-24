export interface GenerateLayoutProps {
  children: React.ReactNode
}

const GenerateLayout = ({ children }: GenerateLayoutProps) => {
  return (
    <main className="w-screen h-max">
      {children}
    </main>
  )
}

export default GenerateLayout
