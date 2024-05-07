import './footer.css';
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return <div className="footer container">
    <span className='item-right'>2024 Chickcoop Copyright</span>
    <span className='dividing-line-v item-right'></span>
    <SocialIcon style={{ width: 36, height: 36 }} className='item-left item-right' bgColor="#303647" fgColor='#fff' url="https://x.com/chickcoop" />
    <SocialIcon style={{ width: 36, height: 36 }} className='item-right' bgColor="#303647" fgColor='#fff' url="https://t.me/chickcoop" />
  </div>
}

export default Footer;