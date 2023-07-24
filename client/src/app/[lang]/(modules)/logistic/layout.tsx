import GenerateLayout, { type GenerateLayoutProps } from '~/components/atoms/generateLayout'

const LayoutLogistic = ({ children }: GenerateLayoutProps) => (
  <GenerateLayout>
    {children}
  </GenerateLayout>
)

export default LayoutLogistic
