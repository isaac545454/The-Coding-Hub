'use client'
import { useHome } from './home.model'
import { HomeView } from './home.view'

export default function Home() {
  const methods = useHome()
  return <HomeView {...methods} />
}
