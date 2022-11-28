import './Footer.css'
import {useTranslation} from 'react-i18next'


const Footer = ()=>{
  const [t, i18n]= useTranslation("global")
  return(
    <footer className='footer'>
      <h4 className='footer-title'>{t("footer.text")}</h4>
      <i class="bi bi-suit-heart-fill"></i>
    </footer>
  )
}

export default Footer