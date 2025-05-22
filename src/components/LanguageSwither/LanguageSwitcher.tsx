'use client'

import { useRouter } from 'next/navigation'

const LanguageSwitcher = ({ language }: { language: string }) => {
  const router = useRouter()
  const setLocaleCookie = (locale: string) => {
    document.cookie = `locale=${locale}; path=/; max-age=31536000`
    router.refresh()
  }
  return (
    <div>
      {language === 'pl' ? (
        <button onClick={() => setLocaleCookie?.('en')}>🇬🇧</button>
      ) : (
        <button onClick={() => setLocaleCookie?.('pl')}>🇵🇱</button>
      )}
    </div>
  )
}

export default LanguageSwitcher
