'use client'

import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
// import { SearchIcon } from 'lucide-react'
import { MenuButton } from '@/components/menuButton/MenuButton'
import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  const [open, setOpen] = useState(false)

  const onToggle = () => {
    if (!open) {
      setOpen(true)
      document.body.classList.add('stopScrolling')
    } else {
      document.body.classList.remove('stopScrolling')
      setOpen(false)
    }
  }

  return (
    <nav className="flex gap-3 items-center">
      {/*{navItems.map(({ link }, i) => {*/}
      {/*  return <CMSLink key={i} {...link} appearance="link" />*/}
      {/*})}*/}
      <Link href="/search">
        <span className="sr-only">Search</span>
        {/*<SearchIcon className="w-5 text-primary" />*/}
      </Link>
      {/*<MenuButton onClick={onToggle} open={open} />*/}
    </nav>
  )
}
