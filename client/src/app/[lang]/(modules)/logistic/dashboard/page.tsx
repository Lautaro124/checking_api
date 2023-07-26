import Title from '~/components/atoms/title'
import Text from '~/components/atoms/text'
import Subtitle from '~/components/atoms/subtitle'
import Card from '~/components/atoms/card'
import Table from '~/components/organisms/table'

const LogisticDashboard = () => {
  const data = [
    { id: 'name', value: 'deposit 1' },
    { id: 'space', value: 'space 2' },
    { id: 'location', value: 'location 3' },
    { id: 'name', value: 'deposit 4' },
    { id: 'space', value: 'space 5' },
    { id: 'location', value: 'location 6' }
  ]

  return (
    <>
      <section className='w-full py-4 px-2'>
        <Title text="Logistic dashboard" />
        <Text text="This is logistic dashboard, here you can see your inventory status preview" />
      </section>
      <section className='w-full h-max grid grid-cols-1 p2 gap-3 sm:grid-cols-2 md:grid-cols-3'>
        <Card>
          <Subtitle text="Your deposits" />
          <Text text="Here you can see your deposits" />
          <Table data={data} />
        </Card>
        <Card>
          <Subtitle text="Your products" />
          <Text text="Here you can see your products" />
        </Card>
        <Card>
          <Subtitle text="Your orders" />
          <Text text="Here you can see your orders" />
        </Card>
        <Card>
          <Subtitle text="Your shipments" />
          <Text text="Here you can see your shipments" />
        </Card>
      </section>
    </>
  )
}

export default LogisticDashboard
