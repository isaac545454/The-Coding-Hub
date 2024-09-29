import { PhofileTheCodingHub } from '../components/PhofileTheCodingHub'
import { TabView } from '../components/TabView'
import { useHome } from './home.model'

type HomeViewProps = ReturnType<typeof useHome>

export const HomeView = (props: HomeViewProps) => {
  const { RenderedTab, ...rest } = props
  return (
    <div className="flex flex-col  sm:px-10 pb-32 md:w-[600px] mx-auto ">
      <PhofileTheCodingHub />
      <TabView {...rest} />
      <RenderedTab />
    </div>
  )
}
