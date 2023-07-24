import GenerateLayout, { type GenerateLayoutProps } from '~/components/atoms/generateLayout'

const CommonLayout = ({ children }: GenerateLayoutProps) => {
  return (
    <GenerateLayout>
      {children}
    </GenerateLayout>
  )
}

export default CommonLayout
