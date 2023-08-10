'use client'

import {useTranslations} from 'next-intl'
import {useRouter} from 'next-intl/client';


export default function Home() { 

  const router = useRouter();

  const handleSelect = (e : React.ChangeEvent<HTMLSelectElement>) => {
    const lang : string = e.target.value;
    if(lang === 'en'){
      router.push('/', {locale:'en'})
    }
    else {
      router.push('/', {locale:'fr'})
    }
  }

  const t = useTranslations('Index');

 return <div className='w-full h-screen bg-orange-500 text-black 
 flex flex-col justify-center items-center'>
<h1 className='text-8xl'>{t('title')}</h1>
 <label htmlFor="language" className='text-2xl mt-2'>{t('select')}</label>
<select name="language" id="language" onChange={handleSelect} className='bg-black text-white w-32 rounded py-1 outline-none'>
  <option value="english">{t("language-one")}</option>
  <option value="french">{t("language-two")}</option> 
  </select>
 </div>;
}
