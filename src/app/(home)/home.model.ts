import { useState } from 'react'
import { TabOptions } from './home.type'
import { LinksFrontendResources } from '../components/LinksFrontendResources'
import { LinksNetworks } from '../components/LinksNetworks'
import { LinksUtilies } from '../components/LinksUtilies'

export const useHome = () => {
  const [tabActive, setTabActive] = useState<TabOptions>(TabOptions.CONTENTS)
  const activeTabContents = tabActive === TabOptions.CONTENTS
  const activeTabNetworks = tabActive === TabOptions.NETWORKS
  const activeTabUtilities = tabActive === TabOptions.UTILITIES

  const handleTabChange = (activeTabType: TabOptions) => {
    setTabActive(activeTabType)
  }

  const tabComponents: Record<TabOptions, () => React.ReactElement> = {
    [TabOptions.CONTENTS]: LinksFrontendResources,
    [TabOptions.NETWORKS]: LinksNetworks,
    [TabOptions.UTILITIES]: LinksUtilies,
  }

  const RenderedTab = tabComponents[tabActive]

  return {
    handleTabChange,
    activeTabNetworks,
    activeTabContents,
    activeTabUtilities,
    tabActive,
    RenderedTab,
  }
}
