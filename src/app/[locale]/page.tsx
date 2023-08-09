import {useTranslations} from 'next-intl'

export default function Home() { 
 const t = useTranslations('Index');
 return <div className='w-full h-screen bg-orange-500 text-black 
 d-flex justify-content-center items-center text-4xl'>
<h1>{t('title')}</h1>

 </div>;
}
