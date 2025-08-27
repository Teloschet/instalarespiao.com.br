'use client'

// import axios from 'axios'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Page() {
  const t = useTranslations('HomePage')

  // const handleDownload = async (pathFolder: string) => {
  //   try {
  //     const response = await axios.post('/api/download-apk', {
  //       path: pathFolder
  //     }, { responseType: 'blob' });
  
  //     if (response.status === 200) {
  //       const blob = new Blob([response.data], { type: 'application/vnd.android.package-archive' });
  //       const url = window.URL.createObjectURL(blob);
  
  //       const a = document.createElement('a');
  //       a.href = url;
  //       a.download = `system_${Date.now()}.apk`;
  //       document.body.appendChild(a);
  //       a.click();
  //       a.remove();
  //       window.URL.revokeObjectURL(url);
  //     } else {
  //       console.error('Erro ao tentar baixar o arquivo.');
  //     }
  //   } catch (error) {
  //     console.error('Erro ao fazer download:', error);
  //   }
  // };

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
        <button onClick={async () => {
            window.location.href = '/installer/app-release.apk'
          }} className='outline-none ring-0 rounded-[12px] bg-[#8750e1] p-3 px-10 text-white flex flex-col items-center gap-y-1'>
            {/* <Image alt='WiFi' src="/ic_launcher.png" width="60" height="60" /> */}

            <h1 className='font-semibold text-[12px] text-center'>{t('button_field')}</h1>
          </button>
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