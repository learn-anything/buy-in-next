"use client"

import ItemInfo from "./components/ItemInfo"
import ItemsPage from "./components/ItemsPage"
import StickyHeader from "./components/template/StickyHeader"

export default function Home() {
  return (
    <>
      <div className="h-full bg-white dark:bg-neutral-900 p-2 min-h-screen">
        <ItemsPage />
        <ItemInfo />
        <StickyHeader />
      </div>
    </>
  )
}
