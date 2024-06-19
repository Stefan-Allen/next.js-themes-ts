'use client'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import ThemeSwitch from './ThemeSwitch'
import Link from 'next/link'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5">
      <Link lang={locale} href="/">
        <div className="flex flex-row items-center">
          <strong className="mx-2 select-none">Template</strong>
        </div>
      </Link>
      <div className="flex flex-row items-center gap-3">
        <nav className="mr-10 inline-flex gap-5">
          <Link lang={locale} href={`/`}>
            {t('About')}
          </Link>
          <Link lang={locale} href={`/`}>
            {t('Other')}
          </Link>
          <Link lang={locale} href={`/`}>
            {t('Support')}
          </Link>
        </nav>
        <ThemeSwitch />
      </div>
    </div>
  )
}
