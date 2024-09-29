import { useHome } from '@/app/(home)/home.model'
import { TabOptions } from '@/app/(home)/home.type'

type TabViewProps = Omit<ReturnType<typeof useHome>, 'RenderedTab'>

export const TabView = (props: TabViewProps) => {
  const {
    activeTabContents,
    handleTabChange,
    activeTabNetworks,
    activeTabUtilities,
  } = props

  const getStyleButton = (active: boolean) => {
    return active
      ? 'text-primary border-b-primary border-b-2 flex-1 pb-2 bg3 bg-transparent'
      : 'flex-1 pb-2 bg-transparent'
  }

  return (
    <div className="mt-10 flex justify-around cursor-pointer font-bold">
      <button
        onClick={() => handleTabChange(TabOptions.CONTENTS)}
        className={getStyleButton(activeTabContents)}
      >
        CONTEÚDOS
      </button>
      <button
        onClick={() => handleTabChange(TabOptions.NETWORKS)}
        className={getStyleButton(activeTabNetworks)}
      >
        REDES
      </button>
      <button
        onClick={() => handleTabChange(TabOptions.UTILITIES)}
        className={getStyleButton(activeTabUtilities)}
      >
        UTILITÁRIOS
      </button>
    </div>
  )
}
