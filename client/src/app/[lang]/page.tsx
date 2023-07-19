import Title from '~/components/atoms/title'
import type { Params } from '~/interface/params'
import Text from '~/components/atoms/text'
import Subtitle from '~/components/atoms/subtitle'
import List from '~/components/molecules/list'
import ItemList from '~/components/atoms/itemList'
import { dictionaryHome } from './dictionaries'
import { defaultLocale } from '../../middleware'

export default async function Home({ params: { lang } }: Params) {
  const dictionary = dictionaryHome[lang ?? defaultLocale]

  const itemList = [
    dictionary.firstExplain,
    dictionary.secondExplain,
    dictionary.thirdExplain,
    dictionary.fortyExplain,
    dictionary.fiveExplain,
    dictionary.sixExplain
  ]

  return (
    <main className="flex min-h-screen flex-col p-2 gap-2">
      <section>
        <Title text={dictionary.title} />
        <Text text={dictionary.explain} />
      </section>
      <section className='my-2'>
        <Subtitle text={dictionary.subtitle} />
        <List isCol isOrdered>
          {itemList.map((item, index) =>
            <ItemList key={item}>{index + 1}.{item}</ItemList>
          )}
        </List>
      </section>
      <Text text={dictionary.definition} />
    </main>
  )
}
