import {useTranslations} from 'next-intl'

export default function Home() { 
 const t = useTranslations('Index');
 return <div className='w-full h-screen bg-orange-500 text-black 
 d-flex justify-content-center items-center'>
<h1 className='text-4xl'>{t('title')}</h1>
<label htmlFor="language">Select a language</label>
<select name="language" id="language">
<option value="english">{t("language-one")}</option>
<option value="french">{t("language-two")}</option>
</select>
 </div>;
}
