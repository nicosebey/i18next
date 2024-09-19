'use client'
// import { appWithTranslation } from "next-i18next";
import { useTranslation } from 'next-i18next';
import '../../i18n';

 function Home() {
    const { t,i18n } = useTranslation();
    
  return (
    <>
    <div>
      <h1>{t('hello',{name:'nicolas', day:'miercoles'})}</h1>
      <h1>{t('world')}</h1>
      <h1>{t('title')}</h1>
      <h1>{t('buttons.save')}</h1>
      <h1>{t('buttons.login')}</h1>
      <h1>{t('buttons.cancel')}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>english</button>----------
      <button onClick={() => i18n.changeLanguage('fr')}>frances</button>
    </div>
    </>
  );
}

export default Home;