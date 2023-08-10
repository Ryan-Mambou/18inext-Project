'use client'
import {useTranslations} from 'next-intl'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Home() { 

  const handleSelect = (e : React.ChangeEvent<HTMLSelectElement>) => {
    const lang : string = e.target.value;
    if(lang === 'en'){
      redirect('/en')
    }
    else {
      redirect('fr')
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
