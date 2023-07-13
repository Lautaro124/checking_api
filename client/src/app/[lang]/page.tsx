import Title from '~/components/atoms/title'
import { getDictionary } from './dictionaries'
import type { Params } from '~/interface/params'
import Text from '~/components/atoms/text'
import Subtitle from '~/components/atoms/subtitle'
import List from '~/components/molecules/list'
import ItemList from '~/components/atoms/itemList'

export default async function Home({ params: { lang } }: Params) {
  const { landing } = await getDictionary(lang)

  const itemList = [
    landing.firstExplain,
    landing.secondExplain,
    landing.thirdExplain,
    landing.fortyExplain,
    landing.fiveExplain,
    landing.sixExplain
  ]
  return (
    <main className="flex min-h-screen flex-col p-2 gap-2">
      <Title text={landing.title} />
      <Text text={landing.explain} />
      <section className='my-2'>
        <Subtitle text={landing.subtitle} />
        <List isCol isOrdered>
          {itemList.map((item, index) =>
            <ItemList key={item}>{index + 1}.{item}</ItemList>
          )}
        </List>
      </section>
      <Text text={landing.definition} />
    </main>
  )
}
