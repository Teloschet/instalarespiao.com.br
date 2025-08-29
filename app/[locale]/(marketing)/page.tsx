'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Page() {
  const t = useTranslations('HomePage')

  const handleDownload = () => {
    const url = process.env.NEXT_PUBLIC_INSTALLER_URL!
    const a = document.createElement('a')
    a.href = url
    a.download = `system_${Date.now()}.apk`
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <div className='w-full h-screen flex flex-col relative items-center justify-center'>
      <div className='flex items-center gap-x-2'>
        <Image alt='Detetive' src="/ALMOFADAWT.png" width="150" height="50" />
      </div>

      <div className='flex flex-col gap-y-5 items-center mt-2'>
        <h1 className='font-semibold text-[20px]'>{t('click')}</h1>

        <div className='w-[90%] self-center flex items-center justify-center'>
          <button
            onClick={handleDownload}
            className='outline-none ring-0 rounded-[12px] bg-[#8750e1] p-3 px-10 text-white flex flex-col items-center gap-y-1'
          >
            <h1 className='font-semibold text-[12px] text-center'>{t('button_field')}</h1>
          </button>
        </div>
      </div>

      <p className='text-center absolute bottom-5 w-[350px] text-[14px]'>{t('difficulties')}</p>
    </div>
  )
}
