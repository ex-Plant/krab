'use client'

import type { Page } from '@/payload-types'

type CrabsLoaderBlock = Extract<Page['layout'][number], { blockType: 'crabsLoader' }>

export const CrabsLoader: React.FC<CrabsLoaderBlock> = (props) => {
  const { text } = props

  return (
    <>
      <div className={` h-svh flex flex-col   `}>
        <div className={`grow  flex items-center justify-center`}>
          <div className={`text-3xl animate-bounce`}>🦀</div>
          <div className={`text-3xl animate-bounce delay-100`}>🦀</div>
          <div className={`text-3xl animate-bounce delay-200`}>🦀</div>
          {/*<div className={`text-3xl animate-bounce delay-300`}>🦀</div>*/}
        </div>
        <footer className={` mb-8 text-center `}>{text}</footer>
      </div>
    </>
  )
}
